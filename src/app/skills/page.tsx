import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SkillMatrix } from "@/components/skill-matrix";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <Section
      title="Technical Skills"
      description="Filter and search across the tools and platforms used day to day."
    >
      <SkillMatrix />
    </Section>
  );
}
