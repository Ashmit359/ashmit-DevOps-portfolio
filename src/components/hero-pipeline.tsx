"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stages = [
  { id: "developer", label: "Developer", detail: "A change is written and committed locally." },
  { id: "git", label: "Git", detail: "The change is pushed to a Git repository, triggering CI." },
  { id: "cicd", label: "CI/CD", detail: "Automated build, test, and lint checks run against the change." },
  { id: "docker", label: "Docker", detail: "The application is packaged into a portable container image." },
  { id: "orchestration", label: "Kubernetes / AWS", detail: "The image is deployed to a cluster or AWS compute service." },
  { id: "monitoring", label: "Monitoring", detail: "Metrics and logs confirm the new version is healthy." },
  { id: "production", label: "Production", detail: "Traffic is served from the new, verified deployment." },
];

export function HeroPipeline() {
  const [activeId, setActiveId] = useState(stages[0].id);
  const active = stages.find((s) => s.id === activeId)!;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {stages.map((stage, i) => (
          <div key={stage.id} className="flex items-center gap-2">
            <button
              onClick={() => setActiveId(stage.id)}
              className={cn(
                "focus-ring rounded-md border px-3 py-2 text-xs sm:text-sm transition-colors",
                stage.id === activeId
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-graphite-700 bg-graphite-900 text-graphite-300 hover:border-graphite-500"
              )}
            >
              {stage.label}
            </button>
            {i < stages.length - 1 && (
              <span className="text-graphite-600">→</span>
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="mt-6 rounded-lg border border-graphite-700 bg-graphite-900 p-4 text-sm text-graphite-300"
      >
        {active.detail}
      </motion.div>
    </div>
  );
}
