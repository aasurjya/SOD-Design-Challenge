import { BnbHero } from "@/components/bnb-hero";
import { Final2Phase } from "@/components/final2-phase";
import { Final3Phase } from "@/components/final3-phase";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDEDED] flex flex-col items-center justify-start p-0 sm:p-8 space-y-8 font-sans selection:bg-[#CFFD3E] selection:text-black">
      <main className="w-full max-w-[1383px]">
        {/* 1. Landing Page Final (Figma Node 193-3) */}
        <section id="landing-page-final">
          <BnbHero />
        </section>

        {/* 2. Final 2 Problem Phase (Figma Node 193-4) */}
        <section id="final-2" className="mt-8">
          <Final2Phase />
        </section>

        {/* 3. Final 3 Plan & Synthesis Phase (Figma Node 121-688) */}
        <section id="final-3" className="mt-8">
          <Final3Phase />
        </section>

        {/* 4. Team Details Banner Link */}
        <div className="mt-8 p-6 sm:p-8 border-2 border-black bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 bg-[#CFFD3E] border border-black" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
                TEAM PORTAL & DOSSIER
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-[900] uppercase tracking-tight">
              VIEW & MANAGE CHALLENGE TEAM
            </h4>
            <p className="text-xs text-neutral-600 font-mono">
              Manage team members, roles, project repositories, and SOD faculty mentor assignments.
            </p>
          </div>

          <Link
            href="/team"
            className="h-12 px-6 bg-black hover:bg-[#CFFD3E] hover:text-black text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-black transition-all duration-200 shrink-0 group"
          >
            <span>OPEN TEAM DETAILS</span>
            <ArrowRight className="w-4 h-4 text-[#CFFD3E] group-hover:text-black group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </main>
    </div>
  );
}
