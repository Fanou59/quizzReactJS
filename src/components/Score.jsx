export const Score = ({ score, quizData }) => {
  return (
    <h2 className="text-xl font-medium text-center mb-2 rounded-xl bg-lime-400 text-white py-3 px-3">
      Votre score : {score} / {quizData}
    </h2>
  );
};
