import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/why",
    "/services",
    "/specialties",
    "/technology",
    "/careers",
    "/contact",
    "/privacy",
    "/hipaa",
    "/terms",
  ];
  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `https://mohanrajavarapu.github.io/rcm-portal${path}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `https://mohanrajavarapu.github.io/rcm-portal/services/${service.slug}`,
      lastModified: now,
    })),
    ...specialties.map((specialty) => ({
      url: `https://mohanrajavarapu.github.io/rcm-portal/specialties/${specialty.slug}`,
      lastModified: now,
    })),
  ];
}