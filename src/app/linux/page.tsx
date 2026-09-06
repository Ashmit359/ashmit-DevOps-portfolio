import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Terminal } from "@/components/terminal";
import { bashExample, pythonExample } from "@/data/linux";

export const metadata: Metadata = { title: "Linux & Automation" };

export default function LinuxPage() {
  return (
    <>
      <Section
        title="Linux & Automation"
        description="Try a command below, or click one from the list."
      >
        <Terminal />
      </Section>

      <Section title="Bash example" className="pt-0">
        <pre className="overflow-x-auto rounded-lg border border-graphite-700 bg-graphite-950 p-4 font-mono text-xs text-wire-bright">
          {bashExample}
        </pre>
      </Section>

      <Section title="Python automation example" className="pt-0">
        <pre className="overflow-x-auto rounded-lg border border-graphite-700 bg-graphite-950 p-4 font-mono text-xs text-wire-bright">
          {pythonExample}
        </pre>
      </Section>
    </>
  );
}
