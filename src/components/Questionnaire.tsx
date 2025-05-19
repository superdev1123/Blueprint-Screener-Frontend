import React, { useCallback, useMemo, useState } from "react";
import type { Screener, UserAnswer } from "../types/screener";
import { submitAnswers } from "../api/screener";

interface Props {
  screener: Screener;
  onComplete: (results: string[]) => void;
}

const Questionnaire: React.FC<Props> = ({ screener, onComplete }) => {
  const section = screener.content.sections[0];
  const questions = section.questions;
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = questions[currentIndex];

  // Calculate the progress percentage based on the current question index
  const progressPercent = useMemo(
    () => (currentIndex / totalQuestions) * 100,
    [currentIndex, totalQuestions]
  );

  // Handle answer selection and progress to the next question
  // If it's the last question, submit the answers
  // call the onComplete callback with the results
  const handleAnswer = useCallback(
    async (value: number) => {
      const newAnswers = [
        ...answers,
        { question_id: currentQuestion.question_id, value },
      ];
      setAnswers(newAnswers);

      if (currentIndex + 1 < totalQuestions) {
        setCurrentIndex(currentIndex + 1);
      } else {
        try {
          const data = await submitAnswers(newAnswers);
          onComplete(data.results);
        } catch (err) {
          console.error("Failed to submit answers:", err);
        }
      }
    },
    [answers, currentIndex, currentQuestion, onComplete, totalQuestions]
  );

  return (
    <div className="max-w-md p-6 bg-white rounded shadow-md m-4 text-gray-700">
      <h1 className="text-xl font-bold mb-2">{screener.display_name}</h1>
      <p className="mb-4">{section.title}</p>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm mt-1">
          Question {currentIndex + 1} of {totalQuestions}
        </p>
      </div>

      <h2 className="mb-4 font-semibold h-14">{currentQuestion.title}</h2>

      <div className="flex flex-col space-y-3">
        {section.answers.map((answer) => (
          <button
            key={answer.value}
            onClick={() => handleAnswer(answer.value)}
            className="text-gray-700 py-2 rounded hover:bg-gray-100 !bg-blue-100"
          >
            {answer.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
