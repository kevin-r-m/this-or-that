/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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