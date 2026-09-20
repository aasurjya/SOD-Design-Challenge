"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  ChevronRight,
  Clock,
  Compass,
  Layers,
  Sparkles,
  Zap,
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
    <div className="w-full space-y-12 font-sans bg-background text-foreground">
      {/* ------------------------------------------------ FIGMA NODE 193:3 HERO CONTAINER */}
      <div className="rounded-3xl border-2 border-border bg-card overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="border-b bg-slate-950 text-slate-100 py-3.5 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 font-black text-white text-xs shadow-md">
              IITJ
            </div>
            <div className="text-xs font-mono font-bold tracking-wider uppercase">
              IIT JODHPUR <span className="text-slate-400 font-normal">|</span> SCHOOL OF DESIGN
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-300">
            <a href="#ideas" className="hover:text-red-400 transition-colors">IDEAS</a>
            <a href="#people" className="hover:text-red-400 transition-colors">PEOPLE</a>
            <a href="#places" className="hover:text-red-400 transition-colors">PLACES</a>
            <a href="#possibilities" className="hover:text-red-400 transition-colors">POSSIBILITIES</a>
            <a href="#industry" className="text-amber-400 hover:underline font-bold flex items-center gap-1">
              FOR INDUSTRY →
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs font-mono uppercase border-slate-700 bg-slate-900 text-slate-200">
              Menu
            </Button>
            <Button size="sm" className="h-8 text-xs font-mono uppercase bg-red-600 hover:bg-red-700 text-white font-bold px-4">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b bg-slate-950 text-slate-100">
          {/* Left Column: Bold Typography & Vectors */}
          <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-red-400 border-red-500/40 bg-red-500/10 font-mono text-xs">
                  FIGMA CANVAS NODE-ID: 193-3
                </Badge>
                <span className="text-xs font-mono text-slate-400">#BNB2026 DESIGNATHON</span>
              </div>

              {/* Giant Brutalist Heading with red vector outlines */}
              <div className="relative">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.88] select-none">
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">BEYOND</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-600">NORMAL</span>
                  <br />
                  <span className="text-red-500 font-extrabold italic underline decoration-red-600 decoration-4">BELIEFS</span>
                </h1>
                <div className="absolute top-2 right-4 text-red-500 font-mono text-xl sm:text-3xl font-black animate-bounce">
                  ↗ » ⇡
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-mono max-w-xl leading-relaxed">
                REAL PROBLEMS. UNEXPECTED THINKING.
                <br />
                <span className="text-slate-400 text-xs">
                  A multidisciplinary designathon where real-world problems move through <span className="text-white font-bold">PROBLEM → PLAN → PROTOTYPE → PROOF</span>.
                </span>
              </p>
            </div>

            {/* Ethos Quote Block */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold">
                <span className="flex items-center gap-1">✦ UNSERIOUS ETHOS</span>
                <span>IIT JODHPUR</span>
              </div>
              <blockquote className="text-sm sm:text-base italic text-slate-200 font-medium">
                “Solve something that matters without being precious about it.”
              </blockquote>
            </div>
          </div>

          {/* Right Column: Timer & Artwork Poster */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900 flex flex-col justify-between space-y-6">
            {/* Timer Block */}
            <div className="p-6 rounded-2xl border-2 border-slate-700 bg-slate-950 text-center space-y-3 shadow-xl relative overflow-hidden">
              <div className="absolute top-2 right-2 text-slate-700 font-mono text-xs">✦ ✦ ✦</div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                COUNTDOWN TO SUBMISSION
              </div>

              {/* Large Brutalist Timer */}
              <div className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-white py-2 flex items-center justify-center gap-1">
                <span className="text-red-500">T-</span>
                <span>{timeLeft.days}</span>
                <span className="text-xs font-normal text-slate-400 self-end mb-1">D</span>
                <span className="mx-1 text-slate-600">:</span>
                <span>{timeLeft.hours}</span>
                <span className="text-xs font-normal text-slate-400 self-end mb-1">H</span>
                <span className="mx-1 text-slate-600">:</span>
                <span className="text-amber-400">{timeLeft.minutes}</span>
                <span className="text-xs font-normal text-slate-400 self-end mb-1">M</span>
              </div>

              <div className="text-xs font-mono text-amber-400 font-bold border-t border-slate-800 pt-2">
                27 SEP - 29 DEC | IIT JODHPUR CAMPUS
              </div>
            </div>

            {/* Poster Graphic */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl group">
              <img
                src="/images/unserious-image.jpg"
                alt="UNSERIOUS Designathon Artwork"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    UNSERIOUS #BNB2026
                  </span>
                  <Badge className="bg-red-600 text-white font-mono text-[10px]">
                    NODE 193:3 MATCH
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="p-6 sm:p-8 bg-foreground text-background border-b flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              SAME SKY. DIFFERENT QUESTIONS.
            </h2>
            <p className="text-xs sm:text-sm opacity-80 max-w-2xl font-mono">
              Exploring the edges of design, creativity, and unconventional thinking for a more interesting tomorrow.
            </p>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground font-bold text-xs uppercase px-6 gap-2 shrink-0">
            View Designathon Brief <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Tracks Grid: WORKSHOPS | TALKS | EXHIBITION */}
        <div className="p-6 sm:p-8 bg-card grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-background space-y-3 transition-transform hover:scale-[1.02]">
            <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">WORKSHOPS</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Hands-on rapid prototyping labs led by design directors and IIT Jodhpur faculty.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-background space-y-3 transition-transform hover:scale-[1.02]">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">TALKS</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Keynotes on brutalist design, AI interfaces, industrial products, and creative strategy.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-background space-y-3 transition-transform hover:scale-[1.02]">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">EXHIBITION</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Live stage pitch and physical/digital prototype showcase in December at IIT Jodhpur.
            </p>
          </div>
        </div>

        {/* Live Figma Node 193-3 Inspector Showcase */}
        <div className="p-6 border-t bg-slate-950 text-slate-100 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                <Compass className="h-4 w-4" /> Live Figma Canvas Node Render (`node-id=193-3`)
              </span>
              <p className="text-xs text-slate-400 font-mono">
                Direct Figma REST API payload rendering frame `71J7xt6jCh3nohTfer22uV`
              </p>
            </div>
            <Badge variant="outline" className="font-mono text-[10px] border-emerald-500/40 text-emerald-400">
              Figma URL Verified
            </Badge>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl group">
            <img
              src="/images/figma-node-193-3.jpg"
              alt="Figma Node 193-3 Landing Page Final Render"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white font-mono text-xs px-4 py-2 rounded-lg border border-slate-700 shadow-xl flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Figma Design File: 71J7xt6jCh3nohTfer22uV · Node 193:3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
