/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  reactStrictMode: true,

  trailingSlash: true,

  images: {
    unoptimized: true
  },

  basePath: isGithubPages ? "/photo-price-calculator" : "",

  assetPrefix: isGithubPages ? "/photo-price-calculator/" : "",

  poweredByHeader: false,

  compress: true
};

module.exports = nextConfig;
