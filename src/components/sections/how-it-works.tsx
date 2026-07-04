"use client";

import { Link2, ScanSearch, Bell, CheckCircle2 } from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";
import { CountUp } from "@/components/reactbits/count-up";
import { TiltedCard } from "@/components/reactbits/tilted-card";
import { SpotlightCard } from "@/components/reactbits/spotlight-card";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Connect your bank",
    body: "Securely link any account through PSD2 open banking. Read-only access — money never moves, ever.",
    time: "~ 60 seconds",
  },
  {
    n: "02",
    icon: ScanSearch,
    title: "We detect subscriptions",
    body: "Our engine scans your transactions and finds recurring charges, including sneaky annual ones you forgot existed.",
    time: "~ 30 seconds",
  },
  {
    n: "03",
    icon: Bell,
    title: "Get alerts, take action",
    body: "We flag price increases, contract changes, and renewals. One tap to cancel or renegotiate — we guide you through it.",
    time: "Ongoing",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Watch savings grow",
    body: "Your financial score improves as you cut waste. Most users save €200–€500 in their first 90 days.",
    time: "Ongoing",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32 bg-paper">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-end">
          <FadeContent blur duration={0.7} y={20} as="div">
            <p className="t-eyebrow text-ink/45">
              <span aria-hidden="true" className="opacity-50">05 —</span> How it works
            </p>
            <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
              From &ldquo;I think I overspend&rdquo; to{" "}
              <span className="t-serif-italic">&ldquo;control&rdquo;</span>.
            </h2>
            <p className="mt-5 text-[16px] text-muted max-w-md text-pretty">
              Four steps. No spreadsheet uploads. No manual entry. The bank
              connection does the work.
            </p>
          </FadeContent>

          {/* Proof callout — uses CountUp + TiltedCard + SpotlightCard */}
          <FadeContent
            duration={0.6}
            delay={0.15}
            y={16}
            as="div"
            className="lg:ml-auto max-w-sm w-full"
          >
            <TiltedCard max={5} perspective={900}>
              <SpotlightCard
                className="rounded-[6px] border border-line bg-paper-2 p-6"
                spotlightColor="rgba(29,158,117,0.10)"
                size={300}
              >
                <p className="t-mono text-[10.5px] uppercase tracking-wider text-ink/45">
                  Average first-90-day outcome
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="t-display-lg text-[42px] sm:text-[48px] font-semibold text-navy leading-none tabular-nums">
                    €<CountUp to={342} duration={1.4} />
                  </span>
                  <span className="text-[14px] text-ink/55">saved</span>
                </div>
                <div className="mt-3 h-px bg-line" />
                <ul className="mt-3 space-y-1.5 t-mono text-[12px] text-ink/60">
                  <li className="flex items-baseline justify-between">
                    <span>Subscriptions cancelled</span>
                    <span className="text-navy">3.4 avg</span>
                  </li>
                  <li className="flex items-baseline justify-between">
                    <span>Price drops renegotiated</span>
                    <span className="text-navy">1.8 avg</span>
                  </li>
                  <li className="flex items-baseline justify-between">
                    <span>Time to first save</span>
                    <span className="text-navy">11 days</span>
                  </li>
                </ul>
              </SpotlightCard>
            </TiltedCard>
          </FadeContent>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {steps.map((s, i) => (
            <FadeContent
              as="li"
              key={s.n}
              duration={0.55}
              delay={0.1 + i * 0.08}
              y={16}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  aria-hidden="true"
                  className="t-mono text-[11px] text-ink/40 tabular-nums"
                >
                  STEP {s.n}
                </span>
                <span className="t-mono text-[10.5px] text-ink/35 uppercase tracking-wider">
                  {s.time}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[5px] bg-navy text-white"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 t-display-md text-[16px] sm:text-[17px] text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] text-muted leading-relaxed text-pretty">
                {s.body}
              </p>
            </FadeContent>
          ))}
        </ol>
      </div>
    </section>
  );
}
