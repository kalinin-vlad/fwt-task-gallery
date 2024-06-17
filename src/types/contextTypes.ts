import { ReactNode } from "react";

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: ReactNode;
}
