import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o título da tarefa"
        className="rounded-md border border-slate-400 px-4 py-2 outline-slate-400"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição da tarefa"
        className="rounded-md border border-slate-400 px-4 py-2 outline-slate-400"
      />
      <button
        onClick={() => {
          // verificar se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
