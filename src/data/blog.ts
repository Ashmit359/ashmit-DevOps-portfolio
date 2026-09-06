export interface BlogPost {
  slug: string;
  title: string;
  category: "AWS" | "DevOps" | "Kubernetes" | "Terraform" | "Linux" | "Security" | "Monitoring" | "CI/CD" | "SRE";
  tags: string[];
  excerpt: string;
  content: string;
  publishedAt: string;
}

// Seed content — swap in real posts as MDX under src/content/blog when ready.
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-post",
    title: "[EDIT: Add your first post title]",
    category: "DevOps",
    tags: ["intro"],
    excerpt: "[EDIT: Add a one-line summary for the post list and SEO description.]",
    content:
      "[EDIT: Write the post content here. This field is rendered as plain text for now; swap to MDX in src/content/blog when ready.]",
    publishedAt: "[EDIT: Add publish date, e.g. 2026-01-01]",
  },
];
