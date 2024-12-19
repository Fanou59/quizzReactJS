// Todo refaire le composant en utilisant un bouton radio pour la réponse

// export const AnswerProposal = ({ children, onClick }) => {
//   return (
//     <button
//       className="mt-1 text-gray-500 hover:bg-zinc-200 hover:rounded-xl hover:px-4 active:bg-zinc-300"
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

export const AnswerProposal = ({ children, onChange, isSelected }) => {
  return (
    <div className="flex items-center mt-1">
      <input
        type="radio"
        className="form-radio h-5 w-5 text-zinc-500"
        onChange={onChange}
        checked={isSelected}
        readOnly
      />
      <label className="ml-2 text-gray-500">{children}</label>
    </div>
  );
};
