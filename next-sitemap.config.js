/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://amaanwarsi.thedev.id",
  generateRobotsTxt: true,

  changefreq: "weekly",
  priority: 0.7,

  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};