"use client";

import { Sparkles, Send, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeContent } from "@/components/reactbits/fade-content";
import { Spotlight } from "@/components/reactbits/spotlight";
import { Magnet } from "@/components/reactbits-official/magnet";

const messages = [
  {
    role: "user" as const,
    text: "What am I overspending on this month?",
  },
  {
    role: "assistant" as const,
    text: "You're spending 18% of your income on subscriptions (€168.94 of €940). The biggest wins: Duolingo hasn't been opened in 47 days (€6.99/mo), and Adobe CC just raised to €59.99. Cancel Duolingo and switch to the Photography plan: you'd save €42/mo, or €504/yr.",
  },
  {
    role: "user" as const,
    text: "How much would I save if I cancel X?",
  },
  {
    role: "assistant" as const,
    text: "Cancelling these 3 services would free up €47.97/month — enough to cover your full phone bill. Want me to draft the cancellation steps for each?",
  },
];

export function Assistant() {
  return (
    <section
      id="assistant"
      className="dark-section relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background image — same herobg.jpeg, used as a softer backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/herobg.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for legibility — heavier than hero since this has more text */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,13,0.88) 0%, rgba(2,6,13,0.80) 50%, rgba(2,6,13,0.92) 100%)",
        }}
      />

      <div className="relative container-x">
        <Spotlight
          color="rgba(29, 158, 117, 0.08)"
          size={600}
          className="rounded-[8px]"
        >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <FadeContent duration={0.5} y={12} as="div">
              <p className="t-eyebrow text-turquoise">
                <span aria-hidden="true" className="opacity-60">06 —</span> AI assistant
              </p>
              <h2 className="mt-4 t-display-lg text-white text-[clamp(2rem,4.5vw,3.5rem)] text-balance">
                Ask anything
                <br />
                <span className="text-white/50">
                  <span className="t-serif-italic">about</span> your money.
                </span>
              </h2>
              <p className="mt-6 text-[16px] text-white/75 max-w-md text-pretty">
                No jargon. No cryptic charts. Clear answers in plain language
                — backed by your real data, running on EU-hosted models.
              </p>
            </FadeContent>

            <FadeContent
              duration={0.5}
              delay={0.15}
              y={12}
              as="div"
              className="mt-10 rounded-[8px] border border-white/15 bg-black/40 backdrop-blur-md p-5"
            >
              <ul className="space-y-3">
                {messages.map((m, i) => (
                  <FadeContent
                    as="li"
                    key={i}
                    duration={0.4}
                    delay={0.3 + i * 0.1}
                    y={6}
                    className={
                      m.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[88%] rounded-[6px] rounded-br-sm bg-turquoise text-white px-4 py-3 text-[14px] leading-relaxed"
                          : "max-w-[88%] rounded-[6px] rounded-bl-sm bg-white/10 border border-white/10 text-white/90 px-4 py-3 text-[14px] leading-relaxed"
                      }
                    >
                      {m.role === "assistant" && (
                        <div className="flex items-center gap-1.5 mb-1.5 t-mono text-[10px] uppercase tracking-[0.16em] text-turquoise font-medium">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                          LifeAdmin AI
                        </div>
                      )}
                      {m.text}
                    </div>
                  </FadeContent>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5">
                <Sparkles
                  className="h-3.5 w-3.5 text-turquoise shrink-0"
                  aria-hidden="true"
                />
                <span className="flex-1 text-[13px] text-white/55">
                  Ask LifeAdmin AI anything…
                </span>
                <span
                  aria-hidden="true"
                  className="h-6 w-6 rounded-full bg-turquoise flex items-center justify-center"
                >
                  <Send className="h-3 w-3 text-white" />
                </span>
              </div>
            </FadeContent>
          </div>

          <div>
            <FadeContent duration={0.5} delay={0.2} y={12} as="div">
              <div className="flex items-baseline justify-between mb-3">
                <p className="t-eyebrow text-white/55">
                  What you see in the app
                </p>
                <Magnet magnetStrength={12} padding={80}>
                  <Link
                    href="#cta"
                    className="inline-flex items-center gap-1 t-mono text-[11px] uppercase tracking-wider text-turquoise hover:gap-2 transition-all"
                  >
                    Open the dashboard
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </Magnet>
              </div>
              {/* 3D depth stack — layered cards behind the dashboard */}
              <div className="rb-depth-stack">
                <div className="rb-depth-layer rb-depth-layer-back" aria-hidden="true">
                  <div className="rounded-[6px] border border-white/10 bg-white/5 h-full" />
                </div>
                <div className="rb-depth-layer rb-depth-layer-mid" aria-hidden="true">
                  <div className="rounded-[6px] border border-white/15 bg-white/8 h-full" />
                </div>
                <div className="rb-depth-layer-front">
                  <DashboardMock />
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
        </Spotlight>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div
      role="img"
      aria-label="LifeAdmin OS dashboard preview: monthly spend €168.94, three price alerts, list of active subscriptions"
      className="rounded-[6px] border border-white/15 bg-white text-ink overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-line bg-paper-2">
        <div className="flex items-center gap-2.5">
          <span className="t-mono text-[11px] uppercase tracking-wider text-ink/55">
            Overview
          </span>
          <span className="text-ink/25">·</span>
          <span className="t-mono text-[11px] text-ink/40">Last 90 days</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-turquoise pulse-dot"
          />
          <span className="t-mono text-[10.5px] text-ink/50">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-line">
        {[
          { label: "Monthly", value: "€168.94", delta: "+€11 vs last", deltaColor: "text-rose-600" },
          { label: "You could save", value: "€38.00", delta: "3 unused", deltaColor: "text-turquoise" },
          { label: "Active", value: "12", delta: "2 alerts", deltaColor: "text-azure" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`p-4 sm:p-5 ${i !== 2 ? "border-r border-line" : ""}`}
          >
            <div className="t-mono text-[10.5px] uppercase tracking-wider text-ink/45">
              {s.label}
            </div>
            <div className="mt-1.5 t-display-md text-[22px] sm:text-[24px] text-navy tabular-nums">
              {s.value}
            </div>
            <div className={`mt-0.5 t-mono text-[11px] ${s.deltaColor}`}>
              {s.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3.5 border-b border-line flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-7 w-7 rounded-[4px] bg-[#FCF6E5] flex items-center justify-center shrink-0"
        >
          <span className="t-mono text-[10px] font-bold text-[#A06B00]">!</span>
        </span>
        <div className="flex-1 min-w-0">
          <div className="t-mono text-[11.5px] font-medium text-navy">
            3 price increases detected
          </div>
        </div>
        <button
          type="button"
          className="t-mono text-[11px] font-semibold text-turquoise hover:text-turquoise-2 cursor-pointer"
        >
          Review →
        </button>
      </div>

      <div>
        <div className="px-5 py-2.5 flex items-center justify-between border-b border-line">
          <span className="t-mono text-[10.5px] uppercase tracking-wider text-ink/45">
            Active subscriptions
          </span>
          <span className="t-mono text-[10.5px] text-ink/35">6 shown · 12 total</span>
        </div>
        <ul>
          {[
            { name: "Netflix", cat: "Streaming", price: "€17.99", delta: "+€2.00", trend: "up" },
            { name: "Spotify", cat: "Music", price: "€10.99", delta: "Stable", trend: "flat" },
            { name: "Adobe CC", cat: "Productivity", price: "€59.99", delta: "+€5.00", trend: "up" },
            { name: "Duolingo", cat: "Learning", price: "€6.99", delta: "47d unused", trend: "down" },
            { name: "NY Times", cat: "News", price: "€25.00", delta: "+€4.00", trend: "up" },
          ].map((s, i) => (
            <li
              key={s.name}
              className={`flex items-center gap-3 px-5 py-2.5 ${
                i !== 4 ? "border-b border-line" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-[3px] bg-azure-soft text-azure text-[9.5px] font-bold flex items-center justify-center t-mono shrink-0"
              >
                {s.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium text-navy">{s.name}</div>
              </div>
              <div className="t-mono text-[11.5px] text-ink/40 hidden sm:block">
                {s.cat}
              </div>
              <div className="text-right shrink-0">
                <div className="t-mono text-[12.5px] font-semibold text-navy tabular-nums">
                  {s.price}
                </div>
                <div
                  className={`t-mono text-[10px] ${
                    s.trend === "up"
                      ? "text-rose-600"
                      : s.trend === "down"
                        ? "text-turquoise"
                        : "text-ink/40"
                  }`}
                >
                  {s.delta}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
