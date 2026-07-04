"use client";

import { useEffect, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const Comp = Tag as unknown as ElementType;

  return (
    <Comp
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
