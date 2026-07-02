"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";
import { ShinyText } from "@/components/reactbits/shiny-text";

const benefits = [
  "No credit card",
  "60-second setup",
  "Read-only access",
  "Cancel anytime",
];

export function CTA() {
  return (
    <section
      id="cta"
      className="py-24 sm:py-32 dark-section relative overflow-hidden"
      style={{ background: "#02060d" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(29,158,117,0.15), transparent 60%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end">
          <FadeContent blur duration={0.7} y={20} as="div">
            <p className="t-eyebrow text-turquoise">
              <span aria-hidden="true" className="opacity-60">10 —</span> Get started
            </p>
            <h2 className="mt-4 t-display-xl text-white text-[clamp(2.5rem,5.5vw,4.5rem)] text-balance">
              Take back control
              <br />
              <span className="text-white/40">
                of your{" "}
                <ShinyText
                  color="rgba(29,158,117,1)"
                  shineColor="rgba(255,255,255,0.6)"
                  speed={4}
                >
                  money
                </ShinyText>
                .
              </span>
            </h2>
            <p className="mt-6 text-[16.5px] text-white/65 max-w-lg text-pretty">
              Connect your bank in 60 seconds. Find subscriptions you forgot
              you were paying for. Cancel the ones you don&apos;t use. Start
              with 10 free.
            </p>
          </FadeContent>

          <FadeContent
            blur
            duration={0.6}
            delay={0.2}
            y={16}
            as="div"
          >
            <div className="flex flex-col items-stretch gap-4">
              <Link
                href="#top"
                className="btn btn-turquoise h-[56px] px-7 text-[15.5px] w-full"
              >
                Connect your bank
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#how"
                className="btn btn-ghost h-[56px] px-6 text-[15.5px] w-full text-white border border-white/20 hover:border-white/40"
              >
                See the walkthrough first
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 t-mono text-[11px] uppercase tracking-wider text-white/45">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span className="text-white/20 mr-1" aria-hidden="true">·</span>
                  )}
                  {b}
                </li>
              ))}
            </ul>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
