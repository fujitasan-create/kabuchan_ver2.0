import type { NextConfig } from "next";

const nextConfig: NextConfig & { output: "export" } = {
  output: "export",  

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-api-h54h.onrender.com",
        pathname: "/plot/**",
      },
    ],
  },
};

export default nextConfig;