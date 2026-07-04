"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function AnimatedList({
  children,
  className,
  stagger = 0.08,
  duration = 0.6,
  delay = 0,
  as: Tag = "ul",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const Comp = Tag as unknown as ElementType;

  return (
    <Comp
      className={cn(className)}
      style={
        {
          "--list-stagger": `${stagger}s`,
          "--list-duration": `${duration}s`,
          "--list-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{ className?: string; style?: CSSProperties }>;
        return cloneElement(el, {
          className: cn(
            el.props.className,
            "rb-list-item",
            visible ? "rb-list-in" : "rb-list-out"
          ),
          style: {
            ...el.props.style,
            animationDelay: `calc(${i} * var(--list-stagger) + var(--list-delay))`,
          },
        });
      })}
    </Comp>
  );
}
