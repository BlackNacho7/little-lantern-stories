"use client";

import Link from "next/link";
import Image from "next/image";
import type { Story } from "../lib/stories";

const themeLabels: Record<string, string> = {
  emotions: "💛",
  adventure: "🌿",
  kindness: "🌸",
  bedtime: "🌙",
  curiosity: "🔭",
  friendship: "🤝",
  courage: "⭐",
  identity: "🎨",
};

const levelLabels: Record<number, { label: string; ageRange: string }> = {
  1: { label: "Level 1", ageRange: "Ages 2–3" },
  2: { label: "Level 2", ageRange: "Ages 3–4" },
  3: { label: "Level 3", ageRange: "Ages 4–6" },
  4: { label: "Level 4", ageRange: "Ages 6–8" },
  5: { label: "Level 5", ageRange: "Ages 8+" },
};

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const { slug, title, coverImage, level, themes, readTime, description } = story;
  const levelInfo = levelLabels[level] || { label: `Level ${level}`, ageRange: "" };

  return (
    <Link
      href={`/stories/${slug}`}
      className="group block bg-surface dark:bg-dark-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] bg-primary/10 overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-surface/90 dark:bg-dark-surface/90 backdrop-blur-sm text-textPrimary dark:text-dark-textPrimary text-xs font-semibold px-3 py-1 rounded-full">
          {levelInfo.label} ({levelInfo.ageRange})
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex gap-1.5 flex-wrap">
          {themes.map((theme) => (
            <span
              key={theme}
              className="text-sm bg-background dark:bg-dark-background px-2 py-0.5 rounded-full text-textSecondary dark:text-dark-textSecondary"
            >
              {themeLabels[theme] || "✨"} {theme}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-lg font-bold text-textPrimary dark:text-dark-textPrimary leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-textSecondary dark:text-dark-textSecondary line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-background dark:border-dark-background">
          <span className="text-xs text-textSecondary dark:text-dark-textSecondary">{readTime} read</span>
          <span className="text-primary text-sm font-semibold group-hover:gap-1.5 gap-1 flex items-center transition-all">
            Read story{" "}
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
