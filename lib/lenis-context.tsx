"use client";

import { createContext, useContext, type ReactNode } from "react";
import type Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollLocked: boolean;
  setScrollLocked: (locked: boolean) => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollLocked: false,
  setScrollLocked: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({
  children,
  lenis,
  scrollLocked,
  setScrollLocked,
}: {
  children: ReactNode;
  lenis: Lenis | null;
  scrollLocked: boolean;
  setScrollLocked: (locked: boolean) => void;
}) {
  return (
    <LenisContext.Provider value={{ lenis, scrollLocked, setScrollLocked }}>
      {children}
    </LenisContext.Provider>
  );
}
