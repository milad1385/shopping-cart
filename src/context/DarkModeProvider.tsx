"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { createContext, useContext, useEffect } from "react";

type TDarkThemeProvider = {
  children: React.ReactNode;
};

type TDarkModeContext = {
  isDark?: Boolean;
  toggleTheme: () => void;
};

const DarkModeContext = createContext({} as TDarkModeContext);

function DarkModeProvider({ children }: TDarkThemeProvider) {
  const [isDark, setIsDark] = useLocalStorage<Boolean>("isDarkMode", false);

  const toggleTheme = () => {
    setIsDark((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDark]);
  return (
    <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("Context was used outside provider");
  }

  return context;
}

export default DarkModeProvider;
