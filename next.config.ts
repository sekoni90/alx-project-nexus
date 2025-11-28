import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  turbopack: {
    root: __dirname,
  },
};
export default nextConfig;
