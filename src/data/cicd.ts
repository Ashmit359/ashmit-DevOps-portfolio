import { DiagramNode } from "./diagram-types";

export const cicdPipeline: DiagramNode[] = [
  { id: "developer", label: "Developer", what: "Writes code and opens a pull request.", why: "The pipeline starts with a change someone wants to ship." },
  { id: "git", label: "Git", what: "Version control tracking every change.", why: "Gives the pipeline a trigger and a rollback point." },
  { id: "build", label: "Build", what: "Compiles or bundles the application.", why: "Catches build-breaking errors before they reach later stages." },
  { id: "test", label: "Test", what: "Runs automated unit and integration tests.", why: "Confirms the change behaves as expected before it moves further." },
  { id: "sonarqube", label: "SonarQube", what: "Static analysis for code quality and security issues.", why: "Flags code smells and vulnerabilities early." },
  { id: "docker-build", label: "Docker Build", what: "Packages the application into a container image.", why: "Guarantees the same artifact runs identically everywhere." },
  { id: "security-scan", label: "Security Scan", what: "Scans the image for known vulnerabilities.", why: "Stops known-vulnerable images from reaching the registry." },
  { id: "registry", label: "Docker Registry", what: "Stores versioned container images.", why: "A single source of truth for what gets deployed." },
  { id: "helm-stage", label: "Helm", what: "Templates the Kubernetes manifests for the new version.", why: "Keeps deployments consistent and versioned." },
  { id: "kubernetes-stage", label: "Kubernetes", what: "Rolls out the new version to the cluster.", why: "Handles the actual deployment with rolling updates." },
  { id: "monitoring-stage", label: "Monitoring", what: "Watches the new deployment's health metrics.", why: "Confirms the release is healthy or triggers a rollback." },
];

export interface CicdTool {
  id: string;
  name: string;
  description: string;
}

export const cicdTools: CicdTool[] = [
  { id: "jenkins", name: "Jenkins", description: "Self-hosted automation server with declarative or scripted pipelines." },
  { id: "gitlab-ci", name: "GitLab CI", description: "CI/CD built into GitLab, defined in .gitlab-ci.yml." },
  { id: "github-actions", name: "GitHub Actions", description: "CI/CD defined as workflows in .github/workflows, triggered by repo events." },
  { id: "docker-tool", name: "Docker", description: "Used to build the portable artifact that moves through every later stage." },
  { id: "helm-tool", name: "Helm", description: "Used to template and version the Kubernetes release." },
];
