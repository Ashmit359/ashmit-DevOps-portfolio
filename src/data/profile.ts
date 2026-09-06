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
  location: "[EDIT: Add current city/country]",
  summary: [
    "I'm a DevOps Engineer working across cloud infrastructure, automation, containerization, CI/CD, Kubernetes, Linux and observability.",
    "[EDIT: Add a short paragraph on your day-to-day focus and the kind of problems you enjoy solving.]",
  ],
  philosophy: [
    {
      title: "Engineering approach",
      description:
        "[EDIT: Describe how you approach infrastructure problems — e.g. automate first, document as you go, prefer boring reliable solutions.]",
    },
    {
      title: "Cloud approach",
      description:
        "[EDIT: Describe your approach to designing on AWS — cost awareness, security-first, least privilege, etc.]",
    },
    {
      title: "Automation approach",
      description:
        "[EDIT: Describe your view on automation — what you automate first and why.]",
    },
    {
      title: "Security approach",
      description:
        "[EDIT: Describe your security posture — IAM discipline, secrets management, patching cadence.]",
    },
    {
      title: "Monitoring approach",
      description:
        "[EDIT: Describe how you think about observability — what you alert on, what you dashboard.]",
    },
    {
      title: "Learning approach",
      description:
        "[EDIT: Describe how you keep your skills current — labs, certifications, reading.]",
    },
  ],
};
