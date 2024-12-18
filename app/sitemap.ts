import { readdirSync, lstatSync } from "fs";
import { MetadataRoute } from "next";

type SitemapComponent = {
  url: string;
  lastModified: Date;
  priority: 0.5;
};

function readRoutes(
  base: string,
  lastModified: Date,
  prefix?: string
): Array<SitemapComponent> {
  const path = `app/${base}`;

  const entries = readdirSync(path);

  const directories = entries.filter(e =>
    lstatSync(`${path}/${e}`).isDirectory()
  );

  const url = prefix ? `${process.env.APP_URL}/${prefix}` : process.env.APP_URL;

  return directories.map(d => ({
    url: `${url}/${d}`,
    lastModified,
    priority: 0.5
  }));
}

function createSitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${process.env.APP_URL}/`,
      lastModified,
      priority: 1
    },
    ...readRoutes("(unauthed)", lastModified)
  ];
}

export default createSitemap;
