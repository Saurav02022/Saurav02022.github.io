import type { NextConfig } from "next";

// Static export for GitHub Pages — no server, so no custom headers() here.
// GitHub Pages serves files as-is; it can't apply the security headers this
// repo used to set on Vercel.
const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
