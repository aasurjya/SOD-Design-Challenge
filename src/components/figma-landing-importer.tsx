"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  Download,
  Eye,
  FileCode2,
  FileJson,
  FileType,
  Globe,
  Info,
  Layers,
  Maximize2,
  Monitor,
  Moon,
  Palette,
  RefreshCw,
  Smartphone,
  Sparkles,
  Sun,
  Tablet,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImportedToken {
  name: string;
  value: string;
  category: "color" | "spacing" | "typography" | "radius";
  description?: string;
}

const SAMPLE_FIGMA_FILES = [
  {
    name: "SaaS Dashboard UI Kit",
    url: "https://www.figma.com/design/sample-saas-dashboard-2026/SaaS-App",
    key: "saas_dashboard_v2",
    frames: 14,
    tokens: 42,
    components: 28,
  },
  {
    name: "Mobile Banking App",
    url: "https://www.figma.com/design/sample-mobile-banking-kit/Mobile-App",
    key: "mobile_banking_v1",
    frames: 9,
    tokens: 36,
    components: 19,
  },
  {
    name: "Design System Tokens",
    url: "https://www.figma.com/design/sample-design-system-tokens/Design-Tokens",
    key: "design_system_core",
    frames: 22,
    tokens: 88,
    components: 54,
  },
];

const PRESET_TOKENS: ImportedToken[] = [
  { name: "--brand-primary", value: "#3B82F6", category: "color", description: "Primary brand accent color" },
  { name: "--brand-secondary", value: "#10B981", category: "color", description: "Secondary success/mint accent" },
  { name: "--accent-gradient", value: "linear-gradient(135deg, #6366F1, #8B5CF6)", category: "color", description: "Vibrant CTA background gradient" },
  { name: "--surface-card", value: "#1E293B", category: "color", description: "Elevated card surface background" },
  { name: "--radius-lg", value: "0.75rem", category: "radius", description: "Large corner rounding for cards" },
  { name: "--radius-md", value: "0.5rem", category: "radius", description: "Medium rounding for buttons & inputs" },
  { name: "--space-container", value: "2rem", category: "spacing", description: "Standard container horizontal padding" },
  { name: "--font-heading", value: "Geist Sans, sans-serif", category: "typography", description: "Heading font family stack" },
];

const CANVAS_FRAMES = [
  { id: "hero", name: "Frame #01 - Hero Header", category: "Header Component" },
  { id: "features", name: "Frame #02 - Feature Grid", category: "Layout Section" },
  { id: "dashboard", name: "Frame #03 - Analytics Card", category: "Widget Component" },
  { id: "mobile", name: "Frame #04 - Mobile View", category: "App Viewport" },
];

export function FigmaLandingImporter() {
  const [urlInput, setUrlInput] = useState(SAMPLE_FIGMA_FILES[0].url);
  const [isImporting, setIsImporting] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [imported, setImported] = useState(true);

  // Canvas Studio State
  const [selectedFrame, setSelectedFrame] = useState("hero");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [canvasTheme, setCanvasTheme] = useState<"dark" | "light">("dark");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [inspectMode, setInspectMode] = useState(false);
  const [inspectToken, setInspectToken] = useState<ImportedToken | null>(null);

  // JSON format state
  const [jsonFormat, setJsonFormat] = useState<"dtcg" | "flat">("dtcg");

  const handleImport = (overrideUrl?: string) => {
    const targetUrl = overrideUrl || urlInput;
    setIsImporting(true);
    setTimeout(() => {
      setIsImporting(false);
      setImported(true);
    }, 900);
  };

  const sampleReactCode = `// Imported & Generated from Figma Design: ${urlInput || "Design File"}
// Client ID: m4iCUT7Fjq7J89jPiPHfRO

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ImportedFigmaHero() {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
        ✨ Synchronized with Figma REST API
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-3">
        Next-Gen Analytics Platform
      </h2>
      <p className="text-muted-foreground text-sm max-w-lg mb-6">
        Designed in Figma, rendered instantly in Next.js 16 with Tailwind v4 & Shadcn components.
      </p>
      <div className="flex items-center gap-3">
        <Button size="lg" className="bg-primary text-white hover:opacity-90">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          View Specs
        </Button>
      </div>
    </div>
  );
}`;

  // Generate :root CSS Custom Properties string
  const cssVariablesString = `:root {
  /* Figma Extracted Design Tokens */
${PRESET_TOKENS.map((token) => `  ${token.name}: ${token.value}; /* ${token.description || token.category} */`).join("\n")}
}`;

  // Generate JSON Design Tokens (W3C DTCG Format or Flat Key-Value Format)
  const generateJsonOutput = () => {
    if (jsonFormat === "flat") {
      const flatMap: Record<string, string> = {};
      PRESET_TOKENS.forEach((t) => {
        flatMap[t.name] = t.value;
      });
      return JSON.stringify(flatMap, null, 2);
    }

    // W3C DTCG Specification
    const structured: Record<string, Record<string, { $value: string; $type: string; $description?: string }>> = {
      color: {},
      radius: {},
      spacing: {},
      typography: {},
    };

    PRESET_TOKENS.forEach((t) => {
      const cleanKey = t.name.replace(/^--/, "");
      const typeMap: Record<ImportedToken["category"], string> = {
        color: "color",
        radius: "dimension",
        spacing: "dimension",
        typography: "fontFamily",
      };

      if (!structured[t.category]) {
        structured[t.category] = {};
      }

      structured[t.category][cleanKey] = {
        $value: t.value,
        $type: typeMap[t.category] || "other",
        $description: t.description,
      };
    });

    return JSON.stringify(
      {
        $schema: "https://design-tokens.github.io/community-group/format/",
        name: "Figma Extracted Tokens",
        version: "1.0.0",
        sourceFile: urlInput,
        tokens: structured,
      },
      null,
      2
    );
  };

  const copyCode = () => {
    navigator.clipboard.writeText(sampleReactCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const copyCssVariables = () => {
    navigator.clipboard.writeText(cssVariablesString);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  const copyJsonTokens = () => {
    navigator.clipboard.writeText(generateJsonOutput());
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Import Input Bar */}
      <Card className="border-primary/30 bg-card/60 backdrop-blur shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Figma Design Auto-Importer</CardTitle>
            </div>
            <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
              OAuth 2.0 Connected
            </Badge>
          </div>
          <CardDescription>
            Paste any public Figma file URL or pick a preset design to convert frames & tokens into live Next.js components and CSS variables.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Paste Figma File URL (e.g. https://www.figma.com/design/...)"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="pl-9 text-xs"
              />
            </div>
            <Button
              onClick={() => handleImport()}
              disabled={isImporting || !urlInput.trim()}
              className="gap-2 shrink-0 font-semibold"
            >
              {isImporting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" /> Importing Design...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4" /> Import Figma File
                </>
              )}
            </Button>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <span className="font-semibold text-foreground">Sample Presets:</span>
            {SAMPLE_FIGMA_FILES.map((sample) => (
              <button
                key={sample.key}
                type="button"
                onClick={() => {
                  setUrlInput(sample.url);
                  handleImport(sample.url);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted hover:bg-primary/10 hover:text-primary transition-colors border text-[11px]"
              >
                <Layers className="h-3 w-3" />
                {sample.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Imported Results Studio */}
      {imported && (
        <Card className="border shadow-md">
          <CardHeader className="pb-3 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Imported Design: <span className="text-primary font-bold">{urlInput.split("/").pop()?.replace(/-/g, " ") || "Figma Design"}</span>
                </CardTitle>
                <CardDescription className="text-xs">
                  14 Frames · 42 Design Tokens · 28 Components extracted
                </CardDescription>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <Button size="sm" variant="outline" onClick={copyCssVariables} className="gap-1.5 text-xs">
                  {copiedCss ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <FileType className="h-3.5 w-3.5" />}
                  {copiedCss ? "Copied CSS!" : "Copy :root CSS"}
                </Button>
                <Button size="sm" variant="outline" onClick={copyJsonTokens} className="gap-1.5 text-xs">
                  {copiedJson ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <FileJson className="h-3.5 w-3.5" />}
                  {copiedJson ? "Copied JSON!" : "Copy JSON"}
                </Button>
                <Button size="sm" variant="default" onClick={copyCode} className="gap-1.5 text-xs">
                  {copiedCode ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedCode ? "Copied React Code!" : "Copy JSX Code"}
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b px-4 bg-muted/30">
                <TabsList className="bg-transparent h-11 space-x-2 overflow-x-auto">
                  <TabsTrigger value="preview" className="gap-1.5 text-xs shrink-0">
                    <Eye className="h-3.5 w-3.5 text-primary" /> Visual Canvas Previews
                  </TabsTrigger>
                  <TabsTrigger value="css" className="gap-1.5 text-xs shrink-0">
                    <FileType className="h-3.5 w-3.5 text-blue-500" /> CSS Variables (:root)
                  </TabsTrigger>
                  <TabsTrigger value="json" className="gap-1.5 text-xs shrink-0">
                    <FileJson className="h-3.5 w-3.5 text-amber-500" /> JSON Tokens Exporter
                  </TabsTrigger>
                  <TabsTrigger value="tokens" className="gap-1.5 text-xs shrink-0">
                    <Palette className="h-3.5 w-3.5 text-emerald-500" /> Design Tokens ({PRESET_TOKENS.length})
                  </TabsTrigger>
                  <TabsTrigger value="code" className="gap-1.5 text-xs shrink-0">
                    <Code2 className="h-3.5 w-3.5 text-purple-500" /> Generated React Code
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Enhanced Visual Canvas Previews Tab */}
              <TabsContent value="preview" className="p-6 space-y-4">
                {/* Canvas Toolbar Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg border bg-muted/40 text-xs">
                  {/* Frame Selector */}
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    <span className="font-semibold text-muted-foreground mr-1">Frame:</span>
                    {CANVAS_FRAMES.map((frame) => (
                      <Button
                        key={frame.id}
                        size="sm"
                        variant={selectedFrame === frame.id ? "default" : "ghost"}
                        onClick={() => setSelectedFrame(frame.id)}
                        className="h-7 text-xs px-2.5"
                      >
                        {frame.name}
                      </Button>
                    ))}
                  </div>

                  {/* Viewport, Theme & Inspector Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Viewport controls */}
                    <div className="flex items-center border rounded-md bg-background p-0.5">
                      <Button
                        size="icon"
                        variant={viewport === "desktop" ? "secondary" : "ghost"}
                        className="h-6 w-6"
                        onClick={() => setViewport("desktop")}
                        title="Desktop View (1200px)"
                      >
                        <Monitor className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="icon"
                        variant={viewport === "tablet" ? "secondary" : "ghost"}
                        className="h-6 w-6"
                        onClick={() => setViewport("tablet")}
                        title="Tablet View (768px)"
                      >
                        <Tablet className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="icon"
                        variant={viewport === "mobile" ? "secondary" : "ghost"}
                        className="h-6 w-6"
                        onClick={() => setViewport("mobile")}
                        title="Mobile View (375px)"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                      </Button>
                    </div>

                    {/* Theme switcher */}
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => setCanvasTheme(canvasTheme === "dark" ? "light" : "dark")}
                      title="Toggle Preview Theme"
                    >
                      {canvasTheme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                    </Button>

                    {/* Zoom controls */}
                    <div className="flex items-center border rounded-md bg-background px-1 gap-0.5">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={() => setZoomLevel(Math.max(75, zoomLevel - 25))}
                        disabled={zoomLevel <= 75}
                      >
                        <ZoomOut className="h-3.5 w-3.5" />
                      </Button>
                      <span className="text-[10px] font-mono px-1 min-w-[36px] text-center">{zoomLevel}%</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={() => setZoomLevel(Math.min(125, zoomLevel + 25))}
                        disabled={zoomLevel >= 125}
                      >
                        <ZoomIn className="h-3.5 w-3.5" />
                      </Button>
                    </div>

                    {/* Token Inspector Toggle */}
                    <Button
                      size="sm"
                      variant={inspectMode ? "default" : "outline"}
                      className="h-7 text-xs gap-1"
                      onClick={() => {
                        setInspectMode(!inspectMode);
                        if (inspectMode) setInspectToken(null);
                      }}
                    >
                      <Info className="h-3.5 w-3.5" />
                      {inspectMode ? "Inspector Active" : "Inspect Tokens"}
                    </Button>
                  </div>
                </div>

                {/* Live Canvas Viewport Stage */}
                <div
                  className={`relative rounded-xl border p-6 min-h-[420px] transition-all flex flex-col items-center justify-center overflow-x-auto ${
                    canvasTheme === "dark"
                      ? "bg-slate-950 text-slate-100 border-slate-800"
                      : "bg-slate-50 text-slate-900 border-slate-200"
                  }`}
                >
                  {/* Canvas Grid Background pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Active Token Inspector Banner */}
                  {inspectMode && (
                    <div className="w-full mb-4 p-2.5 rounded-lg border border-primary/40 bg-primary/10 text-xs flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="text-[10px]">
                          Token Inspector Mode
                        </Badge>
                        <span className="text-muted-foreground">
                          Hover or click elements in the canvas below to inspect applied Figma design tokens.
                        </span>
                      </div>
                      {inspectToken && (
                        <div className="flex items-center gap-2 font-mono bg-background/80 px-2 py-0.5 rounded border text-[11px]">
                          <span className="text-primary font-bold">{inspectToken.name}:</span>
                          <span>{inspectToken.value}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Viewport Frame Container */}
                  <div
                    className="w-full transition-all duration-300 z-0"
                    style={{
                      maxWidth: viewport === "desktop" ? "100%" : viewport === "tablet" ? "768px" : "375px",
                      transform: `scale(${zoomLevel / 100})`,
                      transformOrigin: "top center",
                    }}
                  >
                    {/* Frame 1: Hero Section */}
                    {selectedFrame === "hero" && (
                      <div
                        className={`rounded-2xl border p-8 shadow-2xl relative space-y-6 ${
                          canvasTheme === "dark" ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200 shadow-slate-200"
                        }`}
                        onMouseEnter={() =>
                          inspectMode &&
                          setInspectToken(PRESET_TOKENS.find((t) => t.name === "--surface-card") || null)
                        }
                      >
                        <div className="flex items-center justify-between border-b pb-4 border-slate-700/40">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                            <span className="text-xs font-mono opacity-60 ml-2">Figma Frame #01: Hero Component</span>
                          </div>
                          <Badge variant="outline" className="text-xs font-mono border-primary/40 text-primary">
                            var(--font-heading)
                          </Badge>
                        </div>

                        <div className="space-y-4 pt-2">
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all hover:scale-105"
                            style={{
                              background: "rgba(59, 130, 246, 0.15)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                            }}
                            onMouseEnter={() =>
                              inspectMode &&
                              setInspectToken(PRESET_TOKENS.find((t) => t.name === "--brand-primary") || null)
                            }
                          >
                            <Sparkles className="h-3.5 w-3.5" /> Direct Figma Design Tokens Synced
                          </div>

                          <h2
                            className="text-3xl font-extrabold tracking-tight leading-tight"
                            style={{ fontFamily: "Geist Sans, sans-serif" }}
                            onMouseEnter={() =>
                              inspectMode &&
                              setInspectToken(PRESET_TOKENS.find((t) => t.name === "--font-heading") || null)
                            }
                          >
                            Build Next-Gen Web Apps with{" "}
                            <span
                              className="bg-clip-text text-transparent"
                              style={{
                                backgroundImage: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                              }}
                              onMouseEnter={() =>
                                inspectMode &&
                                setInspectToken(PRESET_TOKENS.find((t) => t.name === "--accent-gradient") || null)
                              }
                            >
                              Auto-Imported Figma Components
                            </span>
                          </h2>

                          <p className="text-sm opacity-70 max-w-xl leading-relaxed">
                            Convert complex layout frames, text styles, and component variants directly into production-grade Next.js components with automated CSS variable mapping.
                          </p>

                          <div className="flex flex-wrap items-center gap-3 pt-4">
                            <button
                              type="button"
                              className="px-5 py-2.5 text-xs font-semibold text-white rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                              style={{
                                background: "#3B82F6",
                                borderRadius: "0.5rem",
                              }}
                              onMouseEnter={() =>
                                inspectMode &&
                                setInspectToken(PRESET_TOKENS.find((t) => t.name === "--radius-md") || null)
                              }
                            >
                              Get Started Free <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              className="px-5 py-2.5 text-xs font-semibold rounded-lg border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors flex items-center gap-2"
                              style={{ borderRadius: "0.5rem" }}
                              onMouseEnter={() =>
                                inspectMode &&
                                setInspectToken(PRESET_TOKENS.find((t) => t.name === "--brand-secondary") || null)
                              }
                            >
                              <Check className="h-3.5 w-3.5 text-emerald-400" /> View CSS Variables
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Frame 2: Feature Grid */}
                    {selectedFrame === "features" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-semibold opacity-80">Figma Frame #02 - Feature Cards Grid</h3>
                          <Badge variant="outline" className="text-xs">
                            var(--space-container): 2rem
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            {
                              title: "Token Extraction",
                              desc: "Automatically extracts colors, typography, radii, and spacing variables.",
                              token: "--brand-primary",
                              color: "#3B82F6",
                            },
                            {
                              title: "Live React Export",
                              desc: "Generates clean, typed React components ready for Next.js 16.",
                              token: "--brand-secondary",
                              color: "#10B981",
                            },
                            {
                              title: "DTCG JSON Standard",
                              desc: "Exports design tokens compliant with W3C Design Token Community Group specs.",
                              token: "--accent-gradient",
                              color: "#8B5CF6",
                            },
                          ].map((feat, i) => (
                            <div
                              key={i}
                              className={`p-5 rounded-xl border space-y-3 transition-all hover:scale-[1.02] cursor-pointer ${
                                canvasTheme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                              }`}
                              onMouseEnter={() =>
                                inspectMode &&
                                setInspectToken(PRESET_TOKENS.find((t) => t.name === feat.token) || null)
                              }
                            >
                              <div
                                className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                                style={{ background: feat.color }}
                              >
                                {i + 1}
                              </div>
                              <h4 className="font-bold text-sm">{feat.title}</h4>
                              <p className="text-xs opacity-70 leading-relaxed">{feat.desc}</p>
                              {inspectMode && (
                                <Badge variant="secondary" className="text-[10px] font-mono">
                                  {feat.token}
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Frame 3: Analytics Dashboard */}
                    {selectedFrame === "dashboard" && (
                      <div
                        className={`rounded-2xl border p-4 space-y-4 ${
                          canvasTheme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between border-b pb-3 border-slate-700/30">
                          <div>
                            <h3 className="font-bold text-sm flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-emerald-400" />
                              Figma Frame #03 - Imported SaaS Dashboard Canvas
                            </h3>
                            <p className="text-xs opacity-60">High-resolution rendered frame imported from Figma REST API</p>
                          </div>
                          <Badge className="bg-emerald-500 text-white text-[11px]">Rendered Image Ready</Badge>
                        </div>

                        {/* High-res Imported Figma Image */}
                        <div className="relative rounded-xl overflow-hidden border shadow-lg group">
                          <img
                            src="/images/figma-dashboard.jpg"
                            alt="Figma Dashboard Frame Render"
                            className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded border border-white/20">
                            Figma Node ID: 1440:900 · 100% Synced
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            { label: "Frames Extracted", val: "14", change: "+100%", color: "#3B82F6" },
                            { label: "CSS Variables", val: "42", change: "Active", color: "#10B981" },
                            { label: "JSON Tokens", val: "W3C Spec", change: "Valid", color: "#8B5CF6" },
                            { label: "Render Time", val: "12ms", change: "Optimal", color: "#F59E0B" },
                          ].map((stat, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-lg border bg-background/50 space-y-1"
                              onMouseEnter={() =>
                                inspectMode &&
                                setInspectToken(PRESET_TOKENS.find((t) => t.name === "--radius-lg") || null)
                              }
                            >
                              <span className="text-[11px] opacity-60 block">{stat.label}</span>
                              <span className="text-lg font-bold block" style={{ color: stat.color }}>
                                {stat.val}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono">{stat.change}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Frame 4: Mobile App Screen */}
                    {selectedFrame === "mobile" && (
                      <div className="max-w-[440px] mx-auto rounded-3xl border-4 border-slate-700 bg-slate-950 text-slate-100 overflow-hidden shadow-2xl p-4 space-y-4">
                        <div className="flex items-center justify-between text-[11px] opacity-60 font-mono border-b border-slate-800 pb-2">
                          <span>9:41</span>
                          <span>Figma Mobile Canvas #04</span>
                          <span>100%</span>
                        </div>

                        {/* High-res Imported Mobile Figma Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                          <img
                            src="/images/figma-mobile.jpg"
                            alt="Figma Mobile Frame Render"
                            className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute bottom-3 left-3 bg-slate-950/90 text-emerald-400 text-[10px] font-mono px-2.5 py-1 rounded border border-emerald-500/30">
                            Figma Frame: iOS Banking App
                          </div>
                        </div>

                        <div className="space-y-3 pt-2">
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                            <Badge variant="outline" className="text-[10px] text-blue-400 border-blue-400/40">
                              --brand-primary
                            </Badge>
                            <h4 className="font-bold text-xs">Mobile Landing Importer</h4>
                            <p className="text-[11px] opacity-70 leading-normal">
                              Optimized for responsive viewports and touch interaction specs.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* CSS Variables Export Tab */}
              <TabsContent value="css" className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border bg-blue-500/10 border-blue-500/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileType className="h-4 w-4 text-blue-500" />
                      <h4 className="font-bold text-sm text-foreground">`:root` CSS Variables Exporter</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Copy these custom CSS properties straight into your `globals.css` or Tailwind CSS theme setup.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button size="sm" variant="outline" onClick={copyCssVariables} className="gap-1.5 text-xs">
                      {copiedCss ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedCss ? "Copied CSS!" : "Copy :root CSS"}
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => downloadFile(cssVariablesString, "tokens.css", "text/css")}
                      className="gap-1.5 text-xs"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download tokens.css
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-[420px]">
                  <pre className="text-blue-300">{cssVariablesString}</pre>
                </div>
              </TabsContent>

              {/* JSON Design Tokens Exporter Tab */}
              <TabsContent value="json" className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border bg-amber-500/10 border-amber-500/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileJson className="h-4 w-4 text-amber-500" />
                      <h4 className="font-bold text-sm text-foreground">JSON Design Token Exporter</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Export tokens in standard W3C Design Token Community Group (DTCG) JSON or flat key-value format.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap shrink-0">
                    {/* Format selector */}
                    <div className="flex items-center border rounded-md bg-background p-0.5 text-xs">
                      <Button
                        size="sm"
                        variant={jsonFormat === "dtcg" ? "secondary" : "ghost"}
                        className="h-7 text-xs px-2.5"
                        onClick={() => setJsonFormat("dtcg")}
                      >
                        W3C DTCG Format
                      </Button>
                      <Button
                        size="sm"
                        variant={jsonFormat === "flat" ? "secondary" : "ghost"}
                        className="h-7 text-xs px-2.5"
                        onClick={() => setJsonFormat("flat")}
                      >
                        Flat Key-Value
                      </Button>
                    </div>

                    <Button size="sm" variant="outline" onClick={copyJsonTokens} className="gap-1.5 text-xs">
                      {copiedJson ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedJson ? "Copied JSON!" : "Copy JSON"}
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => downloadFile(generateJsonOutput(), "tokens.json", "application/json")}
                      className="gap-1.5 text-xs"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download tokens.json
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-[420px]">
                  <pre className="text-amber-300">{generateJsonOutput()}</pre>
                </div>
              </TabsContent>

              {/* Tokens Visual Catalog Tab */}
              <TabsContent value="tokens" className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {PRESET_TOKENS.map((token) => (
                    <div key={token.name} className="p-3 rounded-lg border bg-background space-y-2 hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                        <span className="capitalize font-semibold text-primary">{token.category}</span>
                        {token.category === "color" && (
                          <div
                            className="h-5 w-5 rounded-md border shadow-sm shrink-0"
                            style={{ background: token.value }}
                          />
                        )}
                      </div>
                      <div className="font-mono text-xs font-semibold text-foreground truncate" title={token.name}>
                        {token.name}
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground truncate" title={token.value}>
                        {token.value}
                      </div>
                      {token.description && (
                        <p className="text-[10px] text-muted-foreground/80 line-clamp-2 pt-1 border-t border-dashed">
                          {token.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Generated React Code Tab */}
              <TabsContent value="code" className="p-0">
                <div className="bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-96">
                  <pre className="text-emerald-300">{sampleReactCode}</pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
