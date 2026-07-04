"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight — Radial gradient that follows the cursor across a container.
 * Used for hero/section backgrounds to add depth without images.
 */
export function Spotlight({
  children,
  className,
  color = "rgba(29, 158, 117, 0.15)",
  size = 500,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sl-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sl-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("rb-spotlight-bg relative", className)}
      style={
        {
          "--sl-color": color,
          "--sl-size": `${size}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
