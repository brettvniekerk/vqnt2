import { APP_URL } from "@/constants/env";
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
      url: `${APP_URL}/${uri}`,
      lastModified,
      priority: 0.5
    }));

  return [
    {
      url: `${APP_URL}/`,
      lastModified,
      priority: 1
    },
    ...directories
  ];
}
