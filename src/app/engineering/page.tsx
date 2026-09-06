import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FlowDiagram } from "@/components/flow-diagram";
import { DiagramNode } from "@/data/diagram-types";

export const metadata: Metadata = { title: "Portfolio Architecture" };

const roadmap: DiagramNode[] = [
  { id: "dev", label: "Developer", what: "Code is written locally with Next.js, TypeScript, and Tailwind.", why: "A typed, component-based stack keeps the data layer and UI cleanly separated." },
  { id: "github", label: "GitHub", what: "Source is pushed to a Git repository.", why: "Single source of truth, and the trigger for CI." },
  { id: "actions", label: "GitHub Actions", what: "Install, lint, type-check, test, and build run on every push/PR.", why: "Catches breakage before it reaches a deployable artifact." },
  { id: "testing", label: "Testing", what: "Type-checking and lint today; unit/integration tests can be added incrementally.", why: "Keeps the codebase honest as pages and data grow." },
  { id: "docker-build", label: "Docker Build", what: "A multi-stage Dockerfile produces a small, self-contained image using Next.js standalone output.", why: "The same image runs identically in any environment." },
  { id: "scan", label: "Security Scan", what: "A container scan step is a natural next addition to the CI workflow.", why: "Catches known-vulnerable base images or dependencies before deploy." },
  { id: "ecr", label: "Amazon ECR", what: "A private registry to store versioned images.", why: "Keeps a auditable history of exactly what has been deployed." },
  { id: "eks", label: "Amazon EKS", what: "A managed Kubernetes control plane to run the container at scale.", why: "The k8s/ manifests in this repo are ready for this step, not required for local dev." },
  { id: "alb-roadmap", label: "AWS Load Balancer", what: "Routes external traffic into the cluster.", why: "Gives the app one stable, highly-available entry point." },
  { id: "route53-roadmap", label: "Route 53", what: "DNS pointing a real domain at the load balancer.", why: "The final step before this becomes a public production URL." },
  { id: "observability-roadmap", label: "Monitoring", what: "Prometheus, Grafana, and CloudWatch watch the running deployment.", why: "Confirms the system stays healthy after every change." },
];

export default function EngineeringPage() {
  return (
    <>
      <Section
        title="Portfolio Architecture / Engineering"
        description="This site is deliberately built to demonstrate the same path it teaches: local app → GitHub → Docker → Kubernetes → EKS → CI/CD → AWS. Click a stage to see where this repo currently is on that path."
      >
        <FlowDiagram nodes={roadmap} />
      </Section>

      <Section title="Current state" className="pt-0">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
            <h3 className="text-sm font-medium text-signal">Done</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-graphite-300">
              <li>Next.js + TypeScript + Tailwind application, data-driven throughout</li>
              <li>Dockerfile with multi-stage build and standalone output</li>
              <li>Kubernetes manifests in k8s/ (not required for local dev)</li>
              <li>GitHub Actions CI: install, lint, type-check, build, docker build</li>
            </ul>
          </div>
          <div className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
            <h3 className="text-sm font-medium text-graphite-400">Deliberately not yet built</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-graphite-400">
              <li>Automated deploy to ECR/EKS from CI</li>
              <li>A database — the data layer is abstracted to make this a config change later</li>
              <li>Authentication/admin functionality</li>
              <li>Production AWS infrastructure (WAF, Route 53, ACM, ALB Controller)</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
