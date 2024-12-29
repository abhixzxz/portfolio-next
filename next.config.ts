import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abhirajk.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["images.pexels.com", "res.cloudinary.com", "abhirajk.vercel.app"],
  },
  // SEO and Performance Optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  reactStrictMode: true,

  // Headers for security and caching
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        has: [
          {
            type: "query",
            key: "page",
            value: "1",
          },
        ],
        destination: "/blog/:path*",
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        // Add any rewrites here
      ],
      afterFiles: [
        {
          source: "/feed.xml",
          destination: "/api/rss",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
