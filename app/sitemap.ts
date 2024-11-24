import { lstatSync, readdirSync } from "fs";
import { MetadataRoute } from "next";

function createSitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const directories = readdirSync("app")
    .filter(item => {
      const path = `app/${item}`;

      return lstatSync(path).isDirectory();
    })
    .map(uri => ({
      url: `${process.env.APP_URL}/${uri}`,
      lastModified,
      priority: 0.5
    }));

  return [
    {
      url: `${process.env.APP_URL}/`,
      lastModified,
      priority: 1
    },
    ...directories
  ];
}

export default createSitemap;
