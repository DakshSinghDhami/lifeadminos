"use client";

import type { ReactNode, CSSProperties } from "react";

type StarBorderProps = {
  as?: "div" | "span" | "button";
  className?: string;
  children?: ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
  borderRadius?: number;
  style?: CSSProperties;
};

export function StarBorder({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  borderRadius,
  children,
  style,
}: StarBorderProps) {
  return (
    <Component
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        padding: `${thickness}px 0`,
        borderRadius: borderRadius ? `${borderRadius}px` : undefined,
        ...style,
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite alternate`,
        }}
      />
      <div className="relative z-1">{children}</div>
    </Component>
  );
}
