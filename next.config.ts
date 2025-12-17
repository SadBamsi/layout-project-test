import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/layout-project-test",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
