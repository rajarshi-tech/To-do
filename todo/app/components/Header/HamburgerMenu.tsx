"use client";

import { Menu } from "lucide-react";
import { useHeader } from "@/app/context/HeaderContext";

export default function HamburgerMenu() {
  const { userMenu, hamburger, userMenuClose, hamburgerToggle } = useHeader();

  return (
    <div className="relative">
      {/* Hamburger icon */}
      <div
        className="md:hidden p-2 ml-2 transition-all duration-200 cursor-pointer
            hover:-translate-y-0.5
            active:translate-y-0 active:scale-105"
        onClick={() => {
          hamburgerToggle();
          if (userMenu) userMenuClose();
        }}
      >
        <Menu className="h-6 w-6 text-primary-1" />
      </div>
      {/* floating menu */}
      <div
        className={`z-50 absolute left-1.5 w-44 top-full mt-3 bg-background-elevated border-2 border-border-strong rounded-3xl shadow-[0_8px_30px_rgba(109,94,252,0.15)] origin-top-right
            ${hamburger ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-2 scale-90"}
            transition-all duration-200`}
      >
        <div
          className="text-text-primary mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
        >
          Upcoming tasks
        </div>
        <div
          className="text-text-primary mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
        >
          Completed tasks
        </div>
        <div
          className="text-text-primary mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
        >
          Deleted tasks
        </div>
      </div>
    </div>
  );
}
