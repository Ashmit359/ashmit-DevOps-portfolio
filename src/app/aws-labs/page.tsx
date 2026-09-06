import type { Metadata } from "next";
import { Section } from "@/components/section";
import { awsLabs } from "@/data/aws-labs";
import { LabAccordion } from "@/components/lab-accordion";

export const metadata: Metadata = { title: "AWS Practical Labs" };

export default function AwsLabsPage() {
  return (
    <Section
      title="AWS Practical Labs"
      description="Hands-on building blocks — console steps, CLI, Terraform, and what to check when something doesn't work."
    >
      <LabAccordion labs={awsLabs} />
    </Section>
  );
}
