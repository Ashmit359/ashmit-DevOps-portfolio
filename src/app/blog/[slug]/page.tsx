import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post?.title ?? "Post not found" };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <Link href="/blog" className="focus-ring text-xs text-graphite-500 hover:text-signal">
        ← Back to blog
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-graphite-500">
        <span className="rounded-full bg-graphite-800 px-2 py-0.5 text-signal">{post.category}</span>
        <span>{post.publishedAt}</span>
        <span>·</span>
        <span>{readingTime(post.content)} min read</span>
      </div>
      <h1 className="mt-3 text-3xl font-semibold text-graphite-50">{post.title}</h1>
      <div className="prose prose-invert mt-6 max-w-none text-graphite-300">
        <p>{post.content}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <span key={t} className="rounded-full bg-graphite-800 px-2 py-0.5 text-[10px] text-graphite-400">
            #{t}
          </span>
        ))}
      </div>
    </article>
  );
}
