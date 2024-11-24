import { MetadataRoute } from "next";

function createRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${process.env.APP_URL}/sitemap.xml`
  };
}

export default createRobots;
