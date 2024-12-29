/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abhirajk.vercel.app",
  generateRobotsTxt: false, // Since we're creating custom robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  additionalPaths: async () => {
    return [
      {
        loc: "/blog",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
