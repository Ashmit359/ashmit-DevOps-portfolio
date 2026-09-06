import type { Metadata } from "next";
import { Section } from "@/components/section";
import { TroubleshootingTool } from "@/components/troubleshooting-tool";

export const metadata: Metadata = { title: "Production Troubleshooting" };

export default function TroubleshootingPage() {
  return (
    <Section
      title="Production Troubleshooting"
      description="Pick a scenario to walk through symptoms, checks, and the fix."
    >
      <TroubleshootingTool />
    </Section>
  );
}
