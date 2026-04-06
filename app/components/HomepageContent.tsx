"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import StoryCard from "./StoryCard";
import Footer from "./Footer";
import NewsletterSignup from "./NewsletterSignup";
import { getStories } from "../lib/stories";

export default function HomepageContent() {
  const stories = getStories();

  return (
    <div className="min-h-screen bg-background dark:bg-dark-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="text-center max-w-2xl mx-auto space-y-6 animate-fade-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary dark:text-dark-textPrimary leading-tight">
            Stories that spark{" "}
            <span className="text-primary">imagination</span> and{" "}
            <span className="text-secondary dark:text-secondary">learning</span>
          </h1>
          <p className="text-lg text-textSecondary dark:text-dark-textSecondary leading-relaxed">
            A warm, cozy space for little dreamers and the people who love
            them. Every story is a tiny adventure — read together, sing
            together, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Browse Stories
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 hover:border-primary text-textPrimary dark:text-dark-textPrimary font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              For Parents
            </Link>
          </div>
        </div>

        {/* Featured Story */}
        <div className="mt-16 bg-surface dark:bg-dark-surface rounded-3xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={stories[0].coverImage}
                alt={stories[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center space-y-5">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Featured Story
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textPrimary dark:text-dark-textPrimary">
                {stories[0].title}
              </h2>
              <p className="text-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {stories[0].description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {stories[0].themes.map((t) => (
                  <span
                    key={t}
                    className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full capitalize"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/stories/${stories[0].slug}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors self-start"
              >
                Read Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-surface dark:bg-dark-surface py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-textPrimary dark:text-dark-textPrimary mb-12">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                📖
              </div>
              <h3 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary">
                Beautiful Stories
              </h3>
              <p className="text-sm text-textSecondary dark:text-dark-textSecondary leading-relaxed">
                Original tales crafted for young hearts — perfect for bedtime,
                quiet time, or snuggling up together.
              </p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center text-3xl">
                🎵
              </div>
              <h3 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary">
                Songs & Printables
              </h3>
              <p className="text-sm text-textSecondary dark:text-dark-textSecondary leading-relaxed">
                Extend the magic beyond reading — with sing-along songs,
                coloring pages, and activity sheets.
              </p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center text-3xl">
                💛
              </div>
              <h3 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary">
                Parent Tools
              </h3>
              <p className="text-sm text-textSecondary dark:text-dark-textSecondary leading-relaxed">
                Discussion questions, vocabulary builders, and tips to turn
                every story into real-world learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Stories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textPrimary dark:text-dark-textPrimary">
              Our Stories
            </h2>
            <p className="text-textSecondary dark:text-dark-textSecondary mt-1">
              Little tales for big hearts.
            </p>
          </div>
          <Link
            href="/stories"
            className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
          >
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.slice(0, 6).map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/stories"
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
          >
            View all stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>
      </section>

      {/* Browse by Theme */}
      <section className="bg-surface dark:bg-dark-surface py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-textPrimary dark:text-dark-textPrimary mb-3">
            Browse by Theme
          </h2>
          <p className="text-textSecondary dark:text-dark-textSecondary text-center mb-10">
            Find stories that match what your little one is going through.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Courage", emoji: "⭐", color: "bg-yellow-50 dark:bg-yellow-900/20" },
              { label: "Curiosity", emoji: "🔭", color: "bg-blue-50 dark:bg-blue-900/20" },
              { label: "Kindness", emoji: "🌸", color: "bg-pink-50 dark:bg-pink-900/20" },
              { label: "Friendship", emoji: "🤝", color: "bg-green-50 dark:bg-green-900/20" },
              { label: "Emotions", emoji: "💛", color: "bg-amber-50 dark:bg-amber-900/20" },
              { label: "Nature", emoji: "🌿", color: "bg-emerald-50 dark:bg-emerald-900/20" },
              { label: "Bedtime", emoji: "🌙", color: "bg-indigo-50 dark:bg-indigo-900/20" },
              { label: "Adventure", emoji: "✨", color: "bg-purple-50 dark:bg-purple-900/20" },
            ].map((theme) => (
              <Link
                key={theme.label}
                href="/stories"
                className={`${theme.color} rounded-2xl p-5 text-center hover:shadow-md transition-all duration-200 group`}
              >
                <span className="text-3xl block mb-2">{theme.emoji}</span>
                <span className="text-sm font-semibold text-textPrimary dark:text-dark-textPrimary group-hover:text-primary transition-colors">
                  {theme.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents Teaser */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <span className="text-4xl mb-4 block">🌿</span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textPrimary dark:text-dark-textPrimary mb-4">
          Made for Parents Who Care
        </h2>
        <p className="text-textSecondary dark:text-dark-textSecondary leading-relaxed max-w-xl mx-auto">
          Every story comes with tools to help you extend the experience —
          questions to ask, words to learn, and tips for turning a bedtime
          story into a moment of real connection.
        </p>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <NewsletterSignup />
      </section>

      <Footer />
    </div>
  );
}
