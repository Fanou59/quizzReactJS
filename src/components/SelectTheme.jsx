export const SelectTheme = ({ themes, isSelected }) => {
  return (
    <select
      className="select select-info w-full max-w-xs capitalize"
      onChange={isSelected}
    >
      {themes.map((theme, index) => (
        <option key={index} value={theme.name}>
          {theme.name}
        </option>
      ))}
    </select>
  );
};
