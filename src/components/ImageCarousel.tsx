// src/components/ImageCarousel.tsx
import { useState, useEffect, useCallback, useRef } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  accentColor?: string;
  autoSlideInterval?: number; // ms, default 3500
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
}

export default function ImageCarousel({
  images,
  alt,
  accentColor = "#6366f1",
  autoSlideInterval = 1000,
  className = "",
  imageClassName = "",
  style,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-slide — pause on hover
  useEffect(() => {
    if (total <= 1) return;
    if (isHovered) return;

    timerRef.current = setInterval(goNext, autoSlideInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, isHovered, autoSlideInterval, total]);

  if (total === 0) return null;

  // Single image — no controls needed
  if (total === 1) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={alt}
          className={`w-full h-full object-cover ${imageClassName}`}
          style={{ filter: "brightness(0.8)" }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full shrink-0">
            <img
              src={src}
              alt={`${alt} — ${i + 1}`}
              className={`w-full h-full object-cover ${imageClassName}`}
              style={{ filter: "brightness(0.8)" }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0d1420 0%, transparent 55%)",
        }}
      />

      {/* Arrow — prev */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Image précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 30,
          height: 30,
          background: "rgba(0,0,0,0.45)",
          border: `1px solid ${accentColor}44`,
          color: "#e2e8f0",
          backdropFilter: "blur(4px)",
          opacity: isHovered ? 1 : 0.5,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = `${accentColor}33`;
          (e.currentTarget as HTMLButtonElement).style.borderColor = `${accentColor}99`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.45)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = `${accentColor}44`;
        }}
      >
        <ChevronLeft size={15} />
      </button>

      {/* Arrow — next */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Image suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 30,
          height: 30,
          background: "rgba(0,0,0,0.45)",
          border: `1px solid ${accentColor}44`,
          color: "#e2e8f0",
          backdropFilter: "blur(4px)",
          opacity: isHovered ? 1 : 0.5,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = `${accentColor}33`;
          (e.currentTarget as HTMLButtonElement).style.borderColor = `${accentColor}99`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.45)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = `${accentColor}44`;
        }}
      >
        <ChevronRight size={15} />
      </button>

      {/* Counter badge */}
      <div
        className="absolute bottom-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full"
        style={{
          background: "rgba(0,0,0,0.55)",
          border: `1px solid ${accentColor}33`,
          color: "#94a3b8",
          backdropFilter: "blur(4px)",
        }}
      >
        {current + 1} / {total}
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full transition-all duration-500 ease-in-out"
          style={{
            width: `${((current + 1) / total) * 100}%`,
            background: accentColor,
          }}
        />
      </div>
    </div>
  );
}