import { BnbHero } from "@/components/bnb-hero";
import { Final2Phase } from "@/components/final2-phase";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDEDED] text-black font-sans selection:bg-[#CFFD3E] selection:text-black">
      {/* ---------------------------------------------------------- TOP BRAND BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-black bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-[1383px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xs tracking-wider uppercase font-mono bg-black text-white px-2 py-0.5 rounded-sm">
              IITJ
            </span>
            <span className="font-extrabold text-xs tracking-wider uppercase font-sans">
              School of Design
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-mono">|</span>
            <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase font-sans text-gray-700">
              IIT Jodhpur
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold font-mono uppercase tracking-wider">
            <a href="#bnb-hero" className="hover:text-red-600 transition-colors">
              Ideas
            </a>
            <a href="#problem-phase" className="hover:text-red-600 transition-colors">
              Problem Phase
            </a>
            <a href="#industry" className="hover:text-red-600 transition-colors">
              For Industry
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#problem-phase"
              className="hidden sm:flex items-center gap-1 border border-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              For Industry →
            </a>
            <a
              href="#problem-phase"
              className="flex items-center bg-black px-5 py-1.5 text-xs font-extrabold uppercase text-white hover:bg-gray-800 transition-colors"
            >
              Enter
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------ MAIN OFFICIAL WEBSITE */}
      <main className="mx-auto max-w-[1383px] px-4 sm:px-6 py-6 space-y-12">
        {/* 1. LANDING PAGE FINAL (NODE 193:3) */}
        <section id="bnb-hero">
          <BnbHero />
        </section>

        {/* 2. FINAL 2 PROBLEM PHASE (NODE 193:4) */}
        <section id="problem-phase">
          <Final2Phase />
        </section>
      </main>

      {/* ---------------------------------------------------------- OFFICIAL FOOTER */}
      <footer className="border-t border-black bg-black text-white text-xs font-mono py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-[1383px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#CFFD3E] text-black font-extrabold text-[10px]">
              #BNB2026
            </span>
            <span>SCHOOL OF DESIGN · IIT JODHPUR</span>
          </div>
          <div className="text-gray-400 text-center sm:text-right">
            27 SEP - 29 DEC | IIT JODHPUR CAMPUS · IDEAS FOR A MORE INTERESTING TOMORROW.
          </div>
        </div>
      </footer>
    </div>
  );
}
