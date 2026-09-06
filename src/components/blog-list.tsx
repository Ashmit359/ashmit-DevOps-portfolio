"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { readingTime } from "@/lib/utils";

export function BlogList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      blogPosts.filter((p) =>
        `${p.title} ${p.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div>
      <div className="flex items-center gap-2 rounded-md border border-graphite-700 bg-graphite-900 px-3 py-2 sm:w-72">
        <Search size={15} className="text-graphite-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts…"
          className="w-full bg-transparent text-sm text-graphite-100 placeholder:text-graphite-500 focus:outline-none"
        />
      </div>

      <div className="mt-6 space-y-4">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="focus-ring block rounded-lg border border-graphite-700 bg-graphite-900 p-5 hover:border-graphite-500"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-graphite-500">
              <span className="rounded-full bg-graphite-800 px-2 py-0.5 text-signal">{post.category}</span>
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span>{readingTime(post.content)} min read</span>
            </div>
            <h3 className="mt-2 text-base font-medium text-graphite-50">{post.title}</h3>
            <p className="mt-1 text-sm text-graphite-400">{post.excerpt}</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-graphite-500">No posts match that search.</p>
        )}
      </div>
    </div>
  );
}
