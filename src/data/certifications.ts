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
    credentialId: "5045d33e-bcec-4d9b-bfbd-14876fb0a025",
    issueDate: "2024-11-11",
    verificationUrl: "https://www.credly.com/badges/5045d33e-bcec-4d9b-bfbd-14876fb0a025",
  },
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    credentialId: "dc8f08fc-ed9f-424d-aec4-45a450043938",
    issueDate: "2025-03-23",
    verificationUrl: "https://www.credly.com/badges/dc8f08fc-ed9f-424d-aec4-45a450043938",
  },
  {
    id: "automation-anywhere-rpa",
    name: "Automation Anywhere Certified Essentials — RPA",
    issuer: "Automation Anywhere",
    credentialId: "a2e667fb-8e88-4d6e-9047-f26b5ceac003",
    issueDate: "2023-04-13",
    verificationUrl: "https://certificates.automationanywhere.com/a2e667fb-8e88-4d6e-9047-f26b5ceac003",
  },
  {
    id: "gelp-global-virtual-summit-2026",
    name: "Delegate — Global Virtual Summit 2026",
    issuer: "GELP Foundation",
    credentialId: "1ATUHICBDJT7KL1LGNEZKSCA",
    issueDate: "2026-09-05",
    verificationUrl: "https://gelp.ca/credentials/1ATUHICBDJT7KL1LGNEZKSCA/certificate",
  },
];
