import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FlowDiagram } from "@/components/flow-diagram";
import { cicdPipeline, cicdTools } from "@/data/cicd";

export const metadata: Metadata = { title: "CI/CD" };

export default function CicdPage() {
  return (
    <>
      <Section
        title="CI/CD"
        description="A typical pipeline from commit to production, stage by stage."
      >
        <FlowDiagram nodes={cicdPipeline} />
      </Section>

      <Section title="Tools" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cicdTools.map((t) => (
            <div key={t.id} className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
              <h3 className="text-sm font-medium text-graphite-50">{t.name}</h3>
              <p className="mt-1.5 text-xs text-graphite-400">{t.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
