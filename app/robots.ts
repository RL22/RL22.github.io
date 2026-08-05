import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /*
       * The Everlaw case study now lives in its own repo, deployed to
       * /everlaw/ on this same domain. It ships its own noindex metadata, but
       * a project Pages site cannot serve a binding robots.txt: crawlers only
       * read this one, at the domain root. So the disallow has to live here.
       */
      disallow: "/everlaw/",
    },
    sitemap: "https://rl22.github.io/sitemap.xml",
  };
}
