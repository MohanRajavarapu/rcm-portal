import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  // Adds repository path prefix for static export on GitHub Pages
  basePath: isGithubActions ? "/rcm-portal" : "",
  assetPrefix: isGithubActions ? "/rcm-portal/" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;