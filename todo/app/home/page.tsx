"use client";

import { Plus } from "lucide-react";
import { mPlusRounded1c } from "../lib/font";
import AddTask from "../components/AddTask";
import { useModal } from "../context/AddTaskModalContext";
import Tasks from "../components/Tasks";
import { useState } from "react";
import { useSession } from "next-auth/react"

export default function Home() {
  const { toggle, isOpen } = useModal();
  const [ filter, setFilter ] = useState<string>("");

  const { data: session } = useSession()

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

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
            className="cursor-pointer text-text-primary border-b border-b-primary-2 p-2 mt-2 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
            onClick={() => handleFilter("all")}
          >
            All tasks
          </div>
          <div
            className="cursor-pointer text-text-primary border-b border-b-primary-2 p-2 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
            onClick={() => handleFilter("pending")}
          >
            Upcoming tasks
          </div>
          <div
            className="cursor-pointer text-text-primary border-b border-b-primary-2 p-2 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
            onClick={() => handleFilter("completed")}
          >
            Completed tasks
          </div>
          <div
            className="cursor-pointer text-text-primary p-2 mb-16 transition-all duration-200
            hover:translate-y-0.5 hover:bg-background-muted/30 hover:scale-95
            active:bg-primary-2/5 active:text-text-secondary active:translate-y-0.5 active:scale-100"
            onClick={() => handleFilter("deleted")}
          >
            Deleted tasks
          </div>
        </div>
        <div className="flex-5">
          <div
            className={`${mPlusRounded1c.className} text-2xl md:text-4xl font-semibold mb-8 mt-2`}
          >
            Welcome, {session?.user?.name || "Guest"}!
          </div>
          <div className="bg-secondary-3/30 backdrop-blur-md p-4 rounded-md border-2 border-border-default">
            <div className="block text-2xl md:text-3xl font-medium border-b border-text-muted/50 pb-3.5 mb-2">Tasks</div>
            <div>
              <Tasks filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
