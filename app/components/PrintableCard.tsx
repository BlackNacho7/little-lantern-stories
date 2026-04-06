"use client";

const typeIcons: Record<string, React.ReactNode> = {
  coloring: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  activity: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  game: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  ),
};

interface PrintableCardProps {
  title: string;
  type: string;
  url: string;
}

export default function PrintableCard({ title, type, url }: PrintableCardProps) {
  return (
    <div className="bg-surface dark:bg-dark-surface border border-primary/20 dark:border-primary/30 rounded-xl p-4 flex items-center gap-4 hover:shadow-md hover:border-primary/40 transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        {typeIcons[type] || typeIcons.coloring}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-textPrimary dark:text-dark-textPrimary truncate">
          {title}
        </p>
        <p className="text-xs text-textSecondary dark:text-dark-textSecondary capitalize">{type}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
      >
        Download
      </a>
    </div>
  );
}
