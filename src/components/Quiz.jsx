import { useState, useEffect } from "react";
import { AnswerProposal } from "./AnswerProposal";
import { shuffleArray } from "../utils/functions";

export const Quiz = ({ quizData, handleAnswer, handleShowResults }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextQuestion = (isCorrect) => {
    handleAnswer(isCorrect);
    const nextQuestion = currentQuestion + 1;
    setTimeout(() => {
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setShuffledOptions(shuffleArray(quizData[nextQuestion].options));
        setSelectedOption(null);
      } else {
        handleShowResults();
      }
    }, 1000);
  };

  useEffect(() => {
    setCurrentQuestion(0);
    if (quizData.length > 0) {
      setShuffledOptions(shuffleArray(quizData[0].options));
      setSelectedOption(null);
    }
  }, [quizData]);

  if (!quizData || quizData.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const question = quizData[currentQuestion];

  if (!question || !question.options) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mx-auto rounded-lg bg-white shadow p-4 flex-grow">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
          {question.questionText}
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col">
            {shuffledOptions.map((option, index) => (
              <AnswerProposal
                key={index}
                onChange={() => {
                  setSelectedOption(index);
                  handleNextQuestion(option.isCorrect);
                }}
                isSelected={selectedOption === index}
              >
                {option.text}
              </AnswerProposal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
