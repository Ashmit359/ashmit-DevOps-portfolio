"use client";

import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.category.includes(category));
  }, [category]);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {(["All", ...projectCategories] as const).map((c) => (
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-lg border border-graphite-700 bg-graphite-900 p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-medium text-graphite-50">{project.title}</h3>
              {project.featured && (
                <span className="shrink-0 rounded-full bg-signal/10 px-2 py-0.5 text-[10px] text-signal">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-graphite-400">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-graphite-800 px-2 py-0.5 text-[10px] text-graphite-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <dl className="mt-4 space-y-2 text-xs">
              <div>
                <dt className="text-graphite-500">Challenge</dt>
                <dd className="text-graphite-300">{project.challenges}</dd>
              </div>
              <div>
                <dt className="text-graphite-500">Solution</dt>
                <dd className="text-graphite-300">{project.solution}</dd>
              </div>
            </dl>

            <div className="mt-4 flex gap-3 pt-2 text-xs">
              <span className="flex items-center gap-1 text-graphite-500">
                <Github size={13} /> {project.github}
              </span>
              {project.demo && (
                <span className="flex items-center gap-1 text-graphite-500">
                  <ExternalLink size={13} /> {project.demo}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
