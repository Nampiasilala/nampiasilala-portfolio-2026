// src/components/Footer.tsx
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil",      href: "#accueil" },
  { label: "À propos",     href: "#apropos" },
  { label: "Compétences",  href: "#competences" },
  { label: "Projets",      href: "#projets" },
  { label: "Contact",      href: "#contact" },
];

const SOCIAL_LINKS = [
  { Icon: Github,   href: "https://github.com/nampiasilala",         label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/nampiasilala",    label: "LinkedIn" },
  { Icon: Mail,     href: "mailto:nampiasilala@gmail.com",           label: "Email" },
];

const STACK = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: "#060a10",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Ligne lumineuse en haut */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48 opacity-60"
        style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* ── Colonne 1 : Signature ── */}
          <div className="flex flex-col gap-4">
            <a
              href="#accueil"
              className="font-black text-xl tracking-tight w-fit"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NAMPI.
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              Ingénieur STIC — Hardware & Software.
              <br />
              Basé à Antananarivo, disponible en remote.
            </p>
            {/* Réseaux */}
            <div className="flex gap-2 mt-1">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#475569",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(99,102,241,0.5)";
                    el.style.color = "#818cf8";
                    el.style.background = "rgba(99,102,241,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.color = "#475569";
                    el.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Colonne 2 : Navigation ── */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#334155" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#475569" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonne 3 : Stack ── */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#334155" }}
            >
              Construit avec
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#475569",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bas de page ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs flex items-center gap-1.5" style={{ color: "#334155" }}>
            © 2026 Nampiasilala — Conçu &amp; développé avec
            <Heart size={11} style={{ color: "#6366f1" }} />
            à Madagascar.
          </p>

          {/* Retour en haut */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs transition-all duration-200 px-3 py-1.5 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#475569",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(99,102,241,0.4)";
              el.style.color = "#818cf8";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.color = "#475569";
            }}
          >
            <ArrowUp size={12} />
            Retour en haut
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </footer>
  );
}