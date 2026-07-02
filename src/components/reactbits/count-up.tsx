"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * CountUp — Animates a number from 0 to `to` when the element enters view.
 * React Bits pattern: rAF with easeOutCubic, single source of truth.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  trigger = "inview",
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  trigger?: "mount" | "inview";
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      const t0 = performance.now();
      let raf = 0;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / (duration * 1000));
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(from + (to - from) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    if (trigger === "mount") {
      return start();
    }

    if (typeof IntersectionObserver === "undefined") {
      return start();
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const stop = start();
          io.disconnect();
          return stop;
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, from, duration, trigger]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
