import { useState } from "react";
import { Score } from "./Score";
import { AnswerProposal } from "./AnswerProposal";

export const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="flex flex-col items-center gap-5">
        <Score score={score} quizData={quizData.length} />
        {score >= 2 ? (
          <span className="text-green-500">Bravo ! 🎉</span>
        ) : (
          <span className="text-red-500">Dommage ! 😢</span>
        )}
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={resetQuiz}
        >
          Retry
        </button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <>
      <div className="mx-auto rounded-lg bg-white shadow p-4 flex-grow">
        <h2 className="text-xl font-medium text-gray-900">
          {question.questionText}
        </h2>
        <div className="flex flex-col items-center">
          {question.options.map((option, index) => (
            <AnswerProposal
              key={index}
              onClick={() => handleAnswer(option.isCorrect)}
            >
              {option.text}
            </AnswerProposal>
          ))}
        </div>
      </div>
      <Score score={score} quizData={quizData.length} />
    </>
  );
};

export default Quiz;
