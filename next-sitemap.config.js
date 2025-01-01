/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abhirajk.vercel.app",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/_next/*", "/static/*"],
  generateIndexSitemap: false,
  additionalPaths: async () => [
    {
      loc: "/",
      changefreq: "weekly",
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
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/experience",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/contact",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/faq",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/certificates",
      changefreq: "monthly",
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/gallery",
      changefreq: "monthly",
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
  ],
};
