import { Quiz } from "./components/Quiz";
import { data } from "./data/data";
import { secondeGuerre } from "./data/secondeGuerre";
import { islam } from "./data/islam";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <Quiz quizData={islam} />
    </div>
  );
}

export default App;
