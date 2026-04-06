"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import StoryCard from "../components/StoryCard";
import Footer from "../components/Footer";
import type { Story } from "../lib/stories";

const themeLabels: Record<string, { label: string; emoji: string }> = {
  emotions: { label: "Emotions", emoji: "💛" },
  adventure: { label: "Adventure", emoji: "🌿" },
  kindness: { label: "Kindness", emoji: "🌸" },
  bedtime: { label: "Bedtime", emoji: "🌙" },
  curiosity: { label: "Curiosity", emoji: "🔭" },
  friendship: { label: "Friendship", emoji: "🤝" },
  courage: { label: "Courage", emoji: "⭐" },
  identity: { label: "Identity", emoji: "🎨" },
  imagination: { label: "Imagination", emoji: "✨" },
  "growth mindset": { label: "Growth Mindset", emoji: "🌱" },
  patience: { label: "Patience", emoji: "⏳" },
  "self-expression": { label: "Self-Expression", emoji: "🗣️" },
  generosity: { label: "Generosity", emoji: "🎁" },
  resilience: { label: "Resilience", emoji: "💪" },
  belonging: { label: "Belonging", emoji: "🏠" },
};

const levelLabels: Record<number, { label: string; ageRange: string; emoji: string }> = {
  1: { label: "Level 1", ageRange: "Ages 2–3", emoji: "🌱" },
  2: { label: "Level 2", ageRange: "Ages 3–4", emoji: "🌿" },
  3: { label: "Level 3", ageRange: "Ages 4–6", emoji: "🌳" },
  4: { label: "Level 4", ageRange: "Ages 6–8", emoji: "🌲" },
  5: { label: "Level 5", ageRange: "Ages 8+", emoji: "🏔️" },
};

interface StoriesClientProps {
  stories: Story[];
}

export default function StoriesClient({ stories }: StoriesClientProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allThemes = Array.from(new Set(stories.flatMap((s) => s.themes)));

  const filteredStories = stories.filter((s) => {
    const matchesTheme = selectedTheme ? s.themes.includes(selectedTheme) : true;
    const matchesLevel = selectedLevel !== null ? s.level === selectedLevel : true;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query
      ? s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.themes.some((t) => t.toLowerCase().includes(query))
      : true;
    return matchesTheme && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background dark:bg-dark-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-textPrimary dark:text-dark-textPrimary mb-3">
            Our Stories
          </h1>
          <p className="text-textSecondary dark:text-dark-textSecondary">
            {stories.length} stories for little dreamers ages 3–8
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 animate-fade-up">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary dark:text-dark-textSecondary"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search stories by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-surface dark:bg-dark-surface border border-primary/20 dark:border-primary/30 rounded-xl text-textPrimary dark:text-dark-textPrimary placeholder:text-textSecondary dark:placeholder:text-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-textSecondary dark:text-dark-textSecondary hover:text-textPrimary dark:hover:text-dark-textPrimary transition-colors"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-5 animate-fade-up stagger-1">
          <p className="text-xs font-semibold text-textSecondary dark:text-dark-textSecondary uppercase tracking-wider mb-3 text-center">
            Filter by Level
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((level) => {
              const info = levelLabels[level];
              const count = stories.filter((s) => s.level === level).length;
              if (count === 0) return null;
              return (
                <button
                  key={level}
                  onClick={() =>
                    setSelectedLevel(selectedLevel === level ? null : level)
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedLevel === level
                      ? "bg-secondary text-white shadow-md"
                      : "bg-surface dark:bg-dark-surface text-textSecondary dark:text-dark-textSecondary hover:text-secondary border border-secondary/20"
                  }`}
                >
                  {info.emoji} {info.label} ({info.ageRange})
                </button>
              );
            })}
          </div>
        </div>

        {/* Theme Filter */}
        <div className="mb-10 animate-fade-up stagger-2">
          <p className="text-xs font-semibold text-textSecondary dark:text-dark-textSecondary uppercase tracking-wider mb-3 text-center">
            Filter by Theme
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTheme(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTheme === null
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface dark:bg-dark-surface text-textSecondary dark:text-dark-textSecondary hover:text-primary border border-primary/20"
              }`}
            >
              All Themes
            </button>
            {allThemes.map((theme) => (
              <button
                key={theme}
                onClick={() =>
                  setSelectedTheme(theme === selectedTheme ? null : theme)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  selectedTheme === theme
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface dark:bg-dark-surface text-textSecondary dark:text-dark-textSecondary hover:text-primary border border-primary/20"
                }`}
              >
                <span>{themeLabels[theme]?.emoji || "✨"}</span>
                {themeLabels[theme]?.label || theme}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {(searchQuery || selectedTheme || selectedLevel) && (
          <p className="text-center text-sm text-textSecondary dark:text-dark-textSecondary mb-6">
            Showing {filteredStories.length} of {stories.length} stories
          </p>
        )}

        {/* Story Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, i) => (
              <div
                key={story.slug}
                className={`animate-fade-up stagger-${Math.min(i + 1, 5)}`}
              >
                <StoryCard story={story} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <span className="text-5xl block">🔍</span>
            <p className="font-heading text-xl text-textSecondary dark:text-dark-textSecondary">
              No stories found{searchQuery ? ` for "${searchQuery}"` : ""}.
            </p>
            <button
              onClick={() => {
                setSelectedTheme(null);
                setSelectedLevel(null);
                setSearchQuery("");
              }}
              className="text-primary font-semibold hover:underline"
            >
              View all stories
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
