import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FlowDiagram } from "@/components/flow-diagram";
import { securityControls, securityPractices } from "@/data/security";

export const metadata: Metadata = { title: "Cloud & DevOps Security" };

export default function SecurityPage() {
  return (
    <>
      <Section
        title="Cloud & DevOps Security"
        description="Core AWS security controls — click one to see what it protects against."
      >
        <FlowDiagram nodes={securityControls} />
      </Section>

      <Section title="Additional practices" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {securityPractices.map((p) => (
            <div key={p.id} className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
              <h3 className="text-sm font-medium text-graphite-50">{p.name}</h3>
              <p className="mt-1.5 text-xs text-graphite-400">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
