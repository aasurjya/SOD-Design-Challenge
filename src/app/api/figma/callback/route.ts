import { NextRequest, NextResponse } from "next/server";
import { figmaClient, FigmaApiError, FigmaAuthError, FigmaRateLimitError } from "@/lib/figma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  const state = searchParams.get("state");

  if (error) {
    const errorMsg = errorDescription || error;
    const sanitizedError = encodeURIComponent(errorMsg.slice(0, 200));
    return NextResponse.redirect(
      new URL(`/?figma_error=${sanitizedError}`, request.url)
    );
  }

  if (!code || typeof code !== "string" || !code.trim()) {
    return NextResponse.redirect(
      new URL("/?figma_error=No+authorization+code+received", request.url)
    );
  }

  try {
    const tokenResponse = await figmaClient.exchangeCodeForToken(code);

    if (!tokenResponse || !tokenResponse.access_token) {
      return NextResponse.redirect(
        new URL("/?figma_error=Invalid+token+response+from+Figma", request.url)
      );
    }

    const redirectUrl = new URL("/?figma_status=connected", request.url);
    if (state) {
      redirectUrl.searchParams.set("state", state);
    }

    const response = NextResponse.redirect(redirectUrl);

    // Save access token in httpOnly cookie
    response.cookies.set("figma_access_token", tokenResponse.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:
        typeof tokenResponse.expires_in === "number" && tokenResponse.expires_in > 0
          ? tokenResponse.expires_in
          : 7776000, // Default 90 days if unspecified
      path: "/",
    });

    if (tokenResponse.refresh_token) {
      response.cookies.set("figma_refresh_token", tokenResponse.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 31536000, // 1 year
        path: "/",
      });
    }

    return response;
  } catch (err: unknown) {
    let message = "Token exchange failed";
    if (err instanceof FigmaRateLimitError) {
      message = `Rate limit exceeded. Try again in ${err.retryAfterSeconds ?? 60}s`;
    } else if (err instanceof FigmaAuthError || err instanceof FigmaApiError) {
      message = err.message;
    } else if (err instanceof Error) {
      message = err.message;
    }

    const sanitizedMsg = encodeURIComponent(message.slice(0, 200));
    return NextResponse.redirect(
      new URL(`/?figma_error=${sanitizedMsg}`, request.url)
    );
  }
}
