import { CheckboxReponse } from "./checkboxResponse";
import { Question } from "./question";
import { Reponse } from "./reponse";

export function WrapperQuizz() {
  return (
    <>
      <Question />
      <div className="flex gap-3 items-center">
        <CheckboxReponse />
        <Reponse />
      </div>
    </>
  );
}
