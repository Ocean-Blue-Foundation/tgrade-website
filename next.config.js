/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
