"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock,
  Sparkles,
  Zap,
  Globe,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BnbHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "06",
    hours: "11",
    minutes: "42",
    seconds: "18",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const seconds = String(60 - now.getSeconds()).padStart(2, "0");
      const minutes = String(60 - now.getMinutes()).padStart(2, "0");
      setTimeLeft((prev) => ({ ...prev, minutes, seconds }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-12">
      {/* Brand Header Banner */}
      <div className="border-b bg-card/60 backdrop-blur-md py-3 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 font-bold tracking-wider">
            <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground text-[11px]">IITJ</span>
            <span className="text-foreground uppercase">SCHOOL OF DESIGN · IIT JODHPUR</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-sans text-muted-foreground text-xs">
            <a href="#ideas" className="hover:text-primary transition-colors font-medium">IDEAS</a>
            <a href="#people" className="hover:text-primary transition-colors font-medium">PEOPLE</a>
            <a href="#places" className="hover:text-primary transition-colors font-medium">PLACES</a>
            <a href="#possibilities" className="hover:text-primary transition-colors font-medium">POSSIBILITIES</a>
            <a href="#industry" className="text-primary hover:underline font-bold flex items-center gap-1">
              FOR INDUSTRY <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Countdown To Submission Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-amber-500/10 to-emerald-500/10 p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Clock className="h-4 w-4 animate-pulse text-amber-500" />
              COUNTDOWN TO SUBMISSION · NEXT GATE: 11 OCT
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              IITJ DESIGN & INNOVATION CHALLENGE — #BNB2026
            </h3>
          </div>

          {/* Timer Display */}
          <div className="flex items-center gap-2 sm:gap-4 font-mono">
            <div className="flex flex-col items-center bg-background px-3 sm:px-4 py-2 rounded-xl border shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-primary">T-{timeLeft.days}D</span>
              <span className="text-[10px] text-muted-foreground uppercase">DAYS</span>
            </div>
            <span className="text-xl font-bold text-muted-foreground">:</span>
            <div className="flex flex-col items-center bg-background px-3 sm:px-4 py-2 rounded-xl border shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-amber-500">{timeLeft.hours}H</span>
              <span className="text-[10px] text-muted-foreground uppercase">HOURS</span>
            </div>
            <span className="text-xl font-bold text-muted-foreground">:</span>
            <div className="flex flex-col items-center bg-background px-3 sm:px-4 py-2 rounded-xl border shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-emerald-500">{timeLeft.minutes}M</span>
              <span className="text-[10px] text-muted-foreground uppercase">MINS</span>
            </div>
            <span className="text-xl font-bold text-muted-foreground">:</span>
            <div className="flex flex-col items-center bg-background px-3 sm:px-4 py-2 rounded-xl border shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-cyan-500">{timeLeft.seconds}S</span>
              <span className="text-[10px] text-muted-foreground uppercase">SECS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Header Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-1.5 text-xs font-extrabold tracking-wider border-primary/40 text-primary bg-primary/5 uppercase">
            SCHOOL OF DESIGN · IIT JODHPUR DESIGNATHON
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
            BEYOND <span className="text-primary font-normal italic">NORMAL</span> Beliefs
          </h1>

          <div className="inline-block px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono text-base sm:text-xl font-bold text-amber-600 dark:text-amber-400">
            REAL PROBLEMS. UNEXPECTED THINKING.
          </div>

          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A MULTIDISCIPLINARY DESIGNATHON WHERE REAL-WORLD PROBLEMS MOVE THROUGH{" "}
            <span className="font-bold text-foreground">PROBLEM → PLAN → PROTOTYPE → PROOF</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="px-8 font-bold text-sm shadow-xl gap-2">
              ENTER DESIGNATHON <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 font-bold text-sm gap-2">
              EXPLORE FIGMA FILE <Zap className="h-4 w-4 text-amber-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* UNSERIOUS Section with Image */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 bg-card overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          {/* Image Showcase */}
          <div className="relative min-h-[360px] bg-slate-950 flex items-center justify-center overflow-hidden group">
            <img
              src="/images/unserious-image.jpg"
              alt="UNSERIOUS Designathon IIT Jodhpur"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <Badge className="bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest">
                FEATURED THEME
              </Badge>
              <div className="text-2xl font-black text-white uppercase tracking-tight">
                UNSERIOUS #BNB2026
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-br from-card to-muted/40">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                PHILOSOPHY & ETHOS
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground uppercase">
                UNSERIOUS
              </h2>
              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-lg sm:text-xl font-medium text-foreground">
                “Solve something that matters without being precious about it.”
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Break rigid rules, experiment recklessly, iterate rapidly, and build solutions that work in the real world.
              </p>
            </div>

            <div className="pt-6 border-t border-dashed space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">EVENT DATES:</span>
                <span className="font-bold text-foreground">27 SEP - 29 DEC | IIT JODHPUR</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">TAGLINE:</span>
                <span className="font-bold text-primary">SAME SKY. DIFFERENT QUESTIONS.</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">VISION:</span>
                <span className="font-bold text-emerald-500">IDEAS FOR A MORE INTERESTING TOMORROW.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
