import { useReducer } from "react";
import { SelectTheme } from "./components/SelectTheme";
import { Score } from "./components/Score";
import { themes } from "./data/index";
import { Button } from "./components/Button";
import { DisplayQuestions } from "./components/DisplayQuestions";
import { shuffleArray } from "./utils/functions";
import { ExplanationDisplay } from "./components/ExplanationDisplay";
import { disciplines } from "./data/disciplines";
import { ProgressBar } from "./components/ProgressBar";
import { reducer } from "./utils/reducer";

const initialState = {
  currentQuestion: 0,
  score: 0,
  selectedTheme: "",
  selectedDiscipline: "",
  showResults: false,
  shuffledOptions: [],
  selectedOption: null,
  isCorrect: null,
  showExplanation: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (e) => {
    dispatch({
      type: "SELECT_THEME",
      payload: { event: e, themes },
    });
  };

  const handleSelectDiscipline = (e) => {
    dispatch({
      type: "SELECT_DISCIPLINE",
      payload: { discipline: e.target.value, themes },
    });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleAnswer = (isCorrect) => {
    dispatch({ type: "ANSWER", payload: { isCorrect } });
  };

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const question = state.selectedTheme[state.currentQuestion];
  const progressValue = state.selectedTheme.length
    ? ((state.currentQuestion + 1) / state.selectedTheme.length) * 100
    : 0;
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <SelectTheme themes={disciplines} isSelected={handleSelectDiscipline}>
        une discipline
      </SelectTheme>
      {state.selectedDiscipline && (
        <SelectTheme themes={state.filteredThemes} isSelected={handleSelect}>
          un thème
        </SelectTheme>
      )}

      {state.showResults ? (
        <div className="flex flex-col items-center gap-5">
          {state.score >= state.selectedTheme.length / 2 ? (
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
              handleAnswer(isCorrect);
              dispatch({
                type: "SELECT_OPTION",
                payload: { selectedOption: index },
              });
            }}
            isSelected={state.selectedOption}
            shuffledOptions={state.shuffledOptions}
            isCorrect={state.isCorrect}
          />
          {state.showExplanation && question && (
            <ExplanationDisplay
              explanation={question.explanation}
              onNext={handleNextQuestion}
            />
          )}
        </>
      )}

      {/* <progress value={progressValue} max={state.selectedTheme.length} /> */}
      {state.selectedTheme && <ProgressBar value={progressValue} max={100} />}

      <Score score={state.score} quizData={state.selectedTheme.length} />
    </div>
  );
}

export default App;
