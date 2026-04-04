import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  // 👇 ye add karo
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;