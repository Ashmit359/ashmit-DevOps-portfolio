"use client";

import { useState } from "react";
import { linuxCommands } from "@/data/linux";
import { cn } from "@/lib/utils";

export function Terminal() {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "help", output: "Click a command on the right, or type one below and press Enter." },
  ]);
  const [input, setInput] = useState("");

  function run(cmdText: string) {
    const base = cmdText.trim().split(" ")[0];
    const match = linuxCommands.find((c) => c.command.split(" ")[0] === base);
    const output = match
      ? `${match.description}${match.example ? `\nExample: ${match.example}` : ""}`
      : `command not found: ${cmdText}`;
    setHistory((h) => [...h, { cmd: cmdText, output }]);
    setInput("");
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
      <div className="rounded-lg border border-graphite-700 bg-graphite-950 p-4 font-mono text-sm">
        <div className="h-72 overflow-y-auto pr-2">
          {history.map((h, i) => (
            <div key={i} className="mb-3">
              <p className="text-wire-bright">
                <span className="text-graphite-500">$</span> {h.cmd}
              </p>
              <p className="whitespace-pre-wrap text-graphite-300">{h.output}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) run(input);
          }}
          className="mt-2 flex items-center gap-2 border-t border-graphite-800 pt-2"
        >
          <span className="text-graphite-500">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="try: df -h"
            className="w-full bg-transparent text-graphite-100 placeholder:text-graphite-600 focus:outline-none"
          />
        </form>
      </div>

      <div className="space-y-1.5">
        {linuxCommands.map((c) => (
          <button
            key={c.command}
            onClick={() => run(c.command)}
            className={cn(
              "focus-ring block w-full rounded-md border border-graphite-700 bg-graphite-900 px-3 py-1.5 text-left font-mono text-xs text-graphite-300",
              "hover:border-signal/50 hover:text-signal"
            )}
          >
            {c.command}
          </button>
        ))}
      </div>
    </div>
  );
}
