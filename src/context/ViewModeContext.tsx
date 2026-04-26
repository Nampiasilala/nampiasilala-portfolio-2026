/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ViewMode, ViewModeContextType } from "../types/viewMode";

// 1. Création du contexte
export const ViewModeContext = createContext<ViewModeContextType>({
  viewMode: "all",
  setViewMode: () => {},
});

// 2. Création du Provider (Exporté)
export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("all");
  
  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

// 3. Hook personnalisé (Exporté)
export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode doit être utilisé dans un ViewModeProvider");
  }
  return context;
};