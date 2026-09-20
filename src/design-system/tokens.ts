/**
 * SOD: Design & Innovation Challenge (#BNB2026)
 * Design System Tokens (Figma Node-ID: 121-688 & 193-3)
 */

export const tokens = {
  colors: {
    background: "#EDEDED",
    foreground: "#000000",
    accentVolt: "#CFFD3E",
    accentVoltHover: "#bbf319",
    white: "#FFFFFF",
    surfaceMuted: "#F3F4F6",
    surfaceCard: "#EDEDED",
    borderDark: "#000000",
    borderMuted: "#E5E7EB",
    textMuted: "#4B5563",
    dangerRed: "#DC2626",
    warningAmber: "#F59E0B",
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    monoFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    weights: {
      regular: "400",
      medium: "500",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    sizes: {
      tag: "10px",
      label: "11px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "88px",
      hero: "112px",
    },
    lineHeights: {
      tight: "88%",
      snug: "95%",
      normal: "120%",
      relaxed: "140%",
    },
    letterSpacing: {
      tighter: "-0.04em",
      tight: "-0.02em",
      normal: "0em",
      wide: "0.05em",
      widest: "0.1em",
    },
  },
  layout: {
    maxWidth: "1383px",
    headerHeight: "56px",
    footerHeight: "40px",
    borderWidth: "1px",
    desktopGrid: {
      leftColumnWidth: "875px",
      rightColumnWidth: "508px",
      leftTopHeight: "487px",
      leftBottomHeight: "230px",
      rightTopHeight: "487px",
      rightBottomHeight: "230px",
    },
  },
  borders: {
    brutalist: "1px solid #000000",
    thick: "2px solid #000000",
  },
  shadows: {
    brutalist: "4px 4px 0px #000000",
    brutalistLg: "8px 8px 0px #000000",
    subtle: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
} as const;

export type DesignTokens = typeof tokens;
