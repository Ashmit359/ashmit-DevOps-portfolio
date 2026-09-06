import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const routes = [
  "",
  "about",
  "experience",
  "skills",
  "aws",
  "aws-labs",
  "kubernetes",
  "cicd",
  "terraform",
  "projects",
  "case-studies",
  "observability",
  "security",
  "linux",
  "troubleshooting",
  "certifications",
  "blog",
  "resume",
  "contact",
  "engineering",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogEntries];
}
