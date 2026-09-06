# Ashmit Sinha — DevOps Engineer Portfolio

A dynamic, data-driven portfolio built with Next.js, React, TypeScript, and
Tailwind CSS. It's intentionally built to be portable: it runs locally, pushes
straight to GitHub, builds into a Docker image, and is ready for Kubernetes/EKS
without being locked to any specific hosting provider.

## Stack

- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion for interactions/animations
- Zod for form validation
- lucide-react for icons

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Then verify the production build:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/            Routes (App Router) — one folder per page
  components/     Reusable UI components
  data/           The data layer — projects, skills, experience, etc.
  lib/            Utilities, validation, email provider abstraction
k8s/              Kubernetes manifests (not required for local dev)
.github/workflows/ci.yml   GitHub Actions CI pipeline
Dockerfile        Multi-stage build for a small production image
```

### Editing content

Almost everything on the site is driven by files in `src/data/`. To update
your experience, projects, skills, or certifications, edit the corresponding
file there — the pages re-render automatically. Search the codebase for
`[EDIT:` to find every placeholder that still needs a real value; nothing
with a placeholder is presented as verified information.

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

or with Compose:

```bash
docker compose up --build
```

## Kubernetes (when you're ready for it)

The manifests in `k8s/` are not required for local development — they're
here for when you deploy to a real cluster (including Amazon EKS):

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml   # update the image field first
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml      # update the host + ingress class first
```

## CI/CD

`.github/workflows/ci.yml` runs install → lint → type-check → build → docker
build on every push and pull request against `main`. It does not deploy
anywhere yet — see the `/engineering` page on the site itself for the planned
path to ECR/EKS/AWS.

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed. The site works with
no email provider configured — contact form submissions are simply logged
server-side until you wire one up in `src/lib/email/providers/`.

## Roadmap

Local app → GitHub → Docker → Kubernetes → EKS → CI/CD deploy → AWS
production infrastructure (WAF, Route 53, ACM, ALB Controller) → monitoring
(Prometheus/Grafana) — in that order, one phase at a time.
