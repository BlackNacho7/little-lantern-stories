"use client";

import { useState } from "react";

interface AudioPlayerProps {
  title?: string;
}

export default function AudioPlayer({ title = "Listen to the story" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6">
      <p className="text-sm font-semibold text-textSecondary dark:text-dark-textSecondary mb-4 uppercase tracking-wide">
        🎧 {title}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors shadow-md"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
            </svg>
          )}
        </button>
        <div className="flex-1 space-y-2">
          {/* Progress Bar */}
          <div className="h-2 bg-primary/20 dark:bg-primary/30 rounded-full overflow-hidden">
            <div className="h-full bg-primary/40 rounded-full w-1/3 transition-all" />
          </div>
          <div className="flex justify-between text-xs text-textSecondary dark:text-dark-textSecondary">
            <span>1:23</span>
            <span>4:56</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-textSecondary dark:text-dark-textSecondary mt-3 italic">
        Audio narration coming soon!
      </p>
    </div>
  );
}
