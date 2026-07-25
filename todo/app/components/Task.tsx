import {
  CalendarDays,
  Dot,
  Circle,
  CircleSlash2,
  CircleCheck,
  Trash2,
  Pencil,
} from "lucide-react";
import type { Task } from "../types/task";
import { formatDate, formatTime } from "../util/Formatter";
import { useTask } from "../context/TaskContext";

type TaskProps = {
  task: Task;
};
//Add tooltips
export default function Task({ task }: TaskProps) {
  const { toggleTaskStatus, deleteTask } = useTask();

  const handleTaskStatus = (): void => {
    toggleTaskStatus(task.id);
  };

  const handleDelete = (): void => {
    deleteTask(task.id);
  }

  return (
    <div className="my-1 grid grid-cols-[minmax(0,1fr)_auto] items-center p-4 rounded-2xl bg-primary-3/10">
      <div className="flex items-center min-w-0">
        <div className="cursor-pointer shrink-0" onClick={() => handleTaskStatus()}>
          {task.status === "pending" ? (
            <Circle className="h-5 w-5" />
          ) : task.status === "completed" ? (
            <CircleCheck className="h-5 w-5" />
          ) : (
            <CircleSlash2 className="h-5 w-5" />
          )}
        </div>
        <span
          className={`block ml-4 truncate ${task.status === "completed" || task.status === "deleted" ? "line-through text-text-secondary" : ""}`}
        >
          {task.task}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-44 flex items-center gap-0 whitespace-nowrap">
          <CalendarDays className="h-4 w-4" />
          {formatDate(task.date)}
          <Dot className="h-4 w-4" />
          {formatTime(task.time)}
        </div>
        <div className="rounded-full border px-2 py-0.5 text-xs w-19 align-middle text-center leading-4">
          {task.status}
        </div>
        <div className="flex items-center gap-1">
          <Trash2 className="h-4 w-4 cursor-pointer" onClick={() => handleDelete()} />
          <span>|</span>
          <Pencil className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
