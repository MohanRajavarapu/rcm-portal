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
  const rcm = urls([
    "",
    "/what-we-do",
    "/what-we-do/rcm",
    ...services.map((service) => `/what-we-do/rcm/${service.slug}`),
    "/specialties",
    ...specialties.map((specialty) => `/specialties/${specialty.slug}`),
    "/technology",
    "/why",
    "/contact/rcm",
  ]);

  const staffing = urls([
    "/what-we-do/staffing",
    ...engagementModels.map((model) => `/what-we-do/staffing/${model.slug}`),
    "/contact/staffing",
  ]);

  const shared = urls([
    "/our-work",
    "/about",
    "/about/trust-security",
    "/company/leadership",
    "/careers",
    "/careers/life",
    "/contact",
    "/contact/general",
    "/privacy",
    "/terms",
    "/legal/contracts",
  ]);

  return [...rcm, ...staffing, ...shared];
}
