"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * SplitText — Splits text into characters and animates them in.
 * React Bits pattern: per-char stagger with 3D rotation + fade.
 */
export function SplitText({
  text,
  as: Tag = "p",
  className,
  stagger = 0.025,
  duration = 0.7,
  delay = 0,
  className_char,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  className_char?: string;
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

  const chars = Array.from(text);

  return (
    <Tag
      ref={ref as never}
      className={cn(className)}
      style={
        {
          "--split-stagger": `${stagger}s`,
          "--split-duration": `${duration}s`,
          "--split-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {chars.map((c, i) =>
        c === " " ? (
          <span key={i} className="inline-block whitespace-pre">
            {" "}
          </span>
        ) : (
          <span
            key={i}
            className={cn(
              "inline-block",
              className_char,
              visible ? "rb-split-in" : "rb-split-out"
            )}
            style={{
              animationDelay: `calc(${i} * var(--split-stagger) + var(--split-delay))`,
            }}
          >
            {c}
          </span>
        )
      )}
    </Tag>
  );
}
