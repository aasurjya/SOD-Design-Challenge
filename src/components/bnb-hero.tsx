"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuDrawer } from "@/components/menu-drawer";
import { RegisterModal } from "@/components/register-modal";
import { IndustryModal } from "@/components/industry-modal";

export function BnbHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "06",
    hours: "11",
    minutes: "42",
    seconds: "18",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  // Live ticking countdown to Gate 01 deadline (05 Oct 2026 23:59:59 IST)
  useEffect(() => {
    const targetDate = new Date("2026-10-05T23:59:59+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        const nowObj = new Date();
        setTimeLeft({
          days: "06",
          hours: String(23 - nowObj.getHours()).padStart(2, "0"),
          minutes: String(59 - nowObj.getMinutes()).padStart(2, "0"),
          seconds: String(59 - nowObj.getSeconds()).padStart(2, "0"),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full max-w-[1383px] bg-[#EDEDED] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-['Inter',sans-serif] overflow-hidden select-none shadow-2xl transition-all">
        {/* ------------------------------------------------ TOP HEADER BAR (y: 0..56, h=56px) */}
        <header className="w-full h-[56px] border-b border-[#000000] flex flex-row justify-between items-center bg-[#EDEDED] p-0 box-border">
          {/* Left Logo Group: SCHOOL OF DESIGN | IIT JODHPUR */}
          <div className="flex flex-row items-center pl-4 sm:pl-6 gap-2 sm:gap-4 h-full shrink-0 group cursor-pointer">
            <span className="font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight uppercase group-hover:opacity-75 transition-opacity">
              SCHOOL OF DESIGN
            </span>
            <div className="w-[1px] h-[16px] bg-[#000000] group-hover:scale-y-125 transition-transform" />
            <span className="font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight uppercase group-hover:opacity-75 transition-opacity">
              IIT JODHPUR
            </span>
          </div>

          {/* Center Nav Links with Brutalist Hover States */}
          <nav className="hidden xl:flex items-center gap-5 font-extrabold text-[11px] leading-[13px] tracking-wider uppercase text-[#000000]">
            {[
              { label: "IDEAS", href: "#ideas" },
              { label: "PEOPLE", href: "#people" },
              { label: "PLACES", href: "#places" },
              { label: "POSSIBILITIES", href: "#possibilities" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1 border border-transparent hover:border-[#000000] hover:bg-[#CFFD3E] hover:text-[#000000] transition-all duration-150 rounded-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center h-full">
            {/* FOR INDUSTRY -> */}
            <button
              onClick={() => setIsIndustryOpen(true)}
              className="hidden md:flex items-center justify-center px-4 h-full border-l border-[#000000] font-extrabold text-[11px] leading-[13px] uppercase tracking-wider text-[#000000] hover:bg-[#CFFD3E] hover:text-[#000000] transition-colors duration-150"
            >
              FOR INDUSTRY →
            </button>

            {/* ENTER (Hover flips to Volt Yellow glow) */}
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="w-[72px] sm:w-[86px] h-full bg-[#000000] text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center border-l border-[#000000] hover:bg-[#CFFD3E] hover:text-[#000000] transition-colors duration-150 active:scale-95 cursor-pointer"
            >
              ENTER
            </button>

            {/* MENU (Hover flips to Black background) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-[64px] sm:w-[72px] h-full flex items-center justify-center border-l border-[#000000] cursor-pointer hover:bg-[#000000] hover:text-white transition-colors duration-150 active:scale-95"
            >
              <span className="font-extrabold text-[11px] uppercase tracking-wider">
                MENU
              </span>
            </button>

            {/* IIT Jodhpur Crest Seal with Hover scale */}
            <div
              onClick={() => setIsMenuOpen(true)}
              className="w-[50px] sm:w-[56px] h-full flex items-center justify-center border-l border-[#000000] bg-white p-1 shrink-0 cursor-pointer group"
            >
              <img
                src="/images/iitj-crest.png"
                alt="IIT Jodhpur Official Crest"
                className="w-8 sm:w-10 h-8 sm:h-10 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
            </div>
          </div>
        </header>

        {/* ------------------------------------------------ MAIN GRID CONTAINER (875px Left / 508px Right) */}
        <div className="w-full flex flex-col lg:flex-row items-stretch p-0">
          {/* ============================================== LEFT COLUMN (w: 875px on lg+, border-r: 1px) */}
          <div className="w-full lg:w-[875px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#000000] flex flex-col justify-between bg-[#EDEDED]">
            {/* Top Section: BEYOND NORMAL BELIEFS (487px spec) */}
            <div className="min-h-[360px] lg:h-[487px] border-b border-[#000000] p-6 sm:p-10 relative flex flex-col justify-between bg-[#EDEDED] group/top">
              {/* Giant Title: BEYOND NORMAL BELIEFS */}
              <h1 className="font-[900] text-[58px] sm:text-[88px] lg:text-[112px] leading-[88%] tracking-[-0.04em] uppercase text-[#000000] select-none cursor-default">
                <span className="inline-block transition-transform duration-200 hover:translate-x-2">
                  BEYOND
                </span>
                <br />
                <span className="inline-block transition-transform duration-200 hover:translate-x-2">
                  NORMAL
                </span>
                <br />
                <span className="inline-block transition-transform duration-200 hover:translate-x-2">
                  BELIEFS
                </span>
              </h1>

              {/* Subtext: REAL PROBLEMS. UNEXPECTED THINKING. */}
              <div className="space-y-1.5 pt-4 max-w-md group cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black" />
                  <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#000000] group-hover:text-neutral-700 transition-colors">
                    REAL PROBLEMS. UNEXPECTED THINKING.
                  </span>
                </div>
                <div className="w-8 group-hover:w-40 h-[2px] bg-[#000000] transition-all duration-300" />
              </div>
            </div>

            {/* Bottom Box of Left Column (230px spec) */}
            <div className="min-h-[160px] lg:h-[230px] p-6 sm:p-10 flex flex-col justify-between bg-[#EDEDED]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="max-w-md">
                  <p className="font-extrabold text-[11px] sm:text-[12px] leading-relaxed uppercase tracking-tight text-[#000000]">
                    A MULTIDISCIPLINARY DESIGNATHON WHERE REAL-WORLD PROBLEMS MOVE THROUGH
                    <br />
                    <span className="font-black text-black">PROBLEM → PLAN → PROTOTYPE → PROOF.</span>
                  </p>
                </div>

                <div className="space-y-1 max-w-[140px] shrink-0 group cursor-pointer">
                  <p className="font-extrabold text-[11px] leading-[13px] uppercase tracking-tight text-[#000000]">
                    SAME SKY.
                    <br />
                    DIFFERENT
                    <br />
                    QUESTIONS.
                  </p>
                  <div className="w-5 group-hover:w-full h-[2px] bg-[#000000] transition-all duration-300 mt-0.5" />
                </div>
              </div>

              {/* Bottom Tag Bar */}
              <div className="pt-4 mt-2 border-t border-[#000000] flex items-center justify-between font-extrabold text-[11px] uppercase tracking-wider">
                <span className="hover:opacity-70 cursor-pointer transition-opacity">IITJ</span>
                <div
                  onClick={() => setIsMenuOpen(true)}
                  className="border border-[#000000] px-3 sm:px-4 py-0.5 text-[9px] sm:text-[10px] leading-[14px] text-center hover:bg-[#000000] hover:text-[#FFFFFF] cursor-pointer transition-colors duration-150"
                >
                  DESIGN & INNOVATION CHALLENGE -
                </div>
                <span className="hover:text-neutral-600 cursor-pointer transition-colors">#BNB2026</span>
              </div>
            </div>
          </div>

          {/* ============================================== RIGHT COLUMN (w: 508px on lg+, EARLIER UNSERIOUS POSITION) */}
          <div className="w-full lg:w-[508px] shrink-0 flex flex-col bg-[#EDEDED]">
            {/* Top Box: UNSERIOUS Accent Frame with Iconic Artwork (487px spec, #CFFD3E) */}
            <div
              onClick={() => setIsRegisterOpen(true)}
              className="min-h-[440px] lg:h-[487px] bg-[#CFFD3E] hover:bg-[#bbf319] border-b border-[#000000] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-colors duration-200 group relative overflow-hidden"
            >
              {/* Header inside UNSERIOUS */}
              <div className="flex items-center justify-between z-10">
                <span className="font-extrabold text-[10px] sm:text-[11px] tracking-widest text-[#000000] uppercase block">
                  ✦ UNSERIOUS ETHOS
                </span>
                <span className="border border-black bg-black text-[#CFFD3E] font-mono text-[9px] font-black px-2 py-0.5 uppercase">
                  IIT JODHPUR
                </span>
              </div>

              {/* Main Artwork Showcase (The Balloon Cactus Dog) */}
              <div className="my-auto flex items-center justify-center py-2 relative z-10">
                <img
                  src="/images/unserious-extracted.png"
                  alt="UNSERIOUS Balloon Cactus Dog Artwork"
                  className="max-h-[220px] sm:max-h-[240px] lg:max-h-[260px] w-auto object-contain drop-shadow-xl group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                />
              </div>

              {/* Typography & Ethos Quote */}
              <div className="space-y-2 z-10">
                <h2 className="font-[900] text-[44px] sm:text-[52px] leading-none tracking-[-0.03em] uppercase text-[#000000] group-hover:tracking-normal transition-all duration-200">
                  UNSERIOUS
                </h2>
                <blockquote className="font-bold text-[12px] sm:text-[13px] leading-snug text-[#000000]">
                  “Solve something that matters without being precious about it.”
                </blockquote>
                <div className="w-8 group-hover:w-full h-[2px] bg-[#000000] transition-all duration-300 mt-1" />
              </div>

              {/* Bottom Year Strip inside UNSERIOUS */}
              <div className="pt-2 border-t border-black/20 flex items-center justify-between text-[10px] font-mono font-bold text-black z-10">
                <span>DESIGN & INNOVATION CHALLENGE</span>
                <span>2026</span>
              </div>
            </div>

            {/* Bottom Box: Countdown Timer & Gate 01 (230px spec) */}
            <div className="min-h-[160px] lg:h-[230px] p-6 sm:p-8 border-b border-[#000000] flex flex-col justify-between bg-[#EDEDED] hover:bg-[#e4e4e4] transition-colors group cursor-pointer">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="font-extrabold text-[9px] leading-[11px] tracking-widest text-[#000000] uppercase block">
                      COUNTDOWN TO SUBMISSION
                    </span>
                  </div>
                  <span className="text-[9px] font-mono font-extrabold text-neutral-500">
                    GATE 01
                  </span>
                </div>

                <div className="flex items-baseline gap-1 pt-1">
                  <span className="font-[900] text-[32px] sm:text-[38px] leading-tight tracking-tight uppercase text-[#000000] group-hover:tracking-normal transition-all">
                    T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
                  </span>
                  <span className="font-mono text-xs text-neutral-600 font-bold">
                    :{timeLeft.seconds}S
                  </span>
                </div>
              </div>

              {/* Gate & Elimination Status Bar */}
              <div className="pt-3 border-t border-black/20 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block font-bold">
                    NEXT GATE
                  </span>
                  <span className="text-sm font-[900] text-black">
                    11 OCT · PROBLEM REVIEW
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block font-bold">
                    LOCATION
                  </span>
                  <span className="text-xs font-bold text-black uppercase">
                    IIT JODHPUR CAMPUS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ BOTTOM FOOTER BAR (y: 733..773, h=40px) */}
        <footer className="w-full min-h-[40px] border-t border-[#000000] bg-[#EDEDED] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 sm:py-0 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider gap-2 sm:gap-0">
          <span className="hover:underline cursor-pointer">
            27 SEP - 29 DEC | IIT JODHPUR
          </span>
          <div className="flex items-center gap-3">
            <span className="hover:underline cursor-pointer">
              IDEAS FOR A MORE INTERESTING TOMORROW.
            </span>
            {/* Black Square Asterisk with Interactive Rotation and Color Flip */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="Scroll to Top"
              className="w-[32px] sm:w-[39px] h-[32px] sm:h-[38px] bg-[#000000] hover:bg-[#CFFD3E] hover:text-[#000000] text-white flex items-center justify-center text-sm font-black select-none shrink-0 cursor-pointer hover:rotate-180 transition-all duration-500 shadow-sm"
            >
              ✱
            </div>
          </div>
        </footer>
      </div>

      {/* Interactive Modals & Drawers */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenIndustry={() => setIsIndustryOpen(true)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <IndustryModal
        isOpen={isIndustryOpen}
        onClose={() => setIsIndustryOpen(false)}
      />
    </>
  );
}
