export interface MetricSeries {
  label: string;
  unit: string;
  values: number[];
}

// Demonstration data only — not live production metrics.
export const demoMetrics: Record<string, MetricSeries> = {
  cpu: { label: "CPU", unit: "%", values: [22, 28, 25, 40, 55, 48, 33, 29, 31, 27] },
  memory: { label: "Memory", unit: "%", values: [55, 56, 58, 60, 63, 62, 61, 59, 58, 57] },
  disk: { label: "Disk", unit: "%", values: [40, 40, 41, 41, 42, 42, 43, 43, 44, 44] },
  network: { label: "Network", unit: "Mbps", values: [12, 18, 15, 22, 30, 28, 20, 17, 19, 16] },
};

export const observabilityStack = [
  { id: "prometheus", name: "Prometheus", description: "Pulls and stores time-series metrics from configured targets." },
  { id: "grafana", name: "Grafana", description: "Dashboards and visualizations built on top of Prometheus and other sources." },
  { id: "loki", name: "Loki", description: "Log aggregation designed to work alongside Prometheus and Grafana." },
  { id: "node-exporter", name: "Node Exporter", description: "Exposes host-level metrics (CPU, memory, disk) for Prometheus to scrape." },
  { id: "blackbox-exporter", name: "Blackbox Exporter", description: "Probes endpoints over HTTP/TCP/ICMP to measure availability." },
  { id: "snmp-exporter", name: "SNMP Exporter", description: "Scrapes SNMP devices (e.g. network gear) for Prometheus." },
  { id: "postgres-exporter", name: "PostgreSQL Exporter", description: "Exposes PostgreSQL internals as Prometheus metrics." },
  { id: "cloudwatch-obs", name: "CloudWatch", description: "AWS-native metrics and logs, often federated alongside Prometheus." },
];
