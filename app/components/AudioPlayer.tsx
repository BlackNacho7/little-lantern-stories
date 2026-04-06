"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface AudioPlayerProps {
  storyContent: string;
  title?: string;
}

interface VoiceOption {
  name: string;
  voice: SpeechSynthesisVoice | null;
}

export default function AudioPlayer({ storyContent, title = "Listen to the story" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0-100
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<VoiceOption | null>(null);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);
  const wordCountRef = useRef<number>(0);

  // Clean the story content — remove Moonbeam framing, asterisks, special chars
  const cleanedContent = storyContent
    .replace(/Welcome, little dreamers![\s\S]*?Are you ready[\s\S]*?\?/g, "")
    .replace(/And so our adventure comes to an end[\s\S]*$/g, "")
    .replace(/\*\*/g, "")
    .replace(/☁️💜|⭐🌟✨|🐦💜|🌊💙|🌙✨|🌳💚|📦✨|🏡💔💚/g, "")
    .replace(/!$/g, ".")
    .replace(/\.{3,}/g, ".")
    .trim();

  // Estimate reading time (average 150 words/min for read-aloud pace)
  const wordCount = cleanedContent.split(/\s+/).filter(Boolean).length;
  wordCountRef.current = wordCount;
  const estimatedMinutes = Math.ceil(wordCount / 150);
  const estimatedSeconds = Math.round((wordCount / 150) * 60);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      // Prefer English voices, especially enhanced/natural ones
      const englishVoices = available
        .filter((v) => v.lang.startsWith("en"))
        .sort((a, b) => {
          const aScore = (a.name.includes("premium") ? 3 : 0) + (a.name.includes("enhanced") ? 2 : 0) + (a.name.includes("natural") ? 1 : 0);
          const bScore = (b.name.includes("premium") ? 3 : 0) + (b.name.includes("enhanced") ? 2 : 0) + (b.name.includes("natural") ? 1 : 0);
          return bScore - aScore;
        })
        .map((v) => ({ name: v.name, voice: v }));
      setVoices(englishVoices);
      if (englishVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(englishVoices[0]);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setCurrentTime(0);
  }, []);

  const handlePlay = useCallback(() => {
    setError(null);

    if (isPaused) {
      // Resume from where we left off
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      startTimeRef.current = Date.now() - pausedTimeRef.current * 1000;
      return;
    }

    if (isPlaying) {
      // Pause
      window.speechSynthesis.pause();
      setIsPlaying(false);
      setIsPaused(true);
      pausedTimeRef.current = (Date.now() - startTimeRef.current) / 1000;
      return;
    }

    // Start fresh
    const utterance = new SpeechSynthesisUtterance(cleanedContent);
    utterance.voice = selectedVoice?.voice || null;
    utterance.rate = 0.9; // Slightly slower for kids
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const startTime = Date.now();
    startTimeRef.current = startTime;
    pausedTimeRef.current = 0;

    // Progress tracker — update every 200ms
    const progressInterval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const progressPct = Math.min((elapsed / estimatedSeconds) * 100, 100);
      setProgress(progressPct);
      setCurrentTime(elapsed);
    }, 200);

    utterance.onend = () => {
      clearInterval(progressInterval);
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setCurrentTime(estimatedSeconds);
    };

    utterance.onerror = (event) => {
      clearInterval(progressInterval);
      if (event.error !== "canceled" && event.error !== "interrupted") {
        setError("Audio unavailable. Please try a different browser.");
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setTotalTime(estimatedSeconds);
  }, [isPlaying, isPaused, cleanedContent, selectedVoice, estimatedSeconds]);

  const handleStop = useCallback(() => {
    stopSpeech();
  }, [stopSpeech]);

  // Progress bar click to seek (approximate — jumps to % of estimated time)
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Can't seek with Web Speech API, but we can show intent
    // Just stops and restarts from beginning for now
    if (isPlaying || isPaused) {
      stopSpeech();
    }
  };

  const togglePlay = () => {
    if (!isPlaying && !isPaused) {
      handlePlay();
    } else {
      // Toggle pause
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
        setIsPaused(true);
        pausedTimeRef.current = (Date.now() - startTimeRef.current) / 1000;
      } else if (isPaused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
        setIsPaused(false);
        startTimeRef.current = Date.now() - pausedTimeRef.current * 1000;
      }
    }
  };

  const displayTime = isPaused ? pausedTimeRef.current : currentTime;
  const displayTotal = totalTime || estimatedSeconds;

  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6">
      <p className="text-sm font-semibold text-textSecondary dark:text-dark-textSecondary mb-4 uppercase tracking-wide">
        🎧 {title}
      </p>

      {/* Voice selector */}
      {voices.length > 1 && (
        <div className="mb-3">
          <button
            onClick={() => setVoiceOpen(!voiceOpen)}
            className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            {selectedVoice?.name || "Select voice"}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${voiceOpen ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {voiceOpen && (
            <div className="mt-2 bg-surface dark:bg-dark-surface rounded-xl border border-primary/10 overflow-hidden shadow-sm">
              {voices.slice(0, 8).map((v, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedVoice(v); setVoiceOpen(false); stopSpeech(); }}
                  className={`w-full text-left px-3 py-2 text-xs hover:bg-primary/5 transition-colors ${selectedVoice?.name === v.name ? "text-primary font-semibold" : "text-textSecondary"}`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors shadow-md flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
            </svg>
          )}
        </button>

        <div className="flex-1 space-y-2">
          {/* Progress Bar */}
          <div
            className="h-2 bg-primary/20 dark:bg-primary/30 rounded-full overflow-hidden cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-primary/60 rounded-full transition-all group-hover:bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-textSecondary dark:text-dark-textSecondary">
            <span>{formatTime(displayTime)}</span>
            <span className="text-primary/70">~{formatTime(displayTotal)}</span>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-400 mt-2">{error}</p>
      )}

      {!error && !isPlaying && !isPaused && (
        <p className="text-xs text-textSecondary dark:text-dark-textSecondary mt-3 italic">
          narration speed adjusted for young listeners
        </p>
      )}
    </div>
  );
}
