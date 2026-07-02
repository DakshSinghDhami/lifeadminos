"use client";

import {
  Radar,
  Bell,
  Ban,
  PieChart,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";

const features = [
  {
    icon: Radar,
    n: "01",
    title: "Automatic detection",
    body: "We read your bank transactions securely and identify every recurring charge — including the ones you forgot about.",
    accent: "turquoise" as const,
  },
  {
    icon: PieChart,
    n: "02",
    title: "Visual dashboard",
    body: "Every active subscription, current price, payment history, and category — at a glance. No spreadsheets, no jargon.",
    accent: "azure" as const,
  },
  {
    icon: Bell,
    n: "03",
    title: "Smart alerts",
    body: "Instant notifications on price increases, contract changes, and upcoming annual renewals — before they cost you.",
    accent: "fawn" as const,
  },
  {
    icon: Ban,
    n: "04",
    title: "Simplified cancellation",
    body: "One-click cancellation or step-by-step guidance for services that make it hard to leave. We do the awkward part.",
    accent: "navy" as const,
  },
  {
    icon: Gauge,
    n: "05",
    title: "Financial analysis",
    body: "Spending by category, percentage of income on subscriptions, and a personal score that updates as you improve.",
    accent: "turquoise" as const,
  },
  {
    icon: ShieldCheck,
    n: "06",
    title: "Read-only & bank-agnostic",
    body: "Read-only access at all times — money is never moved. Works with any bank, anywhere PSD2 applies.",
    accent: "azure" as const,
  },
];

const accentMap = {
  turquoise: { bg: "bg-turquoise-soft", text: "text-turquoise" },
  azure: { bg: "bg-azure-soft", text: "text-azure" },
  fawn: { bg: "bg-fawn-soft", text: "text-navy" },
  navy: { bg: "bg-navy", text: "text-white" },
};

export function Features() {
  return (
    <section
      id="product"
      className="py-24 sm:py-32 bg-paper-2 border-y border-line"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-end mb-14 sm:mb-16">
          <FadeContent blur duration={0.7} y={20} as="div">
            <p className="t-eyebrow text-ink/45">
              <span aria-hidden="true" className="opacity-50">04 —</span> The product
            </p>
            <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
              Everything you need to run your money.
              <br />
              <span className="text-ink/40">
                <span className="t-serif-italic">Nothing</span> you don&apos;t.
              </span>
            </h2>
          </FadeContent>
          <FadeContent
            blur
            duration={0.6}
            delay={0.2}
            y={16}
            as="p"
            className="text-[16px] text-muted max-w-md text-pretty lg:pb-2"
          >
            Built around one idea: focus on concrete action, not just data.
            &ldquo;Cancel this. Save this.&rdquo; That&apos;s the whole product.
          </FadeContent>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f, i) => {
            const a = accentMap[f.accent];
            const isPrimary = i === 0 || i === 3;
            return (
              <FadeContent
                as="li"
                key={f.title}
                duration={0.55}
                delay={0.05 + i * 0.06}
                y={20}
                className={`card card-hover p-6 sm:p-7 relative ${
                  isPrimary ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-[5px] ${a.bg}`}
                  >
                    <f.icon className={`h-4 w-4 ${a.text}`} strokeWidth={1.75} />
                  </span>
                  <span className="t-mono text-[10.5px] text-ink/30 tabular-nums">
                    {f.n}
                  </span>
                </div>
                <h3 className="t-display-md text-[16.5px] sm:text-[17.5px] text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-muted leading-relaxed text-pretty">
                  {f.body}
                </p>
                {isPrimary && (
                  <div className="mt-5 pt-4 border-t border-line">
                    <p className="t-mono text-[11px] uppercase tracking-wider text-ink/45">
                      The first thing you&apos;ll see →
                    </p>
                  </div>
                )}
              </FadeContent>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
