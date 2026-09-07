import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { engagementModels } from "@/content/staffing";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://360vertexai.com";
const slash =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

function loc(path: string) {
  if (!path) return origin;
  const normalized = slash && !path.endsWith("/") ? `${path}/` : path;
  return `${origin}${normalized}`;
}

function urls(paths: string[]): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path) => ({
    url: loc(path),
    lastModified: now,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Cluster 1 — Healthcare RCM / AI operations
  const rcm = urls([
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/specialties",
    ...specialties.map((specialty) => `/specialties/${specialty.slug}`),
    "/technology",
    "/why",
    "/contact/rcm",
    "/hipaa",
  ]);

  // Cluster 2 — Staffing & workforce solutions
  const staffing = urls([
    "/staffing",
    "/staffing/engagement-models",
    "/staffing/compare",
    ...engagementModels.map((model) => `/staffing/${model.slug}`),
    "/staffing/pods",
    "/staffing/roles",
    "/staffing/compliance",
    "/contact/staffing",
  ]);

  const shared = urls([
    "/about",
    "/company/leadership",
    "/proof",
    "/proof/case-studies",
    "/proof/metrics",
    "/trust",
    "/careers",
    "/careers/life",
    "/contact",
    "/privacy",
    "/terms",
    "/legal/contracts",
  ]);

  return [...rcm, ...staffing, ...shared];
}
