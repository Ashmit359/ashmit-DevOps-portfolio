export interface Profile {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  location: string;
  summary: string[];
  philosophy: { title: string; description: string }[];
}

export const profile: Profile = {
  name: "Ashmit Kumar Sinha",
  title: "DevOps Engineer",
  tagline: "AWS • Kubernetes • Terraform • CI/CD • Linux • Observability",
  headline: "Building automated, observable and reliable cloud infrastructure.",
  location: "Bengaluru, India",
  summary: [
    "I'm a DevOps Engineer working across cloud infrastructure, automation, containerization, CI/CD, Kubernetes, Linux and observability.",
    "My day-to-day involves provisioning infrastructure as code, running Kubernetes clusters, and building CI/CD pipelines that make shipping changes fast without making them risky. I enjoy debugging the messy middle -- flaky pipelines, cluster networking, and the kind of production issues that only show up under real load.",
  ],
  philosophy: [
    {
      title: "Engineering approach",
      description:
        "I default to automating anything I would otherwise do twice, and I favor boring, well-understood tools over clever ones. If a solution needs a paragraph of tribal knowledge to operate safely, I treat that as a bug, not documentation debt.",
    },
    {
      title: "Cloud approach",
      description:
        "On AWS I design for least privilege by default, tag everything for cost visibility, and treat IAM policies as code that gets reviewed like any other change. Reserved capacity and right-sizing come after correctness and security, not before.",
    },
    {
      title: "Automation approach",
      description:
        "I automate the things that are repetitive, error-prone, or block someone else -- environment provisioning, deploys, and routine checks -- before optimizing anything that only saves my own time. If a runbook step can be scripted, it should be.",
    },
    {
      title: "Security approach",
      description:
        "Secrets never live in code or environment files checked into git; they go through a secrets manager with scoped access. IAM roles are scoped narrowly and reviewed periodically, and patching is scheduled rather than reactive.",
    },
    {
      title: "Monitoring approach",
      description:
        "I alert on symptoms that affect users -- error rates, latency, saturation -- not on every metric that moves. Dashboards are built around the questions I actually ask during an incident, not a dump of every available graph.",
    },
    {
      title: "Learning approach",
      description:
        "I keep a local Kubernetes lab running for testing changes before they touch anything real, and I regularly rebuild small projects with tools I have not used yet so the learning stays hands-on rather than theoretical.",
    },
  ],
};
