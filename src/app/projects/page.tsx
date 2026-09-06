import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      description="Filter by category. Replace the [EDIT] placeholders with your real project details and GitHub links."
    >
      <ProjectGrid />
    </Section>
  );
}
