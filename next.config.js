/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
