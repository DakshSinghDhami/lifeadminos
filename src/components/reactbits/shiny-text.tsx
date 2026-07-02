"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * ShinyText — Animated shine sweep across text.
 * React Bits pattern: CSS keyframe with a translating pseudo-element.
 */
export function ShinyText({
  children,
  className,
  speed = 3,
  color = "#ffffff",
  shineColor = "rgba(255,255,255,0.45)",
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  color?: string;
  shineColor?: string;
}) {
  return (
    <span
      className={cn("rb-shiny", className)}
      style={
        {
          "--rb-shine-color": color,
          "--rb-shine-highlight": shineColor,
          "--rb-shine-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
