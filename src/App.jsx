import { Quiz } from "./components/Quiz";
import { data } from "./data/data";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl">
        Quizz Championship
      </h1>
      <div className="card bg-primary text-primary-content w-fit">
        <div className="card-body">
          <Quiz quizData={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
