/**
 * Figma API & OAuth Client Module
 * Provides robust error handling, rate-limit retries, input validation, and typed endpoints.
 */

export interface FigmaAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface FigmaTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  user_id?: string;
  state?: string;
  error?: string;
  error_description?: string;
}

export interface FigmaUser {
  id: string;
  email: string;
  handle: string;
  img_url: string;
}

export interface FigmaDocumentNode {
  id: string;
  name: string;
  type: string;
  visible?: boolean;
  children?: FigmaDocumentNode[];
  styles?: Record<string, string>;
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: Array<Record<string, unknown>>;
  strokes?: Array<Record<string, unknown>>;
  strokeWeight?: number;
  cornerRadius?: number;
  characters?: string;
  style?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface FigmaComponent {
  key: string;
  name: string;
  description: string;
  componentSetId?: string;
  documentationLinks?: string[];
  [key: string]: unknown;
}

export interface FigmaStyle {
  key: string;
  name: string;
  description: string;
  styleType: "FILL" | "TEXT" | "EFFECT" | "GRID" | string;
  [key: string]: unknown;
}

export interface FigmaFile {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  document: FigmaDocumentNode;
  components: Record<string, FigmaComponent>;
  schemaVersion: number;
  styles: Record<string, FigmaStyle>;
  componentSets?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface FigmaFileNodesResponse {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  nodes: Record<
    string,
    {
      document: FigmaDocumentNode;
      components?: Record<string, FigmaComponent>;
      styles?: Record<string, FigmaStyle>;
    }
  >;
}

export interface FigmaImageResponse {
  err: string | null;
  images: Record<string, string | null>;
}

export interface GetFileOptions {
  depth?: number;
  ids?: string[];
  geometry?: string;
  version?: string;
}

export interface GetImageOptions {
  format?: "jpg" | "png" | "svg" | "pdf";
  scale?: number;
  svg_include_id?: boolean;
  svg_simplify_stroke?: boolean;
  use_absolute_bounds?: boolean;
}

// Custom Error Classes
export class FigmaApiError extends Error {
  public readonly statusCode: number;
  public readonly statusText: string;
  public readonly responseBody?: unknown;

  constructor(message: string, statusCode: number, statusText: string = "", responseBody?: unknown) {
    super(message);
    this.name = "FigmaApiError";
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.responseBody = responseBody;
  }
}

export class FigmaRateLimitError extends FigmaApiError {
  public readonly retryAfterSeconds: number | null;

  constructor(message: string, retryAfterSeconds: number | null = null, responseBody?: unknown) {
    super(message, 429, "Too Many Requests", responseBody);
    this.name = "FigmaRateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class FigmaAuthError extends FigmaApiError {
  constructor(message: string, statusCode: number = 401, responseBody?: unknown) {
    super(message, statusCode, statusCode === 401 ? "Unauthorized" : "Forbidden", responseBody);
    this.name = "FigmaAuthError";
  }
}

export class FigmaNotFoundError extends FigmaApiError {
  constructor(message: string, responseBody?: unknown) {
    super(message, 404, "Not Found", responseBody);
    this.name = "FigmaNotFoundError";
  }
}

export class FigmaClient {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  private maxRetries: number;

  constructor(config?: Partial<FigmaAuthConfig> & { maxRetries?: number }) {
    this.clientId = config?.clientId || process.env.FIGMA_CLIENT_ID || "";
    this.clientSecret = config?.clientSecret || process.env.FIGMA_CLIENT_SECRET || "";
    this.redirectUri =
      config?.redirectUri ||
      process.env.FIGMA_OAUTH_REDIRECT_URI ||
      "http://localhost:3000/api/figma/callback";
    this.maxRetries = config?.maxRetries ?? 2;
  }

  /**
   * Checks whether the client is properly configured with Client ID & Secret
   */
  public isConfigured(): boolean {
    return Boolean(this.clientId.trim() && this.clientSecret.trim());
  }

  /**
   * Gets masked client ID for display safety
   */
  public getMaskedClientId(): string {
    const trimmed = this.clientId.trim();
    if (!trimmed) return "Not Configured";
    if (trimmed.length <= 10) return trimmed.slice(0, 3) + "...";
    return trimmed.slice(0, 6) + "..." + trimmed.slice(-4);
  }

  /**
   * Returns authorization URL for Figma OAuth 2.0 flow
   */
  public getAuthUrl(state: string = "figma_oauth_state", scope: string = "files:read"): string {
    if (!this.clientId) {
      throw new Error("Cannot generate auth URL: Figma Client ID is not configured.");
    }

    const sanitizedState = state.replace(/[^a-zA-Z0-9_\-\.]/g, "");
    const sanitizedScope = scope.trim() || "files:read";

    const params = new URLSearchParams({
      client_id: this.clientId.trim(),
      redirect_uri: this.redirectUri.trim(),
      scope: sanitizedScope,
      state: sanitizedState,
      response_type: "code",
    });

    return `https://www.figma.com/oauth?${params.toString()}`;
  }

  /**
   * Exchanges authorization code for an OAuth access token
   */
  public async exchangeCodeForToken(code: string): Promise<FigmaTokenResponse> {
    if (!code || typeof code !== "string" || !code.trim()) {
      throw new FigmaAuthError("Authorization code is required.", 400);
    }

    if (!this.isConfigured()) {
      throw new FigmaAuthError("Figma Client ID or Client Secret is not configured.", 500);
    }

    const authHeader = Buffer.from(
      `${this.clientId.trim()}:${this.clientSecret.trim()}`
    ).toString("base64");

    const params = new URLSearchParams({
      redirect_uri: this.redirectUri.trim(),
      code: code.trim(),
      grant_type: "authorization_code",
    });

    const response = await this.requestWithRetry("https://www.figma.com/api/oauth/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    return response as FigmaTokenResponse;
  }

  /**
   * Refreshes an expired OAuth access token
   */
  public async refreshToken(refreshToken: string): Promise<FigmaTokenResponse> {
    if (!refreshToken || !refreshToken.trim()) {
      throw new FigmaAuthError("Refresh token is required.", 400);
    }

    if (!this.isConfigured()) {
      throw new FigmaAuthError("Figma Client ID or Client Secret is not configured.", 500);
    }

    const params = new URLSearchParams({
      client_id: this.clientId.trim(),
      client_secret: this.clientSecret.trim(),
      refresh_token: refreshToken.trim(),
    });

    const response = await this.requestWithRetry(
      `https://www.figma.com/api/oauth/refresh?${params.toString()}`,
      {
        method: "POST",
      }
    );

    return response as FigmaTokenResponse;
  }

  /**
   * Fetches current user profile from Figma REST API
   */
  public async getCurrentUser(accessToken: string): Promise<FigmaUser> {
    const headers = this.getAuthHeaders(accessToken);
    const data = await this.requestWithRetry<FigmaUser>("https://api.figma.com/v1/me", {
      headers,
    });
    return data;
  }

  /**
   * Validates access token by fetching user profile
   */
  public async validateToken(
    accessToken: string
  ): Promise<{ valid: boolean; user?: FigmaUser; error?: string }> {
    try {
      const user = await this.getCurrentUser(accessToken);
      return { valid: true, user };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Invalid token";
      return { valid: false, error: errorMsg };
    }
  }

  /**
   * Fetches details for a Figma design file
   */
  public async getFile(
    accessToken: string,
    fileKeyInput: string,
    options?: GetFileOptions
  ): Promise<FigmaFile> {
    const fileKey = FigmaClient.extractFileKey(fileKeyInput);
    if (!FigmaClient.isValidFileKey(fileKey)) {
      throw new FigmaApiError(`Invalid Figma file key format: '${fileKeyInput}'`, 400);
    }

    const queryParams = new URLSearchParams();
    if (options?.depth !== undefined && options.depth > 0) {
      queryParams.set("depth", options.depth.toString());
    }
    if (options?.ids && options.ids.length > 0) {
      queryParams.set("ids", options.ids.join(","));
    }
    if (options?.geometry) {
      queryParams.set("geometry", options.geometry);
    }
    if (options?.version) {
      queryParams.set("version", options.version);
    }

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";
    const url = `https://api.figma.com/v1/files/${encodeURIComponent(fileKey)}${queryString}`;

    const headers = this.getAuthHeaders(accessToken);
    return this.requestWithRetry<FigmaFile>(url, { headers });
  }

  /**
   * Fetches specific nodes from a Figma design file
   */
  public async getFileNodes(
    accessToken: string,
    fileKeyInput: string,
    ids: string[],
    options?: GetFileOptions
  ): Promise<FigmaFileNodesResponse> {
    const fileKey = FigmaClient.extractFileKey(fileKeyInput);
    if (!FigmaClient.isValidFileKey(fileKey)) {
      throw new FigmaApiError(`Invalid Figma file key format: '${fileKeyInput}'`, 400);
    }

    if (!ids || ids.length === 0) {
      throw new FigmaApiError("At least one node ID is required to fetch file nodes.", 400);
    }

    const queryParams = new URLSearchParams({ ids: ids.join(",") });
    if (options?.depth !== undefined && options.depth > 0) {
      queryParams.set("depth", options.depth.toString());
    }
    if (options?.geometry) {
      queryParams.set("geometry", options.geometry);
    }

    const url = `https://api.figma.com/v1/files/${encodeURIComponent(fileKey)}/nodes?${queryParams.toString()}`;
    const headers = this.getAuthHeaders(accessToken);
    return this.requestWithRetry<FigmaFileNodesResponse>(url, { headers });
  }

  /**
   * Renders images for specific nodes in a Figma file
   */
  public async getImages(
    accessToken: string,
    fileKeyInput: string,
    ids: string[],
    options?: GetImageOptions
  ): Promise<FigmaImageResponse> {
    const fileKey = FigmaClient.extractFileKey(fileKeyInput);
    if (!FigmaClient.isValidFileKey(fileKey)) {
      throw new FigmaApiError(`Invalid Figma file key format: '${fileKeyInput}'`, 400);
    }

    if (!ids || ids.length === 0) {
      throw new FigmaApiError("At least one node ID is required to fetch images.", 400);
    }

    const queryParams = new URLSearchParams({ ids: ids.join(",") });
    if (options?.format) queryParams.set("format", options.format);
    if (options?.scale) queryParams.set("scale", options.scale.toString());
    if (options?.svg_include_id !== undefined)
      queryParams.set("svg_include_id", String(options.svg_include_id));
    if (options?.svg_simplify_stroke !== undefined)
      queryParams.set("svg_simplify_stroke", String(options.svg_simplify_stroke));
    if (options?.use_absolute_bounds !== undefined)
      queryParams.set("use_absolute_bounds", String(options.use_absolute_bounds));

    const url = `https://api.figma.com/v1/images/${encodeURIComponent(fileKey)}?${queryParams.toString()}`;
    const headers = this.getAuthHeaders(accessToken);
    return this.requestWithRetry<FigmaImageResponse>(url, { headers });
  }

  /**
   * Extract Figma file key from full URL or key string
   */
  public static extractFileKey(input: string): string {
    if (!input || typeof input !== "string") return "";
    const cleanInput = input.trim();

    // Direct key matching 22+ alphanumeric chars
    if (/^[a-zA-Z0-9_-]{22,128}$/.test(cleanInput)) {
      return cleanInput;
    }

    // Match Figma URL patterns: /file/:key, /design/:key, /board/:key, /proto/:key
    const match = cleanInput.match(
      /figma\.com\/(?:file|design|board|proto)\/([a-zA-Z0-9_-]{22,128})/i
    );
    if (match && match[1]) {
      return match[1];
    }

    // Fallback URL path decoding attempt
    try {
      const url = new URL(cleanInput.startsWith("http") ? cleanInput : `https://${cleanInput}`);
      const segments = url.pathname.split("/").filter(Boolean);
      for (let i = 0; i < segments.length; i++) {
        if (
          ["file", "design", "board", "proto"].includes(segments[i].toLowerCase()) &&
          segments[i + 1]
        ) {
          return segments[i + 1];
        }
      }
    } catch {
      // Ignore URL parse error
    }

    return cleanInput;
  }

  /**
   * Validates whether a file key string is format-compliant
   */
  public static isValidFileKey(fileKey: string): boolean {
    if (!fileKey || typeof fileKey !== "string") return false;
    const clean = fileKey.trim();
    return /^[a-zA-Z0-9_-]{22,128}$/.test(clean);
  }

  /**
   * Private helper to build authentication headers based on token type
   */
  private getAuthHeaders(token: string): Record<string, string> {
    if (!token || typeof token !== "string" || !token.trim()) {
      throw new FigmaAuthError("Authentication token cannot be empty.", 401);
    }

    const trimmed = token.trim();
    // Figma Personal Access Tokens start with `figd_` or `figp_` or `fig_`
    if (
      trimmed.startsWith("figd_") ||
      trimmed.startsWith("figp_") ||
      trimmed.startsWith("fig_") ||
      (trimmed.length > 30 && !trimmed.includes(" "))
    ) {
      return { "X-Figma-Token": trimmed };
    }

    // Default OAuth Bearer header
    return { Authorization: `Bearer ${trimmed}` };
  }

  /**
   * Helper to execute fetch requests with automatic 429 rate limit retries and error parsing
   */
  private async requestWithRetry<T>(
    url: string,
    options: RequestInit,
    attempt: number = 0
  ): Promise<T> {
    let response: Response;
    try {
      response = await fetch(url, options);
    } catch (networkErr: unknown) {
      const msg = networkErr instanceof Error ? networkErr.message : "Network fetch failed";
      throw new FigmaApiError(`Figma network error: ${msg}`, 0);
    }

    if (response.ok) {
      try {
        return (await response.json()) as T;
      } catch {
        throw new FigmaApiError("Failed to parse JSON response from Figma API", response.status);
      }
    }

    // Extract Retry-After header for rate limits
    const retryAfterHeader = response.headers.get("retry-after");
    const retryAfterSeconds = retryAfterHeader ? parseInt(retryAfterHeader, 10) : null;

    let responseBody: unknown;
    try {
      responseBody = await response.json();
    } catch {
      try {
        responseBody = await response.text();
      } catch {
        responseBody = null;
      }
    }

    const errorMsg =
      typeof responseBody === "object" && responseBody !== null && "message" in responseBody
        ? String((responseBody as { message: unknown }).message)
        : typeof responseBody === "string" && responseBody
        ? responseBody
        : response.statusText || `HTTP ${response.status}`;

    // Handle 429 Rate Limit
    if (response.status === 429) {
      if (attempt < this.maxRetries) {
        const delayMs =
          (retryAfterSeconds && !isNaN(retryAfterSeconds)
            ? retryAfterSeconds
            : Math.pow(2, attempt) * 1) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return this.requestWithRetry<T>(url, options, attempt + 1);
      }
      throw new FigmaRateLimitError(
        `Figma API rate limit exceeded [429]: ${errorMsg}`,
        retryAfterSeconds,
        responseBody
      );
    }

    // Handle 401 / 403 Auth errors
    if (response.status === 401 || response.status === 403) {
      throw new FigmaAuthError(
        `Figma Authentication Failed [${response.status}]: ${errorMsg}`,
        response.status,
        responseBody
      );
    }

    // Handle 404 Not Found
    if (response.status === 404) {
      throw new FigmaNotFoundError(
        `Figma resource not found [404]: ${errorMsg}`,
        responseBody
      );
    }

    // Generic API Error
    throw new FigmaApiError(
      `Figma API Error [${response.status}]: ${errorMsg}`,
      response.status,
      response.statusText,
      responseBody
    );
  }
}

// Singleton helper instance initialized with environment variables
export const figmaClient = new FigmaClient();
