import { Button } from "./Button";

export const ExplanationDisplay = ({ explanation, onNext }) => {
  return (
    <div className="mx-auto rounded-lg bg-white shadow p-4 flex-grow">
      <p className="text-gray-700">{explanation}</p>
      <div className="flex justify-end mt-4">
        <Button onClick={onNext}>Suivant</Button>
      </div>
    </div>
  );
};
