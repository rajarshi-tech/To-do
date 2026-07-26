"use client";

import AddTask from "@/app/components/AddTask";
import { useModal } from "@/app/context/AddTaskModalContext";
import { Plus } from "lucide-react";


export default function AddTaskComponent() {
  const { toggle, isOpen } = useModal();

  return (
    <>
      {/* add task icon */}
      <div
        className="z-30 fixed bottom-28 rounded-full right-8 p-2 bg-secondary-3/30 backdrop-blur-md cursor-pointer
        hover:scale-95 hover:bg-secondary-3/20
        active:scale-105 active:bg-secondary-3/40"
        onClick={() => toggle()}
      >
        <Plus className="w-8 h-8 text-primary-3" />
      </div>

      {isOpen && <AddTask />}
    </>
  );
}
