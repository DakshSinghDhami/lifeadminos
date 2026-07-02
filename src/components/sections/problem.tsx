"use client";

import { EyeOff, TrendingUp, HelpCircle, ArrowDownRight } from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";

const problems = [
  {
    icon: EyeOff,
    n: "01",
    title: "You pay for things you don't use.",
    body: "The average European carries 3–5 forgotten subscriptions and loses €240/year to services they haven't opened in months.",
  },
  {
    icon: TrendingUp,
    n: "02",
    title: "You miss price increases.",
    body: "Subscriptions quietly go up 20–40% at renewal. By the time you notice, you've overpaid for months.",
  },
  {
    icon: HelpCircle,
    n: "03",
    title: "You don't really know where your money goes.",
    body: "Bank statements are noise. Without a clear picture, cutting back feels impossible — so nothing changes.",
  },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <FadeContent blur duration={0.7} y={20} as="div" className="lg:sticky lg:top-28">
            <p className="t-eyebrow text-ink/45">
              <span aria-hidden="true" className="opacity-50">03 —</span> The problem
            </p>
            <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
              Your money is{" "}
              <span className="t-serif-italic text-turquoise">leaking</span>.
              <br />
              <span className="text-ink/40">You just can&apos;t see where.</span>
            </h2>
            <p className="mt-6 text-[16px] text-muted max-w-md text-pretty">
              Subscriptions are designed to be forgotten. LifeAdmin OS makes
              them visible — and gives you the leverage to act.
            </p>
          </FadeContent>

          <ol className="space-y-0 border-t border-line">
            {problems.map((p, i) => (
              <FadeContent
                as="li"
                key={p.title}
                duration={0.55}
                delay={0.1 + i * 0.08}
                y={16}
                className="border-b border-line py-7 sm:py-8 group"
              >
                <div className="flex items-baseline gap-5 sm:gap-7">
                  <span
                    aria-hidden="true"
                    className="t-mono text-[12px] text-ink/40 tabular-nums shrink-0 pt-1"
                  >
                    {p.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-[4px] bg-beige group-hover:bg-turquoise-soft transition-colors"
                      >
                        <p.icon
                          className="h-3.5 w-3.5 text-navy"
                          strokeWidth={1.75}
                        />
                      </span>
                      <div>
                        <h3 className="t-display-md text-[18px] sm:text-[20px] text-navy">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[15px] text-muted leading-relaxed max-w-xl text-pretty">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ArrowDownRight
                    aria-hidden="true"
                    className="hidden sm:block h-4 w-4 text-ink/25 group-hover:text-turquoise group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all shrink-0"
                  />
                </div>
              </FadeContent>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
