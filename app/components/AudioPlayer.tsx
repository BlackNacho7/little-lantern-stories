"use client";

import { useState } from "react";
import { Play, Pause } from "@phosphor-icons/react";

interface AudioPlayerProps {
  title?: string;
}

export default function AudioPlayer({ title = "Listen to the story" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-primary/5 rounded-2xl p-6">
      <p className="text-sm font-semibold text-textSecondary mb-4 uppercase tracking-wide">
        🎧 {title}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors shadow-md"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={24} weight="fill" />
          ) : (
            <Play size={24} weight="fill" className="ml-1" />
          )}
        </button>
        <div className="flex-1 space-y-2">
          {/* Progress Bar */}
          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary/40 rounded-full w-1/3 transition-all" />
          </div>
          <div className="flex justify-between text-xs text-textSecondary">
            <span>1:23</span>
            <span>4:56</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-textSecondary mt-3 italic">
        Audio narration coming soon!
      </p>
    </div>
  );
}
