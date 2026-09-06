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
};

export default nextConfig;
