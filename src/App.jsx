import { useState } from "react";
import { Quiz } from "./components/Quiz";
import { SelectTheme } from "./components/SelectTheme";
import { Score } from "./components/Score";
import { themes } from "./data/index";

function App() {
  const [score, setScore] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (e) => {
    const selected = themes.find((theme) => theme.name === e.target.value);
    setSelectedTheme(selected.value);
    setShowResults(false);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const handleShowResults = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <SelectTheme
        themes={themes}
        isSelected={handleSelect}
      />
      {showResults ? (
        <div className="flex flex-col items-center gap-5">
          {score >= 2 ? (
            <span className="text-green-500 text-3xl">Bravo ! 🎉</span>
          ) : (
            <span className="text-red-500 text-3xl">Dommage ! 😢</span>
          )}
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={resetQuiz}
          >
            Retry ?
          </button>
        </div>
      ) : (
        <Quiz
          quizData={selectedTheme}
          handleAnswer={handleAnswer}
          handleShowResults={handleShowResults}
        />
      )}
      <Score score={score} quizData={selectedTheme.length} />
    </div>
  );
}

export default App;
