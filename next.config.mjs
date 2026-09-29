/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  // Tailwind output is ~7 KB: inlining removes the one render-blocking request.
  experimental: { inlineCss: true },
};

export default nextConfig;
