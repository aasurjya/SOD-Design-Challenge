import { BnbHero } from "@/components/bnb-hero";
import { Final2Phase } from "@/components/final2-phase";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDEDED] flex flex-col items-center justify-start p-0 sm:p-8 space-y-8 font-sans selection:bg-[#CFFD3E] selection:text-black">
      <main className="w-full max-w-[1383px]">
        {/* Landing Page Final (Figma Node 193-3) */}
        <section id="landing-page-final">
          <BnbHero />
        </section>

        {/* Final 2 Problem Phase (Figma Node 193-4) */}
        <section id="final-2" className="mt-8">
          <Final2Phase />
        </section>
      </main>
    </div>
  );
}
