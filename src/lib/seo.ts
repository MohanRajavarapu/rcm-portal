import type { Metadata } from "next";
import { company } from "@/content/company";

function canonicalPath(path: string) {
  const raw = path.startsWith("/") ? path : `/${path}`;
  if (raw === "/") return "/";
  const trailing =
    process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
  if (trailing) return raw.endsWith("/") ? raw : `${raw}/`;
  return raw.replace(/\/$/, "");
}

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = canonicalPath(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} · ${company.brandName}`,
      description,
      url: canonical,
    },
  };
}
