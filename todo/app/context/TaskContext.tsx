"use client";

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
  deleteTask: (id: string) => void;
  editTask: () => void;
  toggleTaskStatus: (id: string) => void;
  clearDeletedTasks: () => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

const key: string = "task";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tasks>({ tasks: [] });

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

  const toggleTaskStatus = (id: string): void => {
    setTasks(prev => {
      const updated: Tasks = {
        ...prev,
        tasks: prev.tasks.map(task =>
          task.id === id
            ? {
                ...task,
                status:
                  task.status === "pending"
                    ? "completed"
                    : "pending",
              }
            : task
        ),
      };

      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  };

  const clearDeletedTasks = (): void => {
    setTasks(prev => {
      const updated: Tasks = {
        ...prev,
        tasks: prev.tasks.filter(task => task.status !== "deleted")
      };

      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  }

  const deleteTask = (id: string): void => {
    setTasks(prev => {
      const updated: Tasks = {
        ...prev,
        tasks: prev.tasks.map(task =>
          task.id === id
            ? {
                ...task,
                status: "deleted"
              }
            : task
        )
      };

      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        addTask,
        deleteTask,
        editTask: () => {},
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
