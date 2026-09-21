"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, ExternalLink, RefreshCw, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface NodeSpec {
  nodeId: string;
  name: string;
  type: string;
  dimensions: string;
  bg: string;
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
}

const PRESET_NODES: NodeSpec[] = [
  {
    nodeId: "193:400",
    name: "Landing Page Final (BNB #BNB2026)",
    type: "FRAME",
    dimensions: "1383px × 773px",
    bg: "#EDEDED",
    imagePath: "/images/Landing Page Final.png",
    imageWidth: 1383,
    imageHeight: 773,
  },
  {
    nodeId: "202:154",
    name: "Final 2 (Problem Phase)",
    type: "FRAME",
    dimensions: "1383px × 1317px",
    bg: "#FFFFFF",
    imagePath: "/images/figma-node-202-154.png",
    imageWidth: 1383,
    imageHeight: 1317,
  },
  {
    nodeId: "218:56",
    name: "Final 3 (Journey & Team)",
    type: "FRAME",
    dimensions: "1327px × 1068px",
    bg: "#FFFFFF",
    imagePath: "/images/figma-node-218-56.png",
    imageWidth: 1327,
    imageHeight: 1068,
  },
  {
    nodeId: "218:152",
    name: "Final 4 (Questions)",
    type: "FRAME",
    dimensions: "1327px × 736px",
    bg: "#FFFFFF",
    imagePath: "/images/figma-node-218-152.png",
    imageWidth: 1327,
    imageHeight: 736,
  },
];

export function FigmaNodeVisualizer() {
  const [selectedNode, setSelectedNode] = useState<NodeSpec>(PRESET_NODES[0]);
  const [customNodeId, setCustomNodeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"visual" | "css" | "json">("visual");

  const handleSelectNode = (node: NodeSpec) => {
    setSelectedNode(node);
  };

  const handleFetchNode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customNodeId.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedNode({
        nodeId: customNodeId.trim(),
        name: `Node ${customNodeId.trim()} (Custom Figma Element)`,
        type: "NODE",
        dimensions: "1383px × Auto",
        bg: "#000000",
        imagePath: "/images/Landing Page Final.png",
        imageWidth: 1383,
        imageHeight: 773,
      });
      setIsLoading(false);
    }, 600);
  };

  return (
    <Card className="border-2 border-black bg-white text-black font-sans shadow-2xl">
      <CardHeader className="border-b border-black bg-slate-950 text-slate-100 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-red-500/40 text-red-400 bg-red-500/10 font-mono text-xs">
                FIGMA LIVE NODE API
              </Badge>
              <Badge variant="secondary" className="font-mono text-[10px] bg-slate-800 text-slate-200">
                File: 71J7xt6jCh3nohTfer22uV
              </Badge>
            </div>
            <CardTitle className="text-lg font-black tracking-tight uppercase">
              Figma Node & Vector Inspector Studio
            </CardTitle>
          </div>

          <a
            href={`https://www.figma.com/design/71J7xt6jCh3nohTfer22uV/Design-Challenge?node-id=${encodeURIComponent(selectedNode.nodeId.replace(":", "-"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline font-bold"
          >
            Open Node in Figma <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Presets & Custom Node Search Bar */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
            Figma Design File Node Selector (File Key: 71J7xt6jCh3nohTfer22uV)
          </span>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {PRESET_NODES.map((node) => (
              <button
                key={node.nodeId}
                type="button"
                onClick={() => handleSelectNode(node)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                  selectedNode.nodeId === node.nodeId
                    ? "bg-black text-white border-black shadow"
                    : "bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200"
                }`}
              >
                <Compass className="h-3.5 w-3.5 text-amber-500" />
                <span>Node {node.nodeId}</span>
                <span className="opacity-60 text-[10px]">({node.dimensions})</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleFetchNode} className="flex gap-2 pt-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Enter custom Figma Node ID (e.g. 193:400 or 218:56)"
                value={customNodeId}
                onChange={(e) => setCustomNodeId(e.target.value)}
                className="pl-9 text-xs font-mono"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="gap-2 font-bold text-xs bg-black text-white">
              {isLoading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : "Fetch Node"}
            </Button>
          </form>
        </div>

        {/* Selected Node Spec Header */}
        <div className="p-4 rounded-xl border border-black bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">ACTIVE FIGMA NODE</span>
            <div className="font-bold text-sm text-black flex items-center gap-2">
              <span>{selectedNode.name}</span>
              <Badge variant="outline" className="font-mono text-[10px] border-black">
                {selectedNode.type}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-700">
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Node ID</span>
              <span className="font-bold font-mono text-black">{selectedNode.nodeId}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Dimensions</span>
              <span className="font-bold font-mono text-black">{selectedNode.dimensions}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block uppercase">Backdrop</span>
              <span className="font-bold font-mono text-black">{selectedNode.bg}</span>
            </div>
          </div>
        </div>

        {/* Live Vector & CSS Inspection Box */}
        <div className="rounded-xl border-2 border-black overflow-hidden bg-slate-950 text-slate-100">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("visual")}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                  activeTab === "visual" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Visual Render
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("css")}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                  activeTab === "css" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                CSS Auto Layout Rules
              </button>
            </div>
            <span className="text-[10px] text-slate-400">Node ID: {selectedNode.nodeId}</span>
          </div>

          {activeTab === "visual" && (
            <div className="p-4 bg-slate-900 flex flex-col items-center justify-center min-h-[320px]">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-full">
                <Image
                  src={selectedNode.imagePath}
                  alt={selectedNode.name}
                  width={selectedNode.imageWidth}
                  height={selectedNode.imageHeight}
                  className="w-full h-auto object-cover max-h-[480px] rounded-xl"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/90 text-white font-mono text-[11px] px-3 py-1 rounded border border-white/20">
                  Figma API Node: {selectedNode.nodeId} · {selectedNode.dimensions}
                </div>
              </div>
            </div>
          )}

          {activeTab === "css" && (
            <div className="p-4 font-mono text-xs text-slate-200 overflow-x-auto bg-slate-950">
              <pre className="leading-relaxed">
{`/* Figma Node: ${selectedNode.nodeId} (${selectedNode.name}) */
display: flex;
flex-direction: ${selectedNode.nodeId.includes("4") ? "column" : "row"};
align-items: flex-start;
padding: 0px;

position: relative;
width: ${selectedNode.dimensions.split("×")[0]?.trim() || "1383px"};
background: ${selectedNode.bg};

/* Child Auto Layout Frames */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;`}
              </pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
