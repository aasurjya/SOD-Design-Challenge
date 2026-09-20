"use client";

import { useState } from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, ChevronDown, Layers, Target, Cpu, GitBranch } from "lucide-react";
import { RegisterModal } from "@/components/register-modal";

export function Final3Phase() {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [planRatio, setPlanRatio] = useState(70);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const planSteps = [
    {
      step: "01",
      title: "STAKEHOLDER & ECOSYSTEM MAPPING",
      description: "Define all human, institutional, and technical entities influenced by the friction.",
      deliverables: [
        "Primary, secondary, and tertiary stakeholder power/interest matrix.",
        "Resource and information flow diagram across the ecosystem.",
        "Identification of systemic gatekeepers and resistance points.",
      ],
    },
    {
      step: "02",
      title: "BEHAVIORAL INTERVENTION STRATEGY",
      description: "Architect the exact moments where user behavior shifts from friction to flow.",
      deliverables: [
        "End-to-end user journey mapping with friction intensity heatmaps.",
        "Incentive structures, behavioral triggers, and feedback loops.",
        "Fallback workflows when users encounter errors or connectivity limits.",
      ],
    },
    {
      step: "03",
      title: "TECHNICAL & SYSTEMIC FEASIBILITY",
      description: "Select core technologies, infrastructure constraints, and sustainability models.",
      deliverables: [
        "Data schema, API contracts, and hardware/software interfaces.",
        "Cost-of-operation analysis per transaction or active user.",
        "Regulatory compliance, privacy safeguards, and environmental impact.",
      ],
    },
    {
      step: "04",
      title: "EXPERIMENT SPEC & PILOT METRICS",
      description: "Design low-fidelity experiments to test core hypothesis before full build.",
      deliverables: [
        "3 high-risk assumptions isolated with quantifiable validation thresholds.",
        "Rapid pilot testing protocol (Wizard of Oz, paper prototype, or simulation).",
        "Target North Star Metric and 3 guardrail metrics for Gate 02 jury.",
      ],
    },
  ];

  return (
    <>
      <section id="final-3" className="w-full bg-white text-black font-['Inter',sans-serif] border-2 border-black shadow-2xl mt-8">
        {/* ------------------------------------------------ TOP STATUS BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black bg-[#F3F4F6] px-4 sm:px-6 py-2.5 text-xs font-mono gap-1 sm:gap-0">
          <div className="flex items-center gap-2 font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#CFFD3E] border border-black animate-pulse" />
            <span>FIGMA FRAME: FINAL 3 · PLAN & SYNTHESIS PHASE</span>
          </div>
          <span className="text-[11px] text-gray-600 font-bold">
            1383px × 1317px · NODE-ID: 121-688
          </span>
        </div>

        {/* Phase Header */}
        <div className="flex items-center justify-between border-b border-black bg-black px-4 sm:px-6 py-3.5 text-white">
          <h3 className="font-black text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
            <span>02 · PLAN PHASE DIRECTIVE</span>
          </h3>
          <span className="font-mono text-xs text-[#CFFD3E] font-extrabold tracking-wider">
            DEADLINE: 11 NOV · GATE 02 REVIEW
          </span>
        </div>

        {/* Main Content Split: Left (800px) & Right (583px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-black">
          {/* ============================================== LEFT COLUMN */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-black p-6 sm:p-10 space-y-8 bg-white">
            {/* Title & Subtitle */}
            <div className="space-y-3 group cursor-default">
              <h2 className="text-5xl sm:text-7xl lg:text-[76px] font-[900] tracking-tight uppercase leading-[0.92] text-black">
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">HOW WILL YOU</span> <br />
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 text-black">SOLVE IT?</span>
              </h2>
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[2px] w-8 group-hover:w-16 transition-all duration-300 bg-black shrink-0" />
                <p className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-black">
                  Translate user validation into rigorous system architecture.
                </p>
              </div>
            </div>

            {/* WHAT YOU NEED TO DO - 4 Steps Interactive Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block">
                  WHAT YOU NEED TO PLAN (CLICK TO EXPAND DELIVERABLES)
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-400">
                  PHASE 02 SPEC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {planSteps.map((item, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div
                      key={item.step}
                      onClick={() => setActiveStep(isActive ? null : index)}
                      className={`p-4 border transition-all duration-200 cursor-pointer select-none group/step ${
                        isActive
                          ? "border-black bg-[#CFFD3E] shadow-md -translate-y-0.5"
                          : "border-[#000000] bg-[#F3F4F6] hover:bg-neutral-100 hover:border-black hover:-translate-y-0.5 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-between font-black text-xs uppercase">
                        <span className="group-hover/step:translate-x-0.5 transition-transform">
                          {item.step} {item.title}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? "rotate-180 text-black" : "text-neutral-500 group-hover/step:text-black"
                          }`}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-700 mt-2 font-medium leading-snug">
                        {item.description}
                      </p>

                      {/* Expandable Deliverables */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-black/30 space-y-1.5 text-[11px] font-mono animate-in fade-in">
                          {item.deliverables.map((point, i) => (
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

            {/* Black Accent Card: ARCHITECT THE SYSTEM */}
            <div className="relative rounded-none bg-black text-white p-6 sm:p-8 space-y-3 overflow-hidden border border-black shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default">
              <div className="absolute bottom-4 right-4 h-3 w-16 bg-[#CFFD3E] group-hover:w-24 transition-all duration-300" />
              <h4 className="text-2xl sm:text-3xl font-[900] uppercase text-[#CFFD3E] tracking-tight leading-tight group-hover:tracking-normal transition-all">
                DON’T CODE BLINDLY. <br />
                ARCHITECT FIRST.
              </h4>
              <p className="text-xs font-mono text-gray-300 max-w-lg leading-relaxed">
                School of Design / IIT Jodhpur Phase 02 Mandate: Prototypes built without system architecture collapse under real-world testing. Pass Gate 02 to qualify for the December on-campus showcase.
              </p>
            </div>
          </div>

          {/* ============================================== RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white">
            {/* Interactive Output Ratio Card */}
            <div className="p-6 sm:p-8 border-b border-black space-y-5 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-black uppercase">
                  GATE 02 WEIGHTAGE
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-500">
                  INTERACTIVE GAUGE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-[900] uppercase leading-tight tracking-tight">
                {planRatio}% SYSTEM ARCHITECTURE <br />
                {100 - planRatio}% RAPID PROTOTYPE
              </h3>

              {/* Interactive Ratio Bar & Slider */}
              <div className="space-y-3">
                <div className="h-8 w-full bg-black relative rounded-none overflow-hidden border border-black flex shadow-inner">
                  <div
                    style={{ width: `${planRatio}%` }}
                    className="h-full bg-[#CFFD3E] transition-all duration-300 flex items-center justify-center text-[10px] font-black text-black select-none"
                  >
                    SYSTEM {planRatio}%
                  </div>
                  <div
                    style={{ width: `${100 - planRatio}%` }}
                    className="h-full bg-black text-white flex items-center justify-center text-[10px] font-black select-none"
                  >
                    {100 - planRatio}%
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span>70% ARCHITECTURE & FEASIBILITY</span>
                  <span>30% INTERFACE MOCKUP</span>
                </div>

                <input
                  type="range"
                  min="40"
                  max="90"
                  value={planRatio}
                  onChange={(e) => setPlanRatio(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 accent-black cursor-pointer"
                />
              </div>
            </div>

            {/* Deadlines & Gate 02 Split */}
            <div className="grid grid-cols-2 border-b border-black font-sans">
              <div className="p-5 sm:p-6 border-r border-black space-y-1 hover:bg-[#F3F4F6] transition-colors cursor-pointer group">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase block">
                  GATE 02 SUBMISSION
                </span>
                <span className="text-xl sm:text-2xl font-[900] block group-hover:translate-x-0.5 transition-transform">
                  11 NOV
                </span>
                <span className="text-xs font-mono text-gray-600 block">SYSTEM BLUEPRINT DUE</span>
              </div>
              <div className="p-5 sm:p-6 space-y-1 bg-amber-50 hover:bg-[#CFFD3E]/30 transition-colors cursor-pointer group">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase block">
                  GATE 02 ELIMINATION
                </span>
                <span className="text-xl sm:text-2xl font-[900] block text-black group-hover:translate-x-0.5 transition-transform">
                  18 NOV
                </span>
                <span className="text-xs font-mono text-red-600 font-bold block uppercase">
                  FEASIBILITY CUT
                </span>
              </div>
            </div>

            {/* What Gets Eliminated & Submit CTA */}
            <div className="p-6 sm:p-8 bg-[#F3F4F6] space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" /> GATE 02 FILTER CRITERIA
                </span>
                <p className="text-sm font-bold text-black leading-snug">
                  Unrealistic technical hand-waving, unaddressed regulatory barriers, or designs with no pilot experimentation metrics.
                </p>
              </div>

              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full h-12 bg-black hover:bg-[#CFFD3E] hover:text-black text-white font-[900] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-black shadow-lg transition-all duration-200 active:scale-[0.98] group cursor-pointer"
              >
                <span>SUBMIT PLAN DOSSIER (GATE 02)</span>
                <ArrowRight className="h-4 w-4 text-[#CFFD3E] group-hover:text-black group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Deliverables Checklist Bar */}
        <div className="p-6 sm:p-10 bg-[#EDEDED] border-b border-black">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black gap-2">
            <span className="font-extrabold text-xs uppercase tracking-wider">
              REQUIRED PHASE 02 DELIVERABLES
            </span>
            <span className="font-mono text-xs text-neutral-500">
              PDF ARCHITECTURE DOSSIER + 3-MIN VIDEO PITCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs font-mono">
            <div className="p-4 border border-black bg-white space-y-1">
              <span className="font-bold text-black block">01 · STAKEHOLDER SPEC</span>
              <p className="text-neutral-600">Power-interest matrix and empirical interview quote index.</p>
            </div>
            <div className="p-4 border border-black bg-white space-y-1">
              <span className="font-bold text-black block">02 · ARCHITECTURE SCHEMATIC</span>
              <p className="text-neutral-600">Complete data flow and component integration wireframe.</p>
            </div>
            <div className="p-4 border border-black bg-white space-y-1">
              <span className="font-bold text-black block">03 · EXPERIMENT PILOT LOG</span>
              <p className="text-neutral-600">Quantitative results from 1 low-fidelity user intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal triggered from Final 3 */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
}
