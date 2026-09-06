import type { Metadata } from "next";
import { Download, Linkedin } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { socials } from "@/data/socials";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

  return (
    <Section title="Resume">
      <div className="mb-8 flex flex-wrap gap-3 print:hidden">
        <a
          href="/resume.pdf"
          className="focus-ring flex items-center gap-2 rounded-md bg-signal px-4 py-2 text-sm font-medium text-graphite-950 hover:opacity-90"
        >
          <Download size={15} /> Download Resume
        </a>
        <PrintButton />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-2 rounded-md border border-graphite-600 px-4 py-2 text-sm text-graphite-200"
        >
          <Linkedin size={15} /> LinkedIn
        </a>
      </div>

      <div className="space-y-10 rounded-lg border border-graphite-700 bg-graphite-900 p-6 sm:p-10">
        <header>
          <h1 className="text-2xl font-semibold text-graphite-50">{profile.name}</h1>
          <p className="text-signal">{profile.title}</p>
          <p className="mt-2 max-w-xl text-sm text-graphite-400">{profile.summary[0]}</p>
        </header>

        <section>
          <h2 className="text-xs uppercase tracking-wide text-graphite-500">Experience</h2>
          <div className="mt-3 space-y-4">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-graphite-100">
                    {job.role} · {job.company}
                  </p>
                  <p className="text-xs text-graphite-500">{job.duration}</p>
                </div>
                <ul className="mt-1 list-inside list-disc text-sm text-graphite-400">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wide text-graphite-500">Skills</h2>
          <p className="mt-3 text-sm text-graphite-400">
            {skills.map((s) => s.name).join(" · ")}
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wide text-graphite-500">Projects</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-graphite-400">
            {projects.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wide text-graphite-500">Certifications</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-graphite-400">
            {certifications.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-wide text-graphite-500">Education</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-graphite-400">
            {education.map((e) => (
              <li key={e.id}>
                {e.degree} — {e.institution} ({e.duration})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
}
