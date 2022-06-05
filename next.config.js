/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
