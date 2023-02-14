/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  modularizeImports: {
    "chart.js": {
      transform: "chart.js/{{member}}",
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/competition",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
