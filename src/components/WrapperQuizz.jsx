import { useState } from "react";
import { CheckboxReponse } from "./checkboxResponse";
import { Question } from "./question";
import { Reponse } from "./reponse";

export function WrapperQuizz() {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      console.log("Checked");
    }
  };

  return (
    <>
      <Question />
      <div className="flex gap-3 items-center">
        <CheckboxReponse isChecked={checked} onChange={handleCheck} />
        <Reponse />
      </div>
    </>
  );
}
