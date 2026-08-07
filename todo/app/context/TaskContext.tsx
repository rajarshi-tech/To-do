"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import type { Tasks } from "../types/task";

import {
  loadTasks as fetchTasks,
  addTask as createTask,
  deleteTask as removeTask,
  toggleTaskStatus as toggleTask,
  clearDeletedTasks as clearTasks,
  editTask as updateTask,
} from "@/app/actions/task";

type TaskContextType = {
  tasks: Tasks;
  loadTasks: () => Promise<void>;
  addTask: (task: string, dateTime: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  editTask: (
    id: string,
    data: {
      task?: string;
      date?: string;
      time?: string;
    },
  ) => Promise<void>;
  toggleTaskStatus: (id: string) => Promise<void>;
  clearDeletedTasks: () => Promise<void>;
};

const TaskContext = createContext<TaskContextType | null>(null);

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tasks>([]);

  const loadTasks = async () => {
    const data = await fetchTasks();

    setTasks(data);
  };

  useEffect(() => {
    const loadTasksAsync = async () => {
      await loadTasks();
    };
    loadTasksAsync();
  }, []);

  const addTask = async (task: string, dateTime: string) => {
    await createTask(task, dateTime);

    await loadTasks();
  };

  const toggleTaskStatus = async (id: string) => {
    await toggleTask(id);

    await loadTasks();
  };

  const editTask = async (
    id: string,
    data: {
      task?: string;
      date?: string;
      time?: string;
    },
  ): Promise<void> => {
    await updateTask(id, data);

    await loadTasks();
  };

  const deleteTask = async (id: string) => {
    await removeTask(id);

    await loadTasks();
  };

  const clearDeletedTasks = async (): Promise<void> => {
    await clearTasks();

    await loadTasks();
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        addTask,
        deleteTask,
        editTask,
        toggleTaskStatus,
        clearDeletedTasks,
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
