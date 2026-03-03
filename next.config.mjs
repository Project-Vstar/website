/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    experimental: {
    turbo: {
      resolveExtensions: ['.js', '.jsx', '.json'],
    },
  },
};

export default nextConfig;