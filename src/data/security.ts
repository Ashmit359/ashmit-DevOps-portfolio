import { DiagramNode } from "./diagram-types";

export const securityControls: DiagramNode[] = [
  { id: "iam", label: "AWS IAM", what: "Central identity and permission system for AWS.", why: "Every other control depends on IAM being scoped correctly." },
  { id: "least-privilege", label: "Least Privilege", what: "Granting only the permissions required, nothing more.", why: "Limits the blast radius if credentials are compromised." },
  { id: "security-groups", label: "Security Groups", what: "Stateful, instance-level virtual firewalls.", why: "The first line of network defense for compute resources." },
  { id: "nacl", label: "NACL", what: "Stateless, subnet-level access control.", why: "An extra layer of network control beyond security groups." },
  { id: "waf", label: "WAF", what: "Filters malicious HTTP(S) traffic before it reaches the app.", why: "Blocks common web exploits at the edge." },
  { id: "cloudtrail", label: "CloudTrail", what: "Records API calls made across the AWS account.", why: "Gives you an audit trail for investigating incidents." },
  { id: "cloudwatch-sec", label: "CloudWatch", what: "Monitors metrics and logs, including security-relevant events.", why: "Turns raw logs into actionable alerts." },
  { id: "secrets-manager", label: "Secrets Manager", what: "Stores and rotates credentials and API keys.", why: "Removes hard-coded secrets from code and config." },
  { id: "s3-security", label: "S3 Security", what: "Bucket policies, Block Public Access, and encryption settings.", why: "Prevents the most common cause of cloud data exposure." },
  { id: "encryption", label: "Encryption", what: "Data protection at rest and in transit.", why: "Reduces the impact of data being intercepted or exfiltrated." },
];

export const securityPractices = [
  { id: "wazuh", name: "Wazuh", description: "Open-source host-based intrusion detection and log analysis." },
  { id: "firewall", name: "Firewall", description: "Network-layer traffic filtering, complementing cloud-native controls." },
  { id: "iso27001", name: "ISO 27001 readiness", description: "[EDIT: Describe any work you've done toward information security management practices.]" },
];
