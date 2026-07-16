"use client"

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import type { Task, Tasks } from "../types/task";
import processTask from "../util/processTask";

type TaskContextType = {
  tasks: Tasks;
  loadTasks: () => void;
  addTask: (task: string, dateTime: string) => void;
  deleteTask: () => void;
  editTask: () => void;
  updateTaskState: () => void;
  clearDeletedTasks: () => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

const key: string = "task";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tasks>({tasks: []});

  const loadTasks = () => {
    const taskObjs: string | null = localStorage.getItem(key);
    if (taskObjs && typeof taskObjs !== null) {
      setTasks(JSON.parse(taskObjs));
    }
  };

  useEffect(() => {
    const loadTasksAsync = async () => {
      await loadTasks();
    };
    loadTasksAsync();
  }, []);

  const addTask = (task: string, dateTime: string): void => {
    const newTask: Task = processTask(task, dateTime);
    setTasks((prev) => {
      const updated = {
        tasks: [...prev.tasks, newTask],
      };

      localStorage.setItem(key, JSON.stringify(updated));

      return updated;
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        addTask,
        deleteTask: () => {},
        editTask: () => {},
        updateTaskState: () => {},
        clearDeletedTasks: () => {},
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
}
