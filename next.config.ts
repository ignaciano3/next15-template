import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
    typedEnv: true,
    reactCompiler: true,
  },
};

export default nextConfig;
