import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rcm-portal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;