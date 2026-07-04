"use client";

import { useEffect, useState, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const units: string[] =
    animateBy === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Tag
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
