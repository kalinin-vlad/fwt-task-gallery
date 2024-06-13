import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { DarkModeContextType, DarkModeProviderProps } from "../utils/types";

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode",
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode],
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
