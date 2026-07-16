"use client";

import Link from "next/link";
import { useState } from "react";
import { mPlusRounded1c } from "../lib/font";
import { UserRound, Menu } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* overlay (for floating menu) */}
      <div
        className={`z-40 fixed inset-0 ${(open || hamburger) ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => {
          setHamburger(false);
          setOpen(false);
        }}
      />

      {/* Main Header */}
      <div className="flex justify-between items-center bg-secondary-1/30 backdrop-blur-md sticky top-0 z-50">
        {/* Main Logo */}
        <div className="flex items-center">
          {/* Hamburger icon and floating menu container */}
          <div className="relative">
            {/* Hamburger icon */}
            <div
              className="md:hidden p-2 ml-2 transition-all duration-200 cursor-pointer
              hover:-translate-y-0.5
              active:translate-y-0 active:scale-105"
              onClick={() => {
              setHamburger(!hamburger);
              if(open) setOpen(false);
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
          <Link
            href="/"
            className={`${mPlusRounded1c.className} block cursor-pointer mx-1.5 my-2 font-black text-4xl p-2 text-primary-1`}
          >
            Todo
          </Link>
        </div>

        {/* user icon and floating menu container */}
        <div className="relative">
          {/* user icon */}
          <div
            className="bg-secondary-1/80 backdrop-blur-sm p-2 mx-4 rounded-full cursor-pointer transition-all duration-200
            hover:bg-secondary-1/50 hover:-translate-y-0.5 hover:scale-95
            active:bg-secondary-1/20 active:translate-y-0.5 active:scale-100"
            onClick={() => {
              setOpen((value) => !value);
              if(hamburger) setHamburger(false);
            }}
          >
            <UserRound className="w-6 h-6 text-primary-1" />
          </div>

          {/* floating menu */}
          <div
            className={`z-50 absolute right-1.5 w-44 top-full mt-3 bg-background-elevated border-2 border-border-strong rounded-3xl shadow-[0_8px_30px_rgba(109,94,252,0.15)] origin-top-right
            ${open ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-2 scale-90"}
            transition-all duration-200`}
          >
            <div
              className="text-text-primary mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
            >
              Sign out
            </div>
            <div
              className="text-text-primary mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
              onClick={handleToggle}
            >
              Change theme
            </div>
            <Link
              href="/about"
              className="text-text-primary block mx-2 my-1 rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
