import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/layout-project-test";
const basePath = isProd ? repo : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
