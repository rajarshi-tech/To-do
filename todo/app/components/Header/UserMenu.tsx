"use client";

import { useHeader } from "../../context/HeaderContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SignOut from "../sign-out";
import { UserRound } from "lucide-react";

type UserMenuProps = {
  image: string;
  name: string;
};

export default function UserMenu({ image, name }: UserMenuProps) {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const { hamburgerClose, userMenuToggle, userMenu, hamburger } = useHeader();

  return (
    <>
      {/* user icon and floating menu container */}
      <div className="relative">
        {/* user icon */}
        <div
          className="bg-secondary-1/80 backdrop-blur-sm p-2 mx-4 rounded-full cursor-pointer transition-all duration-200
            hover:bg-secondary-1/50 hover:-translate-y-0.5 hover:scale-95
            active:bg-secondary-1/20 active:translate-y-0.5 active:scale-100"
          onClick={() => {
            userMenuToggle();
            if (hamburger) hamburgerClose();
          }}
        >
          <div>
            {image !== "" ? (
              <Image
                src={image}
                alt={name || "User Avatar"}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <UserRound className="w-6 h-6 text-primary-1" />
            )}
          </div>
        </div>

        {/* floating menu */}
        <div
          className={`z-50 absolute right-1.5 w-44 top-full mt-3 bg-background-elevated border-2 border-border-strong rounded-3xl shadow-[0_8px_30px_rgba(109,94,252,0.15)] origin-top-right
            ${userMenu ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-2 scale-90"}
            transition-all duration-200`}
        >
          <SignOut
            formClassName="mx-2 my-1"
            buttonClassName="w-full text-left text-text-primary rounded-2xl px-4 py-2.5 cursor-pointer bg-secondary-1/60 transition-all duration-150
              hover:bg-secondary-1/40 hover:translate-x-1 hover:scale-[1.02] hover:text-text-secondary
              active:scale-95 active:bg-primary-1/20"
          >
            Sign out
          </SignOut>
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
    </>
  );
}
