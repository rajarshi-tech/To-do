"use client";

import { motion, useDragControls } from "motion/react";
import { CircleX } from "lucide-react";
import { useEditModal } from "../context/EditTaskModalContext";
import { useState } from "react";
import { useTask } from "../context/TaskContext";
export default function EditTask() {
  const controls = useDragControls();
  const { id, close, task, date, time } = useEditModal();
  const [taskTitle, setTaskTitle] = useState<string>(task);
  const [dateTime, setDateTime] = useState<string>(date + "T" + time);
	const { editTask } = useTask();

	const handleEdit = (): void => {
		editTask(id, {task: taskTitle, date: dateTime.split('T')[0], time: dateTime.split('T')[1]});
		close();
	}
  return (
    <>
      {/* overlay */}
      <div
        className={`z-40 fixed inset-0 backdrop-blur-sm transition-all duration-200`}
        onClick={() => close()}
      />
      <motion.div
        drag
        dragListener={false}
        dragMomentum={false}
        dragControls={controls}
        className={`z-50 left-1/2 top-1/2 -translate-x-1/2 w-[95vw] max-w-xl -translate-y-1/2 fixed bg-background-muted/30 rounded-3xl backdrop-blur-lg flex flex-col`}
      >
        <div
          onPointerDown={(e) => controls.start(e)}
          className="cursor-grab flex justify-end p-2 border-b border-solid border-text-muted/50"
        >
          <CircleX
            className="text-primary-3 h-6 w-6 cursor-pointer mt-1 mr-1"
            onClick={() => close()}
          />
        </div>

        <div className="flex flex-col p-2">
          <div className="flex flex-col md:flex-row items-center gap-3 p-2 mt-2">
            <input
              type="text"
              placeholder="Task"
              value={taskTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTaskTitle(e.target.value)
              }
              className="flex-1 w-full md:w-56 rounded-2xl bg-background/40 border border-text-muted/20
              px-4 py-2 text-text-primary placeholder:text-text-muted
              outline-none transition-all duration-200
              focus:border-primary-3 focus:ring-2 focus:ring-primary-3/20"
            />
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDateTime(e.target.value)
              }
              className="h-12
              w-full md:w-56
              rounded-2xl
              bg-background/40
              border border-text-muted/20
              px-4
              text-text-primary
              outline-none
              focus:border-primary-3
              focus:ring-2
              focus:ring-primary-3/20
              cursor-pointer"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-around gap-3 p-2 mt-1">
            <button
              className="bg-primary-3 text-text-primary border-0 rounded-2xl py-2 w-full md:w-28 cursor-pointer transition-all duration-200
              hover:bg-primary-3/60 hover:text-text-secondary hover:-translate-y-0.5 hover:scale-95
              active:bg-primary-3/80 active:translate-y-0 active:scale-100"
              onClick={() => handleEdit()}
            >
              Edit
            </button>
            <button
              className="bg-primary-3 text-text-primary border-0 rounded-2xl py-2 w-full md:w-28 cursor-pointer transition-all duration-200
              hover:bg-primary-3/60 hover:text-text-secondary hover:-translate-y-0.5 hover:scale-95
              active:bg-primary-3/80 active:translate-y-0 active:scale-100"
              onClick={() => close()}
            >
              Cancle
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
