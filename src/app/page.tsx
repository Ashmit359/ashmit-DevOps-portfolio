import Link from "next/link";
import { profile } from "@/data/profile";
import { Section } from "@/components/section";
import { HeroPipeline } from "@/components/hero-pipeline";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-graphite-800 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/40 via-graphite-950/70 to-graphite-950" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-wide text-signal">
            {profile.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-graphite-50 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-graphite-300">{profile.title}</p>
          <p className="mt-6 max-w-xl text-graphite-400">{profile.headline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="focus-ring rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-graphite-950 hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/aws"
              className="focus-ring rounded-md border border-graphite-600 px-5 py-2.5 text-sm text-graphite-200 hover:border-graphite-400"
            >
              Explore AWS
            </Link>
            <Link
              href="/kubernetes"
              className="focus-ring rounded-md border border-graphite-600 px-5 py-2.5 text-sm text-graphite-200 hover:border-graphite-400"
            >
              Explore Kubernetes
            </Link>
            <Link
              href="/resume"
              className="focus-ring rounded-md border border-graphite-600 px-5 py-2.5 text-sm text-graphite-200 hover:border-graphite-400"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="focus-ring rounded-md border border-graphite-600 px-5 py-2.5 text-sm text-graphite-200 hover:border-graphite-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Section
        title="How a change reaches production"
        description="Click a stage to see what happens there. This is the same flow this site itself is built to follow."
      >
        <HeroPipeline />
      </Section>
    </>
  );
}
