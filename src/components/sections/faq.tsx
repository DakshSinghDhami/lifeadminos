"use client";

import { useState } from "react";
import { FadeContent } from "@/components/reactbits/fade-content";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is LifeAdmin OS really free?",
    a: "Yes. The free Starter plan gives you up to 10 active subscriptions, automatic detection, the visual dashboard, and price-increase alerts — all at no cost. Most people stay on Starter forever. Pro is for power users who want the full AI assistant, unlimited subscriptions, and human support.",
  },
  {
    q: "Can you actually see my money? Can you move it?",
    a: "Read-only access. We can only view your transactions — we cannot move, transfer, or touch your money in any way. This is enforced at the API level through PSD2 open banking. The same technology your bank already uses for third-party apps.",
  },
  {
    q: "Which banks does it work with?",
    a: "Any bank that supports PSD2 open banking — which covers the vast majority of European banks. We are bank-agnostic by design: BBVA, Santander, CaixaBank, Revolut, N26, Wise, ING, Openbank, and hundreds more.",
  },
  {
    q: "How does the AI assistant work?",
    a: "It reads your own transaction data and answers questions in natural language. You can ask things like \u2018What am I overspending on?\u2019 or \u2018How much would I save if I cancel X?\u2019 and get specific, actionable answers — not generic advice.",
  },
  {
    q: "What happens to my data?",
    a: "Your data is encrypted, stored in the EU, and never sold or shared. You can export or delete all your data at any time from your account settings. Full GDPR compliance.",
  },
  {
    q: "Can you actually cancel my subscriptions for me?",
    a: "On Starter, we guide you step-by-step through the cancellation process. On Pro, we provide one-click cancellation for supported services and detailed scripts for the tricky ones. We never cancel anything without your explicit confirmation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-paper border-t border-line">
      <div className="container-x max-w-3xl">
        <FadeContent blur duration={0.7} y={20} as="div">
          <p className="t-eyebrow text-ink/45">
            <span aria-hidden="true" className="opacity-50">09 —</span> FAQ
          </p>
          <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
            Questions,{" "}
            <span className="t-serif-italic">answered</span>.
          </h2>
        </FadeContent>

        <ul className="mt-14 border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeContent
                as="li"
                key={i}
                duration={0.45}
                delay={0.05 + i * 0.05}
                y={10}
                className="border-b border-line"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-baseline gap-5 py-5 sm:py-6 text-left cursor-pointer group"
                >
                  <span className="t-mono text-[11px] text-ink/35 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 t-display-md text-[15.5px] sm:text-[16.5px] text-navy group-hover:text-turquoise transition-colors">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "t-mono text-[12px] tabular-nums shrink-0 transition-colors",
                      isOpen ? "text-turquoise" : "text-ink/40"
                    )}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={cn(
                    "grid transition-all duration-200 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden pl-10">
                    <p className="text-[14.5px] text-muted leading-relaxed text-pretty">
                      {f.a}
                    </p>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </ul>

        <p className="mt-10 text-center t-mono text-[11px] uppercase tracking-wider text-ink/40">
          Still curious?{" "}
          <a href="#cta" className="text-turquoise hover:underline">
            Ask us anything
          </a>
          .
        </p>
      </div>
    </section>
  );
}
