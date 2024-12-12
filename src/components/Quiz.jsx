/* eslint-disable react/prop-types */
import { useState } from "react";

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

  if (showResults) {
    return (
      <h2>
        Votre score : {score} / {quizData.length}
      </h2>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div>
      <h2 className="text-xl font-bold">{question.questionText}</h2>
      <div className="flex flex-col items-center">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
