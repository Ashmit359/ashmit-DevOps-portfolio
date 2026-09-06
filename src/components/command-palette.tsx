"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Command {
  label: string;
  href: string;
  external?: boolean;
}

const commands: Command[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "AWS", href: "/aws" },
  { label: "AWS Labs", href: "/aws-labs" },
  { label: "Kubernetes", href: "/kubernetes" },
  { label: "CI/CD", href: "/cicd" },
  { label: "Terraform", href: "/terraform" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Observability", href: "/observability" },
  { label: "Security", href: "/security" },
  { label: "Linux", href: "/linux" },
  { label: "Troubleshooting", href: "/troubleshooting" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
  { label: "Engineering", href: "/engineering" },
  { label: "GitHub", href: "https://github.com/Ashmit359", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashmit-sinha-372115b0/", external: true },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery("");
  }, [open]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  function go(cmd: Command) {
    setOpen(false);
    if (cmd.external) {
      window.open(cmd.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(cmd.href);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-graphite-950/70 pt-24 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-graphite-700 bg-graphite-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-graphite-700 px-3 py-2.5">
          <Search size={16} className="text-graphite-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a page…"
            className="w-full bg-transparent text-sm text-graphite-100 placeholder:text-graphite-500 focus:outline-none"
          />
          <kbd className="rounded border border-graphite-600 px-1.5 py-0.5 text-[10px] text-graphite-500">
            esc
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-1.5">
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-sm text-graphite-500">No matches.</li>
          )}
          {filtered.map((cmd) => (
            <li key={cmd.label}>
              <button
                onClick={() => go(cmd)}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2 text-left text-sm text-graphite-200",
                  "hover:bg-graphite-800 focus-ring"
                )}
              >
                {cmd.label}
                {cmd.external && (
                  <span className="text-[10px] uppercase text-graphite-500">
                    external
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
