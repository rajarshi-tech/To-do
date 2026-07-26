"use client";

import Tasks from "@/app/components/Tasks";
import { mPlusRounded1c } from "@/app/lib/font";
import { useFilter } from "@/app/context/TaskFilterContext";

type MainContentProps = {
  name: string;
};

export default function MainContent({ name }: MainContentProps) {
  const { filter, handleFilter } = useFilter();

  return (
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
          Welcome, {name}!
        </div>
        <div className="bg-secondary-3/30 backdrop-blur-md p-4 rounded-md border-2 border-border-default">
          <div className="block text-2xl md:text-3xl font-medium border-b border-text-muted/50 pb-3.5 mb-2">
            Tasks
          </div>
          <div>
            <Tasks filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
}
