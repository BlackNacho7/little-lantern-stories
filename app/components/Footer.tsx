"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-dark-surface border-t border-primary/10 dark:border-primary/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <span className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary">
                Little Lantern
              </span>
            </Link>
            <p className="text-sm text-textSecondary dark:text-dark-textSecondary max-w-xs">
              Stories that spark imagination and learning.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-center">
            <Link
              href="/stories"
              className="text-sm text-textSecondary dark:text-dark-textSecondary hover:text-primary transition-colors"
            >
              All Stories
            </Link>
            <Link
              href="/stories"
              className="text-sm text-textSecondary dark:text-dark-textSecondary hover:text-primary transition-colors"
            >
              For Parents
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-primary/10 dark:border-primary/20 text-center">
          <p className="text-xs text-textSecondary dark:text-dark-textSecondary">
            Made with 💛 for little dreamers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
