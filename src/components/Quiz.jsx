import { useState, useEffect } from "react";
import { AnswerProposal } from "./AnswerProposal";
import { shuffleArray } from "../utils/functions";

export const Quiz = ({ quizData, handleAnswer, handleShowResults }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    handleAnswer(isCorrect);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setShuffledOptions(shuffleArray(quizData[nextQuestion].options));
    } else {
      handleShowResults();
    }
  };

  useEffect(() => {
    setCurrentQuestion(0);
    if (quizData.length > 0) {
      setShuffledOptions(shuffleArray(quizData[0].options));
    }
  }, [quizData]);

  if (!quizData || quizData.length === 0) {
    return <div>Loading...</div>;
  }

  const question = quizData[currentQuestion];

  if (!question || !question.options) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mx-auto rounded-lg bg-white shadow p-4 flex-grow">
        <h2 className="text-xl font-medium text-gray-900">
          {question.questionText}
        </h2>
        <div className="flex flex-col items-center">
          {shuffledOptions.map((option, index) => (
            <AnswerProposal
              key={index}
              onClick={() => handleNextQuestion(option.isCorrect)}
            >
              {option.text}
            </AnswerProposal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
