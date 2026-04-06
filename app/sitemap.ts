import { MetadataRoute } from "next";
import { getStories } from "./lib/stories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://littlelantern.stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getStories();

  const storyPages = stories.map((story) => ({
    url: `${siteUrl}/stories/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...storyPages,
  ];
}
