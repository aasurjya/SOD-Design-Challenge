"use client";

import { useEffect, useState } from "react";

export function BnbHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "06",
    hours: "11",
    minutes: "42",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const minutes = String(60 - now.getMinutes()).padStart(2, "0");
      const hours = String(23 - now.getHours()).padStart(2, "0");
      setTimeLeft((prev) => ({ ...prev, hours, minutes }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1383px] bg-[#EDEDED] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-sans overflow-hidden shadow-2xl select-none">
      {/* ------------------------------------------------ TOP HEADER BAR */}
      <header className="w-full h-[56px] border-b border-[#000000] flex flex-row justify-between items-center px-4 sm:px-6 bg-[#EDEDED]">
        {/* Left Logo Group */}
        <div className="flex flex-row items-center gap-4">
          <span className="font-['Inter'] font-extrabold text-[12px] leading-[14px] text-[#000000] tracking-tight uppercase">
            SCHOOL OF DESIGN
          </span>
          <div className="w-[1px] h-[16px] bg-[#000000]" />
          <span className="font-['Inter'] font-extrabold text-[12px] leading-[14px] text-[#000000] tracking-tight uppercase">
            IIT JODHPUR
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-['Inter'] font-extrabold text-[11px] tracking-wider uppercase">
          <a href="#ideas" className="hover:opacity-70 transition-opacity">IDEAS</a>
          <a href="#people" className="hover:opacity-70 transition-opacity">PEOPLE</a>
          <a href="#places" className="hover:opacity-70 transition-opacity">PLACES</a>
          <a href="#possibilities" className="hover:opacity-70 transition-opacity">POSSIBILITIES</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#industry"
            className="hidden sm:inline-block border border-[#000000] px-4 py-1.5 font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider hover:bg-[#000000] hover:text-white transition-colors"
          >
            FOR INDUSTRY →
          </a>
          <button className="bg-[#000000] text-white px-5 py-1.5 font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider hover:bg-gray-800 transition-colors">
            ENTER
          </button>
          <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider cursor-pointer hover:opacity-70">
            MENU
          </span>
          {/* IIT Jodhpur Emblem Logo */}
          <div className="w-8 h-8 rounded-full border border-[#000000] flex items-center justify-center bg-white overflow-hidden text-[9px] font-black shrink-0">
            IITJ
          </div>
        </div>
      </header>

      {/* ------------------------------------------------ MAIN CONTENT GRID */}
      <div className="w-full flex flex-col lg:flex-row items-stretch border-b border-[#000000]">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[48%] border-b lg:border-b-0 lg:border-r border-[#000000] flex flex-col justify-between bg-[#EDEDED]">
          {/* Top Section: BEYOND NORMAL BELIEFS + REAL PROBLEMS */}
          <div className="p-6 sm:p-10 border-b border-[#000000] flex flex-col sm:flex-row justify-between items-start gap-6">
            <h1 className="font-['Inter'] font-[900] text-[52px] sm:text-[76px] lg:text-[88px] leading-[88%] tracking-[-0.04em] uppercase text-[#000000]">
              BEYOND
              <br />
              NORMAL
              <br />
              BELIEFS
            </h1>
            <div className="space-y-2 pt-2 max-w-[180px]">
              <p className="font-['Inter'] font-extrabold text-[12px] leading-tight uppercase tracking-tight text-[#000000]">
                REAL
                <br />
                PROBLEMS.
                <br />
                UNEXPECTED
                <br />
                THINKING.
              </p>
              <div className="w-8 h-[2px] bg-[#000000]" />
            </div>
          </div>

          {/* Middle Volt Yellow Box (#CFFD3E): UNSERIOUS */}
          <div className="p-6 sm:p-10 bg-[#CFFD3E] border-b border-[#000000] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <h2 className="font-['Inter'] font-[900] text-[48px] sm:text-[64px] lg:text-[76px] leading-[90%] tracking-[-0.03em] uppercase text-[#000000]">
              UNSERIOUS
            </h2>
            <div className="space-y-2 max-w-[220px]">
              <blockquote className="font-['Inter'] font-bold text-[13px] leading-snug text-[#000000]">
                “Solve something that matters without being precious about it.”
              </blockquote>
              <div className="w-8 h-[2px] bg-[#000000]" />
            </div>
          </div>

          {/* Lower Box: Multidisciplinary designathon & Same sky */}
          <div className="p-6 sm:p-10 border-b border-[#000000] flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="max-w-[280px]">
              <p className="font-['Inter'] font-extrabold text-[11px] leading-relaxed uppercase text-[#000000]">
                A MULTIDISCIPLINARY DESIGNATHON WHERE REAL-WORLD PROBLEMS MOVE THROUGH
                <br />
                <span className="font-black">PROBLEM → PLAN → PROTOTYPE → PROOF.</span>
              </p>
            </div>
            <div className="space-y-2 max-w-[180px]">
              <p className="font-['Inter'] font-extrabold text-[12px] leading-tight uppercase text-[#000000]">
                SAME SKY.
                <br />
                DIFFERENT
                <br />
                QUESTIONS.
              </p>
              <div className="w-8 h-[2px] bg-[#000000]" />
            </div>
          </div>

          {/* Bottom Tag Bar of Left Column */}
          <div className="p-4 px-6 sm:px-10 flex items-center justify-between font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider bg-[#EDEDED]">
            <span>IITJ</span>
            <div className="border border-[#000000] px-4 py-1 text-[10px]">
              DESIGN & INNOVATION CHALLENGE -
            </div>
            <span>#BNB2026</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[52%] flex flex-col bg-white">
          {/* Top Timer & Gate Bar */}
          <div className="flex items-center justify-between border-b border-[#000000] bg-[#EDEDED]">
            <div className="p-4 sm:px-8 border-r border-[#000000] flex-1">
              <span className="font-['Inter'] font-extrabold text-[10px] tracking-widest text-gray-600 uppercase block">
                COUNTDOWN TO SUBMISSION
              </span>
              <span className="font-['Inter'] font-[900] text-[24px] sm:text-[32px] tracking-tight uppercase text-[#000000]">
                T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
              </span>
            </div>
            <div className="p-4 sm:px-8">
              <span className="font-['Inter'] font-extrabold text-[10px] tracking-widest text-gray-600 uppercase block">
                NEXT GATE
              </span>
              <span className="font-['Inter'] font-[900] text-[24px] sm:text-[32px] tracking-tight uppercase text-[#000000]">
                11 OCT
              </span>
            </div>
          </div>

          {/* Artwork SVG Container */}
          <div className="flex-1 min-h-[480px] bg-white relative overflow-hidden flex items-center justify-center p-0">
            <img
              src="/images/Unserious-image.svg"
              alt="UNSERIOUS Designathon SVG Artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ BOTTOM FOOTER BAR */}
      <footer className="w-full h-[48px] bg-[#EDEDED] flex items-center justify-between px-6 font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider border-t border-[#000000]">
        <span>27 SEP - 29 DEC | IIT JODHPUR</span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">IDEAS FOR A MORE INTERESTING TOMORROW.</span>
          <div className="w-6 h-6 bg-[#000000] text-white flex items-center justify-center text-xs font-black">
            *
          </div>
        </div>
      </footer>
    </div>
  );
}
