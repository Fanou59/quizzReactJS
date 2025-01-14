export const DisplayQuestions = ({
  question,
  onChange,
  isSelected,
  shuffledOptions,
  isCorrect,
}) => {
  if (!question || !shuffledOptions || shuffledOptions.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="mx-auto rounded-lg bg-white shadow p-4 flex-grow">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
        {question.questionText}
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {shuffledOptions.map((option, index) => (
            <label
              key={index}
              htmlFor={`option-${index}`}
              className={`flex items-center mt-1 rounded-lg p-1 cursor-pointer text-gray-500 ${
                isSelected === index && !isCorrect ? "bg-red-300" : ""
              } ${isCorrect && option.isCorrect ? "bg-lime-400" : ""}`}
            >
              <input
                id={`option-${index}`}
                type="radio"
                className="radio radio-primary"
                onChange={() => onChange(option.isCorrect, index)}
                checked={isSelected === index}
                disabled={isSelected !== null}
              />
              <span className="ml-2">{option.text}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
