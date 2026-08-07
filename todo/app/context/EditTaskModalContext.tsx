"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type EditTaskModalContextType = {
  id: string;
  task: string;
  date: string;
  time: string;
  isOpen: boolean;
  open: (id: string, task: string, date: string, time: string) => void;
  close: () => void;
  toggle: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditTaskModalContext = createContext<EditTaskModalContextType | null>(null);

export  default function EditTaskModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const open = (id: string, task: string, date: string, time: string): void => {
    setOpen(true);
    setId(id);
    setTask(task);
    setDate(date);
    setTime(time);
  }
  const close = (): void => {
    setId("");
    setTask("");
    setDate("");
    setTime("");
  }
  return (
    <EditTaskModalContext.Provider
      value={{
        id,
        task,
        date,
        time,
        isOpen,
        setOpen,
        open,
        close: () => setOpen(false),
        toggle: () => setOpen((prev) => !prev),
      }}
    >
      {children}
    </EditTaskModalContext.Provider>
  );
}

export function useEditModal() {
  const context = useContext(EditTaskModalContext);

  if (!context) {
    throw new Error("useEditModal must be used within a ModalProvider");
  }

  return context;
}