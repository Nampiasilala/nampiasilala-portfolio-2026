// src/components/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Monitor, Cpu, Container, Palette, Layers } from "lucide-react";
import { useViewMode } from "../context/ViewModeContext";
import type { ViewMode } from "../context/ViewModeContext";

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

const VIEW_OPTIONS: { value: ViewMode; label: string; icon: React.ReactNode }[] = [
  { value: "all",          label: "Tout afficher",     icon: <Layers size={13} /> },
  { value: "dev",          label: "Développement",     icon: <Monitor size={13} /> },
  { value: "electronique", label: "Électronique",       icon: <Cpu size={13} /> },
  { value: "devops",       label: "DevOps",             icon: <Container size={13} /> },
  { value: "digital",      label: "Création digitale", icon: <Palette size={13} /> },
];

const NAV_ITEMS = [
  { id: "accueil",     label: "Accueil" },
  { id: "apropos",     label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets",     label: "Projets" },
  { id: "contact",     label: "Contact" },
];

export default function Navbar({ activeSection, isScrolled }: NavbarProps) {
  const { viewMode, setViewMode } = useViewMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentOption = VIEW_OPTIONS.find((o) => o.value === viewMode)!;

  const navBg = isScrolled
    ? "rgba(10,10,15,0.88)"
    : "transparent";
  const navBorder = isScrolled
    ? "1px solid rgba(255,255,255,0.06)"
    : "1px solid transparent";

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-400"
      style={{
        background: navBg,
        borderBottom: navBorder,
        backdropFilter: isScrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
      <motion.a
        href="#accueil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="shrink-0 block hover:opacity-80 transition-opacity"
      >
        <img 
          src="/logo.png" 
          alt="Logo Nampi"
          className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
        />
      </motion.a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#a5b4fc" : "#64748b",
                  }}
                  onMouseEnter={e => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#cbd5e1";
                  }}
                  onMouseLeave={e => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Sélecteur de vue */}
          <div className="relative shrink-0">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(99,102,241,0.3)",
                background: "rgba(99,102,241,0.07)",
                color: "#94a3b8",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(99,102,241,0.6)";
                (e.currentTarget as HTMLButtonElement).style.color = "#a5b4fc";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(99,102,241,0.3)";
                (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
              }}
            >
              <span style={{ color: "#818cf8" }}>{currentOption.icon}</span>
              <span className="hidden sm:inline">{currentOption.label}</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 rounded-2xl overflow-hidden"
                  style={{
                    background: "#0f1623",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  }}
                >
                  {VIEW_OPTIONS.map((opt) => {
                    const isSelected = viewMode === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => { setViewMode(opt.value); setDropdownOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150"
                        style={{
                          background: isSelected ? "rgba(99,102,241,0.12)" : "transparent",
                          color: isSelected ? "#a5b4fc" : "#64748b",
                          fontWeight: isSelected ? 600 : 400,
                        }}
                        onMouseEnter={e => {
                          if (!isSelected)
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                        }}
                        onMouseLeave={e => {
                          if (!isSelected)
                            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                      >
                        <span style={{ color: isSelected ? "#818cf8" : "#334155" }}>
                          {opt.icon}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </nav>
  );
}