import { BnbHero } from "@/components/bnb-hero";
import { Final2Phase } from "@/components/final2-phase";
import { Final3Phase } from "@/components/final3-phase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDEDED] font-sans">
      <div className="mx-auto flex w-full max-w-[1383px] flex-col gap-8 lg:gap-[100px]">
        {/* Figma node 193:400 — Landing Page Final */}
        <BnbHero />

        {/* Figma node 202:154 — Final 2 */}
        <Final2Phase />

        {/* Figma node 202:54 — FINAL 3 */}
        <Final3Phase />
      </div>
    </main>
  );
}
