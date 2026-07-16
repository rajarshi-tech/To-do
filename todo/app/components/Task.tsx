import { CalendarDays } from "lucide-react";
import type { Task } from "../types/task";
import { formatDate, formatTime } from "../util/Formatter";

type TaskProps = {
  task: Task;
};

export default function Task({ task }: TaskProps) {
  return (
    <div className="group rounded-2xl border border-border-default bg-background-elevated/60 backdrop-blur-md p-4 transition-all duration-200 hover:border-primary-2 hover:shadow-lg hover:shadow-primary-1/10 mt-2">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-text-primary">{task.task}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium capitalize
        ${
          task.status === "completed"
            ? "bg-green-500/15 text-green-400"
            : task.status === "pending"
              ? "bg-amber-500/15 text-amber-300"
              : "bg-red-500/15 text-red-400"
        }`}
        >
          {task.status}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
        <CalendarDays size={16} />
        <span>
          {formatDate(task.date)} • {formatTime(task.time)}
        </span>
      </div>
    </div>
  );
}
