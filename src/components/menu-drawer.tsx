"use client";

import type { RefObject } from "react";
import { X, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenIndustry: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const navigationLinks = [
  { label: "IDEAS", href: "#ideas", desc: "Unexpected multidisciplinary concepts" },
  { label: "PEOPLE", href: "#people", desc: "Design leaders, jury & innovators" },
  { label: "PLACES", href: "#places", desc: "IIT Jodhpur Campus labs & facilities" },
  { label: "POSSIBILITIES", href: "#possibilities", desc: "From Problem to Proof" },
  { label: "PROBLEM PHASE (FINAL 2)", href: "#final-2", desc: "Gate 01 validation criteria" },
  { label: "JOURNEY & TEAM (FINAL 3)", href: "#final-3", desc: "Timeline, disciplines & outcomes" },
  { label: "QUESTIONS (FINAL 4)", href: "#final-4", desc: "FAQ states & participation gaps" },
  { label: "TEAM DETAILS", href: "/team", desc: "Active roster, mentors & dossier" },
];

export function MenuDrawer({
  isOpen,
  onClose,
  onOpenRegister,
  onOpenIndustry,
  returnFocusRef,
}: MenuDrawerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        presentation="drawer"
        showCloseButton={false}
        overlayClassName="bg-black/60 supports-backdrop-filter:backdrop-blur-sm"
        onCloseAutoFocus={(event) => {
          if (returnFocusRef?.current) {
            event.preventDefault();
            returnFocusRef.current.focus();
          }
        }}
        className="overflow-y-auto border-l-2 border-black bg-[#EDEDED] text-black shadow-2xl"
      >
        <div className="h-[55px] border-b border-black flex items-center justify-between px-6 bg-[#EDEDED] sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-2 font-extrabold text-[12px] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#CFFD3E] border border-black" aria-hidden="true" />
            <DialogTitle>NAVIGATION / SOD #BNB2026</DialogTitle>
          </div>

          <DialogClose
            aria-label="Close menu"
            className="w-11 h-11 -mr-2 flex items-center justify-center border border-black hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </DialogClose>
        </div>
        <DialogDescription className="sr-only">
          Site navigation, challenge dates, venue details, and participation actions.
        </DialogDescription>

        <div className="p-6 sm:p-8 space-y-8 flex-1">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest text-neutral-500 uppercase block">
              01 · DIRECTORY
            </span>
            <nav aria-label="Primary" className="flex flex-col space-y-1">
              {navigationLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="p-3 border border-transparent hover:border-black hover:bg-white flex items-center justify-between transition-colors group focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
                >
                  <div>
                    <span className="font-[900] text-lg sm:text-xl tracking-tight uppercase block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-neutral-600 block">
                      {item.desc}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <div className="p-4 border border-black bg-white space-y-3">
            <span className="text-[10px] font-extrabold tracking-widest text-black uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> KEY GATES & TIMELINE
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

          <div className="p-4 border border-black bg-[#F3F4F6] space-y-2 text-[11px]">
            <span className="font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> CAMPUS VENUE
            </span>
            <p className="text-neutral-700 leading-snug">
              School of Design (SOD), Indian Institute of Technology Jodhpur, NH 62, Nagaur Road, Karwar, Jodhpur, Rajasthan 342037.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={onOpenRegister}
              className="w-full h-12 bg-black hover:bg-neutral-800 text-white font-[900] text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            >
              REGISTER / ENTER CHALLENGE <ArrowUpRight className="w-4 h-4 text-[#CFFD3E]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onOpenIndustry}
              className="w-full h-10 border border-black bg-white hover:bg-neutral-100 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            >
              FOR INDUSTRY & SPONSORS →
            </button>
          </div>
        </div>

        <div className="p-4 px-6 border-t border-black bg-white flex items-center justify-between text-[10px] font-mono font-bold text-neutral-500 shrink-0">
          <span>#BNB2026 OFFICIAL</span>
          <span>SOD IIT JODHPUR</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
