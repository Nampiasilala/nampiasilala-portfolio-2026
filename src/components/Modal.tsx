// src/components/Modal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        {/* Panel */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto"
          style={{
            background: "#0d1420",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.08)",
          }}
          // Surcharge borderRadius pour desktop
          {...{} as object}
          ref={(el) => {
            if (el) {
              const mq = window.matchMedia("(min-width: 640px)");
              el.style.borderRadius = mq.matches ? "20px" : "24px 24px 0 0";
            }
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle mobile */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div
              className="w-10 h-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
          </div>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#64748b",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "rgba(239,68,68,0.12)";
              el.style.borderColor = "rgba(239,68,68,0.3)";
              el.style.color = "#f87171";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "rgba(255,255,255,0.05)";
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.color = "#64748b";
            }}
          >
            <X size={14} />
          </button>

          {/* Contenu */}
          <div className="p-5 sm:p-7">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}