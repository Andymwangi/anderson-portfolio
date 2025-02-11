import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // next.config.js

  // This will allow production builds even if there are TypeScript errors.
  typescript: {
    ignoreBuildErrors: true,
  },
  // This will allow production builds even if there are ESLint errors.
  eslint: {
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
