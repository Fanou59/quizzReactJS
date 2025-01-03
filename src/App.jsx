import { useState } from "react";
import { SelectTheme } from "./components/SelectTheme";
import { Score } from "./components/Score";
import { themes } from "./data/index";
import { Button } from "./components/Button";
import { DisplayQuestions } from "./components/DisplayQuestions";
import { shuffleArray } from "./utils/functions";
import { ExplanationDisplay } from "./components/ExplanationDisplay";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (e) => {
    const selected = themes.find((theme) => theme.name === e.target.value);
    setSelectedTheme(selected.value);
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
    setShuffledOptions(shuffleArray(selected.value[0].options));
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
  };
  const handleNextQuestion = (isCorrect) => {
    handleAnswer(isCorrect);
    setIsCorrect(isCorrect);
    setShowExplanation(true);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const handleShowResults = () => {
    setShowResults(true);
  };
  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    setShowExplanation(false);
    if (nextQuestion < selectedTheme.length) {
      setCurrentQuestion(nextQuestion);
      setShuffledOptions(shuffleArray(selectedTheme[nextQuestion].options));
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      handleShowResults();
    }
  };

  const resetQuiz = () => {
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
  };
  const question = selectedTheme[currentQuestion];

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <SelectTheme themes={themes} isSelected={handleSelect} />
      {showResults ? (
        <div className="flex flex-col items-center gap-5">
          {score >= selectedTheme.length / 2 ? (
            <span className="text-green-500 text-3xl">Bravo ! 🎉</span>
          ) : (
            <span className="text-red-500 text-3xl">Dommage ! 😢</span>
          )}
          <Button onClick={resetQuiz}>Retry ?</Button>
        </div>
      ) : (
        <>
          <DisplayQuestions
            question={question}
            onChange={(isCorrect, index) => {
              handleNextQuestion(isCorrect);
              setSelectedOption(index);
            }}
            isSelected={selectedOption}
            shuffledOptions={shuffledOptions}
            isCorrect={isCorrect}
          />
          {showExplanation && (
            <ExplanationDisplay
              explanation={question.explanation}
              onNext={handleNext}
            />
          )}
        </>
      )}
      <Score score={score} quizData={selectedTheme.length} />
    </div>
  );
}

export default App;
