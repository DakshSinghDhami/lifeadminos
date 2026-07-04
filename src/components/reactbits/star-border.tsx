"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * StarBorder — Animated rotating gradient border.
 * Uses a conic-gradient ::before that rotates, masked to show only the border.
 * Used to draw attention to featured elements (e.g. Pro pricing card).
 */
export function StarBorder({
  children,
  className,
  color = "#1D9E75",
  speed = 4,
  thickness = 1,
  borderRadius = 8,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  speed?: number;
  thickness?: number;
  borderRadius?: number;
}) {
  return (
    <div
      className={cn("rb-star-border relative", className)}
      style={
        {
          "--star-color": color,
          "--star-speed": `${speed}s`,
          "--star-thickness": `${thickness}px`,
          "--star-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="rb-star-border-ring pointer-events-none absolute inset-0 rounded-[inherit]"
      />
      <div className="rb-star-border-content relative rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
