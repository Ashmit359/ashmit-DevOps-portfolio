export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  architecture: string;
  implementation: string;
  failure: string;
  troubleshooting: string;
  rootCause: string;
  fix: string;
  prevention: string;
  productionImprovement: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "waf-troubleshooting",
    title: "AWS WAF Troubleshooting",
    problem: "[EDIT: Describe the real problem you faced with WAF rules blocking or missing traffic.]",
    architecture: "[EDIT: Describe the architecture — CloudFront/ALB + WAF Web ACL.]",
    implementation: "[EDIT: Describe how the WAF rules were originally set up.]",
    failure: "[EDIT: Describe what broke and how it was noticed.]",
    troubleshooting: "[EDIT: Describe the steps taken to investigate, e.g. sampled requests.]",
    rootCause: "[EDIT: Describe the confirmed root cause.]",
    fix: "[EDIT: Describe the fix applied.]",
    prevention: "[EDIT: Describe what was changed to prevent recurrence.]",
    productionImprovement: "[EDIT: Describe the lasting improvement, e.g. count-mode rollout process.]",
  },
  {
    id: "ec2-troubleshooting",
    title: "EC2 Troubleshooting",
    problem: "[EDIT: Describe the real EC2 issue, e.g. instance unreachable or high CPU.]",
    architecture: "[EDIT: Describe the relevant EC2/VPC/security group setup.]",
    implementation: "[EDIT: Describe the original configuration.]",
    failure: "[EDIT: Describe the failure symptom.]",
    troubleshooting: "[EDIT: Describe your diagnostic steps.]",
    rootCause: "[EDIT: Describe the confirmed root cause.]",
    fix: "[EDIT: Describe the fix.]",
    prevention: "[EDIT: Describe the preventive change.]",
    productionImprovement: "[EDIT: Describe the lasting improvement.]",
  },
  {
    id: "k8s-crashloopbackoff",
    title: "Kubernetes CrashLoopBackOff",
    problem: "[EDIT: Describe the real incident where a pod kept crashing.]",
    architecture: "[EDIT: Describe the deployment/service setup involved.]",
    implementation: "[EDIT: Describe the original deployment configuration.]",
    failure: "[EDIT: Describe how the crash loop was first noticed.]",
    troubleshooting: "[EDIT: Describe log inspection and describe/kubectl steps taken.]",
    rootCause: "[EDIT: Describe the confirmed root cause.]",
    fix: "[EDIT: Describe the fix applied.]",
    prevention: "[EDIT: Describe the preventive change, e.g. added probes.]",
    productionImprovement: "[EDIT: Describe the lasting improvement.]",
  },
  {
    id: "alb-troubleshooting",
    title: "AWS ALB Troubleshooting",
    problem: "[EDIT: Describe the real ALB issue, e.g. 503s or unhealthy targets.]",
    architecture: "[EDIT: Describe the ALB/target group setup.]",
    implementation: "[EDIT: Describe the original health check configuration.]",
    failure: "[EDIT: Describe the failure symptom.]",
    troubleshooting: "[EDIT: Describe the diagnostic steps taken.]",
    rootCause: "[EDIT: Describe the confirmed root cause.]",
    fix: "[EDIT: Describe the fix.]",
    prevention: "[EDIT: Describe the preventive change.]",
    productionImprovement: "[EDIT: Describe the lasting improvement.]",
  },
  {
    id: "monitoring-architecture",
    title: "Monitoring Architecture",
    problem: "[EDIT: Describe the visibility gap that motivated this monitoring setup.]",
    architecture: "[EDIT: Describe the Prometheus/Grafana/CloudWatch architecture used.]",
    implementation: "[EDIT: Describe how it was implemented.]",
    failure: "[EDIT: Describe any gap discovered after implementation, if applicable.]",
    troubleshooting: "[EDIT: Describe how gaps were investigated.]",
    rootCause: "[EDIT: Describe the confirmed root cause of the gap, if applicable.]",
    fix: "[EDIT: Describe what was added or changed.]",
    prevention: "[EDIT: Describe ongoing review practices.]",
    productionImprovement: "[EDIT: Describe the resulting visibility improvement.]",
  },
  {
    id: "cicd-deployment",
    title: "CI/CD Deployment",
    problem: "[EDIT: Describe the deployment problem this pipeline solved, e.g. manual/error-prone releases.]",
    architecture: "[EDIT: Describe the pipeline architecture.]",
    implementation: "[EDIT: Describe how the pipeline was built.]",
    failure: "[EDIT: Describe any deployment failure encountered along the way.]",
    troubleshooting: "[EDIT: Describe how the failure was diagnosed.]",
    rootCause: "[EDIT: Describe the confirmed root cause.]",
    fix: "[EDIT: Describe the fix.]",
    prevention: "[EDIT: Describe the safeguard added, e.g. required checks before merge.]",
    productionImprovement: "[EDIT: Describe the resulting improvement in deployment reliability.]",
  },
];
