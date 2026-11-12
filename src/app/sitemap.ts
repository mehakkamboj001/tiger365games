import type { MetadataRoute } from "next";
import { NEXT_PUBLIC_SITE_URL } from "../lib/config";
import { sports } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
    {
      path: "/responsible-play",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${NEXT_PUBLIC_SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...sports.map((sport) => ({
      url: `${NEXT_PUBLIC_SITE_URL}/sports/${sport.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
