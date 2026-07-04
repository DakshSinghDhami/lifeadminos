"use client";

import { useRef, useEffect, type ReactNode, type ElementType, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeContentProps = {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  onComplete?: () => void;
  as?: keyof React.JSX.IntrinsicElements;
};

export function FadeContent({
  children,
  blur = false,
  duration = 1000,
  ease = "power2.out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  onComplete,
  className = "",
  as: Tag = "div",
}: FadeContentProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startPct = (1 - threshold) * 100;
    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val);

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: "blur(0px)",
      duration: getSeconds(duration),
      ease: ease,
    });

    if (threshold >= 1) {
      tl.play();
    } else {
      const st = ScrollTrigger.create({
        trigger: el,
        scroller: window,
        start: `top ${startPct}%`,
        once: true,
        onEnter: () => tl.play(),
      });

      return () => {
        st.kill();
        tl.kill();
        gsap.killTweensOf(el);
      };
    }

    return () => {
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, []);

  const Comp = Tag as unknown as ElementType;

  return (
    <Comp
      ref={ref as never}
      className={className}
      style={
        {
          opacity: initialOpacity,
          filter: blur ? "blur(10px)" : "blur(0px)",
          willChange: "opacity, filter, transform",
        } as CSSProperties
      }
    >
      {children}
    </Comp>
  );
}
