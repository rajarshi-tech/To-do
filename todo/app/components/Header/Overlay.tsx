"use client";

import { useHeader } from "@/app/context/HeaderContext";

export default function Overlay() {
  const { userMenuClose, hamburgerClose, userMenu, hamburger } = useHeader();

  return (
    <div
      className={`z-40 fixed inset-0 ${userMenu || hamburger ? "pointer-events-auto" : "pointer-events-none"}`}
      onClick={() => {
        hamburgerClose();
        userMenuClose();
      }}
    />
  );
}
