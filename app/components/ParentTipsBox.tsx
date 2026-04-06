"use client";

interface ParentTipsBoxProps {
  tips: string;
}

export default function ParentTipsBox({ tips }: ParentTipsBoxProps) {
  return (
    <div className="bg-parentTips dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-success"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
        <span className="font-heading font-bold text-textPrimary dark:text-dark-textPrimary">
          For Parents
        </span>
      </div>
      <p className="text-textPrimary dark:text-dark-textPrimary text-sm leading-relaxed italic">
        {tips}
      </p>
    </div>
  );
}
