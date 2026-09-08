export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  keyContributions: string[];
}

export const experience: Experience[] = [
  {
    id: "interactive-bees",
    company: "Interactive Bees Pvt Ltd",
    role: "DevOps Engineer",
    duration: "May 2026 – Present",
    location: "Delhi, India (On-site)",
    responsibilities: [
      "Provisioned and managed AWS (EC2, VPC, S3, IAM, CloudWatch) and Azure infrastructure — VPC/VNet networking, load balancers, DNS, and IAM policy enforcement — using Terraform IaC.",
      "Administered production multi-node Kubernetes clusters, including cluster upgrades, HPA autoscaling, RBAC, and Network Policies, delivering zero-downtime rollouts/rollbacks via Jenkins, GitLab CI, Helm, and Argo CD GitOps.",
      "Implemented DevSecOps controls — Wazuh SIEM monitoring, IAM policy hardening, and vulnerability assessment — strengthening incident response and RCA across cloud and on-prem infrastructure.",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Terraform",
      "Kubernetes",
      "Helm",
      "Argo CD",
      "Jenkins",
      "GitLab CI",
      "Wazuh SIEM",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    keyContributions: [
      "Built a Prometheus, Grafana, Loki, Promtail, Node Exporter, and Alertmanager observability stack across 15+ servers, reducing MTTR by 60%.",
    ],
  },
  {
    id: "maxtra-technologies",
    company: "Maxtra Technologies Pvt Ltd",
    role: "Linux System Administrator",
    duration: "Feb 2025 – Apr 2026",
    location: "Noida, India (On-site)",
    responsibilities: [
      "Hardened and tuned Linux (RHEL, Ubuntu, CentOS) systems via Bash scripting, and managed AWS infrastructure alongside Apache, Nginx, Tomcat, and cPanel web hosting.",
      "Deployed and troubleshot Kubernetes workloads (Pods, Deployments, Services, Ingress), authored Helm charts, and resolved CrashLoopBackOff, ImagePullBackOff, and PVC/storage issues; automated CI/CD pipelines with Jenkins and GitLab CI.",
    ],
    technologies: [
      "Linux",
      "RHEL",
      "Ubuntu",
      "CentOS",
      "Bash",
      "AWS",
      "Nginx",
      "Apache",
      "Tomcat",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "GitLab CI",
    ],
    keyContributions: [
      "Mentored and led a team of 6 engineers on DevSecOps practices — OS hardening, firewall policy enforcement, SSL certificate management, and DDoS mitigation — reporting directly to MD/CEO.",
    ],
  },
  {
    id: "infyq-solutions",
    company: "Infyq Solutions Pvt Ltd",
    role: "Associate DevOps Engineer",
    duration: "Jan 2024 – Feb 2025",
    location: "Gurugram, India (On-site)",
    responsibilities: [
      "Supported Linux and AWS infrastructure, Jenkins/GitLab CI pipelines, Docker deployments, and Terraform IaC, contributing to incident response and root cause analysis.",
      "Executed Kubernetes pod deployments and core kubectl operations, configured namespace setup, and resolved routine tickets and alerts under senior guidance.",
    ],
    technologies: [
      "Linux",
      "AWS",
      "Jenkins",
      "GitLab CI",
      "Docker",
      "Terraform",
      "Kubernetes",
    ],
    keyContributions: [
      "Contributed to incident response and root cause analysis on production Linux and AWS infrastructure.",
    ],
  },
];
