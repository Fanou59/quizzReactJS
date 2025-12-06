import { useReducer } from "react";
import { Button } from "./components/Button";
import { ContactUs } from "./components/ContactUs";
import { DisplayQuestions } from "./components/DisplayQuestions";
import { ExplanationDisplay } from "./components/ExplanationDisplay";
import { LeaveMeAFeedBack } from "./components/LeaveMeAFeedBack";
import { ProgressBar } from "./components/ProgressBar";
import { Score } from "./components/Score";
import { SelectTheme } from "./components/SelectTheme";
import { disciplines } from "./data/disciplines";
import { themes } from "./data/index";
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
  feedback: false,
  successMessage: false,
  isButtonDisabled: false,
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
  const handleFeedBack = () => {
    dispatch({ type: "FEEDBACK" });
  };

  const setSuccessMessage = (value) => {
    dispatch({ type: "SUCCESS_MESSAGE", payload: value });
    dispatch({ type: "DISABLE_BUTTON", payload: true });
    setTimeout(() => {
      dispatch({ type: "FEEDBACK", payload: false });
      dispatch({ type: "SUCCESS_MESSAGE", payload: false });
      dispatch({ type: "DISABLE_BUTTON", payload: false });
    }, 2000); // Délai de 2 secondes avant de cacher le composant
  };

  const question = state.selectedTheme[state.currentQuestion];

  const progressValue = state.selectedTheme.length
    ? (
        ((state.currentQuestion + 1) / state.selectedTheme.length) *
        100
      ).toFixed(0)
    : 0;

  const scorePercentage = state.selectedTheme.length
    ? (state.score / state.selectedTheme.length) * 100
    : 0;

  console.log("currentQuestion : ", state.currentQuestion);
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
          Quiz&apos; Collège
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
            {scorePercentage >= 65 ? (
              <span className="text-green-500 text-3xl">
                Bravo, je pense que tu maîtrises le sujet ! 🎉
              </span>
            ) : scorePercentage >= 50 ? (
              <span className="text-orange-500 text-3xl">
                Si tu refaisais le quiz ? 😊
              </span>
            ) : (
              <span className="text-red-500 text-3xl">
                Retravailles ton cours avant de refaire le quiz 😢
              </span>
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

        {state.selectedTheme && !state.showResults && (
          <ProgressBar value={progressValue} />
        )}

        <Score score={state.score} quizData={state.selectedTheme.length} />
        <LeaveMeAFeedBack handleClick={handleFeedBack} />
        {state.feedback && <ContactUs SuccessMessage={setSuccessMessage} />}
        {state.successMessage && (
          <div className="text-green-500 mt-4">
            Votre message a été envoyé avec succès !
          </div>
        )}
      </div>
    </>
  );
}

export default App;
