"use client";

import Link from "next/link";
import { Check, Minus, ArrowRight } from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";
import { AnimatedList } from "@/components/reactbits/animated-list";
import { ShinyText } from "@/components/reactbits/shiny-text";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  period: string;
  desc: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: { label: string; included: boolean }[];
  note?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "€0",
    period: "forever",
    desc: "Everything you need to start cutting waste.",
    cta: "Start free",
    href: "#cta",
    features: [
      { label: "Up to 10 active subscriptions", included: true },
      { label: "Automatic detection from bank", included: true },
      { label: "Visual dashboard", included: true },
      { label: "Price-increase alerts", included: true },
      { label: "Basic cancellation guidance", included: true },
      { label: "Email support", included: true },
      { label: "Full AI assistant", included: false },
      { label: "Human support (under 12h)", included: false },
    ],
    note: "Free, no card required",
  },
  {
    name: "Pro",
    price: "€5",
    period: "per month",
    desc: "Unlimited tracking, full AI, real humans.",
    cta: "Get Pro",
    href: "#cta",
    featured: true,
    features: [
      { label: "Unlimited active subscriptions", included: true },
      { label: "Automatic detection from bank", included: true },
      { label: "Visual dashboard", included: true },
      { label: "Price-increase alerts", included: true },
      { label: "Step-by-step cancellation", included: true },
      { label: "Priority email support", included: true },
      { label: "Full AI assistant", included: true },
      { label: "Human support (under 12h)", included: true },
    ],
    note: "Pays for itself in week one",
  },
  {
    name: "Teams",
    price: "€19",
    period: "per month",
    desc: "For advisors, accountants, and households.",
    cta: "Contact sales",
    href: "#cta",
    features: [
      { label: "Up to 5 connected members", included: true },
      { label: "Everything in Pro", included: true },
      { label: "Shared dashboards", included: true },
      { label: "Custom categories & rules", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "SLA & onboarding", included: true },
      { label: "Public API access", included: true },
      { label: "White-label reports", included: true },
    ],
    note: "Volume discounts above 10 seats",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-paper-2 border-t border-line"
    >
      <div className="container-x">
        <FadeContent blur duration={0.7} y={20} as="div" className="max-w-2xl">
          <p className="t-eyebrow text-ink/45">
            <span aria-hidden="true" className="opacity-50">08 —</span> Pricing
          </p>
          <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
            Simple. Honest.
            <br />
            <span className="text-ink/40">
              <span className="t-serif-italic">Pays</span> for itself in week one.
            </span>
          </h2>
          <p className="mt-6 text-[16px] text-muted max-w-xl text-pretty">
            Most users save €200+ in their first 90 days. Pro is €5/month.
            The math is easy. 30-day money-back, cancel in one click.
          </p>
        </FadeContent>

        <AnimatedList
          as="div"
          className="mt-14 grid md:grid-cols-3 gap-3 sm:gap-4"
          stagger={0.12}
          duration={0.6}
        >
          {plans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const f = plan.featured;
  return (
    <div
      className={cn(
        "relative h-full rounded-[6px] p-7 transition-shadow duration-200 flex flex-col",
        f
          ? "bg-navy text-white border border-navy"
          : "bg-white border border-line"
      )}
    >
      {f && (
        <div className="absolute -top-2.5 left-7">
          <span className="inline-flex items-center t-mono text-[10px] uppercase tracking-[0.16em] font-medium bg-turquoise text-white px-2 py-0.5 rounded">
            <ShinyText
              speed={3.5}
              color="#ffffff"
              shineColor="rgba(29,158,117,0.6)"
            >
              Most chosen
            </ShinyText>
          </span>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h3
          className={cn(
            "t-display-md text-[19px] font-semibold tracking-tight",
            f ? "text-white" : "text-navy"
          )}
        >
          {plan.name}
        </h3>
        {plan.note && (
          <span
            className={cn(
              "t-mono text-[10.5px] uppercase tracking-wider",
              f ? "text-white/45" : "text-ink/40"
            )}
          >
            {plan.note}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span
          className={cn(
            "t-display-lg text-[40px] font-semibold tracking-tight leading-none tabular-nums",
            f ? "text-white" : "text-navy"
          )}
        >
          {plan.price}
        </span>
        <span
          className={cn(
            "t-mono text-[12px]",
            f ? "text-white/55" : "text-ink/50"
          )}
        >
          {plan.period}
        </span>
      </div>

      <p
        className={cn(
          "mt-3 text-[14px] leading-relaxed",
          f ? "text-white/65" : "text-muted"
        )}
      >
        {plan.desc}
      </p>

      <Link
        href={plan.href}
        className={cn(
          "btn h-11 mt-6 text-[14px] w-full justify-center",
          f ? "btn-turquoise" : "btn-primary"
        )}
      >
        {plan.cta}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>

      <div className={cn("my-6 h-px", f ? "bg-white/10" : "bg-line")} />

      <ul className="space-y-3 flex-1">
        {plan.features.map((feat) => (
          <li
            key={feat.label}
            className="flex items-start gap-2.5 text-[13.5px]"
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-4 w-4 rounded-[3px] flex items-center justify-center shrink-0 mt-0.5",
                feat.included
                  ? f
                    ? "bg-turquoise/20 text-turquoise"
                    : "bg-turquoise-soft text-turquoise"
                  : f
                    ? "bg-white/8 text-white/30"
                    : "bg-paper-2 text-ink/30"
              )}
            >
              {feat.included ? (
                <Check className="h-3 w-3" strokeWidth={3} />
              ) : (
                <Minus className="h-3 w-3" strokeWidth={3} />
              )}
            </span>
            <span
              className={cn(
                feat.included
                  ? f
                    ? "text-white/85"
                    : "text-ink/80"
                  : f
                    ? "text-white/35 line-through decoration-white/20"
                    : "text-ink/40 line-through decoration-ink/20"
              )}
            >
              {feat.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
