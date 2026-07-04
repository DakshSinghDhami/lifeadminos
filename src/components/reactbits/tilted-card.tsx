"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * TiltedCard — 3D card that tilts on mouse move.
 * Pure CSS transforms, GPU-friendly. Reduces to flat under
 * prefers-reduced-motion (handled by globals.css).
 */
export function TiltedCard({
  children,
  className,
  max = 8,
  perspective = 1000,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  perspective?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max;
    const ry = (x - 0.5) * max;
    el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0) rotateY(0)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("rb-tilt transition-transform duration-200 ease-out", className)}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(${perspective}px) rotateX(0) rotateY(0)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
