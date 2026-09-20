import { NextRequest, NextResponse } from "next/server";
import { figmaClient } from "@/lib/figma";

export async function GET(request: NextRequest) {
  try {
    if (!figmaClient.isConfigured()) {
      return NextResponse.json(
        { error: "Figma Client ID or Client Secret missing in server configuration." },
        { status: 500 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const state = searchParams.get("state") || "figma_oauth_state";
    const scope = searchParams.get("scope") || "files:read";

    const authUrl = figmaClient.getAuthUrl(state, scope);
    return NextResponse.redirect(authUrl);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to initiate Figma OAuth flow";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
