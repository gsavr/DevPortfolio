/** @type {import('next').NextConfig} */
const nextConfig = {
  /* neded to make react-pdf work on next.js -- first config */
  /* neded to import files from 'npm install file-loader' -- second config */
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    });

    return config;
  },
  //experimental file import pdf
  experimental: {
    urlImports: [
      "https://d3p0c9cfxsa3zu.cloudfront.net/",
      "https://giorgiosavrondotcom.s3.amazonaws.com/",
    ],
  },
};

module.exports = nextConfig;
