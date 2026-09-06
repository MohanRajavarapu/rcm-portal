# RCM company website specification v4 (implemented)

Source requested: `Final_RCM_company_website_specification_v4_microservices.md`  
Status: file was not present in the workspace; this document records the v4 slice that was built and the company facts supplied by the client.

## 1. Company facts (authoritative)

| Field | Value |
| --- | --- |
| Legal name | 360VERTEXAI SOLUTIONS PRIVATE LIMITED |
| Brand | 360VERTEXAI |
| Email |  (sales),  (careers) |
| Mobile | 9492178765 (+91 94921 78765) |
| Market | United States healthcare providers |
| Delivery | India |

Address, CIN, and GST were not provided and are not invented on the site.

## 2. Product

A public marketing and intake website for an AI-assisted RCM company, plus a microservices-shaped API gateway.

## 3. Sitemap

- `/` Home
- `/about` Entity, mission, contact facts
- `/services` Catalog
- `/services/[slug]` Twelve cycle services
- `/specialties` and `/specialties/[slug]`
- `/technology` Architecture and AI policy
- `/careers` Roles + apply
- `/contact` Assessment form
- `/privacy` `/hipaa` `/terms`
- `/api/v1/*` Gateway

## 4. Non-functional

- Desktop and mobile navigation
- Empty, loading, and error states on intake forms
- SEO: metadata, sitemap, robots, JSON-LD
- HIPAA: no PHI on public forms; BAA page
- No fake client logos, testimonials, or collection percentages

## 5. Services catalog

Front: eligibility, prior authorization  
Mid: medical coding, charge capture  
Back: claims, denials, A/R, payment posting, patient billing  
Enablement: credentialing, analytics, assessment/consulting
