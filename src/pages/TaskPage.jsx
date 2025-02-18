import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="relative mb-6 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 bottom-0 left-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>

          <Title> Detalhes da Tarefa</Title>
        </div>

        <div className="rounded-md bg-slate-400 p-4">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
