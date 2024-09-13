import { lstatSync, readdirSync } from "fs";
import { MetadataRoute } from "next";

export default function (): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const directories = readdirSync("app")
    .filter(item => {
      const path = `app/${item}`;

      return lstatSync(path).isDirectory();
    })
    .map(uri => ({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/${uri}`,
      lastModified,
      priority: 0.5
    }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      lastModified,
      priority: 1
    },
    ...directories
  ];
}
