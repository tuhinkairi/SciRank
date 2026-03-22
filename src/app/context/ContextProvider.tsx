"use client";

import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

type AppContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  toggleMenu: () => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export default function ContextProvider({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      toggleMenu: () => setIsMenuOpen((current) => !current),
    }),
    [isMenuOpen],
  );

  return (
    <SessionProvider>
      <AppContext.Provider value={value}>
        <Toaster />
        {children}
      </AppContext.Provider>
    </SessionProvider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within ContextProvider.");
  }

  return context;
}
