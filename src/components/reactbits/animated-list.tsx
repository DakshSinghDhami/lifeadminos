"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * AnimatedList — List items enter with a staggered animation.
 * React Bits pattern: parent uses IntersectionObserver, children get
 * staggered animation-delay via inline style.
 */
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

  const Comp = Tag as unknown as ElementType;

  return (
    <Comp
      ref={ref as never}
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
