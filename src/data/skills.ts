export type SkillCategory =
  | "AWS"
  | "Linux"
  | "Kubernetes"
  | "Docker"
  | "CI/CD"
  | "Terraform"
  | "Ansible"
  | "Monitoring"
  | "Security"
  | "Programming"
  | "Networking";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  practicalUsage: string;
  relatedProjectIds: string[];
}

export const skillCategories: SkillCategory[] = [
  "AWS",
  "Linux",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "Terraform",
  "Ansible",
  "Monitoring",
  "Security",
  "Programming",
  "Networking",
];

export const skills: Skill[] = [
  {
    id: "aws-ec2",
    name: "Amazon EC2",
    category: "AWS",
    description: "Provisioning and managing virtual machines on AWS.",
    practicalUsage:
      "Launching, sizing, and hardening EC2 instances; attaching security groups and IAM instance roles.",
    relatedProjectIds: [],
  },
  {
    id: "aws-s3",
    name: "Amazon S3",
    category: "AWS",
    description: "Object storage for static assets, backups, and logs.",
    practicalUsage: "Bucket policies, versioning, lifecycle rules, and static hosting.",
    relatedProjectIds: [],
  },
  {
    id: "aws-iam",
    name: "AWS IAM",
    category: "AWS",
    description: "Identity and access management for AWS accounts.",
    practicalUsage: "Writing least-privilege policies, roles for services, and access reviews.",
    relatedProjectIds: [],
  },
  {
    id: "linux-admin",
    name: "Linux Administration",
    category: "Linux",
    description: "Day-to-day server administration on Linux distributions.",
    practicalUsage: "Process, disk, and network troubleshooting using core CLI tools.",
    relatedProjectIds: [],
  },
  {
    id: "bash-scripting",
    name: "Bash Scripting",
    category: "Programming",
    description: "Automation scripts for repetitive operational tasks.",
    practicalUsage: "Backup scripts, log rotation, health checks, and deploy helpers.",
    relatedProjectIds: [],
  },
  {
    id: "docker",
    name: "Docker",
    category: "Docker",
    description: "Containerizing applications for consistent environments.",
    practicalUsage: "Multi-stage builds, image slimming, and local dev environments.",
    relatedProjectIds: [],
  },
  {
    id: "kubernetes-core",
    name: "Kubernetes",
    category: "Kubernetes",
    description: "Orchestrating containerized workloads at scale.",
    practicalUsage: "Deployments, services, ingress, and troubleshooting pod lifecycle issues.",
    relatedProjectIds: [],
  },
  {
    id: "helm",
    name: "Helm",
    category: "Kubernetes",
    description: "Package manager for Kubernetes manifests.",
    practicalUsage: "Templating and versioning application releases.",
    relatedProjectIds: [],
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "CI/CD",
    description: "Automation server for build and deploy pipelines.",
    practicalUsage: "Declarative pipelines wired to build, test, and deploy stages.",
    relatedProjectIds: [],
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "CI/CD",
    description: "CI/CD workflows triggered from GitHub events.",
    practicalUsage: "Lint, type-check, test, and build workflows on push/PR.",
    relatedProjectIds: [],
  },
  {
    id: "terraform-core",
    name: "Terraform",
    category: "Terraform",
    description: "Infrastructure as code for provisioning cloud resources.",
    practicalUsage: "Writing modules, managing remote state, and planning changes safely.",
    relatedProjectIds: [],
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Ansible",
    description: "Configuration management and simple orchestration.",
    practicalUsage: "Idempotent playbooks for server configuration.",
    relatedProjectIds: [],
  },
  {
    id: "prometheus-grafana",
    name: "Prometheus & Grafana",
    category: "Monitoring",
    description: "Metrics collection and visualization stack.",
    practicalUsage: "Instrumenting exporters and building dashboards/alerts.",
    relatedProjectIds: [],
  },
  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    category: "Monitoring",
    description: "Native AWS monitoring, logs, and alarms.",
    practicalUsage: "Metric alarms, log groups, and dashboards for AWS workloads.",
    relatedProjectIds: [],
  },
  {
    id: "security-groups",
    name: "Security Groups & NACLs",
    category: "Security",
    description: "Network-level access control on AWS.",
    practicalUsage: "Restricting inbound/outbound traffic to the minimum required.",
    relatedProjectIds: [],
  },
  {
    id: "networking-basics",
    name: "Networking (VPC/DNS)",
    category: "Networking",
    description: "Core networking concepts underlying cloud infrastructure.",
    practicalUsage: "VPC design, subnetting, routing, and DNS troubleshooting.",
    relatedProjectIds: [],
  },
  {
    id: "python-automation",
    name: "Python",
    category: "Programming",
    description: "Scripting for automation and tooling.",
    practicalUsage: "Small automation utilities and API scripts.",
    relatedProjectIds: [],
  },
];
