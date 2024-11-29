import { WrapperQuizz } from "./components/wrapperQuizz";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold uppercase tracking-widest text-2xl">
        Quizz Championship
      </h1>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <WrapperQuizz />
        </div>
      </div>
    </div>
  );
}

export default App;
