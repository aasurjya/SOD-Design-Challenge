import { NextRequest, NextResponse } from "next/server";
import {
  FigmaClient,
  figmaClient,
  FigmaApiError,
  FigmaAuthError,
  FigmaRateLimitError,
  FigmaNotFoundError,
} from "@/lib/figma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const rawKey = searchParams.get("key") || searchParams.get("url");

  // Extract auth token from multiple possible sources:
  // 1. x-figma-token header
  // 2. Authorization header (Bearer ...)
  // 3. token query parameter
  // 4. figma_access_token cookie
  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;

  const customToken =
    request.headers.get("x-figma-token") ||
    bearerToken ||
    searchParams.get("token");

  const token = customToken || request.cookies.get("figma_access_token")?.value;

  if (!rawKey || !rawKey.trim()) {
    return NextResponse.json(
      { error: "Missing required 'key' or 'url' parameter" },
      { status: 400 }
    );
  }

  if (!token || !token.trim()) {
    return NextResponse.json(
      {
        error:
          "Authentication token missing. Please connect via Figma OAuth or provide an access token in headers or query params.",
      },
      { status: 401 }
    );
  }

  const fileKey = FigmaClient.extractFileKey(rawKey.trim());

  if (!FigmaClient.isValidFileKey(fileKey)) {
    return NextResponse.json(
      {
        error: `Invalid Figma file key or URL format: '${rawKey}'. Expected a 22+ character alphanumeric key or standard Figma URL.`,
      },
      { status: 400 }
    );
  }

  // Parse optional query options
  const depthParam = searchParams.get("depth");
  const depth = depthParam ? parseInt(depthParam, 10) : undefined;
  const idsParam = searchParams.get("ids");
  const ids = idsParam ? idsParam.split(",").map((s) => s.trim()).filter(Boolean) : undefined;
  const isImageRequest = searchParams.get("images") === "true";

  try {
    if (isImageRequest && ids && ids.length > 0) {
      const formatParam = searchParams.get("format") as "jpg" | "png" | "svg" | "pdf" | null;
      const scaleParam = searchParams.get("scale");
      const scale = scaleParam ? parseFloat(scaleParam) : undefined;

      const imageData = await figmaClient.getImages(token, fileKey, ids, {
        format: formatParam || "png",
        scale: scale || 1,
      });

      return NextResponse.json({
        success: true,
        fileKey,
        images: imageData.images,
        err: imageData.err,
      });
    }

    if (ids && ids.length > 0) {
      const nodeData = await figmaClient.getFileNodes(token, fileKey, ids, {
        depth: depth && !isNaN(depth) && depth > 0 ? depth : undefined,
      });

      return NextResponse.json({
        success: true,
        fileKey,
        name: nodeData.name,
        lastModified: nodeData.lastModified,
        thumbnailUrl: nodeData.thumbnailUrl,
        version: nodeData.version,
        nodes: nodeData.nodes,
      });
    }

    const fileData = await figmaClient.getFile(token, fileKey, {
      depth: depth && !isNaN(depth) && depth > 0 ? depth : undefined,
    });

    return NextResponse.json({
      success: true,
      fileKey,
      name: fileData.name,
      lastModified: fileData.lastModified,
      thumbnailUrl: fileData.thumbnailUrl,
      version: fileData.version,
      componentsCount: Object.keys(fileData.components || {}).length,
      stylesCount: Object.keys(fileData.styles || {}).length,
      document: fileData.document,
    });
  } catch (error: unknown) {
    if (error instanceof FigmaRateLimitError) {
      const response = NextResponse.json(
        {
          error: error.message,
          retryAfter: error.retryAfterSeconds,
          status: 429,
        },
        { status: 429 }
      );
      if (error.retryAfterSeconds) {
        response.headers.set("Retry-After", error.retryAfterSeconds.toString());
      }
      return response;
    }

    if (error instanceof FigmaAuthError) {
      return NextResponse.json(
        { error: error.message, status: error.statusCode },
        { status: error.statusCode }
      );
    }

    if (error instanceof FigmaNotFoundError) {
      return NextResponse.json({ error: error.message, status: 404 }, { status: 404 });
    }

    if (error instanceof FigmaApiError) {
      const status = error.statusCode > 0 && error.statusCode < 600 ? error.statusCode : 500;
      return NextResponse.json({ error: error.message, status }, { status });
    }

    const message = error instanceof Error ? error.message : "Failed to fetch file from Figma API";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
