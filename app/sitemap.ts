import { APP_URL } from "@/constants/env";
import { MetadataRoute } from "next";

export default (): MetadataRoute.Sitemap => [
  {
    url: `${APP_URL}/`,
    lastModified: new Date(),
    priority: 1
  }
];
