"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Command } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/aws", label: "AWS" },
  { href: "/kubernetes", label: "Kubernetes" },
  { href: "/monitoring", label: "Monitoring" },
  { href: "/certifications", label: "Certifications" },
  { href: "/monitoring", label: "Monitoring" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-graphite-800/80 bg-graphite-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="focus-ring rounded font-mono text-sm tracking-tight text-graphite-100">
          <span className="text-signal">$</span> ashmit-sinha
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "text-signal"
                    : "text-graphite-300 hover:text-graphite-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="focus-ring hidden items-center gap-1.5 rounded-md border border-graphite-700 px-2.5 py-1.5 text-xs text-graphite-400 sm:flex"
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
          >
            <Command size={12} />
            <span>K</span>
          </button>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            className="focus-ring rounded-md p-1.5 text-graphite-300 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-graphite-800 bg-graphite-950 px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="focus-ring rounded-md px-2 py-2 text-sm text-graphite-200 hover:bg-graphite-900"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
