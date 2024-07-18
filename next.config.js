const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.postimg.cc",
      "postimg.cc",
      "lh3.googleusercontent.com",
      "demo2.joomshaper.com",
      "s3.ap-south-1.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/jupiter-blog-content-images/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/h41XhrFF/**",
      },
      {
        protocol: "https",
        hostname: "postimg.cc",
        port: "",
        pathname: "/qzdWSV1k/**",
      },
      {
        protocol: "https",
        hostname: "kb-cms.s3.ap-south-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
