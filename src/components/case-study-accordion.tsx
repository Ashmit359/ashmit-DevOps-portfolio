"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const fields: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "architecture", label: "Architecture" },
  { key: "implementation", label: "Implementation" },
  { key: "failure", label: "Failure" },
  { key: "troubleshooting", label: "Troubleshooting" },
  { key: "rootCause", label: "Root Cause" },
  { key: "fix", label: "Fix" },
  { key: "prevention", label: "Prevention" },
  { key: "productionImprovement", label: "Production Improvement" },
];

export function CaseStudyAccordion({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {caseStudies.map((cs) => {
        const open = openId === cs.id;
        return (
          <div key={cs.id} className="overflow-hidden rounded-lg border border-graphite-700 bg-graphite-900">
            <button
              onClick={() => setOpenId(open ? null : cs.id)}
              className="focus-ring flex w-full items-center justify-between px-5 py-3.5 text-left"
            >
              <span className="text-sm font-medium text-graphite-50">{cs.title}</span>
              <ChevronDown size={16} className={cn("text-graphite-500 transition-transform", open && "rotate-180 text-signal")} />
            </button>
            {open && (
              <div className="space-y-4 border-t border-graphite-800 px-5 py-4 text-sm">
                {fields.map((f) => (
                  <div key={f.key}>
                    <p className="text-xs uppercase text-graphite-500">{f.label}</p>
                    <p className="mt-1 text-graphite-300">{cs[f.key]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
