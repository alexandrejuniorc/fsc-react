import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar React",
      description: "Estudar React para criar aplicações web",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar Tailwind CSS",
      description: "Estudar Tailwind CSS para estilizar aplicações web",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar TypeScript",
      description:
        "Estudar TypeScript para adicionar tipagem em aplicações web",
      isCompleted: false,
    },
  ]);

  function onRemoveTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar essa tarefa
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // Não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-center text-3xl font-bold text-slate-100">
          Gerenciador de Tarefas
        </h1>

        <AddTask {...{ onAddTaskSubmit }} />
        <Tasks {...{ tasks, onTaskClick, onRemoveTask }} />
      </div>
    </div>
  );
}

export default App;
