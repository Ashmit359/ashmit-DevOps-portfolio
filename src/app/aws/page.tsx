import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FlowDiagram } from "@/components/flow-diagram";
import { awsArchitecture } from "@/data/aws";

export const metadata: Metadata = { title: "AWS Engineering" };

export default function AwsPage() {
  return (
    <Section
      title="AWS Engineering"
      description="A typical request path through AWS — click a component to see what it does, why it's used, and how to keep it healthy."
    >
      <FlowDiagram nodes={awsArchitecture} />
    </Section>
  );
}
