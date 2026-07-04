"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — A card with a radial spotlight that follows the cursor.
 * Uses CSS custom properties (--x, --y) updated on mousemove, with a
 * ::before overlay. Zero JS per frame (just style writes on mousemove).
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(29, 158, 117, 0.12)",
  size = 280,
  style,
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  size?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("rb-spotlight group relative", className)}
      style={
        {
          "--spot-color": spotlightColor,
          "--spot-size": `${size}px`,
          ...style,
        } as CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="rb-spotlight-overlay pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
