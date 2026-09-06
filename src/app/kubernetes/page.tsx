import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FlowDiagram } from "@/components/flow-diagram";
import { k8sArchitecture, k8sConcepts } from "@/data/kubernetes";

export const metadata: Metadata = { title: "Kubernetes" };

export default function KubernetesPage() {
  return (
    <>
      <Section
        title="Kubernetes"
        description="From cluster down to load balancer — click a layer to see what it's for."
      >
        <FlowDiagram nodes={k8sArchitecture} />
      </Section>

      <Section title="Related concepts" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {k8sConcepts.map((c) => (
            <div
              key={c.id}
              className="rounded-lg border border-graphite-700 bg-graphite-900 p-4"
            >
              <h3 className="text-sm font-medium text-graphite-50">{c.name}</h3>
              <p className="mt-1.5 text-xs text-graphite-400">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
