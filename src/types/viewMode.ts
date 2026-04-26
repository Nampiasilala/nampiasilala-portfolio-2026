// src/types/viewMode.ts
export type ViewMode = 
  | "all" 
  | "dev" 
  | "electronique" 
  | "devops" 
  | "admin" 
  | "cyber" 
  | "reseaux" 
  | "digital";

export interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}