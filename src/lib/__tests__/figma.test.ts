import assert from "node:assert";
import { describe, it } from "node:test";
import {
  FigmaClient,
  FigmaApiError,
  FigmaAuthError,
  FigmaRateLimitError,
  FigmaNotFoundError,
} from "../figma";

describe("FigmaClient & API Utilities Unit Tests", () => {
  describe("File Key Extraction & Validation", () => {
    it("extracts 22-character raw key directly", () => {
      const key = "m4iCUT7Fjq7J89jPiPHfRO";
      assert.strictEqual(FigmaClient.extractFileKey(key), key);
    });

    it("extracts key from full Figma design URL", () => {
      const url = "https://www.figma.com/design/AbCdEfGh12345678901234/My-Design-System?node-id=0-1";
      assert.strictEqual(FigmaClient.extractFileKey(url), "AbCdEfGh12345678901234");
    });

    it("extracts key from legacy Figma file URL", () => {
      const url = "https://www.figma.com/file/XYZ1234567890123456789/Dashboard-V2";
      assert.strictEqual(FigmaClient.extractFileKey(url), "XYZ1234567890123456789");
    });

    it("extracts key from FigJam board URL", () => {
      const url = "https://www.figma.com/board/BOARD12345678901234567/Brainstorming-Board";
      assert.strictEqual(FigmaClient.extractFileKey(url), "BOARD12345678901234567");
    });

    it("validates file key format correctly", () => {
      assert.strictEqual(FigmaClient.isValidFileKey("m4iCUT7Fjq7J89jPiPHfRO"), true);
      assert.strictEqual(FigmaClient.isValidFileKey("AbCdEfGh12345678901234"), true);
      assert.strictEqual(FigmaClient.isValidFileKey("short_key"), false);
      assert.strictEqual(FigmaClient.isValidFileKey(""), false);
      assert.strictEqual(FigmaClient.isValidFileKey("   "), false);
    });
  });

  describe("Configuration & Auth Helpers", () => {
    it("reports configured status based on presence of clientId and clientSecret", () => {
      const unconfiguredClient = new FigmaClient({ clientId: "", clientSecret: "" });
      assert.strictEqual(unconfiguredClient.isConfigured(), false);

      const configuredClient = new FigmaClient({ clientId: "test_id", clientSecret: "test_secret" });
      assert.strictEqual(configuredClient.isConfigured(), true);
    });

    it("masks client ID safely", () => {
      const client = new FigmaClient({ clientId: "m4iCUT7Fjq7J89jPiPHfRO" });
      assert.strictEqual(client.getMaskedClientId(), "m4iCUT...HfRO");

      const emptyClient = new FigmaClient({ clientId: "" });
      assert.strictEqual(emptyClient.getMaskedClientId(), "Not Configured");
    });

    it("generates correct OAuth authorization URL with parameters", () => {
      const client = new FigmaClient({ clientId: "my_client_id" });
      const authUrl = client.getAuthUrl("custom_state_123", "files:read");

      assert.ok(authUrl.startsWith("https://www.figma.com/oauth?"));
      assert.ok(authUrl.includes("client_id=my_client_id"));
      assert.ok(authUrl.includes("state=custom_state_123"));
      assert.ok(authUrl.includes("scope=files%3Aread"));
    });
  });

  describe("Custom Error Classes", () => {
    it("instantiates FigmaApiError with statusCode and message", () => {
      const err = new FigmaApiError("Generic error", 500, "Internal Error", { debug: true });
      assert.strictEqual(err.name, "FigmaApiError");
      assert.strictEqual(err.statusCode, 500);
      assert.strictEqual(err.message, "Generic error");
    });

    it("instantiates FigmaRateLimitError with 429 status and retryAfterSeconds", () => {
      const err = new FigmaRateLimitError("Rate limited", 30);
      assert.strictEqual(err.name, "FigmaRateLimitError");
      assert.strictEqual(err.statusCode, 429);
      assert.strictEqual(err.retryAfterSeconds, 30);
    });

    it("instantiates FigmaAuthError with 401/403 status", () => {
      const err = new FigmaAuthError("Unauthorized token", 401);
      assert.strictEqual(err.name, "FigmaAuthError");
      assert.strictEqual(err.statusCode, 401);
    });

    it("instantiates FigmaNotFoundError with 404 status", () => {
      const err = new FigmaNotFoundError("File not found");
      assert.strictEqual(err.name, "FigmaNotFoundError");
      assert.strictEqual(err.statusCode, 404);
    });
  });
});
