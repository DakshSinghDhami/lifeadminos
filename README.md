# LifeAdmin OS

> Personal administration, simplified. One system for everything that runs your life.

LifeAdmin OS is a fintech tool that automatically detects active subscriptions through bank transactions, alerts users about price increases, and helps cancel unused services.

## Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Typography:** Syne (display) · DM Sans (body) · JetBrains Mono (labels)
- **Icons:** Lucide
- **Animations:** Bespoke CSS (BlurText, FadeContent, SplitText, ShinyText, GradientText, CountUp, AnimatedList)
- **No animation libraries** — everything is pure CSS, GPU-friendly, and respects `prefers-reduced-motion`

## Design

- **Color palette:** Navy `#0F2240`, Turquoise `#1D9E75`, Azure `#3157C8`, Fawn `#D2B47C`, Beige `#F5F0E8`
- **Style:** Editorial fintech, asymmetric layouts, numbered sections (01–10), monospace labels
- **No nav bar** — full-bleed hero
- **Hero image:** `public/herobg.jpeg`
- **Asset used in:** Hero, AI Assistant section

## Develop

```bash
npm install
npm run dev
```

App runs on `http://localhost:3000` (or the next free port).

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout with fonts
    page.tsx          # homepage
    globals.css      # design system tokens + animation keyframes
  components/
    3d/               # WebGL background effects (legacy)
    reactbits/        # CSS animation primitives (BlurText, FadeContent, etc.)
    sections/         # one component per homepage section
  lib/
    utils.ts          # cn() className helper
public/
  herobg.jpeg         # hero background image
```

## License

MIT
