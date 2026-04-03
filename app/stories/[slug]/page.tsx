"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import AudioPlayer from "@/app/components/AudioPlayer";
import PrintableCard from "@/app/components/PrintableCard";
import VocabularyList from "@/app/components/VocabularyList";
import DiscussionQuestions from "@/app/components/DiscussionQuestions";
import ParentTipsBox from "@/app/components/ParentTipsBox";
import { getStories, getStoryBySlug } from "@/app/lib/stories";

const themeLabels: Record<string, string> = {
  emotions: "💛 Emotions",
  adventure: "🌿 Adventure",
  kindness: "🌸 Kindness",
  bedtime: "🌙 Bedtime",
  curiosity: "🔭 Curiosity",
  friendship: "🤝 Friendship",
  courage: "⭐ Courage",
  identity: "🎨 Identity",
};

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🔍</span>
          <h1 className="font-heading text-2xl font-bold text-textPrimary mb-2">Story Not Found</h1>
          <Link href="/stories" className="text-primary font-semibold hover:underline">
            Browse all stories
          </Link>
        </div>
      </div>
    );
  }

  const allStories = getStories();
  const currentIndex = allStories.findIndex((s) => s.slug === params.slug);
  const prevStory = currentIndex > 0 ? allStories[currentIndex - 1] : null;
  const nextStory = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null;

  const paragraphs = story.content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Link */}
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-sm text-textSecondary hover:text-primary transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Stories
        </Link>

        {/* Story Hero */}
        <header className="mb-10 animate-fade-up">
          <div className="flex gap-2 flex-wrap mb-4">
            {story.themes.map((t) => (
              <span
                key={t}
                className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full capitalize"
              >
                {themeLabels[t] || t}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-4">
            {story.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-textSecondary">
            <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full">
              <span>👶</span> Ages {story.ageRange}
            </span>
            <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {story.readTime} read
            </span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md animate-fade-up stagger-1">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Audio Player */}
        <div className="mb-10 animate-fade-up stagger-2">
          <AudioPlayer />
        </div>

        {/* Story Content */}
        <article className="mb-12 animate-fade-up stagger-3">
          <div className="bg-surface rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="prose-story max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <p key={i} className="text-base font-semibold text-primary italic text-center my-8">
                      {para.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-lg leading-relaxed text-textPrimary mb-6">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* Related Songs */}
        {story.songs && story.songs.length > 0 && (
          <section className="mb-10 animate-fade-up">
            <h2 className="font-heading text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#85B8CB" strokeWidth="2" strokeLinecap="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              Songs to Sing Together
            </h2>
            <div className="space-y-4">
              {story.songs.map((song, i) => (
                <div key={i} className="bg-secondary/5 rounded-xl p-5">
                  <p className="font-semibold text-textPrimary mb-2">{song.title}</p>
                  <p className="text-sm italic text-textSecondary leading-relaxed">{song.lyrics}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Printables */}
        {story.printables && story.printables.length > 0 && (
          <section className="mb-10 animate-fade-up">
            <h2 className="font-heading text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Print & Play
            </h2>
            <div className="space-y-3">
              {story.printables.map((p, i) => (
                <PrintableCard key={i} title={p.title} type={p.type} url={p.url} />
              ))}
            </div>
          </section>
        )}

        {/* Discussion Questions */}
        {story.discussionQuestions && story.discussionQuestions.length > 0 && (
          <section className="mb-10 animate-fade-up">
            <h2 className="font-heading text-xl font-bold text-textPrimary mb-4">
              💬 Discussion Questions
            </h2>
            <p className="text-sm text-textSecondary mb-4">Read together, then talk about these questions:</p>
            <DiscussionQuestions questions={story.discussionQuestions} />
          </section>
        )}

        {/* Vocabulary */}
        {story.vocabulary && story.vocabulary.length > 0 && (
          <section className="mb-10 animate-fade-up">
            <h2 className="font-heading text-xl font-bold text-textPrimary mb-4">
              📖 New Words
            </h2>
            <p className="text-sm text-textSecondary mb-4">Talk about these words before reading again:</p>
            <VocabularyList words={story.vocabulary} />
          </section>
        )}

        {/* Parent Tips */}
        {story.parentTips && (
          <section className="mb-10 animate-fade-up">
            <ParentTipsBox tips={story.parentTips} />
          </section>
        )}

        {/* Prev / Next Navigation */}
        <nav className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-primary/10 animate-fade-up">
          {prevStory ? (
            <Link
              href={`/stories/${prevStory.slug}`}
              className="flex-1 bg-surface rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <p className="text-xs text-textSecondary mb-1">← Previous Story</p>
              <p className="font-heading font-bold text-textPrimary group-hover:text-primary transition-colors text-sm">
                {prevStory.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextStory ? (
            <Link
              href={`/stories/${nextStory.slug}`}
              className="flex-1 bg-surface rounded-xl p-4 hover:shadow-md transition-all group text-right"
            >
              <p className="text-xs text-textSecondary mb-1">Next Story →</p>
              <p className="font-heading font-bold text-textPrimary group-hover:text-primary transition-colors text-sm">
                {nextStory.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>
      </main>

      <Footer />
    </div>
  );
}
