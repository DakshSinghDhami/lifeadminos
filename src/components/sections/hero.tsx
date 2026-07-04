"use client";

import { useRef, useCallback } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlurText } from "@/components/reactbits-official/blur-text";
import { FadeContent } from "@/components/reactbits-official/fade-content";
import { Magnet } from "@/components/reactbits-official/magnet";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!bgRef.current) return;
    const { left, top, width, height } = bgRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const moveX = (x - 0.5) * 12;
    const moveY = (y - 0.5) * 12;
    bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!bgRef.current) return;
    bgRef.current.style.transform = "translate(0px, 0px)";
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-label="Hero"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "translate(0px, 0px)",
          transition: "transform 0.15s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/herobg.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,13,0.55) 0%, rgba(2,6,13,0.30) 35%, rgba(2,6,13,0.65) 75%, rgba(2,6,13,0.92) 100%), linear-gradient(90deg, rgba(2,6,13,0.45) 0%, rgba(2,6,13,0.10) 50%, rgba(2,6,13,0.30) 100%)",
        }}
      />

      <div className="relative z-10 container-x pt-28 sm:pt-32">
        <FadeContent blur duration={400} delay={0} threshold={1} className="inline-block">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 backdrop-blur-sm px-3 py-1.5 text-[11.5px] font-medium text-white/90">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-turquoise pulse-dot"
            />
            Private beta · Barcelona
          </span>
        </FadeContent>
      </div>

      <div className="relative z-10 container-x">
        <div className="flex min-h-[calc(100svh-180px)] items-end pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-2xl lg:max-w-3xl w-full">
            <FadeContent blur={false} duration={400} delay={50} threshold={1}>
              <p className="t-eyebrow text-turquoise">
                <span aria-hidden="true" className="opacity-60">01 —</span> Personal Finance OS
              </p>
            </FadeContent>

            <h1 className="mt-5 t-display-xl text-white text-balance text-[clamp(2.5rem,5.8vw,5rem)]">
              <BlurText
                text="Stop leaking money to"
                as="span"
                delay={20}
                stepDuration={0.1}
                direction="top"
              />
              <br />
              <BlurText
                text="forgotten subscriptions."
                as="span"
                delay={20}
                stepDuration={0.12}
                direction="top"
              />
            </h1>

            <FadeContent blur={false} duration={350} delay={100} threshold={1}>
              <p className="mt-6 text-[16px] sm:text-[17.5px] text-white/85 max-w-xl text-pretty">
                LifeAdmin OS reads your bank account, finds every recurring
                charge, flags price increases, and cancels what you no longer
                use. Read-only. Bank-agnostic.{" "}
                <span className="text-white">Money never moves.</span>
              </p>
            </FadeContent>

            <FadeContent blur={false} duration={300} delay={150} threshold={1}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Magnet magnetStrength={16} padding={80} className="w-full sm:w-auto">
                  <Link
                    href="#cta"
                    className="btn btn-turquoise h-[50px] px-6 text-[14.5px] sm:text-[15px] w-full sm:w-auto inline-flex"
                  >
                    Connect your bank
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Magnet>
                <Magnet magnetStrength={20} padding={60} className="w-full sm:w-auto">
                  <Link
                    href="#how"
                    className="btn btn-ghost h-[50px] px-5 text-[14.5px] sm:text-[15px] w-full sm:w-auto text-white border border-white/30 hover:border-white/60 hover:bg-white/10 inline-flex"
                  >
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    See a 60s walkthrough
                  </Link>
                </Magnet>
              </div>
            </FadeContent>

            <FadeContent blur={false} duration={250} delay={200} threshold={1}>
              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 t-mono text-[11.5px] text-white/75">
                {[
                  "No card",
                  "60-second setup",
                  "PSD2 open banking",
                  "EU-hosted",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-turquoise"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeContent>
          </div>
        </div>
      </div>

      <FadeContent blur={false} duration={400} delay={300} threshold={1}>
        <div className="hidden lg:flex absolute bottom-8 right-[max(2rem,calc((100vw-1280px)/2+2rem))] z-10 items-center gap-3 text-[11.5px] text-white/75">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-turquoise pulse-dot"
          />
          <span className="t-mono uppercase tracking-wider">
            Live · 3 price changes flagged in the last hour
          </span>
        </div>
      </FadeContent>
    </section>
  );
}
