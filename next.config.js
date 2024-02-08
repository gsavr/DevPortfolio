/** @type {import('next').NextConfig} */
const nextConfig = {
  /* neded to make react-pdf work on next.js */
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
