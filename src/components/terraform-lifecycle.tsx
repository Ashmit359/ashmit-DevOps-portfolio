"use client";

import { useState } from "react";
import { TerraformStage } from "@/data/terraform";
import { cn } from "@/lib/utils";

export function TerraformLifecycle({ stages }: { stages: TerraformStage[] }) {
  const [activeId, setActiveId] = useState(stages[0].id);
  const active = stages.find((s) => s.id === activeId)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
        {stages.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={cn(
              "focus-ring rounded-md border px-3 py-2 text-left text-sm",
              s.id === activeId
                ? "border-signal bg-signal/10 text-signal"
                : "border-graphite-700 bg-graphite-900 text-graphite-300 hover:border-graphite-500"
            )}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-graphite-700 bg-graphite-900 p-5">
        <h3 className="text-lg font-medium text-graphite-50">{active.name}</h3>
        <p className="mt-2 text-sm text-graphite-300">{active.description}</p>
        {active.code && (
          <pre className="mt-4 overflow-x-auto rounded-md bg-graphite-950 p-3 font-mono text-xs text-wire-bright">
            {active.code}
          </pre>
        )}
      </div>
    </div>
  );
}
