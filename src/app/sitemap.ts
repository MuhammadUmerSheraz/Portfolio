import type { MetadataRoute } from "next";
import { getFeaturedProjectSlugs } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const workEntries = getFeaturedProjectSlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...workEntries,
  ];
}
