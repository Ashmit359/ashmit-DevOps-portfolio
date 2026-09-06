export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialId?: string;
  issueDate?: string;
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    credentialId: "[EDIT: Add credential ID]",
    issueDate: "[EDIT: Add issue date]",
    verificationUrl: "[EDIT: Add verification URL]",
  },
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    credentialId: "[EDIT: Add credential ID]",
    issueDate: "[EDIT: Add issue date]",
    verificationUrl: "[EDIT: Add verification URL]",
  },
  {
    id: "automation-anywhere-rpa",
    name: "Automation Anywhere Certified Essentials — RPA",
    issuer: "Automation Anywhere",
    credentialId: "[EDIT: Add credential ID]",
    issueDate: "[EDIT: Add issue date]",
    verificationUrl: "[EDIT: Add verification URL]",
  },
];
