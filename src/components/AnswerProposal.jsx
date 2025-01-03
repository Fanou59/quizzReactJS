//todo ajouter une props className pour changer le style du label si la réponse est correcte ou incorrecte
export const AnswerProposal = ({ children, onChange, isSelected }) => {
  return (
    <div className="flex items-center mt-1">
      <input
        type="radio"
        className="radio"
        onChange={onChange}
        checked={isSelected}
        readOnly
      />
      <label className="ml-2 text-gray-500">{children}</label>
    </div>
  );
};
