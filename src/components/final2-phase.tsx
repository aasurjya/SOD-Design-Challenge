"use client";

import { useState } from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, ChevronDown, Sparkles, Filter, ShieldAlert } from "lucide-react";
import { RegisterModal } from "@/components/register-modal";

export function Final2Phase() {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [insightRatio, setInsightRatio] = useState(90);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const stepDetails = [
    {
      step: "01",
      title: "FRAME THE PROBLEM",
      description: "Define the specific point of friction. Avoid generic problem statements.",
      checklist: [
        "Articulate the exact stakeholder pain point in 1 clear sentence.",
        "Ground the problem in verifiable real-world context (no hypothetical toys).",
        "Explain who suffers if this problem remains unsolved.",
      ],
    },
    {
      step: "02",
      title: "UNDERSTAND THE USER",
      description: "Direct behavioral observation and user interviews over assumptions.",
      checklist: [
        "Conduct at least 5 primary user conversations or ethnographic observations.",
        "Document existing coping mechanisms and manual workarounds.",
        "Identify emotional and financial friction points.",
      ],
    },
    {
      step: "03",
      title: "SHOW ITS SEVERITY",
      description: "Demonstrate quantified impact, frequency, and depth of friction.",
      checklist: [
        "Present numerical data or frequency of occurrence.",
        "Highlight systemic cost of inaction (economic, psychological, or ecological).",
        "Rank severity against competing daily priorities.",
      ],
    },
    {
      step: "04",
      title: "CHECK EXISTING ALTERNATIVES",
      description: "Analyze current market solutions and explain precisely why they fail.",
      checklist: [
        "Map top 3 current competitive solutions or workarounds.",
        "Isolate structural failure modes in incumbent products.",
        "Identify the precise white space where your approach intervenes.",
      ],
    },
  ];

  return (
    <>
      <section id="final-2" className="w-full bg-white text-black font-['Inter',sans-serif] border-2 border-black shadow-2xl">
        {/* ------------------------------------------------ TOP STATUS BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black bg-[#F3F4F6] px-4 sm:px-6 py-2.5 text-xs font-mono gap-1 sm:gap-0">
          <div className="flex items-center gap-2 font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#CFFD3E] border border-black animate-pulse" />
            <span>FIGMA FRAME: FINAL 2 · PROBLEM PHASE</span>
          </div>
          <span className="text-[11px] text-gray-600 font-bold">
            1383px × 1317px · RESPONSIVE WEB & MOBILE
          </span>
        </div>

        {/* Phase Header */}
        <div className="flex items-center justify-between border-b border-black bg-black px-4 sm:px-6 py-3.5 text-white">
          <h3 className="font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
            <span>01 · PROBLEM PHASE DIRECTIVE</span>
          </h3>
          <span className="font-mono text-xs text-[#CFFD3E] font-extrabold tracking-wider">
            DEADLINE: 05 OCT · 11:59 PM IST
          </span>
        </div>

        {/* Main Content Split: Left (800px) & Right (583px) on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-black">
          {/* ============================================== LEFT COLUMN */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-black p-6 sm:p-10 space-y-8 bg-white">
            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-5xl sm:text-7xl lg:text-[76px] font-[900] tracking-tight uppercase leading-[0.92] text-black">
                IS IT WORTH <br />
                <span>SOLVING?</span>
              </h2>
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[2px] w-8 bg-black shrink-0" />
                <p className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-black">
                  Prove the problem is real before trying to solve it.
                </p>
              </div>
            </div>

            {/* WHAT YOU NEED TO DO - 4 Steps Interactive Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block">
                  WHAT YOU NEED TO DO (CLICK STEP TO EXPAND CRITERIA)
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-400">
                  4 PROGRESSIVE DIRECTIVES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stepDetails.map((item, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div
                      key={item.step}
                      onClick={() => setActiveStep(isActive ? null : index)}
                      className={`p-4 border transition-all cursor-pointer select-none ${
                        isActive
                          ? "border-black bg-[#CFFD3E] shadow-md"
                          : "border-[#000000] bg-[#F3F4F6] hover:bg-neutral-100"
                      }`}
                    >
                      <div className="flex items-center justify-between font-black text-xs uppercase">
                        <span>
                          {item.step} {item.title}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? "rotate-180 text-black" : "text-neutral-500"
                          }`}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-700 mt-2 font-medium leading-snug">
                        {item.description}
                      </p>

                      {/* Expandable Checklist */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-black/30 space-y-1.5 text-[11px] font-mono animate-in fade-in">
                          {item.checklist.map((point, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-black">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-black" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Black Accent Card: DON'T BUILD YET */}
            <div className="relative rounded-none bg-black text-white p-6 sm:p-8 space-y-3 overflow-hidden border border-black shadow-lg">
              <div className="absolute bottom-4 right-4 h-3 w-16 bg-[#CFFD3E]" />
              <h4 className="text-2xl sm:text-3xl font-[900] uppercase text-[#CFFD3E] tracking-tight leading-tight">
                DON’T BUILD YET. <br />
                UNDERSTAND FIRST.
              </h4>
              <p className="text-xs font-mono text-gray-300 max-w-lg leading-relaxed">
                School of Design / IIT Jodhpur directive: Every solution without empirical user validation will be eliminated at Gate 01 on 11 Oct.
              </p>
            </div>
          </div>

          {/* ============================================== RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white">
            {/* Interactive Output Ratio Card (90% Insight / 10% Solution) */}
            <div className="p-6 sm:p-8 border-b border-black space-y-5 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-black uppercase">
                  EVALUATION CRITERIA
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-500">
                  SLIDER INTERACTION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-[900] uppercase leading-tight tracking-tight">
                {insightRatio}% INSIGHT <br />
                {100 - insightRatio}% SOLUTION
              </h3>

              {/* Interactive Ratio Bar & Slider */}
              <div className="space-y-3">
                <div className="h-8 w-full bg-black relative rounded-none overflow-hidden border border-black flex">
                  <div
                    style={{ width: `${insightRatio}%` }}
                    className="h-full bg-[#CFFD3E] transition-all duration-300 flex items-center justify-center text-[10px] font-black text-black"
                  >
                    INSIGHT {insightRatio}%
                  </div>
                  <div
                    style={{ width: `${100 - insightRatio}%` }}
                    className="h-full bg-black text-white flex items-center justify-center text-[10px] font-black"
                  >
                    {100 - insightRatio}%
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span>90% RESEARCH & NEED PROOF</span>
                  <span>10% PROTOTYPE SPEC</span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="95"
                  value={insightRatio}
                  onChange={(e) => setInsightRatio(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 accent-black cursor-pointer"
                />
              </div>
            </div>

            {/* Deadlines & Elimination Gate Split */}
            <div className="grid grid-cols-2 border-b border-black font-sans">
              <div className="p-5 sm:p-6 border-r border-black space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase block">
                  SUBMISSION DEADLINE
                </span>
                <span className="text-xl sm:text-2xl font-[900] block">05 OCT</span>
                <span className="text-xs font-mono text-gray-600 block">T-06D 11H 42M</span>
              </div>
              <div className="p-5 sm:p-6 space-y-1 bg-amber-50">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase block">
                  ELIMINATION GATE
                </span>
                <span className="text-xl sm:text-2xl font-[900] block text-black">11 OCT</span>
                <span className="text-xs font-mono text-red-600 font-bold block uppercase">
                  PROBLEM REVIEW
                </span>
              </div>
            </div>

            {/* What Gets Eliminated & Submit CTA */}
            <div className="p-6 sm:p-8 bg-[#F3F4F6] space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" /> WHAT GETS ELIMINATED
                </span>
                <p className="text-sm font-bold text-black leading-snug">
                  Problems that are weakly defined, lack verifiable user friction, or assume solutions without inquiry.
                </p>
              </div>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full h-12 bg-black hover:bg-neutral-800 text-white font-[900] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-black shadow-lg transition-transform active:scale-[0.98]"
              >
                SUBMIT / REGISTER NOW <ArrowRight className="h-4 w-4 text-[#CFFD3E]" />
              </button>
            </div>
          </div>
        </div>

        {/* Section: 03 THE CATCH - WHAT YOU ARE AGREEING TO */}
        <div className="p-6 sm:p-12 border-b border-black space-y-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block">
              03 · THE CATCH — WHAT YOU ARE AGREEING TO
            </span>
            <span className="text-xs font-mono text-neutral-400">BNB PROTOCOL 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 border border-black bg-[#EDEDED] space-y-3">
              <span className="text-xs font-mono font-[900] text-black block">01</span>
              <h4 className="text-xl sm:text-2xl font-[900] uppercase tracking-tight leading-tight">
                NO FIXED <br />PROBLEM
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-mono">
                No artificial prompts or corporate prompts. You discover and validate the problem yourself.
              </p>
            </div>

            <div className="p-6 border border-black bg-[#EDEDED] space-y-3">
              <span className="text-xs font-mono font-[900] text-black block">02</span>
              <h4 className="text-xl sm:text-2xl font-[900] uppercase tracking-tight leading-tight">
                4 PROGRESSIVE <br />FILTERS
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-mono">
                Only projects that pass Problem Proof advance to Plan, Prototype, and Finale Proof.
              </p>
            </div>

            <div className="p-6 border border-black bg-[#EDEDED] space-y-3">
              <span className="text-xs font-mono font-[900] text-black block">03</span>
              <h4 className="text-xl sm:text-2xl font-[900] uppercase tracking-tight leading-tight">
                REAL <br />ELIMINATION
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-mono">
                50% of submissions cut at Gate 01. Rigorous jury criteria from SOD IIT Jodhpur faculty.
              </p>
            </div>
          </div>
        </div>

        {/* Section: HOW IT WORKS — FOUR STEPS, THREE MONTHS */}
        <div className="p-6 sm:p-12 space-y-6 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black pb-4 gap-2">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block">
                TIMELINE ROADMAP
              </span>
              <h3 className="text-2xl sm:text-3xl font-[900] uppercase tracking-tight">
                FOUR STEPS, THREE MONTHS
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#CFFD3E] text-black font-mono font-bold text-xs border border-black">
                IIT JODHPUR CAMPUS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 border border-black bg-[#EDEDED] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>PHASE 01</span>
                <span className="text-neutral-500">SEP - OCT</span>
              </div>
              <h5 className="font-[900] text-base uppercase">PROBLEM VALIDATION</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Empirical user interviews, stakeholder maps, and root-cause analysis.
              </p>
            </div>

            <div className="p-5 border border-black bg-white space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>PHASE 02</span>
                <span className="text-neutral-500">OCT - NOV</span>
              </div>
              <h5 className="font-[900] text-base uppercase">INSIGHT SYNTHESIS</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Strategic framing, design directions, and technical feasibility studies.
              </p>
            </div>

            <div className="p-5 border border-black bg-white space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>PHASE 03</span>
                <span className="text-neutral-500">NOV - DEC</span>
              </div>
              <h5 className="font-[900] text-base uppercase">CONCEPT PROOF</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                High-fidelity digital, hardware, or spatial prototype development.
              </p>
            </div>

            <div className="p-5 border border-black bg-[#CFFD3E] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>PHASE 04</span>
                <span className="font-extrabold text-black">27-29 DEC</span>
              </div>
              <h5 className="font-[900] text-base uppercase">FINAL EXPO & PITCH</h5>
              <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                Live stage presentations to national design jury, founders, and SOD directors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal triggered from Problem Phase */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
}
