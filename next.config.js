/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
