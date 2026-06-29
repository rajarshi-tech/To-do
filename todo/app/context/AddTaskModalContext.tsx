"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type AddTaskModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTaskModalContext = createContext<AddTaskModalContextType | null>(null);

export  default function AddTaskModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <AddTaskModalContext.Provider
      value={{
        isOpen,
        setOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen((prev) => !prev),
      }}
    >
      {children}
    </AddTaskModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(AddTaskModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}