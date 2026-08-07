import {
  CalendarDays,
  Circle,
  CircleCheck,
  CircleSlash2,
  Trash2,
  Pencil,
} from "lucide-react";

import type { Task } from "../types/task";
import { formatDate, formatTime } from "../util/Formatter";
import { useTask } from "../context/TaskContext";
import { useEditModal } from "../context/EditTaskModalContext";

type TaskProps = {
  task: Task;
};

export default function TaskMobile({ task }: TaskProps) {
  const { toggleTaskStatus, deleteTask } = useTask();
  const { open } = useEditModal();

  return (
    <div
      className="
    w-full
    rounded-2xl
    border
    border-border
    bg-card
    p-4
    space-y-3
  "
    >
      {/* Row 1 - Task */}
      <div className="flex items-center gap-2 mb-1">
        <div
          className="cursor-pointer pt-1 shrink-0"
          onClick={() => toggleTaskStatus(task.id)}
        >
          {task.status === "pending" ? (
            <Circle className="h-5 w-5" />
          ) : task.status === "completed" ? (
            <CircleCheck className="h-5 w-5" />
          ) : (
            <CircleSlash2 className="h-5 w-5" />
          )}
        </div>

        <div
          className={`
        flex-1
        min-w-0
        text-base
        leading-6
        wrap-break-word
        line-clamp-3
        ${
          task.status === "completed" || task.status === "deleted"
            ? "line-through text-text-secondary"
            : ""
        }
      `}
        >
          {task.task}
        </div>
      </div>

      {/* Row 2 - Date time */}
      <div
        className="
    flex
    items-center
    gap-2
    text-sm
    text-text-secondary
    mt-1
  "
      >
        <CalendarDays className="h-4 w-4" />

        <span>
          {formatDate(task.date)} • {formatTime(task.time)}
        </span>
      </div>

      {/* Row 3 - Status + actions */}
      <div
        className="
    flex
    items-center
    justify-between
    mt-0.5
  "
      >
        <span
          className="
        rounded-full
        border
        border-border
        px-3
        py-1
        text-xs
        capitalize
      "
        >
          {task.status.toString().toUpperCase()}
        </span>

        <div className="flex items-center gap-4">
          <Trash2
            className="h-5 w-5 cursor-pointer"
            onClick={() => deleteTask(task.id)}
          />
            |
          <Pencil
            className="h-5 w-5 cursor-pointer"
            onClick={() => open(task.id, task.task, task.date, task.time)}
          />
        </div>
      </div>
    </div>
  );
}
