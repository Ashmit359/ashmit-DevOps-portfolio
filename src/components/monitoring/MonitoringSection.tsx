"use client";

import { useEffect, useRef, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const POLL_INTERVAL_MS = 20_000; // matches the API route's own cache window — no point polling faster

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

/** Ticks a displayed number smoothly toward `value` instead of jumping instantly. */
function useAnimatedNumber(value: number, durationMs = 700) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
      setDisplay(from + (to - from) * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return display;
}

function useSecondsAgo(timestamp: string | null) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!timestamp) return;
    const update = () => setSeconds(Math.max(0, Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000)));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timestamp]);
  return seconds;
}

function StatusBadge({ status }: { status: "ok" | "unreachable" | "loading" }) {
  if (status === "ok") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        live
      </span>
    );
  }
  if (status === "unreachable") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        reconnecting…
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-400">
      <span className="h-2 w-2 rounded-full bg-neutral-500" />
      connecting…
    </span>
  );
}

function Sparkline({ data }: { data: number[] }) {
  if (!data || data.length < 2) return <div className="h-10" />;
  const points = data.map((v, i) => ({ i, v }));
  return (
    <div className="h-10 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line
            type="monotone"
            dataKey="v"
            stroke="#f59e0b"
            strokeWidth={1.75}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetricCard({
  label,
  value,
  unit,
  sub,
  history,
}: {
  label: string;
  value: number;
  unit: string;
  sub?: string;
  history?: number[];
}) {
  const animated = useAnimatedNumber(value);
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-amber-500/30">
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-neutral-400">{label}</span>
        {sub && <span className="text-xs font-mono text-neutral-500">{sub}</span>}
      </div>
      <div className="mt-2 font-mono text-3xl text-white">
        {animated.toFixed(1)}
        <span className="ml-1 text-lg text-neutral-500">{unit}</span>
      </div>
      {history && <div className="mt-3">{<Sparkline data={history} />}</div>}
    </div>
  );
}

function NodeRow({ ready, total }: { ready: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total || 0 }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 rounded-sm ${i < ready ? "bg-emerald-400" : "bg-red-500/70"}`}
          title={i < ready ? "Ready" : "Not ready"}
        />
      ))}
      <span className="ml-2 font-mono text-sm text-neutral-400">
        {ready}/{total} nodes ready
      </span>
    </div>
  );
}

function formatUptime(seconds: number | null | undefined) {
  if (seconds === null || seconds === undefined) return "—";
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  return `${days}d ${hours}h`;
}

export default function MonitoringSection() {
  const [data, setData] = useState<MetricsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch("/api/metrics", { cache: "no-store" });
        const json: MetricsPayload = await res.json();
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setData({ status: "unreachable", timestamp: new Date().toISOString() });
          setLoading(false);
        }
      }
    }

    poll();
    const id = setInterval(poll, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const secondsAgo = useSecondsAgo(data?.timestamp ?? null);
  const status: "ok" | "unreachable" | "loading" = loading ? "loading" : data?.status ?? "unreachable";

  return (
    <section id="monitoring" className="relative border-t border-white/5 bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Live infrastructure</h2>
            <p className="mt-1 text-sm text-neutral-400">
              Real metrics from the Kubernetes cluster this site runs on.
            </p>
          </div>
          <StatusBadge status={status} />
        </div>

        {status === "unreachable" && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-6">
            <p className="text-sm text-neutral-300">
              Monitoring stack is currently scaled down to conserve VM resources — this is
              intentional. Prometheus and the exporters run on a 3.8&nbsp;GiB VM alongside the
              cluster itself, so Grafana and kube-state-metrics get scaled to zero when they
              aren&apos;t actively needed. This section will resume automatically the moment
              they&apos;re back.
            </p>
          </div>
        )}

        {status === "ok" && data && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <MetricCard
                label="CPU usage"
                value={data.cpu?.usage_percent ?? 0}
                unit="%"
                history={data.history?.cpu_percent}
              />
              <MetricCard
                label="Memory usage"
                value={data.memory?.usage_percent ?? 0}
                unit="%"
                sub={
                  data.memory ? `${data.memory.used_gb} / ${data.memory.total_gb} GB` : undefined
                }
                history={data.history?.memory_percent}
              />
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <span className="text-sm text-neutral-400">Cluster nodes</span>
                <div className="mt-3">
                  <NodeRow
                    ready={data.cluster?.nodes_ready ?? 0}
                    total={data.cluster?.nodes_total ?? 0}
                  />
                </div>
                <div className="mt-4 text-xs font-mono text-neutral-500">
                  uptime {formatUptime(data.uptime_seconds)}
                </div>
              </div>
            </div>

            {data.pods === null && (
              <p className="mt-4 text-xs text-neutral-500">
                Pod counts unavailable — kube-state-metrics is scaled down on this cluster.
              </p>
            )}
          </>
        )}

        <div className="mt-6 font-mono text-xs text-neutral-600">
          $ last synced {loading ? "—" : `${secondsAgo}s ago`}
        </div>
      </div>
    </section>
  );
}
