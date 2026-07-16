import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import type { Task, Tasks } from "../types/task";
import processTask from "../util/processTask";

type TaskContextType = {
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

  const [ tasks, setTasks ] = useState<Tasks>({
    tasks: [{
      id: crypto.randomUUID(),
      task: "example",
      date: "2026-07-16",
      time: "21:20",
      status: "pending"
    }]
  });

  const loadTasks = () => {
    const taskObjs: string | null = localStorage.getItem(key);
    if (taskObjs && typeof taskObjs !== null) {
        setTasks(JSON.parse(taskObjs));
    }
  }

  const saveTasks = (newTasks: Tasks) => {
    setTasks(newTasks);
    localStorage.setItem(key, JSON.stringify(newTasks));
  }

  useEffect(() => {
    const loadTasksAsync = async () => {
      await loadTasks();
    };
    loadTasksAsync();
  }, []);

  const addTask = (task: string, dateTime: string): void => {
    const newTask: Task = processTask(task, dateTime);
    const newTasks: Tasks = {
      tasks: [...tasks.tasks, newTask]
    };
    saveTasks(newTasks);    
  }
  return (
    <TaskContext.Provider value={{
      loadTasks,
      addTask,
      deleteTask: () => {},
      editTask: () => {},
      updateTaskState: () => {},
      clearDeletedTasks: () => {},
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a ModalProvider");
  }

  return context;
}