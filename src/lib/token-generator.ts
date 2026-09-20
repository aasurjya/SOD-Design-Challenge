/**
 * Design System Token Generator Utility
 * 
 * Converts Figma design styles, variables, and tokens into:
 * 1. Tailwind CSS v4 `@theme` CSS custom properties & rules
 * 2. Standardized JSON design token structures (Flat, Nested, or W3C DTCG standard format)
 */

export type FigmaStyleType = 'FILL' | 'TEXT' | 'EFFECT' | 'GRID' | 'SPACING' | 'RADIUS' | 'VARIABLE';

export type TokenCategory =
  | 'color'
  | 'font'
  | 'fontSize'
  | 'fontWeight'
  | 'spacing'
  | 'radius'
  | 'shadow'
  | 'border'
  | 'opacity'
  | 'other';

export interface FigmaColorValue {
  r: number; // 0 to 1
  g: number; // 0 to 1
  b: number; // 0 to 1
  a?: number; // 0 to 1
}

export interface FigmaTypographyValue {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  textTransform?: string;
}

export interface FigmaEffectValue {
  type?: 'DROP_SHADOW' | 'INNER_SHADOW' | 'LAYER_BLUR' | 'BACKGROUND_BLUR';
  color?: FigmaColorValue | string;
  offset?: { x: number; y: number };
  radius?: number;
  spread?: number;
}

export interface FigmaDesignStyle {
  id?: string;
  name: string; // e.g. "Colors/Brand/Primary 500" or "Spacing/lg"
  styleType?: FigmaStyleType;
  description?: string;
  value: string | number | FigmaColorValue | FigmaTypographyValue | FigmaEffectValue | FigmaEffectValue[];
  category?: TokenCategory;
}

export interface ParsedDesignToken {
  name: string;
  cssVarName: string;
  tailwindCategory: TokenCategory;
  value: string;
  raw?: unknown;
  description?: string;
}

export interface TokenGeneratorOptions {
  prefix?: string;
  inlineTheme?: boolean;
  format?: 'nested' | 'flat' | 'w3c';
  indent?: number;
  preserveFigmaNames?: boolean;
  colorFormat?: 'hex' | 'rgb' | 'oklch';
  remBase?: number; // Base pixel value for rem conversion (default: 16)
}

/**
 * Converts Figma normalized color values (0-1 floats) to Hex string (#RRGGBB or #RRGGBBAA)
 */
export function figmaColorToHex(color: FigmaColorValue): string {
  const r = Math.round(Math.max(0, Math.min(1, color.r)) * 255);
  const g = Math.round(Math.max(0, Math.min(1, color.g)) * 255);
  const b = Math.round(Math.max(0, Math.min(1, color.b)) * 255);
  const a = color.a !== undefined ? color.a : 1;

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  if (a < 1) {
    const hexA = Math.round(Math.max(0, Math.min(1, a)) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${hexR}${hexG}${hexB}${hexA}`.toLowerCase();
  }

  return `#${hexR}${hexG}${hexB}`.toLowerCase();
}

/**
 * Converts Figma color value or hex/rgba string to CSS rgb/rgba string
 */
export function figmaColorToRgb(color: FigmaColorValue): string {
  const r = Math.round(Math.max(0, Math.min(1, color.r)) * 255);
  const g = Math.round(Math.max(0, Math.min(1, color.g)) * 255);
  const b = Math.round(Math.max(0, Math.min(1, color.b)) * 255);
  const a = color.a !== undefined ? Math.round(color.a * 100) / 100 : 1;

  if (a < 1) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Normalizes Figma style name into a clean kebab-case identifier slug
 */
export function slugifyFigmaName(name: string): string {
  return name
    .trim()
    .replace(/^[^a-zA-Z0-9]+/, "")
    .replace(/[/\s._+]+([a-zA-Z0-9])/g, "-$1")
    .replace(/[^a-zA-Z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();
}

/**
 * Deduces design token category from Figma style type, name structure, or explicit category
 */
export function detectCategory(name: string, styleType?: FigmaStyleType, explicitCategory?: TokenCategory): TokenCategory {
  if (explicitCategory) return explicitCategory;

  const lowerName = name.toLowerCase();

  if (styleType === 'FILL' || lowerName.includes('color') || lowerName.startsWith('colors/') || lowerName.startsWith('brand/') || lowerName.startsWith('palette/')) {
    return 'color';
  }

  if (styleType === 'TEXT' || lowerName.includes('font') || lowerName.startsWith('typography/') || lowerName.startsWith('type/')) {
    if (lowerName.includes('size')) return 'fontSize';
    if (lowerName.includes('weight')) return 'fontWeight';
    return 'font';
  }

  if (styleType === 'EFFECT' || lowerName.includes('shadow') || lowerName.startsWith('effects/') || lowerName.startsWith('elevation/')) {
    return 'shadow';
  }

  if (lowerName.includes('space') || lowerName.includes('spacing') || lowerName.startsWith('space/') || lowerName.startsWith('gap/')) {
    return 'spacing';
  }

  if (lowerName.includes('radius') || lowerName.includes('corner') || lowerName.startsWith('radius/')) {
    return 'radius';
  }

  if (lowerName.includes('border') || lowerName.includes('stroke')) {
    return 'border';
  }

  if (lowerName.includes('opacity') || lowerName.includes('alpha')) {
    return 'opacity';
  }

  return 'other';
}

/**
 * Generates Tailwind CSS v4 custom property variable name for a token category
 * e.g., category 'color' + name 'brand-primary' -> '--color-brand-primary'
 */
export function getTailwindCssVarName(name: string, category: TokenCategory, prefix: string = ""): string {
  const cleanSlug = slugifyFigmaName(name)
    .replace(/^(colors?|typography|fonts?|spacings?|spaces?|radius|radii|shadows?|effects?)-/, "");

  const pfx = prefix ? `${prefix}-` : "";

  switch (category) {
    case 'color':
      return `--${pfx}color-${cleanSlug}`;
    case 'font':
      return `--${pfx}font-${cleanSlug}`;
    case 'fontSize':
      return `--${pfx}text-${cleanSlug}`;
    case 'fontWeight':
      return `--${pfx}font-weight-${cleanSlug}`;
    case 'spacing':
      return `--${pfx}spacing-${cleanSlug}`;
    case 'radius':
      return `--${pfx}radius-${cleanSlug}`;
    case 'shadow':
      return `--${pfx}shadow-${cleanSlug}`;
    case 'border':
      return `--${pfx}border-${cleanSlug}`;
    case 'opacity':
      return `--${pfx}opacity-${cleanSlug}`;
    default:
      return `--${pfx}${cleanSlug}`;
  }
}

/**
 * Formats a single Figma style value into standard CSS string representation
 */
export function formatCssValue(
  value: string | number | FigmaColorValue | FigmaTypographyValue | FigmaEffectValue | FigmaEffectValue[],
  category: TokenCategory,
  options?: TokenGeneratorOptions
): string {
  const remBase = options?.remBase || 16;
  const colorFormat = options?.colorFormat || 'hex';

  // Handle color value
  if (typeof value === 'object' && value !== null && 'r' in value && 'g' in value && 'b' in value) {
    const colVal = value as FigmaColorValue;
    return colorFormat === 'rgb' ? figmaColorToRgb(colVal) : figmaColorToHex(colVal);
  }

  // Handle Typography value
  if (typeof value === 'object' && value !== null && ('fontFamily' in value || 'fontSize' in value)) {
    const typo = value as FigmaTypographyValue;
    if (category === 'font' && typo.fontFamily) {
      return `"${typo.fontFamily}", sans-serif`;
    }
    if (category === 'fontSize' && typo.fontSize) {
      return `${typo.fontSize / remBase}rem`;
    }
    if (category === 'fontWeight' && typo.fontWeight) {
      return String(typo.fontWeight);
    }
    if (typo.fontFamily) {
      return `"${typo.fontFamily}", sans-serif`;
    }
  }

  // Handle Effect / Shadow value
  if (Array.isArray(value)) {
    return value.map((eff) => formatSingleEffect(eff, colorFormat)).join(", ");
  }
  if (typeof value === 'object' && value !== null && ('type' in value || 'radius' in value)) {
    return formatSingleEffect(value as FigmaEffectValue, colorFormat);
  }

  // Handle Numeric value (convert spacing/radius to rem if numeric > 0)
  if (typeof value === 'number') {
    if (category === 'spacing' || category === 'radius') {
      return value === 0 ? "0" : `${value / remBase}rem`;
    }
    if (category === 'opacity') {
      return String(value);
    }
    return `${value}px`;
  }

  // String value handling
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (category === 'spacing' || category === 'radius') {
      if (/^\d+$/.test(trimmed)) {
        const num = parseFloat(trimmed);
        return `${num / remBase}rem`;
      }
    }
    return trimmed;
  }

  return String(value);
}

function formatSingleEffect(effect: FigmaEffectValue, colorFormat: 'hex' | 'rgb' | 'oklch'): string {
  const x = effect.offset?.x ?? 0;
  const y = effect.offset?.y ?? 0;
  const blur = effect.radius ?? 0;
  const spread = effect.spread ?? 0;

  let colorStr = "rgba(0, 0, 0, 0.1)";
  if (typeof effect.color === 'object' && effect.color !== null && 'r' in effect.color) {
    colorStr = colorFormat === 'rgb' ? figmaColorToRgb(effect.color) : figmaColorToHex(effect.color);
  } else if (typeof effect.color === 'string') {
    colorStr = effect.color;
  }

  const inset = effect.type === 'INNER_SHADOW' ? "inset " : "";
  return `${inset}${x}px ${y}px ${blur}px ${spread}px ${colorStr}`;
}

/**
 * Core Design System Token Generator Class
 */
export class TokenGenerator {
  private tokens: ParsedDesignToken[] = [];
  private options: TokenGeneratorOptions;

  constructor(styles?: FigmaDesignStyle[], options?: TokenGeneratorOptions) {
    this.options = options || {};
    if (styles && styles.length > 0) {
      this.addStyles(styles);
    }
  }

  /**
   * Adds a single Figma design style to the generator
   */
  public addStyle(style: FigmaDesignStyle): this {
    const category = detectCategory(style.name, style.styleType, style.category);
    const cssVarName = getTailwindCssVarName(style.name, category, this.options.prefix);
    const formattedValue = formatCssValue(style.value, category, this.options);

    this.tokens.push({
      name: style.name,
      cssVarName,
      tailwindCategory: category,
      value: formattedValue,
      raw: style.value,
      description: style.description,
    });

    return this;
  }

  /**
   * Adds an array of Figma design styles
   */
  public addStyles(styles: FigmaDesignStyle[]): this {
    styles.forEach((style) => this.addStyle(style));
    return this;
  }

  /**
   * Extract design tokens from raw Figma REST API file payload (GET /v1/files/:key)
   */
  public parseFigmaFile(figmaFilePayload: Record<string, any>): this {
    if (!figmaFilePayload) return this;

    // Parse Figma file styles map
    const styles = figmaFilePayload.styles || {};
    const nodes = figmaFilePayload.nodes || {};

    // 1. Process styles definition dictionary
    for (const [styleId, styleInfo] of Object.entries(styles)) {
      const info = styleInfo as { name: string; styleType: FigmaStyleType; description?: string };
      const nodeData = nodes[styleId]?.document || {};

      let value: unknown = "#000000";

      if (info.styleType === 'FILL') {
        const fill = nodeData.fills?.[0];
        if (fill?.color) {
          value = fill.color;
        }
      } else if (info.styleType === 'TEXT') {
        value = nodeData.style || { fontFamily: "Inter", fontSize: 16 };
      } else if (info.styleType === 'EFFECT') {
        value = nodeData.effects || [];
      }

      this.addStyle({
        id: styleId,
        name: info.name,
        styleType: info.styleType,
        description: info.description,
        value: value as any,
      });
    }

    // 2. Process Figma local variables metadata if present (Variables API)
    if (figmaFilePayload.variables || figmaFilePayload.meta?.variables) {
      const varsMap = figmaFilePayload.variables || figmaFilePayload.meta?.variables || {};
      for (const [varId, varObj] of Object.entries(varsMap)) {
        const v = varObj as { name: string; resolvedType?: string; valuesByMode?: Record<string, any>; description?: string };
        const rawVal = Object.values(v.valuesByMode || {})[0];

        let cat: TokenCategory = 'other';
        if (v.resolvedType === 'COLOR') cat = 'color';
        else if (v.resolvedType === 'FLOAT') cat = 'spacing';

        this.addStyle({
          id: varId,
          name: v.name,
          category: cat,
          description: v.description,
          value: rawVal as any,
        });
      }
    }

    return this;
  }

  /**
   * Retrieves all processed design tokens
   */
  public getTokens(): ParsedDesignToken[] {
    return [...this.tokens];
  }

  /**
   * Generates Tailwind CSS v4 `@theme` block output
   */
  public toCssTheme(customOptions?: Partial<TokenGeneratorOptions>): string {
    const opts = { ...this.options, ...customOptions };
    const inline = opts.inlineTheme ? " inline" : "";

    if (this.tokens.length === 0) {
      return `@theme${inline} {\n}`;
    }

    // Group tokens by category for clean readable output
    const categoryOrder: TokenCategory[] = [
      'color',
      'font',
      'fontSize',
      'fontWeight',
      'spacing',
      'radius',
      'shadow',
      'border',
      'opacity',
      'other',
    ];

    const groupedMap = new Map<TokenCategory, ParsedDesignToken[]>();
    categoryOrder.forEach((cat) => groupedMap.set(cat, []));

    this.tokens.forEach((token) => {
      const list = groupedMap.get(token.tailwindCategory) || [];
      list.push(token);
      groupedMap.set(token.tailwindCategory, list);
    });

    const lines: string[] = [`@theme${inline} {`];

    categoryOrder.forEach((cat) => {
      const tokensInCategory = groupedMap.get(cat) || [];
      if (tokensInCategory.length > 0) {
        lines.push(`  /* ${cat.toUpperCase()} TOKENS */`);
        tokensInCategory.forEach((token) => {
          const desc = token.description ? ` /* ${token.description} */` : "";
          lines.push(`  ${token.cssVarName}: ${token.value};${desc}`);
        });
        lines.push("");
      }
    });

    // Remove empty trailing space before closing brace
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }

    lines.push("}");
    return lines.join("\n");
  }

  /**
   * Generates JSON formatted string representation of tokens
   */
  public toJson(customOptions?: Partial<TokenGeneratorOptions>): string {
    const opts = { ...this.options, ...customOptions };
    const format = opts.format || 'nested';
    const indent = opts.indent !== undefined ? opts.indent : 2;

    const data = this.toTokenObject(format);
    return JSON.stringify(data, null, indent);
  }

  /**
   * Converts design tokens into a JSON data object (Nested, Flat, or W3C standard)
   */
  public toTokenObject(format: 'nested' | 'flat' | 'w3c' = 'nested'): Record<string, any> {
    if (format === 'flat') {
      const flatObj: Record<string, string> = {};
      this.tokens.forEach((t) => {
        flatObj[t.cssVarName] = t.value;
      });
      return flatObj;
    }

    if (format === 'w3c') {
      const w3cObj: Record<string, any> = {};
      this.tokens.forEach((t) => {
        const cat = t.tailwindCategory;
        if (!w3cObj[cat]) w3cObj[cat] = {};

        const tokenKey = slugifyFigmaName(t.name).replace(new RegExp(`^(${cat}s?|colors?)-`), "");
        w3cObj[cat][tokenKey] = {
          $value: t.value,
          $type: t.tailwindCategory === 'color' ? 'color' : t.tailwindCategory === 'font' ? 'fontFamily' : 'dimension',
          ...(t.description ? { $description: t.description } : {}),
        };
      });
      return w3cObj;
    }

    // Default: 'nested' category structure
    const nestedObj: Record<string, Record<string, string>> = {};
    this.tokens.forEach((t) => {
      const cat = t.tailwindCategory;
      if (!nestedObj[cat]) nestedObj[cat] = {};

      const key = slugifyFigmaName(t.name).replace(new RegExp(`^(${cat}s?|colors?)-`), "");
      nestedObj[cat][key] = t.value;
    });

    return nestedObj;
  }
}

/**
 * Functional Helper: Quick convert Figma styles to Tailwind v4 @theme CSS string
 */
export function generateTailwindThemeCss(styles: FigmaDesignStyle[], options?: TokenGeneratorOptions): string {
  const generator = new TokenGenerator(styles, options);
  return generator.toCssTheme();
}

/**
 * Functional Helper: Quick convert Figma styles to JSON string
 */
export function generateTokenJson(styles: FigmaDesignStyle[], options?: TokenGeneratorOptions): string {
  const generator = new TokenGenerator(styles, options);
  return generator.toJson();
}

/**
 * Functional Helper: Parses Figma design styles array into ParsedDesignToken array
 */
export function parseFigmaStylesToTokens(styles: FigmaDesignStyle[], options?: TokenGeneratorOptions): ParsedDesignToken[] {
  const generator = new TokenGenerator(styles, options);
  return generator.getTokens();
}

/**
 * Functional Helper: Extract tokens from raw Figma REST API file payload
 */
export function extractTokensFromFigmaFile(figmaFilePayload: Record<string, any>, options?: TokenGeneratorOptions): TokenGenerator {
  const generator = new TokenGenerator([], options);
  return generator.parseFigmaFile(figmaFilePayload);
}
