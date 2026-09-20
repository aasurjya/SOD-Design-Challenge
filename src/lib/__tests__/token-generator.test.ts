import assert from "node:assert";
import { describe, it } from "node:test";
import {
  TokenGenerator,
  figmaColorToHex,
  figmaColorToRgb,
  slugifyFigmaName,
  detectCategory,
  getTailwindCssVarName,
  formatCssValue,
  generateTailwindThemeCss,
  generateTokenJson,
  parseFigmaStylesToTokens,
  extractTokensFromFigmaFile,
} from "../token-generator";
import type { FigmaDesignStyle } from "../token-generator";

describe("TokenGenerator Unit & Integration Tests", () => {
  describe("Color Conversion Utilities", () => {
    it("converts normalized float RGBA values to Hex", () => {
      // #3b82f6 -> (59, 130, 246) -> (0.23137, 0.5098, 0.9647)
      const color = { r: 0.23137, g: 0.5098, b: 0.9647 };
      assert.strictEqual(figmaColorToHex(color), "#3b82f6");
    });

    it("converts RGBA with alpha to 8-digit Hex", () => {
      const color = { r: 1, g: 0, b: 0, a: 0.5 };
      assert.strictEqual(figmaColorToHex(color), "#ff000080");
    });

    it("converts Figma color to rgb / rgba string format", () => {
      const colorAlpha = { r: 0, g: 1, b: 0, a: 0.75 };
      assert.strictEqual(figmaColorToRgb(colorAlpha), "rgba(0, 255, 0, 0.75)");

      const colorSolid = { r: 1, g: 1, b: 1, a: 1 };
      assert.strictEqual(figmaColorToRgb(colorSolid), "rgb(255, 255, 255)");
    });
  });

  describe("Figma Name Slugification & Category Detection", () => {
    it("slugifies nested style names", () => {
      assert.strictEqual(slugifyFigmaName("Colors/Brand/Primary 500"), "colors-brand-primary-500");
      assert.strictEqual(slugifyFigmaName("Typography / Heading 1"), "typography-heading-1");
      assert.strictEqual(slugifyFigmaName("Spacing / container-padding"), "spacing-container-padding");
    });

    it("auto-detects token category based on styleType and name", () => {
      assert.strictEqual(detectCategory("Primary Red", "FILL"), "color");
      assert.strictEqual(detectCategory("Colors/Primary"), "color");
      assert.strictEqual(detectCategory("Typography/Heading"), "font");
      assert.strictEqual(detectCategory("Effects/Card Shadow", "EFFECT"), "shadow");
      assert.strictEqual(detectCategory("Spacing/lg"), "spacing");
      assert.strictEqual(detectCategory("Radius/md"), "radius");
    });

    it("generates Tailwind v4 @theme CSS variable names", () => {
      assert.strictEqual(getTailwindCssVarName("Colors/Brand/Primary 500", "color"), "--color-brand-primary-500");
      assert.strictEqual(getTailwindCssVarName("Typography/Sans", "font"), "--font-sans");
      assert.strictEqual(getTailwindCssVarName("Spacing/16", "spacing"), "--spacing-16");
      assert.strictEqual(getTailwindCssVarName("Radius/lg", "radius"), "--radius-lg");
      assert.strictEqual(getTailwindCssVarName("Shadow/Card", "shadow"), "--shadow-card");
      assert.strictEqual(getTailwindCssVarName("Colors/Primary", "color", "sys"), "--sys-color-primary");
    });
  });

  describe("Value Formatting", () => {
    it("formats spacing numeric values to rem", () => {
      assert.strictEqual(formatCssValue(16, "spacing"), "1rem");
      assert.strictEqual(formatCssValue(24, "spacing"), "1.5rem");
      assert.strictEqual(formatCssValue(0, "spacing"), "0");
    });

    it("formats typography object values", () => {
      const typoObj = { fontFamily: "Inter", fontSize: 16 };
      assert.strictEqual(formatCssValue(typoObj, "font"), '"Inter", sans-serif');
      assert.strictEqual(formatCssValue(typoObj, "fontSize"), "1rem");
    });

    it("formats drop shadow effect objects", () => {
      const effect = {
        type: "DROP_SHADOW" as const,
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 4 },
        radius: 6,
        spread: -1,
      };
      assert.strictEqual(formatCssValue(effect, "shadow"), "0px 4px 6px -1px #0000001a");
    });
  });

  describe("CSS @theme Generation", () => {
    const sampleStyles: FigmaDesignStyle[] = [
      {
        name: "Colors/Brand/Primary",
        styleType: "FILL",
        value: { r: 0.23137, g: 0.5098, b: 0.9647 },
        description: "Primary brand blue",
      },
      {
        name: "Colors/Brand/Secondary",
        styleType: "FILL",
        value: { r: 0.0627, g: 0.7255, b: 0.5058 },
      },
      {
        name: "Typography/Body",
        styleType: "TEXT",
        value: { fontFamily: "Inter" },
      },
      {
        name: "Spacing/Container",
        value: 32,
        category: "spacing",
      },
      {
        name: "Radius/Card",
        value: 12,
        category: "radius",
      },
    ];

    it("generates valid Tailwind v4 @theme block", () => {
      const css = generateTailwindThemeCss(sampleStyles);
      assert.ok(css.startsWith("@theme {"));
      assert.ok(css.includes("--color-brand-primary: #3b82f6; /* Primary brand blue */"));
      assert.ok(css.includes("--color-brand-secondary: #10b981;"));
      assert.ok(css.includes('--font-body: "Inter", sans-serif;'));
      assert.ok(css.includes("--spacing-container: 2rem;"));
      assert.ok(css.includes("--radius-card: 0.75rem;"));
      assert.ok(css.endsWith("}"));
    });

    it("supports inline theme output when inlineTheme option is set", () => {
      const generator = new TokenGenerator(sampleStyles, { inlineTheme: true });
      const css = generator.toCssTheme();
      assert.ok(css.startsWith("@theme inline {"));
    });
  });

  describe("JSON Token Output", () => {
    const sampleStyles: FigmaDesignStyle[] = [
      {
        name: "Colors/Primary",
        value: "#3b82f6",
        category: "color",
      },
      {
        name: "Spacing/4",
        value: 16,
        category: "spacing",
      },
    ];

    it("generates nested JSON representation", () => {
      const generator = new TokenGenerator(sampleStyles);
      const json = JSON.parse(generator.toJson({ format: "nested" }));
      assert.deepStrictEqual(json, {
        color: { primary: "#3b82f6" },
        spacing: { "4": "1rem" },
      });
    });

    it("generates flat JSON representation", () => {
      const generator = new TokenGenerator(sampleStyles);
      const json = JSON.parse(generator.toJson({ format: "flat" }));
      assert.deepStrictEqual(json, {
        "--color-primary": "#3b82f6",
        "--spacing-4": "1rem",
      });
    });

    it("generates W3C DTCG standard JSON format", () => {
      const generator = new TokenGenerator(sampleStyles);
      const json = JSON.parse(generator.toJson({ format: "w3c" }));
      assert.strictEqual(json.color.primary.$value, "#3b82f6");
      assert.strictEqual(json.color.primary.$type, "color");
      assert.strictEqual(json.spacing["4"].$value, "1rem");
      assert.strictEqual(json.spacing["4"].$type, "dimension");
    });
  });

  describe("Figma REST API Payload Parser", () => {
    it("parses raw Figma file response payload containing styles and nodes", () => {
      const rawFigmaPayload = {
        name: "Sample Figma Design",
        styles: {
          "style_1": { name: "Colors/Surface", styleType: "FILL" },
          "style_2": { name: "Typography/Header", styleType: "TEXT" },
        },
        nodes: {
          "style_1": {
            document: {
              fills: [{ color: { r: 0.1, g: 0.2, b: 0.3 } }],
            },
          },
          "style_2": {
            document: {
              style: { fontFamily: "Geist Sans", fontSize: 24 },
            },
          },
        },
      };

      const generator = extractTokensFromFigmaFile(rawFigmaPayload);
      const tokens = generator.getTokens();

      assert.strictEqual(tokens.length, 2);
      assert.strictEqual(tokens[0].cssVarName, "--color-surface");
      assert.strictEqual(tokens[0].value, "#1a334d");
      assert.strictEqual(tokens[1].cssVarName, "--font-header");
      assert.strictEqual(tokens[1].value, '"Geist Sans", sans-serif');
    });

    it("parses Figma file payload with local variables", () => {
      const rawPayload = {
        variables: {
          "var_1": {
            name: "Colors/Accent",
            resolvedType: "COLOR",
            valuesByMode: { mode1: { r: 0.5, g: 0.2, b: 0.8 } },
          },
        },
      };

      const generator = extractTokensFromFigmaFile(rawPayload);
      const tokens = generator.getTokens();

      assert.strictEqual(tokens.length, 1);
      assert.strictEqual(tokens[0].cssVarName, "--color-accent");
      assert.strictEqual(tokens[0].value, "#8033cc");
    });
  });
});
