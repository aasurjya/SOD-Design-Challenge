"use client";

import { useEffect } from "react";
import { X, ArrowUpRight, Calendar, MapPin, Download, BookOpen, Mail, ShieldAlert } from "lucide-react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenIndustry: () => void;
}

export function MenuDrawer({
  isOpen,
  onClose,
  onOpenRegister,
  onOpenIndustry,
}: MenuDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Content */}
      <div className="relative w-full max-w-md bg-[#EDEDED] text-[#000000] border-l-2 border-[#000000] h-full overflow-y-auto shadow-2xl flex flex-col justify-between font-['Inter',sans-serif] z-10">
        {/* Drawer Header */}
        <div className="h-[55px] border-b border-[#000000] flex items-center justify-between px-6 bg-[#EDEDED] sticky top-0 z-20">
          <div className="flex items-center gap-2 font-extrabold text-[12px] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#CFFD3E] border border-black" />
            <span>NAVIGATION / SOD #BNB2026</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center border border-[#000000] hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Main Links */}
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-neutral-500 uppercase block">
              01 · DIRECTORY
            </span>
            <div className="flex flex-col space-y-1">
              {[
                { label: "IDEAS", href: "#ideas", desc: "Unexpected multidisciplinary concepts" },
                { label: "PEOPLE", href: "#people", desc: "Design leaders, jury & innovators" },
                { label: "PLACES", href: "#places", desc: "IIT Jodhpur Campus labs & facilities" },
                { label: "POSSIBILITIES", href: "#possibilities", desc: "From Problem to Proof" },
                { label: "PROBLEM PHASE (FINAL 2)", href: "#final-2", desc: "Gate 01 validation criteria" },
                { label: "PLAN PHASE (FINAL 3)", href: "#final-3", desc: "Gate 02 system blueprint" },
                { label: "TEAM DETAILS", href: "/team", desc: "Active roster, mentors & dossier" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="p-3 border border-transparent hover:border-[#000000] hover:bg-white flex items-center justify-between transition-all group"
                >
                  <div>
                    <span className="font-[900] text-lg sm:text-xl tracking-tight uppercase block group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-neutral-600 block">
                      {item.desc}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Key Milestones */}
          <div className="p-4 border border-[#000000] bg-white space-y-3">
            <span className="text-[10px] font-extrabold tracking-widest text-[#000000] uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> KEY GATES & TIMELINE
            </span>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between border-b border-neutral-200 pb-1">
                <span className="font-bold">05 OCT</span>
                <span className="font-mono text-neutral-600">GATE 01: PROBLEM PROOF DEADLINE</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-1">
                <span className="font-bold">11 OCT</span>
                <span className="font-mono text-neutral-600">ELIMINATION & JURY REVIEW</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-black">27-29 DEC</span>
                <span className="font-bold bg-[#CFFD3E] px-1.5 py-0.5 border border-black text-[10px]">
                  ON-CAMPUS FINALE @ IIT JODHPUR
                </span>
              </div>
            </div>
          </div>

          {/* Venue & SOD Info */}
          <div className="p-4 border border-[#000000] bg-[#F3F4F6] space-y-2 text-[11px]">
            <span className="font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> CAMPUS VENUE
            </span>
            <p className="text-neutral-700 leading-snug">
              School of Design (SOD), Indian Institute of Technology Jodhpur, NH 62, Nagaur Road, Karwar, Jodhpur, Rajasthan 342037.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full h-12 bg-[#000000] hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#000000] transition-colors"
            >
              REGISTER / ENTER CHALLENGE <ArrowUpRight className="w-4 h-4 text-[#CFFD3E]" />
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenIndustry();
              }}
              className="w-full h-10 border border-[#000000] bg-white hover:bg-neutral-100 text-[#000000] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              FOR INDUSTRY & SPONSORS →
            </button>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 px-6 border-t border-[#000000] bg-white flex items-center justify-between text-[10px] font-mono font-bold text-neutral-500">
          <span>#BNB2026 OFFICIAL</span>
          <span>SOD IIT JODHPUR</span>
        </div>
      </div>
    </div>
  );
}
