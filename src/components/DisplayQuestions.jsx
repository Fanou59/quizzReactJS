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
            <div
              className={`flex items-center mt-1 rounded-lg p-1 ${isSelected === index && !isCorrect ? "bg-red-300" : ""} ${isCorrect && option.isCorrect ? "bg-lime-400" : ""}`}
              key={index}
            >
              <input
                type="radio"
                className="radio"
                onChange={() => onChange(option.isCorrect, index)}
                checked={isSelected === index}
                readOnly
              />
              <label className="ml-2 text-gray-500">{option.text}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
