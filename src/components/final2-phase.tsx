"use client";

import { ArrowRight, Check, AlertTriangle, Shield, HelpCircle, Layers, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Final2Phase() {
  return (
    <section id="problem-phase" className="w-full bg-white text-black font-sans border-t-2 border-black">
      {/* ------------------------------------------------ FIGMA FRAME: FINAL 2 (1383px x 1317px) */}
      <div className="mx-auto max-w-[1383px] border-x border-black bg-white">
        {/* Top Status Bar */}
        <div className="flex items-center justify-between border-b border-black bg-[#F3F4F6] px-6 py-2 text-xs font-mono">
          <div className="flex items-center gap-2 font-bold">
            <span className="h-2 w-2 rounded-full bg-[#CFFD3E] border border-black" />
            <span>FRAME: FINAL 2 · PROBLEM PHASE</span>
          </div>
          <span className="font-mono text-[11px] text-gray-600">1383px × 1317px · AUTO LAYOUT</span>
        </div>

        {/* Phase Header */}
        <div className="flex items-center justify-between border-b border-black bg-black px-6 py-3 text-white">
          <h3 className="font-black text-sm tracking-wider uppercase">01 · PROBLEM PHASE</h3>
          <span className="font-mono text-xs text-[#CFFD3E] font-bold">DEADLINE: 05 OCT</span>
        </div>

        {/* Main Content Split: Left (800px) & Right (583px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-black">
          {/* Left Column (800px spec) */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-black p-8 space-y-8 bg-white">
            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-none font-sans">
                IS IT WORTH <br />
                <span className="text-black">SOLVING?</span>
              </h2>
              <div className="flex items-center gap-3 pt-1">
                <span className="h-0.5 w-6 bg-black" />
                <p className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-black">
                  Prove the problem is real before trying to solve it.
                </p>
              </div>
            </div>

            {/* WHAT YOU NEED TO DO - 4 Steps Grid */}
            <div className="space-y-3 pt-4">
              <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase block">
                WHAT YOU NEED TO DO
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-[#E5E7EB] bg-[#F3F4F6] font-black text-xs uppercase flex items-center justify-between hover:border-black transition-colors">
                  <span>01 FRAME THE PROBLEM</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-500" />
                </div>
                <div className="p-4 border border-[#E5E7EB] bg-[#F3F4F6] font-black text-xs uppercase flex items-center justify-between hover:border-black transition-colors">
                  <span>02 UNDERSTAND THE USER</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-500" />
                </div>
                <div className="p-4 border border-[#E5E7EB] bg-[#F3F4F6] font-black text-xs uppercase flex items-center justify-between hover:border-black transition-colors">
                  <span>03 SHOW ITS SEVERITY</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-500" />
                </div>
                <div className="p-4 border border-[#E5E7EB] bg-[#F3F4F6] font-black text-xs uppercase flex items-center justify-between hover:border-black transition-colors">
                  <span>04 CHECK EXISTING ALTERNATIVES</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Black Accent Card: DON'T BUILD YET */}
            <div className="relative rounded-none bg-black text-white p-6 space-y-4 overflow-hidden border border-black shadow-lg">
              <div className="absolute bottom-4 right-4 h-2.5 w-12 bg-[#CFFD3E]" />
              <h4 className="text-2xl sm:text-3xl font-black uppercase text-[#CFFD3E] tracking-tight leading-tight">
                DON’T BUILD YET. <br />
                UNDERSTAND FIRST.
              </h4>
              <p className="text-xs font-mono text-gray-300 max-w-lg leading-relaxed">
                Observed — School of Design / IIT Jodhpur lockup directive. Every solution without empirical user validation will be eliminated at Gate 01.
              </p>
            </div>
          </div>

          {/* Right Column (583px spec) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white">
            {/* Output Insight Ratio Card (90% Insight / 10% Solution) */}
            <div className="p-8 border-b border-black space-y-4">
              <span className="text-xs font-mono font-medium tracking-widest text-black uppercase block">
                OUTPUT
              </span>
              <h3 className="text-3xl font-black uppercase leading-tight tracking-tight">
                90% INSIGHT <br />
                10% SOLUTION
              </h3>

              {/* Progress Ratio Bar */}
              <div className="space-y-2 pt-2">
                <div className="h-7 w-full bg-black relative rounded-none overflow-hidden border border-black">
                  <div className="h-full bg-[#CFFD3E] w-[86%] transition-all duration-1000" />
                </div>
                <div className="flex justify-between text-xs font-mono font-semibold pt-1">
                  <span>INSIGHT 90%</span>
                  <span>SOLUTION 10%</span>
                </div>
              </div>
            </div>

            {/* Deadlines & Elimination Gate Split */}
            <div className="grid grid-cols-2 border-b border-black font-sans">
              <div className="p-6 border-r border-black space-y-1">
                <span className="text-[11px] font-mono font-medium tracking-wider text-gray-500 uppercase block">
                  DEADLINE
                </span>
                <span className="text-2xl font-black block">05 OCT</span>
                <span className="text-xs font-mono text-gray-500 block">06D 11H 42M</span>
              </div>
              <div className="p-6 space-y-1 bg-amber-50">
                <span className="text-[11px] font-mono font-medium tracking-wider text-gray-500 uppercase block">
                  ELIMINATION
                </span>
                <span className="text-2xl font-black block text-black">11 OCT</span>
                <span className="text-xs font-mono text-gray-600 font-bold block uppercase">PROBLEM REVIEW</span>
              </div>
            </div>

            {/* What Gets Eliminated & Submit CTA */}
            <div className="p-8 bg-[#F3F4F6] space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5" /> WHAT GETS ELIMINATED
                </span>
                <p className="text-sm font-bold text-black leading-snug">
                  Problems that are weakly defined or not well supported.
                </p>
              </div>

              <Button size="lg" className="w-full h-12 bg-black hover:bg-gray-900 text-white font-extrabold text-sm uppercase tracking-wider gap-2">
                SUBMIT / REGISTER NOW <ArrowRight className="h-4 w-4 text-[#CFFD3E]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Rule Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-black px-6 py-4 bg-white text-xs font-mono font-bold">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-black uppercase">WHERE THIS COMES FROM →</span>
            <a href="#rules" className="text-gray-500 hover:text-black uppercase transition-colors">WHY THESE RULES?</a>
            <a href="#dimensions" className="text-gray-500 hover:text-black uppercase transition-colors">05 FOUR DIMENSIONS</a>
          </div>
          <span className="text-gray-500 uppercase font-medium">WHEN DOES IT CHANGE? → 06 DEPTH AXIS</span>
        </div>

        {/* Section: 03 THE CATCH - WHAT YOU ARE AGREEING TO */}
        <div className="p-8 sm:p-12 border-b border-black space-y-8 bg-white">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase block">
            03 · THE CATCH — WHAT YOU ARE AGREEING TO
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-extrabold text-gray-500 block">01</span>
              <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">
                NO FIXED <br />PROBLEM
              </h4>
              <div className="space-y-1">
                <div className="h-2 w-full bg-[#E5E7EB] rounded-none" />
                <div className="h-2 w-3/5 bg-[#E5E7EB] rounded-none" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-extrabold text-gray-500 block">02</span>
              <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">
                4 PROGRESSIVE <br />FILTERS
              </h4>
              <div className="space-y-1">
                <div className="h-2 w-full bg-[#E5E7EB] rounded-none" />
                <div className="h-2 w-3/5 bg-[#E5E7EB] rounded-none" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-extrabold text-gray-500 block">03</span>
              <h4 className="text-2xl font-black uppercase tracking-tight leading-tight">
                REAL <br />ELIMINATION
              </h4>
              <div className="space-y-1">
                <div className="h-2 w-full bg-[#E5E7EB] rounded-none" />
                <div className="h-2 w-3/5 bg-[#E5E7EB] rounded-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section: HOW IT WORKS — FOUR STEPS, THREE MONTHS */}
        <div className="p-8 sm:p-12 space-y-6 bg-white">
          <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase block">
            HOW IT WORKS — FOUR STEPS, THREE MONTHS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 01 */}
            <div className="p-4 border border-black bg-white space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">STEP 01</span>
                <h5 className="text-base font-extrabold uppercase">ENTER</h5>
                <span className="text-xs font-mono text-gray-500 block">FIND A PROBLEM · 04</span>
              </div>
              <div className="pt-2 text-right">
                <span className="font-mono text-sm font-bold text-gray-600">→</span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-4 border border-black bg-white space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">STEP 02</span>
                <h5 className="text-base font-extrabold uppercase">SUBMIT EACH DIMENSION</h5>
                <span className="text-xs font-mono text-gray-500 block">DIRECTIVE · 02</span>
              </div>
              <div className="pt-2 text-right">
                <span className="font-mono text-sm font-bold text-gray-600">→</span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-4 border border-black bg-white space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">STEP 03</span>
                <h5 className="text-base font-extrabold uppercase">PASS THE GATE</h5>
                <span className="text-xs font-mono text-gray-500 block">3 GATES · 06</span>
              </div>
              <div className="pt-2 text-right">
                <span className="font-mono text-sm font-bold text-gray-600">→</span>
              </div>
            </div>

            {/* Step 04 */}
            <div className="p-4 border border-black bg-white space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block font-bold">STEP 04</span>
                <h5 className="text-base font-extrabold uppercase">PROVE IT</h5>
                <span className="text-xs font-mono text-gray-500 block">JURY · PILOT · 08</span>
              </div>
              <div className="pt-2 text-right">
                <span className="font-mono text-sm font-bold text-emerald-600">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
