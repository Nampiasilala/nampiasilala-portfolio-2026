import { useContext } from "react";
import { ViewModeContext } from "../context/ViewModeContext";

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode doit être utilisé à l'intérieur d'un ViewModeProvider");
  }
  return context;
}