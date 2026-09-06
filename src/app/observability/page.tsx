import type { Metadata } from "next";
import { Section } from "@/components/section";
import { demoMetrics, observabilityStack } from "@/data/observability";
import { MetricSparkline } from "@/components/metric-sparkline";

export const metadata: Metadata = { title: "Monitoring & Observability" };

export default function ObservabilityPage() {
  return (
    <>
      <Section
        title="Monitoring & Observability"
        description="A demonstration dashboard — these are illustrative sample metrics, not live production data."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(demoMetrics).map(([key, series]) => (
            <MetricSparkline key={key} series={series} />
          ))}
        </div>
      </Section>

      <Section title="Stack" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {observabilityStack.map((s) => (
            <div key={s.id} className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
              <h3 className="text-sm font-medium text-graphite-50">{s.name}</h3>
              <p className="mt-1.5 text-xs text-graphite-400">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
