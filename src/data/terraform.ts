export interface TerraformStage {
  id: string;
  name: string;
  description: string;
  code?: string;
}

export const terraformLifecycle: TerraformStage[] = [
  { id: "write", name: "Write", description: "Author resources, variables, and outputs in .tf files.", code: `variable "instance_type" {\n  type    = string\n  default = "t3.micro"\n}` },
  { id: "init", name: "Init", description: "Downloads providers and configures the backend.", code: "terraform init" },
  { id: "plan", name: "Plan", description: "Shows what will change before anything is applied.", code: "terraform plan -out=tfplan" },
  { id: "apply", name: "Apply", description: "Applies the planned changes to real infrastructure.", code: "terraform apply tfplan" },
  { id: "state", name: "State", description: "Terraform's record of what it manages and its current attributes." },
  { id: "remote-state", name: "Remote State", description: "Stores state in a shared backend (e.g. S3) so a team can collaborate safely.", code: `terraform {\n  backend "s3" {\n    bucket = "tf-state-bucket"\n    key    = "app/terraform.tfstate"\n  }\n}` },
  { id: "locking", name: "Locking", description: "Prevents concurrent applies from corrupting state, typically via DynamoDB." },
  { id: "drift", name: "Drift", description: "When real infrastructure no longer matches the state file, usually from manual changes." },
  { id: "import", name: "Import", description: "Brings existing, manually created infrastructure under Terraform management.", code: "terraform import aws_instance.app i-0123456789abcdef0" },
  { id: "destroy", name: "Destroy", description: "Tears down everything Terraform manages in the current configuration.", code: "terraform destroy" },
];

export const terraformConcepts = [
  { id: "providers", name: "Providers", description: "Plugins that let Terraform talk to a specific API (AWS, Kubernetes, etc.)." },
  { id: "resources", name: "Resources", description: "The infrastructure objects Terraform creates and manages." },
  { id: "variables", name: "Variables", description: "Parameterize configuration so it can be reused across environments." },
  { id: "outputs", name: "Outputs", description: "Expose values from a module for use elsewhere." },
  { id: "modules", name: "Modules", description: "Reusable, self-contained groups of resources." },
];
