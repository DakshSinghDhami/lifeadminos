"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * BlurText — Text starts blurred then crisply resolves.
 * React Bits pattern: word-by-word stagger using CSS animations.
 * Pure CSS, no JS per frame.
 */
export function BlurText({
  text,
  as: Tag = "h1",
  className,
  stagger = 0.045,
  duration = 0.9,
  delay = 0,
  animateBy = "word",
  className_word,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  animateBy?: "word" | "char";
  className_word?: string;
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

  const units: string[] =
    animateBy === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Tag
      ref={ref as never}
      className={cn("inline-block", className)}
      style={
        {
          "--blur-duration": `${duration}s`,
          "--blur-stagger": `${stagger}s`,
          "--blur-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {units.map((u, i) =>
        /\s+/.test(u) ? (
          <span key={i} className="whitespace-pre">
            {u}
          </span>
        ) : (
          <span
            key={i}
            className={cn(
              "inline-block",
              className_word,
              visible ? "rb-blur-in" : "rb-blur-out"
            )}
            style={{
              animationDelay: `calc(${i} * var(--blur-stagger) + var(--blur-delay))`,
            }}
          >
            {u}
          </span>
        )
      )}
    </Tag>
  );
}
