"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * GradientText — Animated gradient sweep across live text.
 * React Bits pattern: animated background-position on a gradient bg-clip text.
 */
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
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    const t = setTimeout(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      io.disconnect();
    }, 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <span
      ref={ref}
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
