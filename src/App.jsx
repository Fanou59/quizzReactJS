import { Quiz } from "./components/Quiz";
import { data } from "./data/data";
import { secondeGuerre } from "./data/secondeGuerre";
import { islam } from "./data/islam";
import { nutrition } from "./data/nutrition";
import { sommeil } from "./data/sommeil";
import { sommeilV2 } from "./data/sommeilV2";
import { santeMentale } from "./data/santeMentale";
import { bienEtre } from "./data/bienEtre";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <Quiz quizData={santeMentale} />
    </div>
  );
}

export default App;
