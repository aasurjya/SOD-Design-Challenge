"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="w-full max-w-[1383px] bg-[#EDEDED] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-['Inter',sans-serif] overflow-hidden select-none shadow-2xl">
      {/* ------------------------------------------------ TOP HEADER BAR (y: 0..55, h=55px) */}
      <header className="w-full h-[55px] border-b border-[#000000] flex flex-row justify-between items-center bg-[#EDEDED] p-0 box-border">
        {/* Left Logo Group: SCHOOL OF DESIGN | IIT JODHPUR */}
        <div className="flex flex-row items-center pl-6 gap-4 h-full">
          <span className="font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight uppercase">
            SCHOOL OF DESIGN
          </span>
          <div className="w-[1px] h-[16px] bg-[#000000]" />
          <span className="font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight uppercase">
            IIT JODHPUR
          </span>
        </div>

        {/* Center Nav: IDEAS PEOPLE PLACES POSSIBILITIES */}
        <nav className="hidden lg:flex items-center gap-7 font-extrabold text-[11px] leading-[13px] tracking-wider uppercase text-[#000000]">
          <a href="#ideas" className="hover:opacity-60 transition-opacity">IDEAS</a>
          <a href="#people" className="hover:opacity-60 transition-opacity">PEOPLE</a>
          <a href="#places" className="hover:opacity-60 transition-opacity">PLACES</a>
          <a href="#possibilities" className="hover:opacity-60 transition-opacity">POSSIBILITIES</a>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center h-full">
          {/* FOR INDUSTRY -> */}
          <div className="hidden sm:flex items-center justify-center px-4 h-full border-l border-[#000000]">
            <a
              href="#industry"
              className="font-extrabold text-[11px] leading-[13px] uppercase tracking-wider text-[#000000] hover:underline"
            >
              FOR INDUSTRY →
            </a>
          </div>

          {/* ENTER (w: 86px, h: 55px, bg: #000000, text: white) */}
          <button className="w-[86px] h-full bg-[#000000] text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center border-l border-[#000000] hover:bg-neutral-800 transition-colors">
            ENTER
          </button>

          {/* MENU (w: 72px, h: 55px) */}
          <div className="w-[72px] h-full flex items-center justify-center border-l border-[#000000] cursor-pointer hover:bg-neutral-200 transition-colors">
            <span className="font-extrabold text-[11px] uppercase tracking-wider text-[#000000]">
              MENU
            </span>
          </div>

          {/* IIT Jodhpur Crest Seal (x: 1327..1382, w: 55px) */}
          <div className="w-[56px] h-full flex items-center justify-center border-l border-[#000000] bg-white p-1">
            <img
              src="/images/iitj-crest.png"
              alt="IIT Jodhpur Official Crest"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </header>

      {/* ------------------------------------------------ MAIN GRID CONTAINER (y: 55..733, h=678px) */}
      <div className="w-full flex flex-col lg:flex-row items-stretch p-0">
        {/* ============================================== LEFT COLUMN (w: 575px, border-r: 1px) */}
        <div className="w-full lg:w-[575px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#000000] flex flex-col justify-between bg-[#EDEDED]">
          {/* Top Section: BEYOND NORMAL BELIEFS + REAL PROBLEMS (y: 55..461, h=406px) */}
          <div className="h-[406px] border-b border-[#000000] p-6 sm:p-7 relative flex flex-row justify-between items-start bg-[#EDEDED]">
            {/* Giant Title: BEYOND NORMAL BELIEFS */}
            <h1 className="font-[900] text-[68px] sm:text-[84px] leading-[88%] tracking-[-0.04em] uppercase text-[#000000] select-none">
              BEYOND
              <br />
              NORMAL
              <br />
              BELIEFS
            </h1>

            {/* Subtext: REAL PROBLEMS. UNEXPECTED THINKING. */}
            <div className="space-y-1.5 pt-2 max-w-[125px]">
              <p className="font-extrabold text-[11px] leading-[14px] uppercase tracking-tight text-[#000000]">
                REAL
                <br />
                PROBLEMS.
                <br />
                UNEXPECTED
                <br />
                THINKING.
              </p>
              <div className="w-6 h-[2px] bg-[#000000] mt-1" />
            </div>
          </div>

          {/* Middle Volt Yellow Accent Box: UNSERIOUS (y: 461..577, h=116px, bg: #CFFD3E) */}
          <div className="h-[116px] bg-[#CFFD3E] border-b border-[#000000] px-6 sm:px-7 flex flex-row justify-between items-center">
            <h2 className="font-[900] text-[52px] sm:text-[58px] leading-none tracking-[-0.03em] uppercase text-[#000000]">
              UNSERIOUS
            </h2>

            <div className="space-y-1 max-w-[150px]">
              <blockquote className="font-bold text-[11px] leading-[13px] text-[#000000]">
                “Solve something that matters without being precious about it.”
              </blockquote>
              <div className="w-5 h-[2px] bg-[#000000] mt-0.5" />
            </div>
          </div>

          {/* Lower Section: Multidisciplinary designathon & Same sky (y: 577..684, h=107px) */}
          <div className="h-[107px] border-b border-[#000000] px-6 sm:px-7 flex flex-row justify-between items-center bg-[#EDEDED]">
            <div className="max-w-[260px]">
              <p className="font-extrabold text-[10px] leading-[14px] uppercase tracking-tight text-[#000000]">
                A MULTIDISCIPLINARY DESIGNATHON WHERE REAL-WORLD PROBLEMS MOVE THROUGH
                <br />
                <span className="font-black">PROBLEM → PLAN → PROTOTYPE → PROOF.</span>
              </p>
            </div>

            <div className="space-y-1 max-w-[110px]">
              <p className="font-extrabold text-[11px] leading-[13px] uppercase tracking-tight text-[#000000]">
                SAME SKY.
                <br />
                DIFFERENT
                <br />
                QUESTIONS.
              </p>
              <div className="w-5 h-[2px] bg-[#000000] mt-0.5" />
            </div>
          </div>

          {/* Bottom Tag Bar: IITJ [DESIGN & INNOVATION CHALLENGE -] #BNB2026 (y: 684..733, h=49px) */}
          <div className="h-[49px] px-6 sm:px-7 flex items-center justify-between font-extrabold text-[11px] uppercase tracking-wider bg-[#EDEDED]">
            <span>IITJ</span>
            <div className="border border-[#000000] px-4 py-0.5 text-[10px] leading-[14px]">
              DESIGN & INNOVATION CHALLENGE -
            </div>
            <span>#BNB2026</span>
          </div>
        </div>

        {/* ============================================== RIGHT COLUMN (w: 808px) */}
        <div className="w-full lg:flex-1 flex flex-col bg-[#EDEDED]">
          {/* Top Timer & Gate Bar (y: 55..127, h=72px) */}
          <div className="h-[72px] flex items-stretch border-b border-[#000000] bg-[#EDEDED]">
            {/* COUNTDOWN TO SUBMISSION (w: ~697px) */}
            <div className="flex-1 px-6 sm:px-8 flex flex-col justify-center border-r border-[#000000]">
              <span className="font-extrabold text-[9px] leading-[11px] tracking-widest text-[#000000] uppercase block">
                COUNTDOWN TO SUBMISSION
              </span>
              <span className="font-[900] text-[26px] sm:text-[32px] leading-tight tracking-tight uppercase text-[#000000]">
                T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
              </span>
            </div>

            {/* NEXT GATE 11 OCT (w: ~111px) */}
            <div className="w-[111px] sm:w-[130px] px-4 sm:px-6 flex flex-col justify-center shrink-0">
              <span className="font-extrabold text-[9px] leading-[11px] tracking-widest text-[#000000] uppercase block">
                NEXT GATE
              </span>
              <span className="font-[900] text-[26px] sm:text-[32px] leading-tight tracking-tight uppercase text-[#000000]">
                11 OCT
              </span>
            </div>
          </div>

          {/* Right Main Artwork Canvas (y: 127..733, h=606px) */}
          <div className="w-full h-[606px] relative overflow-hidden bg-[#EDEDED] flex items-center justify-center p-0">
            <img
              src="/images/Unserious-image.svg"
              alt="UNSERIOUS Artwork Vector Pattern"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ BOTTOM FOOTER BAR (y: 733..773, h=40px) */}
      <footer className="w-full h-[40px] border-t border-[#000000] bg-[#EDEDED] flex items-center justify-between px-6 font-extrabold text-[11px] uppercase tracking-wider">
        <span>27 SEP - 29 DEC | IIT JODHPUR</span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">IDEAS FOR A MORE INTERESTING TOMORROW.</span>
          {/* Black Square Asterisk (39px x 38px) */}
          <div className="w-[39px] h-[38px] bg-[#000000] text-white flex items-center justify-center text-sm font-black select-none">
            ✱
          </div>
        </div>
      </footer>
    </div>
  );
}
