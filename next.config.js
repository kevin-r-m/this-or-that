/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
