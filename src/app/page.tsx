import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Assistant } from "@/components/sections/assistant";
import { Security } from "@/components/sections/security";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <main id="content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Problem />
        <Features />
        <HowItWorks />
        <Assistant />
        <Security />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
