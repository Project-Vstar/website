/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    resolveExtensions: ['.js', '.jsx', '.json'],
  },
};

export default nextConfig;