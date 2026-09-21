"use client";

import { useRef, useState } from "react";
import { RegisterModal } from "@/components/register-modal";

const directives = [
  "01   FRAME THE PROBLEM",
  "02   UNDERSTAND THE USER",
  "03   SHOW ITS SEVERITY",
  "04  CHECK EXISTING ALTERNATIVES",
];

const pillars = [
  {
    number: "01",
    title: "NO FIXED\nPROBLEM",
    body: "Look around. Go deeper.\nQuestion what’s normal.",
  },
  {
    number: "02",
    title: "4 PROGRESSIVE\nFILTERS",
    body: "Your idea moves through four dimensions.\nProblem → Plan → Prototype → Proof",
  },
  {
    number: "03",
    title: "REAL\nELIMINATION",
    body: "Strong work moves forward.",
  },
];

const steps = [
  ["STEP 01", "ENTER", "Explore. Observe. Define."],
  ["STEP 02", "SUBMIT FOR REVIEW", "Share your work for evaluation."],
  ["STEP 03", "MOVE FORWARD", "Refine the work for the next dimension."],
  ["STEP 04", "PROVE IT", "Build. Test. Validate. Defend."],
];

export function Final2Phase() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const registerTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <section
        id="final-2"
        className="w-full max-w-[1383px] bg-white text-black border border-black font-sans overflow-hidden"
      >
        <div className="h-[27px] bg-[#F3F4F6] border-b border-black" aria-hidden="true" />
        <div className="h-[41px] bg-black px-6 flex items-center">
          <h2 className="font-extrabold text-sm tracking-[1px] uppercase text-white">
            PROBLEM
          </h2>
        </div>

        <div className="flex flex-col min-[1383px]:h-[622px] min-[1383px]:flex-row">
          <div className="min-[1383px]:w-[800px] shrink-0 border-b min-[1383px]:border-b-0 min-[1383px]:border-r border-black p-8 flex flex-col gap-6">
            <h3 className="font-black text-[52px] sm:text-[64px] min-[1383px]:text-[72px] leading-[1.05] uppercase whitespace-pre-line">
              {"IS IT WORTH \nSOLVING?"}
            </h3>
            <p className="font-bold text-base">
              Prove the problem is real before trying to solve it.
            </p>

            <div className="space-y-3">
              <p className="font-medium text-[11px] tracking-[1px] uppercase text-[#6B7280]">
                WHAT YOU NEED TO DO
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {directives.map((directive) => (
                  <div
                    key={directive}
                    className="min-h-[47px] bg-[#F3F4F6] border border-[#E5E7EB] p-4 font-extrabold text-xs uppercase whitespace-pre"
                  >
                    {directive}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[166px] bg-black mt-auto">
              <p className="absolute left-3 top-4 font-black text-[22px] leading-[1.1] uppercase text-[#CFFD3E]">
                DON’T BUILD YET.<br />UNDERSTAND FIRST.
              </p>
              <div className="absolute right-7 bottom-8 h-[10px] w-[50px] bg-[#CFFD3E]" />
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-white">
            <div className="min-h-[242px] border-b border-black p-8 space-y-3">
              <p className="font-medium text-[11px] tracking-[1px] uppercase">Output</p>
              <h3 className="font-black text-4xl leading-[1.1] uppercase">
                90% INSIGHT<br />10% SOLUTION
              </h3>
              <div className="pt-4">
                <div className="h-[30px] w-full bg-black">
                  <div className="h-full w-[86%] bg-[#CFFD3E]" />
                </div>
                <div className="flex justify-between pt-2 font-semibold text-[11px] uppercase">
                  <span>INSIGHT<br />90%</span>
                  <span className="text-right">SOLUTION<br />10%</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 border-b border-black">
              <div className="p-6 border-b sm:border-b-0 sm:border-r border-black space-y-2">
                <p className="font-medium text-[11px] tracking-[1px] uppercase text-[#6B7280]">DEADLINE</p>
                <p className="font-black text-[22px]">05 OCT</p>
                <p className="text-[11px] text-[#6B7280]">06D 11H 42M</p>
              </div>
              <div className="p-6 space-y-2">
                <p className="font-medium text-[11px] tracking-[1px] uppercase text-[#6B7280]">ELIMINATION</p>
                <p className="font-black text-[22px]">11 OCT</p>
                <p className="text-[11px] uppercase text-[#6B7280]">PROBLEM REVIEW</p>
              </div>
            </div>

            <div className="flex-1 bg-[#F3F4F6] p-8 flex flex-col justify-between gap-8">
              <div className="space-y-3">
                <p className="font-medium text-[11px] tracking-[1px] uppercase text-[#6B7280]">
                  WHAT GETS ELIMINATED
                </p>
                <p className="font-bold text-sm">
                  Problems that are weakly defined or not well supported.
                </p>
              </div>
              <button
                ref={registerTriggerRef}
                type="button"
                onClick={() => setIsRegisterOpen(true)}
                className="h-12 w-full bg-black text-white font-extrabold text-[13px] tracking-[0.5px] uppercase hover:bg-[#CFFD3E] hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
              >
                SUBMIT / REGISTER
              </button>
            </div>
          </div>
        </div>

        <div className="p-12 space-y-8 border-t border-black min-[1383px]:border-t-0">
          <h3 className="font-black text-[56px] sm:text-[72px] min-[1383px]:text-[88px] leading-[0.98] tracking-[-1.76px] uppercase">
            HERE IS THE <span className="bg-black text-[#CFFD3E]">CATCH.</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="space-y-4">
                <p className="font-extrabold text-xs tracking-[1px] text-[#6B7280]">{pillar.number}</p>
                <h4 className="font-black text-[32px] leading-normal tracking-[-1px] uppercase whitespace-pre-line">
                  {pillar.title}
                </h4>
                <p className="text-base leading-[1.5] whitespace-pre-line">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <p className="font-medium text-[11px] tracking-[1px] uppercase text-[#6B7280]">
              HOW IT WORKS — FOUR STEPS, THREE MONTHS
            </p>
            <div className="grid sm:grid-cols-2 min-[1383px]:flex min-[1383px]:items-center gap-4">
              {steps.map(([step, title, body], index) => (
                <div key={step} className="contents min-[1383px]:flex min-[1383px]:flex-1 min-[1383px]:items-center min-[1383px]:gap-4">
                  <div
                    className={`min-h-[89px] p-4 flex flex-col gap-2 ${
                      index === 3 ? "bg-[#CFFD3E] border border-black" : "bg-[#070707] text-white border border-black"
                    }`}
                  >
                    <p className={`font-medium text-[9px] tracking-[1px] uppercase ${index === 3 ? "text-black" : "text-[#BEBEBF]"}`}>
                      {step}
                    </p>
                    <p className="font-extrabold text-sm uppercase">{title}</p>
                    <p className={`text-[11px] ${index === 3 ? "text-black" : "text-[#BEBEBF]"}`}>{body}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <span className="hidden min-[1383px]:block font-bold text-base text-[#6B7280]">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-[11px]">THE CHALLENGE GETS HARDER AS THE ANSWERS GET BETTER.</p>
          </div>
        </div>
      </section>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        returnFocusRef={registerTriggerRef}
      />
    </>
  );
}
