/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com",
    ],
  },
};

module.exports = nextConfig;
