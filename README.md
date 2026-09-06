# 360VERTEXAI SOLUTIONS PRIVATE LIMITED

Public company website and API gateway for **360VERTEXAI** — an AI-operated US healthcare revenue cycle (RCM) practice, delivered from India.

Legal entity: **360VERTEXAI SOLUTIONS PRIVATE LIMITED**  
Email: [contact@360vertexai.com](mailto:contact@360vertexai.com)  
Mobile: [+91 94921 78765](tel:+919492178765)

The original specification file (`Final_RCM_company_website_specification_v4_microservices.md`) was referenced from a local desktop path and was not in this repository. This codebase implements that v4 intent: a production-grade RCM company site with a microservices-shaped backend, HIPAA-safe public forms, and a complete public sitemap.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:45281](http://127.0.0.1:45281).

```bash
npm run build
npm start
npm run lint
```

## What you can do on the site

- Browse the full RCM cycle (eligibility through analytics)
- Open specialty pages
- Request a revenue assessment (practice data only — PHI is rejected)
- Apply to published roles
- Subscribe to operations notes

## File structure

```
src/
  app/                      # Next.js App Router pages + API gateway
    api/v1/                 # REST contracts for each service
    services/[slug]/        # Service pages
    specialties/[slug]/
  components/               # Layout, brand, forms, shadcn/ui
  content/                  # Versioned catalog (content service source)
  server/
    store.ts                # JSON persistence under .data/
    services/               # lead, career, content, notification
```

## Microservices (v4)

The public site is the **API gateway** (`/api/v1/*`). Domain logic is isolated so each module can be extracted to its own process later:

| Service | Route | Responsibility |
| --- | --- | --- |
| Gateway health | `GET /api/v1/health` | Liveness |
| Content | `GET /api/v1/content` | Public catalog |
| Lead | `POST /api/v1/leads` | Assessments / contact |
| Career | `GET /api/v1/jobs`, `POST /api/v1/careers/apply` | Roles and applications |
| Notification | `POST /api/v1/newsletter` | Email list |

Submissions persist to `.data/` (gitignored). Wire SES or a CRM without changing the JSON contracts.

**Production RCM** (EHR, 837/835, coding models) is a separate, BAA-covered plane. It is not this website.

## Security on the public surface

- Forms instruct users not to send PHI
- Lead service rejects common identifier language
- No authentication database in this slice — none is required for marketing

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Lucide.
