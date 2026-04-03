interface DiscussionQuestionsProps {
  questions: string[];
}

export default function DiscussionQuestions({ questions }: DiscussionQuestionsProps) {
  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div
          key={i}
          className="flex gap-4 bg-surface rounded-xl p-4 border border-primary/10"
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
            {i + 1}
          </span>
          <p className="text-textPrimary leading-relaxed pt-1">{q}</p>
        </div>
      ))}
    </div>
  );
}
