"use client";

import { FadeContent } from "@/components/reactbits/fade-content";

const partners = [
  "BBVA",
  "Santander",
  "CaixaBank",
  "Revolut",
  "Wise",
  "N26",
  "Openbank",
  "ING",
];

export function TrustStrip() {
  return (
    <section
      id="trust"
      aria-label="Compatible banks"
      className="border-y border-line bg-paper-2"
    >
      <div className="container-x py-10 sm:py-12">
        <FadeContent blur duration={0.5} y={10} as="div" className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-5">
          <p className="t-eyebrow text-ink/45">
            <span aria-hidden="true" className="opacity-50">02 —</span> Works with every PSD2 bank
          </p>
          <ul className="grid grid-cols-4 md:flex md:flex-wrap items-baseline gap-x-8 gap-y-3 md:gap-x-9 lg:gap-x-10 flex-1 md:justify-end">
            {partners.map((p, i) => (
              <li
                key={p}
                className="font-display text-[15px] sm:text-[15.5px] font-medium text-ink/35 tracking-tight"
              >
                {p}
                {i === 3 && (
                  <span className="ml-1 text-turquoise/80 text-[11px] t-mono">+ 200</span>
                )}
              </li>
            ))}
          </ul>
        </FadeContent>
      </div>
    </section>
  );
}
