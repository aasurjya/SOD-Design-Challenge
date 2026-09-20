import { NextResponse } from "next/server";
import { figmaClient } from "@/lib/figma";

export async function GET() {
  try {
    const isConfigured = figmaClient.isConfigured();
    const maskedClientId = figmaClient.getMaskedClientId();
    let authUrl: string | null = null;

    if (isConfigured) {
      try {
        authUrl = figmaClient.getAuthUrl();
      } catch {
        authUrl = null;
      }
    }

    const response = NextResponse.json({
      configured: isConfigured,
      clientId: maskedClientId,
      redirectUri:
        process.env.FIGMA_OAUTH_REDIRECT_URI || "http://localhost:3000/api/figma/callback",
      authUrl: authUrl,
      timestamp: new Date().toISOString(),
    });

    response.headers.set("Cache-Control", "no-store, max-age=0");
    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to retrieve Figma configuration";
    return NextResponse.json({ error: message, configured: false }, { status: 500 });
  }
}
