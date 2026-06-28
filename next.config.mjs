/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cvvykqfxtbbtmelgyjrc.supabase.co",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
