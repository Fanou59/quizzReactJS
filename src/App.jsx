import { Quiz } from "./components/Quiz";
import { data } from "./data/data";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl text-white">
        Quizz Championship
      </h1>
      <Quiz quizData={data} />
    </div>
  );
}

export default App;
