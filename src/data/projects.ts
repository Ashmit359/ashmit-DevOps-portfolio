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

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Automated AWS Cloud Delivery with Terraform",
    description: "Reusable Terraform modules for EC2, VPC/Subnets, ALB, Route 53, and IAM with S3 remote state and DynamoDB locking, cutting provisioning time by 70%.",
    category: ["AWS", "Terraform"],
    technologies: ["AWS", "Terraform", "S3", "DynamoDB", "IAM", "Route 53"],
    architecture: "A modular Terraform codebase provisioning EC2 instances, VPC/Subnets, an Application Load Balancer, Route 53 DNS records, and IAM roles/policies, with S3 used for remote state storage and DynamoDB for state locking to support safe concurrent runs.",
    challenges: "Environment provisioning was previously handled manually and repeated by hand for each new environment, making it slow and prone to configuration drift.",
    solution: "Built a set of reusable Terraform modules covering the core AWS building blocks (EC2, VPC/Subnets, ALB, Route 53, IAM), backed by S3 remote state and DynamoDB locking, so new environments could be spun up consistently and safely — cutting provisioning time by 70%.",
    github: "[EDIT: Add GitHub repo URL]",
    demo: undefined,
    featured: true,
  },
  {
    id: "project-two",
    title: "Zero-Downtime Kubernetes & GitOps Deployment",
    description: "Automated rollouts/rollbacks on a production cluster using Helm and Argo CD GitOps, with RBAC and autoscaling.",
    category: ["Kubernetes", "CI/CD"],
    technologies: ["Kubernetes", "Helm", "Argo CD", "RBAC", "HPA"],
    architecture: "A production Kubernetes cluster with workloads deployed via Helm charts, with Argo CD continuously syncing cluster state from a Git repository (GitOps), RBAC controlling access, and Horizontal Pod Autoscaling for workload scaling.",
    challenges: "Deployments were previously applied more manually, creating risk of downtime and drift between what was running and what was defined in source control.",
    solution: "Adopted Argo CD to drive GitOps-based deployments from Helm charts, with RBAC and autoscaling configured on the cluster, enabling zero-downtime rollouts and rollbacks directly from Git.",
    github: "[EDIT: Add GitHub repo URL]",
    demo: undefined,
    featured: true,
  },
  {
    id: "project-three",
    title: "Linux Server Hardening & Tuning Automation",
    description: "Bash automation scripts to harden and tune Linux servers (RHEL, Ubuntu, CentOS) running Apache, Nginx, Tomcat, and cPanel-hosted web infrastructure.",
    category: ["Linux", "Automation"],
    technologies: ["Bash", "RHEL", "Ubuntu", "CentOS", "Apache", "Nginx", "Tomcat", "cPanel"],
    architecture: "Bash scripts run across the Linux server fleet (RHEL, Ubuntu, CentOS) hosting Apache, Nginx, Tomcat, and cPanel-based sites, applying a consistent hardening and tuning baseline.",
    challenges: "Server configuration and hardening were applied inconsistently across the fleet, making it harder to maintain a consistent security and performance baseline.",
    solution: "Wrote Bash automation to apply consistent OS hardening and tuning settings across the Linux fleet, reducing manual per-server configuration work.",
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
