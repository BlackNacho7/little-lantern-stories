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

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const { slug, title, coverImage, ageRange, themes, readTime, description } = story;

  return (
    <Link
      href={`/stories/${slug}`}
      className="group block bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
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
        <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-textPrimary text-xs font-semibold px-3 py-1 rounded-full">
          Ages {ageRange}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex gap-1.5 flex-wrap">
          {themes.map((theme) => (
            <span
              key={theme}
              className="text-sm bg-background px-2 py-0.5 rounded-full"
            >
              {themeLabels[theme] || "✨"} {theme}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-lg font-bold text-textPrimary leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-textSecondary line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-background">
          <span className="text-xs text-textSecondary">{readTime} read</span>
          <span className="text-primary text-sm font-semibold group-hover:gap-1.5 gap-1 flex items-center transition-all">
            Read story{" "}
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
