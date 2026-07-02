"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

const cols = [
  {
    title: "Product",
    items: ["Features", "Pricing", "Security", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    items: ["Help center", "PSD2 guide", "Status", "API docs", "Community"],
  },
  {
    title: "Legal",
    items: ["Privacy", "Terms", "Cookies", "GDPR", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper pt-16 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.4fr_3fr] gap-10 lg:gap-16">
          <div>
            <Link
              href="#top"
              className="inline-flex items-center gap-2.5 cursor-pointer"
              aria-label="LifeAdmin OS home"
            >
              <span
                aria-hidden="true"
                className="h-7 w-7 rounded-[6px] bg-turquoise flex items-center justify-center"
              >
                <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display text-[15px] font-bold tracking-tight text-navy">
                LifeAdmin<span className="text-turquoise">OS</span>
              </span>
            </Link>
            <p className="mt-4 text-[14px] text-muted max-w-sm leading-relaxed text-pretty">
              Personal administration, simplified. One system for everything
              that runs your life — built in Barcelona, hosted in the EU.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="t-eyebrow text-ink/45">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it}>
                      <a
                        href="#"
                        className="text-[13.5px] text-ink/65 hover:text-navy transition-colors cursor-pointer"
                      >
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="t-mono text-[11px] uppercase tracking-wider text-ink/45">
            © {new Date().getFullYear()} LifeAdmin OS · Made in Barcelona
          </p>
          <p className="t-mono text-[11px] uppercase tracking-wider text-ink/45">
            EUR · ES · EU-hosted · GDPR · PSD2
          </p>
        </div>
      </div>
    </footer>
  );
}
