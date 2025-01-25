/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abhirajk.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "daily",
  priority: 0.8,
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog",
          "/about",
          "/experience",
          "/contact",
          "/faq",
          "/certificates",
          "/gallery",
          "/testimonials",
        ],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Bingbot",
          "YandexBot",
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "ChatGPT",
          "PetalBot",
        ],
        allow: ["/"],
      },
      {
        userAgent: "*",
        disallow: ["/api/", "/_next/", "/server-sitemap.xml", "/static/"],
      },
    ],
    additionalSitemaps: [
      "https://abhirajk.vercel.app/sitemap.xml",
      "https://abhirajk.vercel.app/server-sitemap.xml",
    ],
  },

  additionalPaths: async () => {
    const paths = [
      "/",
      "/blog",
      "/about",
      "/experience",
      "/contact",
      "/faq",
      "/certificates",
      "/gallery",
      "/testimonials",
    ];

    return paths.map((path) => ({
      loc: path,
      changefreq: path === "/" ? "hourly" : "daily",
      priority: path === "/" ? 1.0 : path.includes("blog") ? 0.9 : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },

  transform: async (config, path) => {
    const transforms = {
      "/": { priority: 1.0, changefreq: "hourly" },
      "/about": { priority: 0.9, changefreq: "daily" },
      "/blog": { priority: 0.9, changefreq: "daily" },
      "/experience": { priority: 0.8, changefreq: "weekly" },
    };

    return {
      loc: path,
      changefreq: transforms[path]?.changefreq || config.changefreq,
      priority: transforms[path]?.priority || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `https://abhirajk.vercel.app${path}`, hreflang: "en" },
      ],
    };
  },

  exclude: ["/api/*", "/_next/*", "/static/*", "/404", "/500"],
};
