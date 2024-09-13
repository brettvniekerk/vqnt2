import { MetadataRoute } from "next";

export default (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/"
  },
  sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
});
