/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/work/big-lottery-dubai",
        destination: "/work/big-lottery-gulf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
