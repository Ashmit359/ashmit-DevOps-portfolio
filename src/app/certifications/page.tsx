import type { Metadata } from "next";
import { Award } from "lucide-react";
import { Section } from "@/components/section";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <Section title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.id} className="rounded-lg border border-graphite-700 bg-graphite-900 p-5">
            <Award className="text-signal" size={20} />
            <h3 className="mt-3 text-sm font-medium text-graphite-50">{cert.name}</h3>
            <p className="text-xs text-graphite-500">{cert.issuer}</p>
            <dl className="mt-3 space-y-1 text-xs text-graphite-400">
              {cert.credentialId && (
                <div className="flex gap-1">
                  <dt className="text-graphite-600">Credential ID:</dt>
                  <dd>{cert.credentialId}</dd>
                </div>
              )}
              {cert.issueDate && (
                <div className="flex gap-1">
                  <dt className="text-graphite-600">Issued:</dt>
                  <dd>{cert.issueDate}</dd>
                </div>
              )}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}
