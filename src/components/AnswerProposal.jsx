export const AnswerProposal = ({ children, onClick }) => {
  return (
    <button
      className="mt-1 text-gray-500 hover:bg-zinc-200 hover:rounded-xl hover:px-4 active:bg-zinc-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
