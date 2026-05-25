/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    devtoolSegmentExplorer: false
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ]
  }
};

export default nextConfig;