import type { Metadata } from "next";
import { Section } from "@/components/section";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyAccordion } from "@/components/case-study-accordion";

export const metadata: Metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <Section
      title="Project Case Studies"
      description="Structured write-ups: problem, architecture, failure, root cause, fix, and the lasting improvement. Fill in the [EDIT] placeholders with real incidents."
    >
      <CaseStudyAccordion caseStudies={caseStudies} />
    </Section>
  );
}
