import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px]">
        <h1 className="text-center text-3xl font-bold text-slate-100">
          Gerenciador de Tarefas
        </h1>

        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
