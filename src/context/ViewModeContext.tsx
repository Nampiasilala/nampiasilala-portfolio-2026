// src/context/viewModeContext.ts  ← fichier séparé pour le type et le hook
// (résout l'avertissement react-refresh/only-export-components)

// --- types.ts (ou viewModeTypes.ts) ---
// On sépare en 2 fichiers pour satisfaire react-refresh :
//   context/ViewModeContext.tsx  → Provider (composant)
//   context/useViewMode.ts       → hook + type exportés

// Mais si tu préfères UN seul fichier, ajoute ce commentaire en haut :
// eslint-disable-next-line react-refresh/only-export-components
// et garde tout ensemble. C'est juste un warning ESLint, pas une erreur.

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type ViewMode = "all" | "dev" | "electronique" | "devops" | "digital";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType>({
  viewMode: "all",
  setViewMode: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useViewMode() {
  return useContext(ViewModeContext);
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("all");
  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}