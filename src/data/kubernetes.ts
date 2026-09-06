import { DiagramNode } from "./diagram-types";

export const k8sArchitecture: DiagramNode[] = [
  {
    id: "cluster",
    label: "Cluster",
    what: "A set of nodes managed together, running the control plane and workloads.",
    why: "Gives you a single control surface to schedule and manage containers across machines.",
  },
  {
    id: "namespace",
    label: "Namespace",
    what: "A logical partition inside a cluster.",
    why: "Separates teams or environments (dev/staging/prod) while sharing the same cluster.",
  },
  {
    id: "deployment",
    label: "Deployment",
    what: "Declares the desired state for a set of pods.",
    why: "Handles rolling updates and rollbacks without manual pod management.",
  },
  {
    id: "replicaset",
    label: "ReplicaSet",
    what: "Ensures a specified number of pod replicas are running.",
    why: "Automatically created by Deployments to guarantee availability.",
  },
  {
    id: "pods",
    label: "Pods",
    what: "The smallest deployable unit, wrapping one or more containers.",
    why: "Containers in a pod share networking and storage, useful for tightly coupled processes.",
    commonProblems: "CrashLoopBackOff, ImagePullBackOff, and OOMKilled are the most common pod failures.",
  },
  {
    id: "service",
    label: "Service",
    what: "A stable network endpoint in front of a set of pods.",
    why: "Pods are ephemeral; a Service gives consumers a fixed address to talk to.",
  },
  {
    id: "ingress",
    label: "Ingress",
    what: "Routes external HTTP(S) traffic to services inside the cluster.",
    why: "Lets you expose many services through one entry point with host/path rules.",
  },
  {
    id: "load-balancer",
    label: "Load Balancer",
    what: "Cloud-provider load balancer provisioned to front the Ingress or a Service.",
    why: "Gives the cluster a public, highly-available entry point.",
  },
];

export interface K8sConcept {
  id: string;
  name: string;
  description: string;
}

export const k8sConcepts: K8sConcept[] = [
  { id: "configmap", name: "ConfigMap", description: "Injects non-sensitive configuration into pods as env vars or files." },
  { id: "secret", name: "Secret", description: "Stores sensitive values like credentials, base64-encoded (not encrypted by default)." },
  { id: "pv", name: "PersistentVolume (PV)", description: "A piece of storage provisioned in the cluster, independent of any pod." },
  { id: "pvc", name: "PersistentVolumeClaim (PVC)", description: "A request for storage by a pod, bound to a matching PV." },
  { id: "statefulset", name: "StatefulSet", description: "Manages pods that need stable identities and storage, like databases." },
  { id: "daemonset", name: "DaemonSet", description: "Ensures a copy of a pod runs on every (or selected) node — used for agents like log shippers." },
  { id: "job", name: "Job", description: "Runs a pod to completion for a one-off task." },
  { id: "cronjob", name: "CronJob", description: "Runs Jobs on a schedule, like a cluster-native cron." },
  { id: "probe", name: "Probes", description: "Liveness/readiness/startup checks that tell Kubernetes if a container is healthy." },
  { id: "rbac", name: "RBAC", description: "Role-based access control for who can do what inside the cluster." },
  { id: "resourcequota", name: "ResourceQuota", description: "Limits aggregate resource consumption within a namespace." },
  { id: "helm", name: "Helm", description: "A package manager for templating and versioning Kubernetes manifests." },
  { id: "eks", name: "Amazon EKS", description: "AWS's managed Kubernetes control plane." },
  { id: "kind", name: "kind", description: "Runs local Kubernetes clusters using Docker containers as nodes, for development." },
  { id: "calico", name: "Calico", description: "A CNI plugin providing pod networking and network policy enforcement." },
];
