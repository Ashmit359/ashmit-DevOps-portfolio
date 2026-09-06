import type { Metadata } from "next";
import { Section } from "@/components/section";
import { TerraformLifecycle } from "@/components/terraform-lifecycle";
import { terraformLifecycle, terraformConcepts } from "@/data/terraform";

export const metadata: Metadata = { title: "Terraform" };

export default function TerraformPage() {
  return (
    <>
      <Section
        title="Terraform / Infrastructure as Code"
        description="The Terraform lifecycle, with code examples for each stage."
      >
        <TerraformLifecycle stages={terraformLifecycle} />
      </Section>

      <Section title="Core concepts" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {terraformConcepts.map((c) => (
            <div key={c.id} className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
              <h3 className="text-sm font-medium text-graphite-50">{c.name}</h3>
              <p className="mt-1.5 text-xs text-graphite-400">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
