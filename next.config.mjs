/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_BLOG: process.env.API_BLOG
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
