"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuDrawer } from "@/components/menu-drawer";
import { RegisterModal } from "@/components/register-modal";
import { IndustryModal } from "@/components/industry-modal";

const navItems = [
  { label: "IDEAS", href: "#ideas" },
  { label: "PEOPLE", href: "#people" },
  { label: "PLACES", href: "#places" },
  { label: "POSSIBILITIES", href: "#possibilities" },
];

export function BnbHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isExpired: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const registerTriggerRef = useRef<HTMLElement | null>(null);
  const industryTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-10-05T23:59:59+05:30").getTime();

    const updateTimer = () => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: String(Math.floor(distance / 86_400_000)).padStart(2, "0"),
          hours: String(Math.floor((distance % 86_400_000) / 3_600_000)).padStart(2, "0"),
          minutes: String(Math.floor((distance % 3_600_000) / 60_000)).padStart(2, "0"),
          seconds: String(Math.floor((distance % 60_000) / 1_000)).padStart(2, "0"),
          isExpired: false,
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00", isExpired: true });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const openMenu = (trigger: HTMLButtonElement) => {
    menuTriggerRef.current = trigger;
    setIsMenuOpen(true);
  };

  const openRegister = (trigger: HTMLElement | null) => {
    registerTriggerRef.current = trigger;
    setIsMenuOpen(false);
    setIsRegisterOpen(true);
  };

  const openIndustry = (trigger: HTMLElement | null) => {
    industryTriggerRef.current = trigger;
    setIsMenuOpen(false);
    setIsIndustryOpen(true);
  };

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <section
        id="landing-page-final"
        className="relative w-full max-w-[1383px] bg-[#EDEDED] text-black border border-black font-sans select-none"
      >
        <header className="h-14 border-b border-black flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6 h-full">
            <span className="font-extrabold text-[11px] uppercase whitespace-nowrap">
              SCHOOL OF DESIGN
            </span>
            <span className="hidden min-[420px]:block h-4 border-l border-black" aria-hidden="true" />
            <span className="hidden min-[420px]:inline font-semibold text-[11px] uppercase whitespace-nowrap">
              IIT JODHPUR
            </span>
          </div>

          <nav className="hidden min-[1383px]:flex items-center gap-6 font-semibold text-[11px] uppercase">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:bg-[#CFFD3E] transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center h-full">
            <button
              type="button"
              onClick={(event) => openIndustry(event.currentTarget)}
              className="hidden md:flex h-full w-[135px] items-center justify-center border-x border-black font-bold text-[11px] uppercase hover:bg-[#CFFD3E] transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            >
              FOR INDUSTRY →
            </button>
            <button
              type="button"
              onClick={(event) => openRegister(event.currentTarget)}
              className="h-full w-16 sm:w-[85px] bg-black text-white font-extrabold text-[11px] uppercase hover:bg-[#CFFD3E] hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            >
              ENTER
            </button>
            <button
              type="button"
              onClick={(event) => openMenu(event.currentTarget)}
              className="h-full w-16 sm:w-[73px] border-x border-black font-bold text-[11px] uppercase hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            >
              MENU
            </button>
            <button
              type="button"
              onClick={(event) => openMenu(event.currentTarget)}
              className="hidden sm:flex h-full w-14 bg-white items-center justify-center focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
              aria-label="Open menu"
            >
              <Image
                src="/images/iitj-crest.png"
                alt="IIT Jodhpur crest"
                width={47}
                height={52}
                className="h-[52px] w-[47px] object-contain"
              />
            </button>
          </div>
        </header>

        <div className="flex flex-col min-[1383px]:h-[677px] min-[1383px]:flex-row">
          <div className="min-[1383px]:w-[576px] shrink-0 border-b min-[1383px]:border-b-0 min-[1383px]:border-r border-black flex flex-col">
            <div className="min-h-[320px] min-[1383px]:h-[354px] px-6 pt-8 pb-4 flex flex-col min-[1383px]:flex-row min-[1383px]:items-start min-[1383px]:justify-between gap-6">
              <h1 className="font-display font-black text-[76px] sm:text-[104px] min-[1383px]:text-[124px] leading-[0.88] tracking-[-1px] uppercase whitespace-nowrap">
                <span className="block">BEYOND</span>
                <span className="block">NORMAL</span>
                <span className="block">BELIEFS</span>
              </h1>
              <div className="w-[140px] pt-2 flex flex-col gap-3">
                <p className="font-bold text-[11px] leading-[1.3] uppercase">
                  REAL<br />PROBLEMS.<br />UNEXPECTED<br />THINKING.
                </p>
                <span className="w-5 border-t-2 border-black" aria-hidden="true" />
              </div>
            </div>

            <div className="hidden min-[1383px]:block h-[51px]" aria-hidden="true" />

            <div className="min-h-[117px] bg-[#CFFD3E] border-y border-black px-6 py-5 flex items-center justify-between gap-6">
              <h2 className="font-black text-[44px] sm:text-[56px] min-[1383px]:text-[64px] leading-none tracking-[-1.28px] uppercase whitespace-nowrap">
                UNSERIOUS
              </h2>
              <div className="hidden sm:flex w-[112px] flex-col gap-2">
                <p className="font-semibold text-[11px] leading-[1.3]">
                  “Solve something that matters without being precious about it.”
                </p>
                <span className="w-3 border-t border-black" aria-hidden="true" />
              </div>
            </div>

            <div className="min-h-[106px] px-6 pt-8 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <p className="max-w-[280px] font-bold text-[11px] leading-[1.4] uppercase">
                A MULTIDISCIPLINARY DESIGNATHON WHERE REAL-WORLD PROBLEMS MOVE THROUGH PROBLEM → PLAN → PROTOTYPE → PROOF.
              </p>
              <div className="w-[160px] flex flex-col gap-2">
                <p className="font-bold text-[11px] leading-[1.3] uppercase">
                  SAME SKY.<br />DIFFERENT<br />QUESTIONS.
                </p>
                <span className="w-4 border-t border-black" aria-hidden="true" />
              </div>
            </div>

            <div className="min-h-[49px] border-t border-black px-6 py-3 flex items-center justify-between gap-4 font-bold text-[11px] uppercase">
              <span>IITJ</span>
              <button
                type="button"
                onClick={(event) => openMenu(event.currentTarget)}
                className="border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
              >
                DESIGN &amp; INNOVATION CHALLENGE -
              </button>
              <span>#BNB2026</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="h-[72px] border-b border-black flex">
              <div className="flex-1 border-r border-black px-5 py-3">
                <p className="font-extrabold text-[9px] uppercase">
                  {timeLeft.isExpired ? "SUBMISSION CLOSED" : "COUNTDOWN TO SUBMISSION"}
                </p>
                <p className="font-black text-[18px] tabular-nums">
                  T-{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
                </p>
              </div>
              <div className="w-[110px] px-4 py-3">
                <p className="font-extrabold text-[9px] uppercase">NEXT GATE</p>
                <p className="font-black text-[18px]">11 OCT</p>
              </div>
            </div>
            <div className="hidden min-[1383px]:block flex-1" aria-hidden="true" />
          </div>
        </div>

        <div className="unserious-image" aria-hidden="true" />

        <footer className="h-10 border-t border-black flex">
          <div className="flex-1 px-6 flex items-center justify-between gap-4 font-bold text-[10px] uppercase">
            <span>27 SEP - 29 DEC | IIT JODHPUR</span>
            <span className="hidden sm:inline">IDEAS FOR A MORE INTERESTING TOMORROW.</span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 bg-black border-l border-black text-white text-[20px] leading-none hover:bg-[#CFFD3E] hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-[#CFFD3E] focus-visible:outline-offset-2"
            aria-label="Scroll to top"
          >
            ✱
          </button>
        </footer>

      </section>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenRegister={() => openRegister(menuTriggerRef.current)}
        onOpenIndustry={() => openIndustry(menuTriggerRef.current)}
        returnFocusRef={menuTriggerRef}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        returnFocusRef={registerTriggerRef}
      />
      <IndustryModal
        isOpen={isIndustryOpen}
        onClose={() => setIsIndustryOpen(false)}
        returnFocusRef={industryTriggerRef}
      />
    </>
  );
}
