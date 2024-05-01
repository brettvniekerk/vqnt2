import { APP_URL } from "@/constants/env";
import { MetadataRoute } from "next";

export default (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/"
  },
  sitemap: `${APP_URL}/sitemap.xml`
});
