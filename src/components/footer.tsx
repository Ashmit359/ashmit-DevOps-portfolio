import Link from "next/link";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-graphite-800 bg-graphite-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-mono text-sm text-graphite-300">{profile.name}</p>
          <p className="text-xs text-graphite-500">{profile.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="focus-ring rounded text-xs text-graphite-400 hover:text-signal"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="border-t border-graphite-900 py-3 text-center text-[11px] text-graphite-600">
        Built with Next.js, TypeScript, and Tailwind CSS. Deployable anywhere.
      </p>
    </footer>
  );
}
