"use client";

import { Lock, Building2, FileCheck2, ShieldCheck } from "lucide-react";
import { FadeContent } from "@/components/reactbits/fade-content";

const pillars = [
  {
    icon: Lock,
    title: "Read-only access",
    body: "We can only view your transactions. We cannot move, transfer, or touch your money in any way. Enforced at the API level through PSD2.",
  },
  {
    icon: Building2,
    title: "Bank-grade encryption",
    body: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never sell or share your financial data — full stop.",
  },
  {
    icon: FileCheck2,
    title: "PSD2 & GDPR compliant",
    body: "Built on the European PSD2 framework and fully GDPR compliant. Your data lives in the EU, under EU law.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-agnostic by design",
    body: "Works with any bank, anywhere PSD2 applies. No lock-in, no partnerships required. You control the connection.",
  },
];

const badges = [
  { label: "PSD2", detail: "Open banking" },
  { label: "GDPR", detail: "EU data" },
  { label: "ISO 27001", detail: "Audited" },
  { label: "AES-256", detail: "At rest" },
];

export function Security() {
  return (
    <section
      id="security"
      className="py-24 sm:py-32 bg-paper border-y border-line"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <FadeContent blur duration={0.7} y={20} as="div" className="lg:sticky lg:top-28">
            <p className="t-eyebrow text-ink/45">
              <span aria-hidden="true" className="opacity-50">07 —</span> Security
            </p>
            <h2 className="mt-4 t-display-lg text-navy text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
              Your money stays{" "}
              <span className="t-serif-italic">exactly</span> where it is.
            </h2>
            <p className="mt-6 text-[16px] text-muted max-w-md text-pretty">
              We built LifeAdmin OS on a non-negotiable principle: read-only,
              always. The product is useful because it&apos;s safe — not despite it.
            </p>

            <dl className="mt-8 border-t border-line">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-baseline justify-between border-b border-line py-3"
                >
                  <dt className="t-mono text-[12px] font-semibold text-navy uppercase tracking-wider">
                    {b.label}
                  </dt>
                  <dd className="t-mono text-[11px] text-ink/50 uppercase tracking-wider">
                    {b.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeContent>

          <ol className="space-y-0 border-t border-line">
            {pillars.map((p, i) => (
              <FadeContent
                as="li"
                key={p.title}
                duration={0.55}
                delay={0.1 + i * 0.08}
                y={14}
                className="border-b border-line py-7 group"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden="true"
                    className="t-mono text-[11px] text-ink/40 tabular-nums shrink-0 pt-1"
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-[4px] bg-turquoise-soft"
                      >
                        <p.icon
                          className="h-3.5 w-3.5 text-turquoise"
                          strokeWidth={1.75}
                        />
                      </span>
                      <div>
                        <h3 className="t-display-md text-[17px] text-navy">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] text-muted leading-relaxed max-w-xl text-pretty">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeContent>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
