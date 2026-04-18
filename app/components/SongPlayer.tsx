"use client";

import { useState, useRef, useCallback } from "react";

interface SongPlayerProps {
  title: string;
  audioUrl: string;
}

export default function SongPlayer({ title, audioUrl }: SongPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const clearProgressInterval = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const startProgressTracking = () => {
    clearProgressInterval();
    progressIntervalRef.current = setInterval(() => {
      if (audioRef.current) {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration || 0;
        const progressPct = total > 0 ? (current / total) * 100 : 0;
        setProgress(progressPct);
        setCurrentTime(current);
      }
    }, 200);
  };

  const handlePlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.volume = 1;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      clearProgressInterval();
      return;
    }

    setLoading(true);
    setError(null);

    audioRef.current.onloadedmetadata = () => {
      setLoading(false);
      setTotalTime(audioRef.current!.duration);
      audioRef.current!.play();
      setIsPlaying(true);
      startProgressTracking();
    };

    audioRef.current.onended = () => {
      setIsPlaying(false);
      setProgress(100);
      setCurrentTime(audioRef.current!.duration);
      clearProgressInterval();
    };

    audioRef.current.onerror = () => {
      setLoading(false);
      setError("Audio unavailable.");
      setIsPlaying(false);
    };

    if (audioRef.current.readyState >= 1) {
      setLoading(false);
      setTotalTime(audioRef.current.duration);
      audioRef.current.play();
      setIsPlaying(true);
      startProgressTracking();
    }
  }, [isPlaying, audioUrl]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || totalTime === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * totalTime;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(pct * 100);
  };

  return (
    <div className="bg-secondary/5 dark:bg-secondary/10 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlay}
          className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 text-white flex items-center justify-center transition-colors shadow-md flex-shrink-0 disabled:opacity-50"
          disabled={loading}
          aria-label={isPlaying ? "Pause" : "Play song"}
        >
          {loading ? (
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
          ) : isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <p className="font-semibold text-textPrimary dark:text-dark-textPrimary mb-2">{title}</p>
          {/* Progress bar */}
          <div
            className="h-1.5 bg-secondary/20 dark:bg-secondary/30 rounded-full overflow-hidden cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-secondary/60 rounded-full transition-all group-hover:bg-secondary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-textSecondary dark:text-dark-textSecondary mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>
      </div>

      {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
    </div>
  );
}