"use client";

import { useState } from "react";
import {
  Box,
  Check,
  Code2,
  Columns,
  Eye,
  Grid,
  Layers,
  Layout,
  Maximize2,
  Minimize2,
  Move,
  Ruler,
  Smartphone,
  Sparkles,
  Square,
  Tablet,
  Tv,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function LofiWireframe() {
  const [viewport, setViewport] = useState<"figma" | "desktop" | "tablet" | "mobile">("figma");
  const [showGrid, setShowGrid] = useState(true);
  const [showCssOverlay, setShowCssOverlay] = useState(true);

  return (
    <Card className="border-2 border-dashed border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 font-mono text-xs shadow-xl">
      <CardHeader className="pb-3 border-b border-dashed border-slate-300 dark:border-slate-800 bg-background/80 backdrop-blur">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
                FIGMA AUTO-LAYOUT SPECIFICATION
              </Badge>
              <Badge variant="secondary" className="font-mono text-[10px] bg-slate-200 dark:bg-slate-800">
                1383px × 773px · #EDEDED
              </Badge>
            </div>
            <CardTitle className="text-base font-bold tracking-tight text-foreground">
              Landing Page Final (Figma Auto Layout Frame)
            </CardTitle>
          </div>

          {/* Viewport & Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 bg-background p-1 rounded-md border shadow-sm">
              <Button
                variant={viewport === "figma" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2.5 text-[11px] font-bold"
                onClick={() => setViewport("figma")}
              >
                <Square className="h-3.5 w-3.5 mr-1 text-emerald-400" /> Figma 1383px × 773px
              </Button>
              <Button
                variant={viewport === "desktop" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2 text-[11px]"
                onClick={() => setViewport("desktop")}
              >
                <Tv className="h-3.5 w-3.5 mr-1" /> 1280px
              </Button>
              <Button
                variant={viewport === "tablet" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2 text-[11px]"
                onClick={() => setViewport("tablet")}
              >
                <Tablet className="h-3.5 w-3.5 mr-1" /> 768px
              </Button>
              <Button
                variant={viewport === "mobile" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2 text-[11px]"
                onClick={() => setViewport("mobile")}
              >
                <Smartphone className="h-3.5 w-3.5 mr-1" /> 375px
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px]">
                <Switch checked={showGrid} onCheckedChange={setShowGrid} aria-label="Toggle Grid Overlay" />
                <span>Grid</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px]">
                <Switch checked={showCssOverlay} onCheckedChange={setShowCssOverlay} aria-label="Toggle CSS Specs" />
                <span>Figma CSS</span>
              </label>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Figma CSS Spec Code Badge */}
        {showCssOverlay && (
          <div className="p-3 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-900 text-slate-100 space-y-1 font-mono text-[11px]">
            <div className="flex items-center justify-between text-xs text-amber-400 font-bold border-b border-slate-800 pb-1 mb-2">
              <span className="flex items-center gap-1.5">
                <Code2 className="h-4 w-4" /> Figma Auto Layout Frame CSS Rules
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Target: Landing Page Final</span>
            </div>
            <pre className="text-slate-300 leading-relaxed overflow-x-auto">
{`/* Landing Page Final */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: relative;
width: 1383px;
height: 773px;

background: #EDEDED;`}
            </pre>
          </div>
        )}

        {/* Wireframe Container Simulator with exact #EDEDED background */}
        <div
          style={{ background: viewport === "figma" ? "#EDEDED" : undefined }}
          className={`mx-auto transition-all duration-300 border-2 border-slate-400 dark:border-slate-600 rounded-lg p-4 text-slate-900 ${
            viewport === "figma"
              ? "w-full max-w-[1383px] min-h-[773px]"
              : viewport === "desktop"
              ? "max-w-full"
              : viewport === "tablet"
              ? "max-w-2xl"
              : "max-w-xs"
          } ${showGrid ? "bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]" : ""}`}
        >
          {/* Header Spec Tag */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-300 text-[10px] font-bold text-slate-600 uppercase">
            <span>Figma Canvas Container: Landing Page Final</span>
            <span>1383px × 773px · flex flex-col items-start</span>
          </div>

          {/* Section 0: Header Wireframe */}
          <div className="w-full p-3 border-2 border-dashed border-blue-600/80 bg-blue-500/10 rounded mb-4 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-blue-800">
              <span className="flex items-center gap-1.5">
                <Layout className="h-3.5 w-3.5" /> [NAVBAR CONTAINER: 1383px x 64px]
              </span>
              <span>flex justify-between items-center</span>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 border border-slate-400 bg-white rounded text-[10px] text-slate-800 shadow-sm">
              <div className="px-2 py-1 bg-slate-200 rounded font-bold">[LOGO + BRAND]</div>
              <div className="hidden sm:flex items-center gap-3 text-slate-600 font-semibold">
                <span>[NAV_LINK: IMPORTER]</span>
                <span>[NAV_LINK: LOFI_SPEC]</span>
                <span>[NAV_LINK: FEATURES]</span>
                <span>[NAV_LINK: PRICING]</span>
              </div>
              <div className="px-3 py-1 bg-blue-600 text-white rounded font-bold">[CTA: IMPORT FIGMA]</div>
            </div>
          </div>

          {/* Section 1: Hero Block */}
          <div className="w-full p-4 border-2 border-dashed border-amber-600/80 bg-amber-500/10 rounded mb-4 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-semibold text-amber-800">
              <span className="flex items-center gap-1.5">
                <Box className="h-3.5 w-3.5" /> [HERO SECTION: 1383px x 420px]
              </span>
              <span>flex-col items-start align-start</span>
            </div>

            <div className="space-y-3 p-4 border border-slate-400 bg-white rounded text-left shadow-sm text-slate-800">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full text-[10px] font-bold">
                [STATUS BADGE: FIGMA OAUTH2 ACTIVE]
              </div>
              <div className="h-10 bg-slate-200 rounded flex items-center px-4 font-bold text-slate-800 text-base border">
                [H1: TRANSFORM FIGMA DESIGNS DIRECTLY INTO REACT CODE]
              </div>
              <div className="h-6 bg-slate-100 rounded w-4/5 flex items-center px-3 text-[11px] text-slate-600 border">
                [SUBTITLE: Extract tokens, frames, components, and layout specs directly from Figma API]
              </div>
              <div className="flex items-center gap-3 pt-1">
                <div className="px-5 py-2.5 bg-blue-600 text-white rounded font-bold text-[11px] shadow">
                  [PRIMARY_BTN: IMPORT FIGMA FILE]
                </div>
                <div className="px-5 py-2.5 border-2 border-slate-400 bg-slate-100 rounded font-bold text-[11px] text-slate-700">
                  [SECONDARY_BTN: VIEW API CREDENTIALS]
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Figma Importer Studio Block */}
          <div className="w-full p-4 border-2 border-dashed border-emerald-600/80 bg-emerald-500/10 rounded mb-4 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800">
              <span className="flex items-center gap-1.5">
                <Grid className="h-3.5 w-3.5" /> [FIGMA IMPORTER STUDIO: 1383px x 500px]
              </span>
              <span>Auto Layout Component Converter</span>
            </div>

            <div className="p-3 border border-slate-400 bg-white rounded space-y-3 text-slate-800 shadow-sm">
              <div className="h-9 border-2 border-slate-300 rounded p-2 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">[URL_INPUT: https://www.figma.com/design/sampleKey/Design]</span>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded font-bold text-[10px]">[ACTION: CONVERT DESIGN]</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[10px] font-bold">
                <div className="p-2 border rounded text-center bg-slate-100">[TAB 1: VISUAL CANVAS]</div>
                <div className="p-2 border rounded text-center bg-slate-100">[TAB 2: DESIGN TOKENS]</div>
                <div className="p-2 border rounded text-center bg-slate-100">[TAB 3: REACT CODE]</div>
                <div className="p-2 border rounded text-center bg-slate-100">[TAB 4: CSS :ROOT]</div>
              </div>
              <div className="h-28 border-2 border-dashed border-emerald-500 rounded flex items-center justify-center text-[11px] text-emerald-900 font-bold bg-emerald-50/50">
                [LIVE INTERACTIVE CANVAS PREVIEW · FRAME 1383px × 773px RENDERING ENGINE]
              </div>
            </div>
          </div>

          {/* Section 3: Credentials & Features Matrix */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border-2 border-dashed border-purple-600 bg-purple-500/10 rounded space-y-2">
              <div className="text-[11px] font-bold text-purple-900">
                [OAUTH CREDENTIALS MANAGER: 50%]
              </div>
              <div className="p-2 border border-slate-300 rounded bg-white text-[10px] text-slate-800 font-mono space-y-1">
                <div>FIGMA_CLIENT_ID: m4iCUT7Fjq7J89jPiPHfRO</div>
                <div>FIGMA_CLIENT_SECRET: yVlKhhBTP9QWOl2E0jphFESCHKAjLC3F4sZGv1gG</div>
              </div>
            </div>

            <div className="p-3 border-2 border-dashed border-indigo-600 bg-indigo-500/10 rounded space-y-2">
              <div className="text-[11px] font-bold text-indigo-900">
                [TAILWIND V4 & SHADCN UI INTEGRATION: 50%]
              </div>
              <div className="grid grid-cols-3 gap-2 text-[9px] font-bold text-center">
                <div className="p-2 border rounded bg-white text-slate-800">[OAUTH 2.0]</div>
                <div className="p-2 border rounded bg-white text-slate-800">[TOKEN PARSER]</div>
                <div className="p-2 border rounded bg-white text-slate-800">[REACT CODE]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specs breakdown */}
        <div className="rounded-lg border p-4 bg-background space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
              Figma Frame Rule Breakdown
            </span>
            <Badge variant="outline" className="font-mono text-[10px]">
              Width: 1383px | Height: 773px | Background: #EDEDED
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
            <div className="p-2.5 rounded border bg-muted/30 space-y-1">
              <span className="font-bold block text-primary">Auto Layout Engine</span>
              <span className="text-muted-foreground block">display: flex</span>
              <span className="text-muted-foreground block">flex-direction: column</span>
              <span className="text-muted-foreground block">align-items: flex-start</span>
            </div>
            <div className="p-2.5 rounded border bg-muted/30 space-y-1">
              <span className="font-bold block text-primary">Canvas Dimensions</span>
              <span className="text-muted-foreground block">position: relative</span>
              <span className="text-muted-foreground block">width: 1383px</span>
              <span className="text-muted-foreground block">height: 773px</span>
            </div>
            <div className="p-2.5 rounded border bg-muted/30 space-y-1">
              <span className="font-bold block text-primary">Design System Backdrop</span>
              <span className="text-muted-foreground block">background: #EDEDED</span>
              <span className="text-muted-foreground block">padding: 0px</span>
              <span className="text-muted-foreground block">border-radius: 8px</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
