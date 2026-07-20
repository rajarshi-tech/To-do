import { CalendarDays, Dot, Circle, CircleSlash2, CircleCheck, Trash2, Pencil } from "lucide-react";
import type { Task } from "../types/task";
import { formatDate, formatTime } from "../util/Formatter";
import "./temp fix/temp.css";

type TaskProps = {
  task: Task;
};

export default function Task({ task }: TaskProps) {
  
  return (
    <div className="flex justify-between items-center p-4 rounded-2xl bg-primary-2">
      <div className="flex items-center flex-1">
        <div className="cursor-pointer">
          {task.status === "pending" ? <Circle /> : task.status === "completed" ? <CircleCheck/ > : <CircleSlash2 />}
        </div>
        <span className={`block ml-4 ${task.status === "completed" || task.status === "deleted" ? "lineth text-text-secondary" : ""}`}>{task.task}</span>
      </div>
      <div className="flex flex-1">
        <div className="flex justify-around items-center">
          <CalendarDays />
          {formatDate(task.date)}
          <Dot />
          {formatTime(task.time)}
        </div>
        <div className="ml-4 rounded-2xl border-text-primary border-2 border-solid px1 align-middle py-1.5">{task.status}</div>
        <div className="flex ml-4">
          <Trash2 />
          <span className="block mx-2">|</span>
          <Pencil />
        </div>
      </div>
    </div>
  );
}
