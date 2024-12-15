import { useState, useEffect } from "react";
import { AnswerProposal } from "./AnswerProposal";

export const Quiz = ({ quizData, handleAnswer, handleShowResults }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = (isCorrect) => {
    handleAnswer(isCorrect);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleShowResults();
    }
  };

  useEffect(() => {
    setCurrentQuestion(0);
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
          {question.options.map((option, index) => (
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
