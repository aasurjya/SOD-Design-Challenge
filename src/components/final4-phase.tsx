"use client";

import { useState } from "react";

const questions = [
  ["Q01", "ELIGIBILITY"],
  ["Q02", "PARTICIPATION BEYOND IIT JODHPUR"],
  ["Q03", "TEAM SIZE"],
  ["Q04", "TEAM FORMATION"],
  ["Q05", "SUBMISSION FORMAT"],
  ["Q06", "ONLINE / ON-CAMPUS / HYBRID"],
  ["Q07", "FEE"],
  ["Q08", "PRIZE / RECOGNITION"],
  ["Q09", "IP OWNERSHIP"],
  ["Q10", "WHAT HAPPENS AFTER ELIMINATION"],
] as const;

export function Final4Phase() {
  const [openQuestion, setOpenQuestion] = useState<string | null>("Q01");

  return (
    <section
      id="final-4"
      className="w-full max-w-[1327px] min-[1383px]:h-[736px] bg-white text-black border border-black font-sans overflow-hidden"
    >
      <div className="bg-[#070707] border-b border-black px-8 py-8">
        <h2 className="font-black text-4xl uppercase text-[#CFFD3E]">QUESTIONS</h2>
      </div>

      <div>
        {questions.map(([id, question]) => {
          const isOpen = openQuestion === id;
          const answerId = `${id.toLowerCase()}-answer`;

          return (
            <div key={id} className="border-b border-[#E5E7EB] last:border-b-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={isOpen ? answerId : undefined}
                onClick={() => setOpenQuestion(isOpen ? null : id)}
                className={`flex w-full items-center justify-between gap-4 text-left transition-colors hover:bg-[#F9FAFB] focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2 ${
                  isOpen ? "min-h-[61px] px-5" : "min-h-[49px] px-4"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-[35px] text-xs text-[#6B7280]">{id}</span>
                  <span className={`font-extrabold uppercase ${isOpen ? "text-base" : "text-sm"}`}>
                    {question}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={isOpen ? "text-lg font-bold" : "text-base font-semibold text-[#6B7280]"}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div id={answerId} className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-6 py-4">
                  <div className="border border-dashed border-[#E5E7EB] p-4 space-y-3">
                    <p className="font-medium text-[9px] tracking-[1px] uppercase text-[#6B7280]">
                      ANSWER SLOT — EMPTY. CONTENT GAP. DO NOT INVENT.
                    </p>
                    <div className="h-2 w-full bg-[#E5E7EB]" aria-hidden="true" />
                    <div className="h-2 w-[420px] max-w-full bg-[#E5E7EB]" aria-hidden="true" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
