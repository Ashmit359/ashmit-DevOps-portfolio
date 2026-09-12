import { NextResponse } from "next/server";

// Always evaluate fresh on each request (we handle our own caching below) —
// prevents Next.js from statically caching this route at build time.
export const dynamic = "force-dynamic";

const PROMETHEUS_URL =
  process.env.PROMETHEUS_URL ||
  "http://monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090";

const QUERY_TIMEOUT_MS = 3000;
const CACHE_TTL_MS = 20_000; // serve cached payload for 20s so the client can poll cheaply
const HISTORY_WINDOW_MINUTES = 30;
const HISTORY_STEP_SECONDS = 300; // 5 min resolution -> ~6 points over 30 min

type MetricsPayload = {
  status: "ok" | "unreachable";
  timestamp: string;
  cluster?: { nodes_ready: number; nodes_total: number };
  cpu?: { usage_percent: number };
  memory?: { usage_percent: number; used_gb: number; total_gb: number };
  pods?: { running: number; total: number } | null;
  uptime_seconds?: number | null;
  history?: { cpu_percent: number[]; memory_percent: number[] };
};

let cache: { payload: MetricsPayload; fetchedAt: number } | null = null;

/** Runs an Instant Query against Prometheus. Returns null on any failure/timeout. */
async function promQuery(query: string): Promise<any[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), QUERY_TIMEOUT_MS);
  try {
    const url = `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`;
    const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.status !== "success") return null;
    return json.data?.result ?? [];
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Runs a cheap, low-resolution Range Query for sparkline history. Returns null on failure. */
async function promRangeQuery(query: string): Promise<number[] | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), QUERY_TIMEOUT_MS);
  try {
    const end = Math.floor(Date.now() / 1000);
    const start = end - HISTORY_WINDOW_MINUTES * 60;
    const url =
      `${PROMETHEUS_URL}/api/v1/query_range?query=${encodeURIComponent(query)}` +
      `&start=${start}&end=${end}&step=${HISTORY_STEP_SECONDS}`;
    const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.status !== "success") return null;
    const series = json.data?.result?.[0];
    if (!series?.values?.length) return null;
    return series.values.map((v: [number, string]) => Math.round(parseFloat(v[1]) * 10) / 10);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function scalarValue(result: any[] | null): number | null {
  if (!result || result.length === 0) return null;
  const v = parseFloat(result[0].value[1]);
  return Number.isFinite(v) ? v : null;
}

async function fetchLiveMetrics(): Promise<MetricsPayload> {
  const timestamp = new Date().toISOString();

  // Cheap reachability probe first. If Prometheus can't answer this, don't bother
  // firing the rest of the queries — short-circuit straight to "unreachable".
  const nodeExporterTargets = await promQuery('up{job="node-exporter"}');
  if (nodeExporterTargets === null) {
    return { status: "unreachable", timestamp };
  }

  const [
    cpuResult,
    memTotalResult,
    memAvailResult,
    nodesReadyResult,
    uptimeResult,
    podsRunningResult,
    podsTotalResult,
    cpuHistory,
    memHistory,
  ] = await Promise.all([
    promQuery('100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)'),
    promQuery("avg(node_memory_MemTotal_bytes)"),
    promQuery("avg(node_memory_MemAvailable_bytes)"),
    promQuery('count(up{job="node-exporter"} == 1)'),
    promQuery("time() - min(node_boot_time_seconds)"),
    // kube-state-metrics dependent — deliberately best-effort, see README caveat.
    promQuery('count(kube_pod_status_phase{phase="Running"} == 1)'),
    promQuery("count(kube_pod_status_phase)"),
    promRangeQuery('100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)'),
    promRangeQuery(
      "(1 - (avg(node_memory_MemAvailable_bytes) / avg(node_memory_MemTotal_bytes))) * 100"
    ),
  ]);

  const cpuPercent = scalarValue(cpuResult);
  const memTotalBytes = scalarValue(memTotalResult);
  const memAvailBytes = scalarValue(memAvailResult);
  const nodesReady = scalarValue(nodesReadyResult);
  const uptimeSeconds = scalarValue(uptimeResult);
  const podsRunning = scalarValue(podsRunningResult);
  const podsTotal = scalarValue(podsTotalResult);

  const payload: MetricsPayload = {
    status: "ok",
    timestamp,
    cluster: {
      nodes_ready: nodesReady ?? 0,
      nodes_total: nodeExporterTargets.length,
    },
    cpu: { usage_percent: cpuPercent !== null ? Math.round(cpuPercent * 10) / 10 : 0 },
    memory:
      memTotalBytes !== null && memAvailBytes !== null
        ? {
            usage_percent: Math.round(((1 - memAvailBytes / memTotalBytes) * 100) * 10) / 10,
            used_gb: Math.round(((memTotalBytes - memAvailBytes) / 1e9) * 10) / 10,
            total_gb: Math.round((memTotalBytes / 1e9) * 10) / 10,
          }
        : { usage_percent: 0, used_gb: 0, total_gb: 0 },
    // kube-state-metrics is scaled to 0 by design on this cluster — don't fabricate a
    // pod count when it's unavailable, surface it as genuinely unknown instead.
    pods:
      podsRunning !== null && podsTotal !== null
        ? { running: podsRunning, total: podsTotal }
        : null,
    uptime_seconds: uptimeSeconds !== null ? Math.round(uptimeSeconds) : null,
    history: {
      cpu_percent: cpuHistory ?? [],
      memory_percent: memHistory ?? [],
    },
  };

  return payload;
}

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json(cache.payload);
  }

  let payload: MetricsPayload;
  try {
    payload = await fetchLiveMetrics();
  } catch {
    payload = { status: "unreachable", timestamp: new Date().toISOString() };
  }

  cache = { payload, fetchedAt: now };
  return NextResponse.json(payload);
}
