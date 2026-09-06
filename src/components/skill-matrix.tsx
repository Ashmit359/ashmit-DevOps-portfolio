"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { skills, skillCategories, SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

export function SkillMatrix() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-md border border-graphite-700 bg-graphite-900 px-3 py-2 sm:w-64">
          <Search size={15} className="text-graphite-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills…"
            className="w-full bg-transparent text-sm text-graphite-100 placeholder:text-graphite-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(["All", ...skillCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "focus-ring rounded-full border px-3 py-1 text-xs transition-colors",
                category === c
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-graphite-700 text-graphite-400 hover:border-graphite-500"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg border border-graphite-700 bg-graphite-900 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-graphite-50">{skill.name}</h3>
              <span className="rounded-full bg-graphite-800 px-2 py-0.5 text-[10px] text-graphite-400">
                {skill.category}
              </span>
            </div>
            <p className="mt-2 text-xs text-graphite-400">{skill.description}</p>
            <p className="mt-2 text-xs text-graphite-500">{skill.practicalUsage}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-graphite-500">No skills match that search.</p>
        )}
      </div>
    </div>
  );
}
