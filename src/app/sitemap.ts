import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";

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
      url: `https://360vertexai.com${path}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `https://360vertexai.com/services/${service.slug}`,
      lastModified: now,
    })),
    ...specialties.map((specialty) => ({
      url: `https://360vertexai.com/specialties/${specialty.slug}`,
      lastModified: now,
    })),
  ];
}
