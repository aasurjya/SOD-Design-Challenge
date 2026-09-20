"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { RegisterModal } from "@/components/register-modal";

export function Final2Phase() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      {/* ------------------------------------------------ FIGMA FRAME: FINAL 2 (1383px × 1317px, #FFFFFF) */}
      <section
        id="final-2"
        className="w-full max-w-[1383px] bg-[#FFFFFF] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-['Inter',sans-serif] select-none shadow-2xl overflow-hidden box-border"
      >
        {/* Frame: Status Bar (27px, #F3F4F6) */}
        <div className="w-full h-[27px] bg-[#F3F4F6] border-b border-[#000000] px-6 flex items-center justify-between box-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CFFD3E] border border-black" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-black">
              FRAME: FINAL 2 · PROBLEM PHASE
            </span>
          </div>
          <span className="font-mono text-[10px] text-gray-500 font-medium">
            1383px × 1317px · AUTO LAYOUT
          </span>
        </div>

        {/* Frame: Problem Bar (41px, #000000) */}
        <div className="w-full h-[41px] bg-[#000000] px-6 flex items-center justify-between box-border">
          <span className="font-extrabold text-[14px] leading-[17px] tracking-[1px] text-[#FFFFFF] uppercase">
            PROBLEM
          </span>
          <span className="font-mono text-xs text-[#CFFD3E] font-bold">
            GATE 01 EVALUATION
          </span>
        </div>

        {/* Main Content Split: Left (800px) & Right (583px) — Total 622px high */}
        <div className="w-full flex flex-col lg:flex-row items-stretch p-0 border-b border-[#000000]">
          {/* ============================================== LEFT COLUMN (800px, border-r: 1px) */}
          <div className="w-full lg:w-[800px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#000000] p-6 sm:p-8 flex flex-col justify-between gap-6 box-border bg-white">
            {/* Title Block */}
            <div className="space-y-2">
              <h2 className="font-[900] text-[52px] sm:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight uppercase text-[#000000]">
                IS IT WORTH <br />
                SOLVING?
              </h2>

              <div className="pt-2">
                <p className="font-bold text-[15px] sm:text-[16px] leading-[19px] text-[#000000]">
                  Prove the problem is real before trying to solve it.
                </p>
              </div>
            </div>

            {/* WHAT YOU NEED TO DO - 4 Directive Boxes */}
            <div className="space-y-3">
              <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
                WHAT YOU NEED TO DO
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-[47px] px-4 bg-[#F3F4F6] border border-[#E5E7EB] hover:border-black flex items-center justify-between transition-colors cursor-pointer group">
                  <span className="font-extrabold text-[12px] leading-[15px] uppercase text-[#000000]">
                    01 FRAME THE PROBLEM
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="h-[47px] px-4 bg-[#F3F4F6] border border-[#E5E7EB] hover:border-black flex items-center justify-between transition-colors cursor-pointer group">
                  <span className="font-extrabold text-[12px] leading-[15px] uppercase text-[#000000]">
                    02 UNDERSTAND THE USER
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="h-[47px] px-4 bg-[#F3F4F6] border border-[#E5E7EB] hover:border-black flex items-center justify-between transition-colors cursor-pointer group">
                  <span className="font-extrabold text-[12px] leading-[15px] uppercase text-[#000000]">
                    03 SHOW ITS SEVERITY
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="h-[47px] px-4 bg-[#F3F4F6] border border-[#E5E7EB] hover:border-black flex items-center justify-between transition-colors cursor-pointer group">
                  <span className="font-extrabold text-[12px] leading-[15px] uppercase text-[#000000]">
                    04 CHECK EXISTING ALTERNATIVES
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>

            {/* Black Card: DON'T BUILD YET. UNDERSTAND FIRST. (736px × 166px spec) */}
            <div className="w-full min-h-[140px] sm:h-[166px] bg-[#000000] p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden shadow-lg group">
              {/* Yellow Accent Tab at bottom right */}
              <div className="absolute bottom-4 right-4 w-[50px] h-[10px] bg-[#CFFD3E] group-hover:w-[70px] transition-all duration-300" />

              <h3 className="font-['Inter',sans-serif] font-[900] text-[20px] sm:text-[22px] leading-[110%] uppercase text-[#CFFD3E] tracking-tight">
                DON’T BUILD YET. <br />
                UNDERSTAND FIRST.
              </h3>

              <p className="font-mono text-[11px] text-gray-300 max-w-lg leading-relaxed pt-2">
                observed — SCHOOL OF DESIGN / IIT JODHPUR lockup. Every concept without empirical stakeholder validation will be eliminated at Gate 01.
              </p>
            </div>
          </div>

          {/* ============================================== RIGHT COLUMN (583px, background: #FFFFFF) */}
          <div className="w-full lg:w-[583px] shrink-0 flex flex-col justify-between bg-[#FFFFFF]">
            {/* Top Box: OUTPUT (242px spec, border-b: 1px) */}
            <div className="p-6 sm:p-8 border-b border-[#000000] space-y-3 box-border">
              <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#000000] block">
                OUTPUT
              </span>

              <h3 className="font-[900] text-[32px] sm:text-[36px] leading-[110%] uppercase text-[#000000] tracking-tight">
                90% INSIGHT <br />
                10% SOLUTION
              </h3>

              {/* Progress Bar (513px × 30px spec) */}
              <div className="pt-2 space-y-2">
                <div className="w-full max-w-[513px] h-[30px] bg-[#000000] relative overflow-hidden border border-[#000000] flex">
                  {/* Volt Fill (86% / 442px spec) */}
                  <div className="w-[86%] h-full bg-[#CFFD3E] transition-all duration-500" />
                </div>

                <div className="w-full max-w-[513px] flex justify-between font-semibold text-[11px] leading-[13px] uppercase text-[#000000]">
                  <span>INSIGHT 90%</span>
                  <span>SOLUTION 10%</span>
                </div>
              </div>
            </div>

            {/* Middle Box: DEADLINE & ELIMINATION (117px spec, border-b: 1px) */}
            <div className="w-full flex items-stretch border-b border-[#000000] box-border">
              {/* Left Cell: DEADLINE (292.5px) */}
              <div className="w-1/2 p-5 sm:p-6 border-r border-[#000000] space-y-1 hover:bg-[#F3F4F6] transition-colors">
                <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
                  DEADLINE
                </span>
                <span className="font-[900] text-[22px] leading-[27px] text-[#000000] block">
                  05 OCT
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-[#6B7280] block font-mono">
                  06D 11H 42M
                </span>
              </div>

              {/* Right Cell: ELIMINATION (290.5px) */}
              <div className="w-1/2 p-5 sm:p-6 space-y-1 hover:bg-[#CFFD3E]/20 transition-colors">
                <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
                  ELIMINATION
                </span>
                <span className="font-[900] text-[22px] leading-[27px] text-[#000000] block">
                  11 OCT
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-[#6B7280] block uppercase font-mono">
                  PROBLEM REVIEW
                </span>
              </div>
            </div>

            {/* Bottom Box: WHAT GETS ELIMINATED & CTA (263px spec, #F3F4F6) */}
            <div className="p-6 sm:p-8 bg-[#F3F4F6] flex-1 flex flex-col justify-between gap-4 box-border">
              <div className="space-y-1">
                <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
                  WHAT GETS ELIMINATED
                </span>
                <p className="font-bold text-[14px] leading-[17px] text-[#000000]">
                  Problems that are weakly defined or not well supported.
                </p>
              </div>

              {/* SUBMIT / REGISTER Button (519px × 48px spec) */}
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full max-w-[519px] h-[48px] bg-[#000000] hover:bg-[#CFFD3E] hover:text-[#000000] text-[#FFFFFF] font-extrabold text-[13px] leading-[16px] tracking-[0.5px] uppercase flex items-center justify-center gap-2 border border-[#000000] transition-colors cursor-pointer active:scale-[0.99] group shadow-md"
              >
                <span>SUBMIT / REGISTER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Frame: Navigation Rules Bar (47px spec, border-b: 1px) */}
        <div className="w-full min-h-[47px] px-6 py-3 border-b border-[#000000] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-['Inter',sans-serif] bg-white">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="font-extrabold text-[12px] leading-[15px] uppercase text-[#000000]">
              WHERE THIS COMES FROM →
            </span>
            <a href="#rules" className="font-semibold text-[12px] leading-[15px] uppercase text-[#6B7280] hover:text-black hover:underline transition-colors">
              WHY THESE RULES?
            </a>
            <a href="#four-dimensions" className="font-semibold text-[12px] leading-[15px] uppercase text-[#6B7280] hover:text-black hover:underline transition-colors">
              05 FOUR DIMENSIONS
            </a>
          </div>

          <a href="#depth-axis" className="font-semibold text-[12px] leading-[15px] uppercase text-[#6B7280] hover:text-black hover:underline transition-colors">
            WHEN DOES IT CHANGE? → 06 DEPTH AXIS
          </a>
        </div>

        {/* Frame: 03 · THE CATCH — WHAT YOU ARE AGREEING TO (472px spec) */}
        <div className="w-full p-6 sm:p-12 space-y-8 bg-white box-border">
          {/* Section Header */}
          <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
            03 · THE CATCH — WHAT YOU ARE AGREEING TO
          </span>

          {/* 3 Pillars Grid (1287px × 157px spec) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 01: NO FIXED PROBLEM */}
            <div className="space-y-3 group cursor-pointer">
              <span className="font-extrabold text-[12px] leading-[15px] tracking-[1px] uppercase text-[#6B7280] block font-mono">
                01
              </span>
              <h4 className="font-[900] text-[28px] sm:text-[32px] leading-[39px] tracking-[-1px] uppercase text-[#000000]">
                NO FIXED <br />PROBLEM
              </h4>
              <div className="space-y-1 pt-1">
                <div className="w-full h-[8px] bg-[#E5E7EB] group-hover:bg-black transition-colors" />
                <div className="w-[180px] h-[8px] bg-[#E5E7EB] group-hover:bg-[#CFFD3E] transition-colors" />
              </div>
            </div>

            {/* Column 02: 4 PROGRESSIVE FILTERS */}
            <div className="space-y-3 group cursor-pointer">
              <span className="font-extrabold text-[12px] leading-[15px] tracking-[1px] uppercase text-[#6B7280] block font-mono">
                02
              </span>
              <h4 className="font-[900] text-[28px] sm:text-[32px] leading-[39px] tracking-[-1px] uppercase text-[#000000]">
                4 PROGRESSIVE <br />FILTERS
              </h4>
              <div className="space-y-1 pt-1">
                <div className="w-full h-[8px] bg-[#E5E7EB] group-hover:bg-black transition-colors" />
                <div className="w-[180px] h-[8px] bg-[#E5E7EB] group-hover:bg-[#CFFD3E] transition-colors" />
              </div>
            </div>

            {/* Column 03: REAL ELIMINATION */}
            <div className="space-y-3 group cursor-pointer">
              <span className="font-extrabold text-[12px] leading-[15px] tracking-[1px] uppercase text-[#6B7280] block font-mono">
                03
              </span>
              <h4 className="font-[900] text-[28px] sm:text-[32px] leading-[39px] tracking-[-1px] uppercase text-[#000000]">
                REAL <br />ELIMINATION
              </h4>
              <div className="space-y-1 pt-1">
                <div className="w-full h-[8px] bg-[#E5E7EB] group-hover:bg-black transition-colors" />
                <div className="w-[180px] h-[8px] bg-[#E5E7EB] group-hover:bg-[#CFFD3E] transition-colors" />
              </div>
            </div>
          </div>

          {/* Section: HOW IT WORKS — FOUR STEPS, THREE MONTHS (142px spec) */}
          <div className="pt-8 border-t border-[#E5E7EB] space-y-4">
            <span className="font-medium text-[11px] leading-[13px] tracking-[1px] uppercase text-[#6B7280] block">
              HOW IT WORKS — FOUR STEPS, THREE MONTHS
            </span>

            {/* 4 Steps Row (1287px × 89px spec) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 01 */}
              <div className="h-[89px] p-4 border border-[#000000] bg-white flex flex-col justify-between hover:bg-[#F3F4F6] transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[9px] leading-[11px] tracking-[1px] uppercase text-[#6B7280] font-mono">
                    STEP 01
                  </span>
                  <span className="font-bold text-[16px] leading-[19px] text-[#6B7280] group-hover:text-black group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
                <span className="font-extrabold text-[14px] leading-[17px] uppercase text-[#000000]">
                  ENTER
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-[#6B7280] font-mono">
                  FIND A PROBLEM · 04
                </span>
              </div>

              {/* Step 02 */}
              <div className="h-[89px] p-4 border border-[#000000] bg-white flex flex-col justify-between hover:bg-[#F3F4F6] transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[9px] leading-[11px] tracking-[1px] uppercase text-[#6B7280] font-mono">
                    STEP 02
                  </span>
                  <span className="font-bold text-[16px] leading-[19px] text-[#6B7280] group-hover:text-black group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
                <span className="font-extrabold text-[14px] leading-[17px] uppercase text-[#000000]">
                  SUBMIT EACH DIMENSION
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-[#6B7280] font-mono">
                  DIRECTIVE · 02
                </span>
              </div>

              {/* Step 03 */}
              <div className="h-[89px] p-4 border border-[#000000] bg-white flex flex-col justify-between hover:bg-[#F3F4F6] transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[9px] leading-[11px] tracking-[1px] uppercase text-[#6B7280] font-mono">
                    STEP 03
                  </span>
                  <span className="font-bold text-[16px] leading-[19px] text-[#6B7280] group-hover:text-black group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
                <span className="font-extrabold text-[14px] leading-[17px] uppercase text-[#000000]">
                  PASS THE GATE
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-[#6B7280] font-mono">
                  3 GATES · 06
                </span>
              </div>

              {/* Step 04 */}
              <div className="h-[89px] p-4 border border-[#000000] bg-[#CFFD3E] flex flex-col justify-between hover:bg-[#bbf319] transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[9px] leading-[11px] tracking-[1px] uppercase text-black font-mono font-bold">
                    STEP 04
                  </span>
                  <span className="font-bold text-[16px] leading-[19px] text-black group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <span className="font-extrabold text-[14px] leading-[17px] uppercase text-[#000000]">
                  PROVE IT
                </span>
                <span className="font-normal text-[11px] leading-[13px] text-black font-mono font-bold">
                  JURY · PILOT · 08
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
}
