"use client";

import Link from "next/link";
import Image from "next/image";
import type { Story } from "../lib/stories";

interface RelatedStoriesProps {
  currentSlug: string;
  themes: string[];
  allStories: Story[];
}

export default function RelatedStories({
  currentSlug,
  themes,
  allStories,
}: RelatedStoriesProps) {
  // Find stories that share at least one theme, excluding the current story
  const related = allStories
    .filter((s) => s.slug !== currentSlug)
    .map((s) => ({
      story: s,
      sharedThemes: s.themes.filter((t) => themes.includes(t)).length,
    }))
    .filter((r) => r.sharedThemes > 0)
    .sort((a, b) => b.sharedThemes - a.sharedThemes)
    .slice(0, 3)
    .map((r) => r.story);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-primary/10 dark:border-primary/20">
      <h2 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-6 flex items-center gap-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E8A87C"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        You Might Also Like
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="group flex gap-3 bg-surface dark:bg-dark-surface rounded-xl p-3 hover:shadow-md transition-all border border-primary/10 dark:border-primary/20"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-primary/10">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="80px"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="font-heading text-sm font-bold text-textPrimary dark:text-dark-textPrimary leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {story.title}
              </h3>
              <p className="text-xs text-textSecondary dark:text-dark-textSecondary">
                Ages {story.ageRange} · {story.readTime}
              </p>
              <div className="flex gap-1 mt-1 flex-wrap">
                {story.themes.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-background dark:bg-dark-background px-1.5 py-0.5 rounded text-textSecondary dark:text-dark-textSecondary capitalize"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
