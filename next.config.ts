import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};

export default nextConfig;
