interface VocabularyItem {
  word: string;
  definition: string;
  sentence: string;
}

interface VocabularyListProps {
  words: VocabularyItem[];
}

export default function VocabularyList({ words }: VocabularyListProps) {
  return (
    <div className="space-y-4">
      {words.map((item, i) => (
        <div
          key={i}
          className="bg-surface border border-primary/10 rounded-xl p-4 pl-5"
        >
          <p className="font-heading text-lg font-bold text-primary mb-1">
            {item.word}
          </p>
          <p className="text-sm text-textPrimary mb-2">{item.definition}</p>
          <p className="text-sm italic text-textSecondary">
            &ldquo;{item.sentence}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}
