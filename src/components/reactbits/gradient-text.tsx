"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
  colors = ["#1D9E75", "#3157C8", "#0F2240", "#1D9E75"],
  speed = 6,
}: {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <span
      className={cn("rb-gradient-text", className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        animation: visible
          ? `rb-gradient-pan ${speed}s linear infinite`
          : "none",
      }}
    >
      {children}
    </span>
  );
}
