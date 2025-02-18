import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onAddTaskClick() {
    // verificar se o titulo e a descrição estão preenchidos
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o título e a descrição da tarefa");
    }

    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow">
      <Input
        type="text"
        value={title}
        placeholder="Digite o título da tarefa"
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        value={description}
        placeholder="Digite a descrição da tarefa"
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={onAddTaskClick}
        className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
