import type { Metadata } from "next";
import { Section } from "@/components/section";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <Section
      title="Professional Experience"
      description="A timeline of roles focused on cloud infrastructure, automation, and reliability."
    >
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.id}
            className="rounded-lg border border-graphite-700 bg-graphite-900 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-graphite-50">{job.role}</h3>
              <span className="text-sm text-graphite-500">{job.duration}</span>
            </div>
            <p className="text-signal">{job.company}</p>
            <p className="text-xs text-graphite-500">{job.location}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-xs uppercase text-graphite-500">Responsibilities</h4>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-graphite-300">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase text-graphite-500">Key Contributions</h4>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-graphite-300">
                  {job.keyContributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-graphite-800 px-2 py-0.5 text-[10px] text-graphite-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
