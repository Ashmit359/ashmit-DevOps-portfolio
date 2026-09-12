# Integration notes

These three files weren't available in this session, so apply these by hand.

## 1. Nav bar

Wherever your nav items array/list currently lives (likely in your Header
component or a `src/data/navigation.ts`), add an entry after "Kubernetes":

```ts
{ label: "Monitoring", href: "/monitoring" }
```

## 2. `helm/portfolio/values.yaml`

Add the Prometheus URL as a configurable value instead of relying on the
hardcoded default in the route:

```yaml
env:
  PROMETHEUS_URL: "http://monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090"
```

And in `helm/portfolio/templates/deployment.yaml`, make sure it's wired into
the container env (add alongside whatever env vars are already templated
there):

```yaml
env:
  - name: PROMETHEUS_URL
    value: {{ .Values.env.PROMETHEUS_URL | quote }}
```

## 3. `README.md` — new section

```markdown
## Live infrastructure monitoring

The "Monitoring" page shows real metrics pulled from the Kubernetes cluster
the site itself runs on.

- Prometheus is **never exposed publicly**. `src/app/api/metrics/route.ts` is
  a Next.js Route Handler that runs server-side, inside the pod, and queries
  Prometheus over internal cluster DNS
  (`monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090`).
  No public Ingress, no NodePort, no auth needed for an internal call.
- The route caches results for 20s and times out any Prometheus call after
  3s, so a scaled-down monitoring stack can't hang or crash the page — it
  returns `{"status": "unreachable"}` instead, and the UI shows a
  "reconnecting" state.
- PromQL used:
  - CPU: `100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`
  - Memory: `(1 - (avg(node_memory_MemAvailable_bytes) / avg(node_memory_MemTotal_bytes))) * 100`
  - Nodes ready: `count(up{job="node-exporter"} == 1)` (kube-state-metrics-free)
  - Uptime: `time() - min(node_boot_time_seconds)`
  - Pods (best-effort, needs kube-state-metrics): `count(kube_pod_status_phase{phase="Running"} == 1)`
- Pod counts are only shown when kube-state-metrics is actually up; otherwise
  they're omitted rather than shown as a fake zero.
```
