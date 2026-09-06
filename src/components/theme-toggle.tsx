"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const options = [
  { value: "light" as const, icon: Sun, label: "Light theme" },
  { value: "dark" as const, icon: Moon, label: "Dark theme" },
  { value: "system" as const, icon: Monitor, label: "System theme" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-graphite-700 bg-graphite-900 p-0.5">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          aria-label={label}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={cn(
            "focus-ring rounded-full p-1.5 transition-colors",
            theme === value
              ? "bg-signal text-graphite-950"
              : "text-graphite-400 hover:text-graphite-100"
          )}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
