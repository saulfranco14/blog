/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_BLOG: process.env.API_BLOG
  },
};

export default nextConfig;
