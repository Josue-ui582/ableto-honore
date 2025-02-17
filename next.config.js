/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
