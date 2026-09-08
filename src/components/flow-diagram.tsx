"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { DiagramNode } from "@/data/diagram-types";
import { cn } from "@/lib/utils";

export function FlowDiagram({ nodes }: { nodes: DiagramNode[] }) {
  const [activeId, setActiveId] = useState<string>(nodes[0]?.id ?? "");
  const active = nodes.find((n) => n.id === activeId);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
      <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center gap-2 lg:flex-col lg:items-stretch">
            <button
              onClick={() => setActiveId(node.id)}
              className={cn(
                "focus-ring w-full rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                node.id === activeId
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-graphite-700 bg-graphite-900 text-graphite-300 hover:border-graphite-500"
              )}
            >
              {node.label}
            </button>
            {i < nodes.length - 1 && (
              <ChevronRight
                size={14}
                className="hidden shrink-0 text-graphite-600 lg:block lg:rotate-90"
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="rounded-lg border border-graphite-700 bg-graphite-900 p-5"
          >
            <h3 className="text-lg font-medium text-graphite-50">{active.label}</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs uppercase text-graphite-500">What it does</dt>
                <dd className="mt-1 text-sm text-graphite-300">{active.what}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-graphite-500">Why it&apos;s used</dt>
                <dd className="mt-1 text-sm text-graphite-300">{active.why}</dd>
              </div>
              {active.security && (
                <div>
                  <dt className="text-xs uppercase text-graphite-500">Security considerations</dt>
                  <dd className="mt-1 text-sm text-graphite-300">{active.security}</dd>
                </div>
              )}
              {active.monitoring && (
                <div>
                  <dt className="text-xs uppercase text-graphite-500">Monitoring</dt>
                  <dd className="mt-1 text-sm text-graphite-300">{active.monitoring}</dd>
                </div>
              )}
              {active.commonProblems && (
                <div>
                  <dt className="text-xs uppercase text-graphite-500">Common problems</dt>
                  <dd className="mt-1 text-sm text-graphite-300">{active.commonProblems}</dd>
                </div>
              )}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
