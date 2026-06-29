"use client";

import { Plus } from "lucide-react";
import { mPlusRounded1c } from "./lib/font";
import AddTask from "./components/AddTask";
import { useModal } from "./context/AddTaskModalContext";
export default function Home() {
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
      
      {isOpen && <AddTask/>}

      {/* main content */}
      <div className="flex gap-x-4 mt-12 mx-4">
        <div className="hidden md:block flex-2 self-start row-span-2 bg-secondary-2/30 backdrop-blur-md p-4 rounded-md border-2 border-border-strong">
          <div
            className="text-text-primary border-b border-b-primary-2 p-2 mt-2 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
          >
            Upcoming tasks
          </div>
          <div
            className="text-text-primary border-b border-b-primary-2 p-2 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
          >
            Completed tasks
          </div>
          <div
            className="text-text-primary p-2 mb-16 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
          >
            Deleted tasks
          </div>
        </div>
        <div className="flex-5">
          <div
            className={`${mPlusRounded1c.className} text-2xl md:text-4xl font-semibold ml-4 mb-8 mt-2`}
          >
            Welcome, Rajarshi!
          </div>
          <div className="bg-secondary-3/30 backdrop-blur-md p-4 rounded-md border-2 border-border-default">
            <p className="text-2xl font-medium">Tasks</p>
          </div>
        </div>
      </div>
    </>
  );
}
