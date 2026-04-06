"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "default" | "compact";
}

export default function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    // In a real app, this would call an API endpoint
    // For now, just simulate success
    setStatus("success");
    setEmail("");
    setError("");
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          variant === "compact"
            ? "bg-primary/10 border border-primary/20"
            : "bg-surface dark:bg-dark-surface"
        }`}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#85C1A3"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-textPrimary dark:text-dark-textPrimary mb-2">
          Thanks for subscribing! 🎉
        </h3>
        <p className="text-textSecondary dark:text-dark-textSecondary text-sm">
          We&apos;ll send you the best stories and updates straight to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl ${
        variant === "compact"
          ? "bg-primary/10 border border-primary/20 p-6"
          : "bg-surface dark:bg-dark-surface p-8 sm:p-10"
      }`}
    >
      {variant === "default" && (
        <>
          <div className="text-center mb-6">
            <span className="text-3xl mb-3 block">✉️</span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-textPrimary dark:text-dark-textPrimary mb-2">
              Get Stories in Your Inbox
            </h3>
            <p className="text-textSecondary dark:text-dark-textSecondary text-sm leading-relaxed">
              Join our newsletter for new story announcements, parent tips,
              and seasonal surprises. No spam — just warm stories and helpful
              ideas.
            </p>
          </div>
        </>
      )}

      {variant === "compact" && (
        <h3 className="font-heading text-lg font-bold text-textPrimary dark:text-dark-textPrimary mb-4 text-center">
          Get Stories in Your Inbox 💌
        </h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className={`flex-1 px-4 py-3 rounded-xl border text-textPrimary dark:text-dark-textPrimary placeholder:text-textSecondary dark:placeholder:text-dark-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
              status === "error"
                ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                : "border-primary/20 dark:border-primary/30 bg-background dark:bg-dark-background"
            }`}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        {status === "error" && error && (
          <p className="text-red-500 text-xs text-center sm:text-left">{error}</p>
        )}
      </form>

      {variant === "default" && (
        <p className="text-xs text-textSecondary dark:text-dark-textSecondary text-center mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
