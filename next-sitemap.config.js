/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pathtoneet.in",
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/pdf/"],
      },
    ],
  },
};
