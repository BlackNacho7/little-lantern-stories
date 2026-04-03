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
};

interface StoriesClientProps {
  stories: Story[];
}

export default function StoriesClient({ stories }: StoriesClientProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const filteredStories = selectedTheme
    ? stories.filter((s) => s.themes.includes(selectedTheme))
    : stories;

  const allThemes = Array.from(new Set(stories.flatMap((s) => s.themes)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-textPrimary mb-3">
            Our Stories
          </h1>
          <p className="text-textSecondary">
            {stories.length} stories for little dreamers ages 3–8
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-up stagger-1">
          <button
            onClick={() => setSelectedTheme(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTheme === null
                ? "bg-primary text-white shadow-md"
                : "bg-surface text-textSecondary hover:text-primary border border-primary/20"
            }`}
          >
            All Stories
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
                  : "bg-surface text-textSecondary hover:text-primary border border-primary/20"
              }`}
            >
              <span>{themeLabels[theme]?.emoji || "✨"}</span>
              {themeLabels[theme]?.label || theme}
            </button>
          ))}
        </div>

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
            <p className="font-heading text-xl text-textSecondary">
              No stories found for this theme yet.
            </p>
            <button
              onClick={() => setSelectedTheme(null)}
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
