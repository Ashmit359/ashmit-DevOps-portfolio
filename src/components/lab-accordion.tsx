"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AwsLab } from "@/data/aws-labs";
import { cn } from "@/lib/utils";

export function LabAccordion({ labs }: { labs: AwsLab[] }) {
  const [openId, setOpenId] = useState<string | null>(labs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {labs.map((lab) => {
        const open = openId === lab.id;
        return (
          <div
            key={lab.id}
            className="overflow-hidden rounded-lg border border-graphite-700 bg-graphite-900"
          >
            <button
              onClick={() => setOpenId(open ? null : lab.id)}
              className="focus-ring flex w-full items-center justify-between px-5 py-3.5 text-left"
            >
              <span className="text-sm font-medium text-graphite-50">{lab.title}</span>
              <ChevronDown
                size={16}
                className={cn(
                  "text-graphite-500 transition-transform",
                  open && "rotate-180 text-signal"
                )}
              />
            </button>
            {open && (
              <div className="space-y-4 border-t border-graphite-800 px-5 py-4 text-sm">
                <Field label="Architecture" value={lab.architecture} />
                <div>
                  <p className="text-xs uppercase text-graphite-500">Console steps</p>
                  <ol className="mt-1 list-inside list-decimal space-y-1 text-graphite-300">
                    {lab.consoleSteps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </div>
                <Code label="CLI" value={lab.cli} />
                <Code label="Terraform" value={lab.terraform} />
                <Field label="Expected result" value={lab.expectedResult} />
                <Field label="Troubleshooting" value={lab.troubleshooting} />
                <Field label="Production considerations" value={lab.productionConsiderations} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase text-graphite-500">{label}</p>
      <p className="mt-1 text-graphite-300">{value}</p>
    </div>
  );
}

function Code({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase text-graphite-500">{label}</p>
      <pre className="mt-1 overflow-x-auto rounded-md bg-graphite-950 p-3 font-mono text-xs text-wire-bright">
        {value}
      </pre>
    </div>
  );
}
