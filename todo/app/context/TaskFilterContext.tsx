"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import type { TaskStatus } from "../types/task";

type TaskFilter = TaskStatus | "all";

type TaskFilterContextType = {
  filter: TaskFilter;
  handleFilter: (filterValue: TaskFilter) => void;
};

const TaskFilterContext = createContext<TaskFilterContextType | null>(null);

export default function TaskFilterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<TaskFilter>("all");

  const handleFilter = (filterValue: TaskFilter) => {
    setFilter(filterValue);
  };

  return (
    <TaskFilterContext.Provider
      value={{
        filter,
        handleFilter
      }}
    >
      {children}
    </TaskFilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(TaskFilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a TaskFilterProvider");
  }

  return context;
}
