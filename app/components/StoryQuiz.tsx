"use client";

import { useState, useEffect } from "react";
import type { Story } from "../lib/stories";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

// Generate quiz questions based on story content
function generateQuiz(story: Story): QuizQuestion[] {
  // Map of generic quiz templates keyed by theme
  const quizzes: Record<string, QuizQuestion[]> = {
    "lunas-big-adventure": [
      {
        question: "What did Luna want to see up close?",
        options: ["The moon", "The stars", "The sunrise", "The clouds"],
        correctIndex: 1,
      },
      {
        question: "Who helped Luna feel brave enough to go into the forest?",
        options: ["A fox", "An owl named Oliver", "A rabbit", "A deer"],
        correctIndex: 1,
      },
      {
        question: "What lesson did Luna learn?",
        options: [
          "The forest is always scary",
          "Stars are boring",
          "Being brave means taking the first step, even when scared",
          "Nighttime is dangerous",
        ],
        correctIndex: 2,
      },
    ],
    "the-curious-kitten": [
      {
        question: "What did Maple see through the hole in the fence?",
        options: ["A garden", "A playground", "A pond", "A forest"],
        correctIndex: 0,
      },
      {
        question: "What was the white rabbit named?",
        options: ["Maple", "Sunny", "Oliver", "Lily"],
        correctIndex: 1,
      },
      {
        question: "What did Maple learn about curiosity?",
        options: [
          "Curiosity is always bad",
          "It's okay to be curious, but sometimes you need help finding the easy way",
          "You should never explore",
          "Gardens are dangerous",
        ],
        correctIndex: 1,
      },
    ],
    "the-friendly-dragon": [
      {
        question: "Why did everyone run away from Leo?",
        options: [
          "He was mean",
          "He looked scary even though he wasn't",
          "He breathed fire",
          "He stole food",
        ],
        correctIndex: 1,
      },
      {
        question: "What did Mia say that changed everything?",
        options: [
          "Leo was the scariest dragon ever",
          "Leo wasn't scary — he was just different",
          "Leo should leave the mountain",
          "Dragons don't exist",
        ],
        correctIndex: 1,
      },
      {
        question: "What did Leo learn?",
        options: [
          "Being different means being scary",
          "Villagers are always right",
          "Being different isn't the same as being scary",
          "Dragons should live alone",
        ],
        correctIndex: 2,
      },
    ],
    "the-sleepy-star": [
      {
        question: "Why was Twinkle so tired?",
        options: [
          "She stayed up too late",
          "She tried to shine all night without resting",
          "She was sick",
          "She played all day",
        ],
        correctIndex: 1,
      },
      {
        question: "What did the cloud tell Twinkle about resting?",
        options: [
          "Rest is lazy",
          "Rest is how we fill back up so we can glow again",
          "Stars don't need rest",
          "The moon will be mad",
        ],
        correctIndex: 1,
      },
      {
        question: "What happened when Twinkle woke up after resting?",
        options: [
          "She was still tired",
          "She couldn't shine anymore",
          "She glowed brighter than ever",
          "She fell asleep again",
        ],
        correctIndex: 2,
      },
    ],
    "the-lost-snowflake": [
      {
        question: "Why couldn't Snow land like the other snowflakes?",
        options: [
          "She was too cold",
          "She was made of extra warmth inside and melted",
          "She flew too high",
          "She was shy",
        ],
        correctIndex: 1,
      },
      {
        question: "How did the robin help Snow?",
        options: [
          "He flew her to the ground",
          "He carried her on his wing where she didn't melt",
          "He made it snow more",
          "He told her to try harder",
        ],
        correctIndex: 1,
      },
      {
        question: "What did Snow learn?",
        options: [
          "Being different means being left out",
          "Snowflakes can't travel",
          "Being different doesn't mean being left out",
          "Robins are the best flyers",
        ],
        correctIndex: 2,
      },
    ],
    "the-grumpy-garden": [
      {
        question: "Why was Oliver in a grumpy mood?",
        options: [
          "He didn't like gardening",
          "He was tired and had been working alone too hard",
          "The flowers were too pretty",
          "It was raining",
        ],
        correctIndex: 1,
      },
      {
        question: "Who came to help Oliver?",
        options: ["A bird", "A mouse named Mia", "A cat", "A frog"],
        correctIndex: 1,
      },
      {
        question: "What did Mia help Oliver realize?",
        options: [
          "The garden was doomed",
          "He should quit gardening",
          "He was just tired and needed company, not advice",
          "He was right to be grumpy",
        ],
        correctIndex: 2,
      },
    ],
    "the-whistle-of-the-wind": [
      {
        question: "Why was Lily afraid of the wind at night?",
        options: [
          "It was too cold",
          "It whistled and howled and sounded scary",
          "It made too much noise to sleep",
          "It blew her away",
        ],
        correctIndex: 1,
      },
      {
        question: "What did Grandmother help Lily hear in the wind?",
        options: [
          "Nothing special",
          "A song — the wind was playing music",
          "Thunder coming",
          "An owl hooting",
        ],
        correctIndex: 1,
      },
      {
        question: "What did Lily learn about scary sounds?",
        options: [
          "They're always dangerous",
          "The things that sound scary often have the most beautiful voices",
          "You should ignore them",
          "Close the window forever",
        ],
        correctIndex: 1,
      },
    ],
  };

  return quizzes[story.slug] || [
    {
      question: `What was the main lesson of "${story.title}"?`,
      options: [
        "The first option is always wrong",
        "The second option is correct",
        "This story taught us about being kind",
        "Every story has a happy ending",
      ],
      correctIndex: 2,
    },
    {
      question: `Who was the main character in "${story.title}"?`,
      options: [
        "A dragon",
        "A bunny",
        story.title.includes("Kitten")
          ? "A kitten"
          : story.title.includes("Star")
          ? "A star"
          : "A friend",
        "Someone new",
      ],
      correctIndex: 2,
    },
    {
      question: `How did the story end?`,
      options: [
        "Badly",
        "With everyone learning something important",
        "With no resolution",
        "With someone crying",
      ],
      correctIndex: 1,
    },
  ];
}

interface StoryQuizProps {
  story: Story;
}

export default function StoryQuiz({ story }: StoryQuizProps) {
  const questions = generateQuiz(story);
  const storageKey = `quiz-${story.slug}`;
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [alreadyTaken, setAlreadyTaken] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setAlreadyTaken(true);
      setSubmitted(true);
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setAnswers(parsed);
        }
      } catch {
        // ignore parse errors
      }
    }
  }, [storageKey]);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    localStorage.setItem(storageKey, JSON.stringify(answers));
    setAlreadyTaken(true);
  };

  const score = questions.reduce((acc, q, i) => {
    return answers[i] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#85B8CB"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <h3 className="font-heading text-lg font-bold text-textPrimary dark:text-dark-textPrimary">
            Story Quiz
          </h3>
        </div>
        {alreadyTaken && (
          <span className="text-xs bg-success/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
            Completed ✓
          </span>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, qi) => (
          <div
            key={qi}
            className={`rounded-xl p-5 border transition-all ${
              submitted
                ? answers[qi] === q.correctIndex
                  ? "border-success/40 bg-success/5"
                  : answers[qi] !== q.correctIndex
                  ? "border-red-400/40 bg-red-50 dark:bg-red-900/20"
                  : ""
                : answers[qi] !== null
                ? "border-primary/20 bg-surface dark:bg-dark-surface"
                : "border-primary/10 bg-surface dark:bg-dark-surface"
            }`}
          >
            <p className="text-sm font-semibold text-textPrimary dark:text-dark-textPrimary mb-3">
              {qi + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, oi) => {
                const isSelected = answers[qi] === oi;
                const isCorrect = q.correctIndex === oi;
                const showCorrect = submitted && isCorrect;
                const showWrong = submitted && isSelected && !isCorrect;

                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all border ${
                      showCorrect
                        ? "border-success/50 bg-success/10 text-green-700 dark:text-green-300"
                        : showWrong
                        ? "border-red-400/50 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                        : isSelected
                        ? "border-primary/50 bg-primary/5 text-textPrimary dark:text-dark-textPrimary"
                        : "border-primary/10 bg-background dark:bg-dark-background text-textSecondary dark:text-dark-textSecondary hover:border-primary/30"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                          showCorrect
                            ? "border-success/50 bg-success/20"
                            : showWrong
                            ? "border-red-400/50 bg-red-100 dark:bg-red-900/40"
                            : isSelected
                            ? "border-primary/50 bg-primary/20"
                            : "border-primary/20"
                        }`}
                      >
                        {showCorrect && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        {showWrong && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        )}
                        {!submitted && isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </span>
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      {submitted && (
        <div
          className={`rounded-xl p-5 text-center ${
            score === questions.length
              ? "bg-success/10 border border-success/30"
              : "bg-primary/10 border border-primary/20"
          }`}
        >
          {score === questions.length ? (
            <span className="text-3xl block mb-2">🎉</span>
          ) : score >= questions.length / 2 ? (
            <span className="text-3xl block mb-2">⭐</span>
          ) : (
            <span className="text-3xl block mb-2">📖</span>
          )}
          <p className="font-heading text-lg font-bold text-textPrimary dark:text-dark-textPrimary">
            You got {score}/{questions.length}!
          </p>
          <p className="text-sm text-textSecondary dark:text-dark-textSecondary mt-1">
            {score === questions.length
              ? "Perfect! You really understood the story!"
              : score >= questions.length / 2
              ? "Great job! You know this story well!"
              : "Nice try! Maybe read the story again?"}
          </p>
        </div>
      )}

      {/* Submit button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
            allAnswered
              ? "bg-primary hover:bg-primary/90 text-white shadow-md"
              : "bg-primary/20 text-primary/60 cursor-not-allowed"
          }`}
        >
          {allAnswered ? "Check My Answers" : "Answer all questions to submit"}
        </button>
      )}

      {submitted && (
        <button
          onClick={() => {
            setAnswers(new Array(questions.length).fill(null));
            setSubmitted(false);
            localStorage.removeItem(storageKey);
            setAlreadyTaken(false);
          }}
          className="w-full py-3 rounded-xl font-semibold text-sm bg-surface dark:bg-dark-surface border border-primary/20 text-textSecondary dark:text-dark-textSecondary hover:text-primary transition-all"
        >
          Take Quiz Again
        </button>
      )}
    </div>
  );
}
