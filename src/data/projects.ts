export type ProjectCategory =
  | "AWS"
  | "Kubernetes"
  | "CI/CD"
  | "Terraform"
  | "Monitoring"
  | "Security"
  | "Linux"
  | "Python"
  | "Automation";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory[];
  technologies: string[];
  architecture: string;
  challenges: string;
  solution: string;
  github: string;
  demo?: string;
  featured: boolean;
}

// Fill each project in with real work — placeholders are marked [EDIT]
// so nothing here is presented as a real, verifiable project until you
// confirm it. Duplicate this shape for each additional project.
export const projects: Project[] = [
  {
    id: "project-one",
    title: "[EDIT: Add project title]",
    description: "[EDIT: One or two sentence summary of what this project does.]",
    category: ["AWS"],
    technologies: ["[EDIT: e.g. AWS, Terraform, Docker]"],
    architecture: "[EDIT: Describe the architecture at a high level.]",
    challenges: "[EDIT: Describe the main problem you were solving.]",
    solution: "[EDIT: Describe how you solved it.]",
    github: "[EDIT: Add GitHub repo URL]",
    demo: undefined,
    featured: true,
  },
  {
    id: "project-two",
    title: "[EDIT: Add project title]",
    description: "[EDIT: One or two sentence summary of what this project does.]",
    category: ["Kubernetes", "CI/CD"],
    technologies: ["[EDIT: e.g. Kubernetes, Helm, GitHub Actions]"],
    architecture: "[EDIT: Describe the architecture at a high level.]",
    challenges: "[EDIT: Describe the main problem you were solving.]",
    solution: "[EDIT: Describe how you solved it.]",
    github: "[EDIT: Add GitHub repo URL]",
    demo: undefined,
    featured: true,
  },
  {
    id: "project-three",
    title: "[EDIT: Add project title]",
    description: "[EDIT: One or two sentence summary of what this project does.]",
    category: ["Linux", "Automation"],
    technologies: ["[EDIT: e.g. Bash, Python, cron]"],
    architecture: "[EDIT: Describe the architecture at a high level.]",
    challenges: "[EDIT: Describe the main problem you were solving.]",
    solution: "[EDIT: Describe how you solved it.]",
    github: "[EDIT: Add GitHub repo URL]",
    demo: undefined,
    featured: false,
  },
];

export const projectCategories: ProjectCategory[] = [
  "AWS",
  "Kubernetes",
  "CI/CD",
  "Terraform",
  "Monitoring",
  "Security",
  "Linux",
  "Python",
  "Automation",
];
