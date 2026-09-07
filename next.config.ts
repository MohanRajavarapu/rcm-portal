import type { NextConfig } from "next";
import path from "node:path";

const isGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/rcm-portal" : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGithubPages,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: isGithubPages
      ? "https://mohanrajavarapu.github.io/rcm-portal"
      : "https://360vertexai.com",
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  ...(!isGithubPages
    ? {
        async redirects() {
          return [
            { source: "/services", destination: "/what-we-do/rcm", permanent: true },
            { source: "/services/:slug", destination: "/what-we-do/rcm/:slug", permanent: true },
            { source: "/staffing", destination: "/what-we-do/staffing", permanent: true },
            { source: "/staffing/engagement-models", destination: "/what-we-do/staffing", permanent: true },
            { source: "/staffing/compare", destination: "/what-we-do/staffing", permanent: true },
            { source: "/staffing/pods", destination: "/what-we-do/staffing", permanent: true },
            { source: "/staffing/roles", destination: "/what-we-do/staffing", permanent: true },
            { source: "/staffing/compliance", destination: "/about/trust-security", permanent: true },
            { source: "/staffing/:slug", destination: "/what-we-do/staffing/:slug", permanent: true },
            { source: "/proof", destination: "/our-work", permanent: true },
            { source: "/proof/case-studies", destination: "/our-work", permanent: true },
            { source: "/proof/metrics", destination: "/our-work", permanent: true },
            { source: "/trust", destination: "/about/trust-security", permanent: true },
            { source: "/hipaa", destination: "/about/trust-security", permanent: true },
            { source: "/company/leadership", destination: "/about/leadership", permanent: true },
          ];
        },
      }
    : {}),
};

export default nextConfig;
