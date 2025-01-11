import { shuffleArray } from "./functions";

export function reducer(state, action) {
  switch (action.type) {
    case "SELECT_THEME": {
      const selected = state.filteredThemes.find(
        (theme) => theme.name === action.payload.event.target.value
      );

      return {
        ...state,
        selectedTheme: selected.value,
        showResults: false,
        score: 0,
        currentQuestion: 0,
        shuffledOptions: shuffleArray(selected.value[0].options),
        selectedOption: null,
        isCorrect: null,
        showExplanation: false,
      };
    }
    case "SELECT_DISCIPLINE": {
      const filteredThemes = action.payload.themes.filter(
        (theme) => theme.discipline === action.payload.discipline
      );
      return {
        ...state,
        selectedDiscipline: action.payload.discipline,
        filteredThemes,
      };
    }
    case "NEXT_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      if (nextQuestion < state.selectedTheme.length) {
        return {
          ...state,
          currentQuestion: nextQuestion,
          shuffledOptions: shuffleArray(
            state.selectedTheme[nextQuestion].options
          ),
          selectedOption: null,
          isCorrect: null,
          showExplanation: false,
        };
      } else {
        return {
          ...state,
          showResults: true,
        };
      }
    }
    case "SELECT_OPTION": {
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
      };
    }
    case "ANSWER": {
      return {
        ...state,
        isCorrect: action.payload.isCorrect,
        showExplanation: true,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      };
    }
    case "SHOW_RESULTS": {
      return {
        ...state,
        showResults: true,
      };
    }
    case "RESET_QUIZ": {
      return {
        ...state,
        showResults: false,
        score: 0,
        currentQuestion: 0,
        selectedOption: null,
        isCorrect: null,
        showExplanation: false,
      };
    }
    default:
      return state;
  }
}
