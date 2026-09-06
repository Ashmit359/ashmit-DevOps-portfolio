import type { Metadata } from "next";
import { Section } from "@/components/section";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <Section
      title="Technical Blog"
      description="Notes on AWS, Kubernetes, Terraform, Linux, and running things in production."
    >
      <BlogList />
    </Section>
  );
}
