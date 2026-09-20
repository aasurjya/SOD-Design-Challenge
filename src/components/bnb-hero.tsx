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
    <div className="w-full max-w-[1383px] bg-[#EDEDED] text-[#000000] border border-[#000000] flex flex-col items-start p-0 relative font-sans overflow-hidden shadow-2xl">
      {/* ------------------------------------------------ FIGMA NODE 193:3 HEADER (56px) */}
      <header className="w-full h-[56px] border-b border-[#000000] flex flex-row justify-between items-center px-0 bg-[#EDEDED] box-sizing-border select-none">
        {/* Logo Group */}
        <div className="flex flex-row items-center pl-6 gap-4 h-full">
          <span className="font-['Inter'] font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight">
            SCHOOL OF DESIGN
          </span>
          <div className="w-[1px] h-[16px] bg-[#000000]" />
          <span className="font-['Inter'] font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-tight">
            IIT JODHPUR
          </span>
        </div>

        {/* Event Tag */}
        <div className="flex flex-row justify-center items-center px-6 gap-[10px] h-[56px] border-l border-[#000000]">
          <span className="font-['Inter'] font-extrabold text-[11px] leading-[13px] text-[#000000] tracking-widest">
            #BNB2026
          </span>
        </div>
      </header>

      {/* ------------------------------------------------ MAIN BODY FRAME (717px) */}
      <div className="w-full min-h-[717px] flex flex-col lg:flex-row items-start p-0">
        {/* Left Column (875px spec) */}
        <div className="w-full lg:w-[875px] min-h-[717px] flex flex-col items-start border-b lg:border-b-0 lg:border-r border-[#000000] shrink-0">
          {/* Top Box: BEYOND NORMAL BELIEFS (487px spec) */}
          <div className="w-full h-[487px] p-[24px] sm:p-[48px] border-b border-[#000000] flex flex-col justify-center bg-[#EDEDED]">
            <h1 className="font-['Inter'] font-[900] text-[52px] sm:text-[88px] lg:text-[120px] leading-[90%] tracking-[-0.04em] uppercase text-[#000000] select-none">
              BEYOND
              <br />
              NORMAL
              <br />
              BELIEFS
            </h1>
          </div>

          {/* Bottom Box: Ethos / Subtitle (230px spec) */}
          <div className="w-full h-[230px] p-[24px] sm:p-[48px] gap-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#EDEDED]">
            <div className="space-y-2">
              <span className="font-['Inter'] font-black text-xs sm:text-sm tracking-wider uppercase text-[#000000] block">
                REAL PROBLEMS. UNEXPECTED THINKING.
              </span>
              <p className="font-['Inter'] text-xs text-gray-700 max-w-lg leading-relaxed">
                A multidisciplinary designathon where real-world problems move through{" "}
                <span className="font-extrabold text-[#000000]">PROBLEM → PLAN → PROTOTYPE → PROOF</span>.
              </p>
            </div>
            <div className="text-2xl font-black text-[#000000] shrink-0">
              ↘
            </div>
          </div>
        </div>

        {/* Right Column (508px spec) */}
        <div className="w-full lg:w-[508px] min-h-[717px] flex flex-col items-start shrink-0">
          {/* Top Box: UNSERIOUS Accent Frame (487px spec, #CFFD3E) */}
          <div className="w-full h-[487px] p-[24px] sm:p-[48px] bg-[#CFFD3E] border-b border-[#000000] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-['Inter'] font-black text-xs tracking-widest text-[#000000] uppercase block">
                ✦ UNSERIOUS ETHOS
              </span>
              <h2 className="font-['Inter'] font-[900] text-[48px] sm:text-[64px] leading-[95%] tracking-[-0.03em] uppercase text-[#000000]">
                UNSERIOUS
              </h2>
              <p className="font-['Inter'] font-bold text-sm sm:text-base text-[#000000] leading-snug">
                “Solve something that matters without being precious about it.”
              </p>
            </div>

            <div className="pt-6 border-t border-[#000000]/20 flex items-center justify-between">
              <span className="font-['Inter'] font-extrabold text-xs uppercase tracking-wider text-[#000000]">
                DESIGN & INNOVATION CHALLENGE
              </span>
              <span className="font-['Inter'] font-black text-xs text-[#000000]">
                2026
              </span>
            </div>
          </div>

          {/* Bottom Box: Countdown Timer (230px spec) */}
          <div className="w-full h-[230px] p-[24px] sm:p-[48px] gap-[10px] border-b border-[#000000] flex flex-col justify-center bg-[#EDEDED]">
            <span className="font-['Inter'] font-bold text-xs tracking-widest uppercase text-gray-600 block">
              SUBMISSION COUNTDOWN
            </span>
            <div className="font-['Inter'] font-[800] text-[32px] sm:text-[40px] leading-[48px] tracking-[-0.02em] text-[#000000]">
              T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
            </div>
            <span className="font-['Inter'] font-semibold text-xs text-gray-500 block pt-1">
              GATE 01 CLOSES SOON · IIT JODHPUR CAMPUS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
