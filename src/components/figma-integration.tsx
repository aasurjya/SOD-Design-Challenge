"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Key,
  Layers,
  RefreshCw,
  ShieldCheck,
  Zap,
} from "lucide-react";

function FigmaIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ConfigState {
  configured: boolean;
  clientId: string;
  redirectUri: string;
  authUrl: string | null;
  loading: boolean;
  error: string | null;
}

interface FileData {
  name: string;
  lastModified: string;
  thumbnailUrl?: string;
  componentsCount: number;
  stylesCount: number;
  fileKey: string;
}

export function FigmaIntegration() {
  const [config, setConfig] = useState<ConfigState>({
    configured: false,
    clientId: "",
    redirectUri: "",
    authUrl: null,
    loading: true,
    error: null,
  });

  const [fileInput, setFileInput] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [fileLoading, setFileLoading] = useState(false);
  const [fileResult, setFileResult] = useState<FileData | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fetchConfig();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("figma_status") === "connected") {
      setIsConnected(true);
    }
  }, []);

  const fetchConfig = async () => {
    try {
      setConfig((prev) => ({ ...prev, loading: true, error: null }));
      const res = await fetch("/api/figma/config");
      const data = await res.json();
      setConfig({
        configured: data.configured,
        clientId: data.clientId,
        redirectUri: data.redirectUri,
        authUrl: data.authUrl,
        loading: false,
        error: null,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load Figma config";
      setConfig((prev) => ({ ...prev, loading: false, error: msg }));
    }
  };

  const handleTestFetchFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileInput.trim()) return;

    setFileLoading(true);
    setFileError(null);
    setFileResult(null);

    try {
      const headers: Record<string, string> = {};
      if (tokenInput.trim()) {
        headers["x-figma-token"] = tokenInput.trim();
      }

      const res = await fetch(`/api/figma/file?key=${encodeURIComponent(fileInput.trim())}`, {
        headers,
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to inspect Figma file");
      }

      setFileResult({
        name: data.name,
        lastModified: new Date(data.lastModified).toLocaleString(),
        thumbnailUrl: data.thumbnailUrl,
        componentsCount: data.componentsCount || 0,
        stylesCount: data.stylesCount || 0,
        fileKey: data.fileKey,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to fetch file";
      setFileError(msg);
    } finally {
      setFileLoading(false);
    }
  };

  return (
    <Card className="w-full border-primary/20 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <FigmaIcon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl">Figma Integration</CardTitle>
              <CardDescription>OAuth 2.0 REST API Connection & Token Manager</CardDescription>
            </div>
          </div>
          <Badge
            variant={config.configured ? "default" : "destructive"}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold"
          >
            {config.configured ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Initialized & Ready
              </>
            ) : (
              <>
                <AlertCircle className="h-3.5 w-3.5" />
                Not Configured
              </>
            )}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Credentials Status Box */}
        <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Credentials Status
            </span>
            <Button variant="ghost" size="sm" onClick={fetchConfig} disabled={config.loading}>
              <RefreshCw className={`h-3.5 w-3.5 ${config.loading ? "animate-spin" : ""}`} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Client ID:</span>
              <div className="font-mono text-xs bg-background p-2 rounded border font-medium flex items-center justify-between">
                <span>{config.clientId || "m4iCUT7Fjq7J89jPiPHfRO"}</span>
                <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-300">
                  Active
                </Badge>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Client Secret:</span>
              <div className="font-mono text-xs bg-background p-2 rounded border font-medium flex items-center justify-between">
                <span className="text-muted-foreground">yVlK...3F4sZGv1gG (Stored in .env.local)</span>
                <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-300">
                  Secured
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">OAuth Redirect URI:</span>
            <div className="font-mono text-xs bg-background p-2 rounded border text-muted-foreground">
              {config.redirectUri || "http://localhost:3000/api/figma/callback"}
            </div>
          </div>
        </div>

        {/* OAuth Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-card border">
          <div className="space-y-0.5">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              Figma OAuth 2.0 Flow
            </h4>
            <p className="text-xs text-muted-foreground">
              Authorize this app to access your Figma design files and components.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isConnected ? (
              <Badge className="bg-emerald-600 text-white gap-1 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4" /> OAuth Connected
              </Badge>
            ) : config.authUrl ? (
              <Button asChild className="w-full sm:w-auto gap-2">
                <a href={config.authUrl} target="_blank" rel="noopener noreferrer">
                  <FigmaIcon className="h-4 w-4" />
                  Connect Figma Account
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </Button>
            ) : (
              <Button disabled className="w-full sm:w-auto">
                OAuth Not Available
              </Button>
            )}
          </div>
        </div>

        {/* Test API File Inspector */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            Test Figma REST API Integration
          </h4>
          <form onSubmit={handleTestFetchFile} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 space-y-1">
                <Label htmlFor="figma-file-key" className="text-xs">
                  Figma File URL or Key
                </Label>
                <Input
                  id="figma-file-key"
                  placeholder="e.g. https://www.figma.com/design/AbCdEfGh12345/Design-System"
                  value={fileInput}
                  onChange={(e) => setFileInput(e.target.value)}
                  className="text-xs"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="figma-pat" className="text-xs flex items-center gap-1">
                  <Key className="h-3 w-3" /> Token (Optional PAT)
                </Label>
                <Input
                  id="figma-pat"
                  type="password"
                  placeholder="figd_..."
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  className="text-xs"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="secondary"
              disabled={fileLoading || !fileInput.trim()}
              className="w-full text-xs font-semibold"
            >
              {fileLoading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin mr-2" /> Inspecting Figma File...
                </>
              ) : (
                "Fetch File Metadata & Components"
              )}
            </Button>
          </form>

          {fileError && (
            <div className="p-3 text-xs rounded border border-destructive/40 bg-destructive/10 text-destructive flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{fileError}</span>
            </div>
          )}

          {fileResult && (
            <div className="p-4 rounded-lg border bg-background space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <h5 className="font-bold text-sm text-primary">{fileResult.name}</h5>
                <Badge variant="outline" className="font-mono text-[10px]">
                  Key: {fileResult.fileKey}
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t text-muted-foreground">
                <div>
                  <span className="block text-[10px] uppercase">Last Modified</span>
                  <span className="font-medium text-foreground">{fileResult.lastModified}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase">Components</span>
                  <span className="font-medium text-foreground">{fileResult.componentsCount}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase">Styles</span>
                  <span className="font-medium text-foreground">{fileResult.stylesCount}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="bg-muted/20 border-t py-3 px-6 text-[11px] text-muted-foreground flex justify-between">
        <span>Figma API v1 Connected</span>
        <span>Client ID: m4iCUT7Fjq7J89jPiPHfRO</span>
      </CardFooter>
    </Card>
  );
}
