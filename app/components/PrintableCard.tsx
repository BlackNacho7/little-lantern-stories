import { Pencil, PuzzlePiece, GameController } from "@phosphor-icons/react";

const typeIcons: Record<string, React.ReactNode> = {
  coloring: <Pencil size={20} />,
  activity: <PuzzlePiece size={20} />,
  game: <GameController size={20} />,
};

interface PrintableCardProps {
  title: string;
  type: string;
  url: string;
}

export default function PrintableCard({ title, type, url }: PrintableCardProps) {
  return (
    <div className="bg-surface border border-primary/20 rounded-xl p-4 flex items-center gap-4 hover:shadow-md hover:border-primary/40 transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        {typeIcons[type] || <Pencil size={20} />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-textPrimary truncate">
          {title}
        </p>
        <p className="text-xs text-textSecondary capitalize">{type}</p>
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
