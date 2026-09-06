import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  // Only set static export and basePath when building on GitHub Actions
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? "/rcm-portal" : "",
  
  // Allow local dev origins for Next.js HMR
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;