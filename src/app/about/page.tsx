import type { Metadata } from "next";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section title="About Me" description={profile.summary[0]}>
      <div className="space-y-4 text-graphite-400">
        {profile.summary.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {profile.philosophy.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-graphite-700 bg-graphite-900 p-5"
          >
            <h3 className="text-sm font-medium text-signal">{item.title}</h3>
            <p className="mt-2 text-sm text-graphite-400">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
