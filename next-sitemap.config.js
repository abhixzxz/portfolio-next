/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abhirajk.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily", // Increased frequency for better indexing
  priority: 0.8, // Increased default priority
  sitemapSize: 5000,
  exclude: ["/api/*", "/_next/*", "/static/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://abhirajk.vercel.app/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  generateIndexSitemap: true,
  additionalPaths: async () => [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/blog",
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/about",
      changefreq: "weekly", // Increased frequency
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/experience",
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/contact",
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/faq",
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/certificates",
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/gallery",
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  ],
};
