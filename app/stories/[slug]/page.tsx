import Link from "next/link";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import AudioPlayer from "@/app/components/AudioPlayer";
import PrintableCard from "@/app/components/PrintableCard";
import VocabularyList from "@/app/components/VocabularyList";
import DiscussionQuestions from "@/app/components/DiscussionQuestions";
import ParentTipsBox from "@/app/components/ParentTipsBox";
import StoryQuiz from "@/app/components/StoryQuiz";
import RelatedStories from "@/app/components/RelatedStories";
import NewsletterSignup from "@/app/components/NewsletterSignup";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://littlelantern.stories";

  return {
    title: `${story.title} | Little Lantern Stories`,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      url: `${siteUrl}/stories/${slug}`,
      siteName: "Little Lantern Stories",
      images: [
        {
          url: story.coverImage,
          width: 800,
          height: 600,
          alt: story.title,
        },
      ],
      locale: "en_US",
      type: "article",
      authors: ["Little Lantern Stories"],
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.description,
      images: [story.coverImage],
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) {
    return (
      <div className="min-h-screen bg-background dark:bg-dark-background flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🔍</span>
          <h1 className="font-heading text-2xl font-bold text-textPrimary dark:text-dark-textPrimary mb-2">Story Not Found</h1>
          <Link href="/stories" className="text-primary font-semibold hover:underline">Browse all stories</Link>
        </div>
      </div>
    );
  }

  const allStories = getStories();
  const currentIndex = allStories.findIndex((s) => s.slug === slug);
  const prevStory = currentIndex > 0 ? allStories[currentIndex - 1] : null;
  const nextStory = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null;

  const paragraphs = story.content.split("\n\n").filter((p) => p.trim());

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Story",
    headline: story.title,
    description: story.description,
    author: {
      "@type": "Organization",
      name: "Little Lantern Stories",
    },
    image: story.coverImage,
    datePublished: "2024-01-01",
    about: {
      "@type": "Thing",
      name: story.themes.join(", "),
    },
    audience: {
      "@type": "Audience",
      suggestedMinAge: parseInt(story.ageRange.split("–")[0]) || 3,
      suggestedMaxAge: parseInt(story.ageRange.split("–")[1]) || 8,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background dark:bg-dark-background">
        <Navigation />

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Back Link */}
          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-sm text-textSecondary dark:text-dark-textSecondary hover:text-primary transition-colors mb-8"
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
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary dark:text-dark-textPrimary leading-tight mb-4">
              {story.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-textSecondary dark:text-dark-textSecondary">
              <span className="flex items-center gap-1.5 bg-surface dark:bg-dark-surface px-3 py-1.5 rounded-full">
                <span>👶</span> Ages {story.ageRange}
              </span>
              <span className="flex items-center gap-1.5 bg-surface dark:bg-dark-surface px-3 py-1.5 rounded-full">
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
            <AudioPlayer storyContent={story.content} />
          </div>

          {/* Story Content */}
          <article className="mb-12 animate-fade-up stagger-3">
            <div className="bg-surface dark:bg-dark-surface rounded-2xl p-6 sm:p-10 shadow-sm">
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
                    <p key={i} className="text-lg leading-relaxed text-textPrimary dark:text-dark-textPrimary mb-6">
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
              <h2 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-4 flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#85B8CB" strokeWidth="2" strokeLinecap="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                Songs to Sing Together
              </h2>
              <div className="space-y-4">
                {story.songs.map((song, i) => (
                  <div key={i} className="bg-secondary/5 dark:bg-secondary/10 rounded-xl p-5">
                    <p className="font-semibold text-textPrimary dark:text-dark-textPrimary mb-2">{song.title}</p>
                    <p className="text-sm italic text-textSecondary dark:text-dark-textSecondary leading-relaxed">{song.lyrics}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Printables */}
          {story.printables && story.printables.length > 0 && (
            <section className="mb-10 animate-fade-up">
              <h2 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-4 flex items-center gap-2">
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
              <h2 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-4">💬 Discussion Questions</h2>
              <p className="text-sm text-textSecondary dark:text-dark-textSecondary mb-4">Read together, then talk about these questions:</p>
              <DiscussionQuestions questions={story.discussionQuestions} />
            </section>
          )}

          {/* Vocabulary */}
          {story.vocabulary && story.vocabulary.length > 0 && (
            <section className="mb-10 animate-fade-up">
              <h2 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-4">📖 New Words</h2>
              <p className="text-sm text-textSecondary dark:text-dark-textSecondary mb-4">Talk about these words before reading again:</p>
              <VocabularyList words={story.vocabulary} />
            </section>
          )}

          {/* Parent Tips */}
          {story.parentTips && (
            <section className="mb-10 animate-fade-up">
              <ParentTipsBox tips={story.parentTips} />
            </section>
          )}

          {/* Story Quiz */}
          <section className="mb-10 animate-fade-up">
            <StoryQuiz story={story} />
          </section>

          {/* Related Stories */}
          <RelatedStories
            currentSlug={story.slug}
            themes={story.themes}
            allStories={allStories}
          />

          {/* Newsletter */}
          <section className="mt-12 animate-fade-up">
            <NewsletterSignup variant="compact" />
          </section>

          {/* Prev / Next Navigation */}
          <nav className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-primary/10 dark:border-primary/20 animate-fade-up mt-8">
            {prevStory ? (
              <Link
                href={`/stories/${prevStory.slug}`}
                className="flex-1 bg-surface dark:bg-dark-surface rounded-xl p-4 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-textSecondary dark:text-dark-textSecondary mb-1">← Previous Story</p>
                <p className="font-heading font-bold text-textPrimary dark:text-dark-textPrimary group-hover:text-primary transition-colors text-sm">
                  {prevStory.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextStory ? (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="flex-1 bg-surface dark:bg-dark-surface rounded-xl p-4 hover:shadow-md transition-all group text-right"
              >
                <p className="text-xs text-textSecondary dark:text-dark-textSecondary mb-1">Next Story →</p>
                <p className="font-heading font-bold text-textPrimary dark:text-dark-textPrimary group-hover:text-primary transition-colors text-sm">
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
    </>
  );
}
