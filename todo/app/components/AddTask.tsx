"use client";

import { motion, useDragControls } from "motion/react";
import { CircleX } from "lucide-react";
import { useModal } from "../context/AddTaskModalContext";
export default function AddTask() {
  const controls = useDragControls();
  const { close, isOpen } = useModal();

  return (
    <>
      {/* overlay */}
      <div
        className={`z-40 absolute inset-0 backdrop-blur-sm transition-all duration-200
        ${isOpen ? "opacity-100 pointer-events-auto" : 'opacity-0 pointer-events-none'}`}
        onClick={() => close()}
      />
      <motion.div
        drag
        dragListener={false}
        dragMomentum={false}
        dragControls={controls}
        className="z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-96 bg-background-muted/30 p-4 rounded-3xl backdrop-blur-lg flex flex-col"
      >
        <div onPointerDown={(e) => controls.start(e)} className="cursor-grab flex justify-end">
          <CircleX className="text-primary-3 h-6 w-6 cursor-pointer" onClick={() => close()}/>
        </div>

        <div>Content</div>
      </motion.div>
    </>
  );
}
