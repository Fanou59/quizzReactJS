/* eslint-disable react/prop-types */
export function CheckboxReponse({ isChecked, onChange }) {
  return (
    <div className="form-control">
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  );
}
