"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "bg-surface/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl">🌟</span>
            <span className="font-heading text-xl sm:text-2xl font-bold text-textPrimary">
              Little Lantern
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/stories"
              className="text-textSecondary hover:text-primary font-medium transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/stories"
              className="text-textSecondary hover:text-primary font-medium transition-colors"
            >
              For Parents
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-textPrimary hover:text-primary transition-colors"
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
          <div className="md:hidden bg-surface border-t border-primary/10 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="text-textSecondary hover:text-primary font-medium transition-colors px-2"
              >
                Stories
              </Link>
              <Link
                href="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="text-textSecondary hover:text-primary font-medium transition-colors px-2"
              >
                For Parents
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
