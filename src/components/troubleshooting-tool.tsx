"use client";

import { useMemo, useState } from "react";
import {
  troubleshootingCases,
  troubleshootingCategories,
  TroubleshootingCase,
} from "@/data/troubleshooting";
import { cn } from "@/lib/utils";

const steps: { key: keyof TroubleshootingCase; label: string }[] = [
  { key: "symptoms", label: "Symptoms" },
  { key: "check", label: "Check" },
  { key: "command", label: "Command" },
  { key: "possibleCause", label: "Possible Cause" },
  { key: "rootCause", label: "Root Cause" },
  { key: "fix", label: "Fix" },
  { key: "prevention", label: "Prevention" },
];

export function TroubleshootingTool() {
  const [category, setCategory] = useState<string>("All");
  const [selectedId, setSelectedId] = useState(troubleshootingCases[0].id);

  const filtered = useMemo(
    () =>
      category === "All"
        ? troubleshootingCases
        : troubleshootingCases.filter((c) => c.category === category),
    [category]
  );

  const selected =
    troubleshootingCases.find((c) => c.id === selectedId) ?? filtered[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div>
        <div className="flex flex-wrap gap-1.5">
          {["All", ...troubleshootingCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "focus-ring rounded-full border px-2.5 py-1 text-xs",
                category === c
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-graphite-700 text-graphite-400 hover:border-graphite-500"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-4 space-y-1">
          {filtered.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setSelectedId(c.id)}
                className={cn(
                  "focus-ring w-full rounded-md px-3 py-2 text-left text-sm",
                  c.id === selected?.id
                    ? "bg-signal/10 text-signal"
                    : "text-graphite-300 hover:bg-graphite-900"
                )}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <div className="rounded-lg border border-graphite-700 bg-graphite-900 p-5">
          <h3 className="text-lg font-medium text-graphite-50">{selected.title}</h3>
          <ol className="mt-4 space-y-4">
            {steps.map((step, i) => (
              <li key={step.key} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-graphite-800 text-[10px] text-graphite-400">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs uppercase text-graphite-500">{step.label}</p>
                  <p
                    className={cn(
                      "mt-0.5 text-sm text-graphite-300",
                      step.key === "command" && "rounded bg-graphite-950 px-2 py-1 font-mono text-wire-bright"
                    )}
                  >
                    {selected[step.key]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
