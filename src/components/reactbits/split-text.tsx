"use client";

import { useEffect, useState, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const chars = Array.from(text);

  return (
    <Tag
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
