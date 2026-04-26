import { useState } from "react";
import type { ReactNode } from "react";
import type { ViewMode } from "../types/viewMode";
import { ViewModeContext } from "./ViewModeContext";

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("all");
  
  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}