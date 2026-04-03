import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen } from "@phosphor-icons/react";
import type { Story } from "@/app/lib/stories";

const themeLabels: Record<string, string> = {
  emotions: "💛",
  adventure: "🌿",
  kindness: "🌸",
  bedtime: "🌙",
  curiosity: "🔭",
  friendship: "🤝",
  courage: "⭐",
};

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group block bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] bg-primary/10 overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Age Badge */}
        <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-textPrimary text-xs font-semibold px-3 py-1 rounded-full">
          Ages {story.ageRange}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Themes */}
        <div className="flex gap-1.5 flex-wrap">
          {story.themes.map((theme) => (
            <span
              key={theme}
              className="text-sm bg-background px-2 py-0.5 rounded-full"
              title={theme}
            >
              {themeLabels[theme] || "✨"} {theme}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-textPrimary leading-tight group-hover:text-primary transition-colors">
          {story.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-textSecondary line-clamp-2 leading-relaxed">
          {story.description}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-background">
          <div className="flex items-center gap-3 text-xs text-textSecondary">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {story.readTime}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={14} />
              Read
            </span>
          </div>
          <span className="text-primary text-sm font-semibold group-hover:gap-1.5 gap-1 flex items-center transition-all">
            Read story{" "}
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
