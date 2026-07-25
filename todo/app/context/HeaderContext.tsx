"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type HeaderContextType = {
  userMenu: boolean;
  hamburger: boolean;

  userMenuOpen: () => void;
  hamburgerOpen: () => void;

  userMenuClose: () => void;
  hamburgerClose: () => void;

  userMenuToggle: () => void;
  hamburgerToggle: () => void;

  setUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderContext = createContext<HeaderContextType | null>(null);

export  default function HeaderProvider({ children }: { children: ReactNode }) {
  const [userMenu, setUserMenu] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        userMenu,
        hamburger,

        userMenuOpen: () => setUserMenu(true),
        hamburgerOpen: () => setHamburger(true),

        userMenuClose: () => setUserMenu(false),
        hamburgerClose: () => setHamburger(false),

        userMenuToggle: () => setUserMenu((prev) => !prev),
        hamburgerToggle: () => setHamburger((prev) => !prev),

        setUserMenu,
        setHamburger
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHamburger must be used within a HeaderProvider");
  }

  return context;
}