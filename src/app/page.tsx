import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Clock3,
  Compass,
  Flag,
  Globe,
  Layers,
  MapPin,
  Menu as MenuIcon,
  Plus,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

import { BnbHero } from "@/components/bnb-hero";
import { Final2Phase } from "@/components/final2-phase";
import { FigmaLandingImporter } from "@/components/figma-landing-importer";
import { FigmaNodeVisualizer } from "@/components/figma-node-visualizer";
import { FigmaIntegration } from "@/components/figma-integration";
import { LofiWireframe } from "@/components/lofi-wireframe";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDEDED] text-black font-sans selection:bg-[#CFFD3E] selection:text-black">
      {/* ---------------------------------------------------------- TOP BRAND BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-black bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-[1383px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xs tracking-wider uppercase font-mono bg-black text-white px-2 py-0.5 rounded-sm">
              IITJ
            </span>
            <span className="font-extrabold text-xs tracking-wider uppercase font-sans">
              School of Design
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-mono">|</span>
            <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase font-sans text-gray-700">
              IIT Jodhpur
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold font-mono uppercase tracking-wider">
            <a href="#bnb-hero" className="hover:text-red-600 transition-colors">
              Ideas
            </a>
            <a href="#problem-phase" className="hover:text-red-600 transition-colors">
              Problem Phase
            </a>
            <a href="#importer" className="hover:text-red-600 transition-colors">
              Figma Importer
            </a>
            <a href="#credentials" className="hover:text-red-600 transition-colors">
              API Credentials
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#problem-phase"
              className="hidden sm:flex items-center gap-1 border border-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              For Industry →
            </a>
            <a
              href="#problem-phase"
              className="flex items-center bg-black px-5 py-1.5 text-xs font-extrabold uppercase text-white hover:bg-gray-800 transition-colors"
            >
              Enter
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------ MAIN CANVAS */}
      <main className="mx-auto max-w-[1383px] px-4 sm:px-6 py-6 space-y-12">
        {/* Figma Design Banner Spec Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg border border-black bg-white text-xs font-mono">
          <div className="flex items-center gap-2">
            <Badge className="bg-red-600 text-white font-mono text-[10px] uppercase">
              SINGLE TARGET FIGMA DESIGN
            </Badge>
            <span className="font-bold text-black">File Key: 71J7xt6jCh3nohTfer22uV</span>
            <span className="text-gray-500">· Node ID: 193-3 & 193-4</span>
          </div>
          <a
            href="https://www.figma.com/design/71J7xt6jCh3nohTfer22uV/Design-Challenge?node-id=193-3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
          >
            Open Source File in Figma <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* ------------------------------------ 1. LANDING PAGE FINAL (NODE 193:3) */}
        <section id="bnb-hero">
          <BnbHero />
        </section>

        {/* ------------------------------------ 2. FINAL 2 PROBLEM PHASE (NODE 193:4) */}
        <section id="problem-phase">
          <Final2Phase />
        </section>

        {/* ------------------------------------ 3. FIGMA LIVE NODE INSPECTOR */}
        <section id="node-inspector">
          <FigmaNodeVisualizer />
        </section>

        {/* ------------------------------------ 4. FIGMA REST API AUTO IMPORTER */}
        <section id="importer" className="space-y-4">
          <div className="text-center space-y-1 max-w-2xl mx-auto">
            <Badge variant="outline" className="text-xs font-mono border-black text-black">
              FIGMA REST API V1 CONNECTED
            </Badge>
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Figma Design Token & Code Exporter
            </h2>
          </div>
          <FigmaLandingImporter />
        </section>

        {/* ------------------------------------ 5. LO-FI ARCHITECTURAL WIREFRAME SPEC */}
        <section id="lofi">
          <LofiWireframe />
        </section>

        {/* ------------------------------------ 6. FIGMA OAUTH CREDENTIALS MANAGER */}
        <section id="credentials" className="max-w-4xl mx-auto">
          <FigmaIntegration />
        </section>
      </main>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="border-t border-black bg-black text-white text-xs font-mono py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-[1383px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#CFFD3E] text-black font-extrabold text-[10px]">
              #BNB2026
            </span>
            <span>SCHOOL OF DESIGN · IIT JODHPUR</span>
          </div>
          <div className="text-gray-400 text-center sm:text-right">
            Figma Design File: <code className="text-amber-400">71J7xt6jCh3nohTfer22uV</code> · Node <code className="text-emerald-400">193:3</code>
          </div>
        </div>
      </footer>
    </div>
  );
}
