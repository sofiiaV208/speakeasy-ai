import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Явно включаем Webpack и отключаем Turbopack
  experimental: {
    webpackBuildWorker: true,
  },

  webpack: (config: any) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      fs: false,
      path: false,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;

