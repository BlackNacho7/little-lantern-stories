"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 dark:bg-dark-surface/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl">🌟</span>
            <span className="font-heading text-xl sm:text-2xl font-bold text-textPrimary dark:text-dark-textPrimary">
              Little Lantern
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/stories"
              className="text-textSecondary dark:text-dark-textSecondary hover:text-primary font-medium transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/stories"
              className="text-textSecondary dark:text-dark-textSecondary hover:text-primary font-medium transition-colors"
            >
              For Parents
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-background dark:hover:bg-dark-background transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D2C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-textPrimary dark:text-dark-textPrimary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface dark:bg-dark-surface border-t border-primary/10 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="text-textSecondary dark:text-dark-textSecondary hover:text-primary font-medium transition-colors px-2"
              >
                Stories
              </Link>
              <Link
                href="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="text-textSecondary dark:text-dark-textSecondary hover:text-primary font-medium transition-colors px-2"
              >
                For Parents
              </Link>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-textSecondary dark:text-dark-textSecondary hover:text-primary font-medium transition-colors px-2"
              >
                {theme === "dark" ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A87C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
