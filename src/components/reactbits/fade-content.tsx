"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * FadeContent — Element fades in with optional blur + translateY on scroll.
 * React Bits pattern: scroll-triggered reveal using IntersectionObserver.
 */
export function FadeContent({
  children,
  className,
  blur = false,
  duration = 0.8,
  delay = 0,
  y = 24,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  duration?: number;
  delay?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
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

  const Comp = Tag as unknown as ElementType;

  return (
    <Comp
      ref={ref as never}
      className={cn(visible ? "rb-fade-in" : "rb-fade-out", className)}
      style={
        {
          "--fade-duration": `${duration}s`,
          "--fade-delay": `${delay}s`,
          "--fade-y": `${y}px`,
          "--fade-blur": blur ? "8px" : "0px",
        } as CSSProperties
      }
    >
      {children}
    </Comp>
  );
}
