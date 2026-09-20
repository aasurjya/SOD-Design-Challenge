# SOD: Design Challenge (#BNB2026) — Beyond Normal Beliefs

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

An industrial-grade design system web application and real-time Figma integration platform built for the **SOD: Design Challenge (#BNB2026)** ("Beyond Normal Beliefs"). 

This project bridges high-concept UI wireframing with automated design token generation, live Figma REST API & OAuth 2.0 synchronisation, and next-generation CSS variable integration via **Tailwind CSS v4 `@theme`**.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Figma OAuth 2.0 Configuration](#-figma-oauth-20-configuration)
- [Vercel Deployment Guide](#-vercel-deployment-guide)
- [Tailwind CSS v4 `@theme` Engine Documentation](#-tailwind-css-v4-theme-engine-documentation)
- [API Endpoint Sitemap](#-api-endpoint-sitemap)
- [Local Setup & Commands](#-local-setup--commands)
- [Automated Testing & Verification](#-automated-testing--verification)

---

## 🚀 Project Overview

The **SOD: Design Challenge (#BNB2026)** application serves as the core digital interface for the annual School of Design innovation showcase. It enforces a strict **Beyond Normal Beliefs (BNB)** aesthetic language—featuring canvas background (`#EDEDED`), ink black rules (`#000000`), sharp 0px border radiuses, and high-visibility `#CFFD3E` Volt accents.

Beyond its client-facing landing page and interactive phase design engines (Lo-Fi Wireframe vs. High-Fi Final Phase rendering), the project embeds a full **Figma API & OAuth 2.0 Integration Suite** capable of:
1. Authenticating users via Figma OAuth 2.0 PKCE / Authorization Code Flow.
2. Querying Figma documents, canvas trees, styles, components, and rendered node assets.
3. Parsing raw Figma JSON structures into Tailwind v4 `@theme` blocks, flat JSON, nested JSON, and W3C DTCG standard tokens.

---

## ✨ Key Features

- **⚡ Next.js 16 App Router & Turbopack**: Built on Next.js 16.3.5 and React 19 for maximum speed and zero-runtime overhead.
- **🎨 Tailwind v4 `@theme` Token Engine**: CSS-first theme configuration using standard CSS variables and native `@theme inline` declaration blocks.
- **🔐 Secure Figma OAuth 2.0**: Native server-side OAuth flow with `httpOnly`, `Secure`, `SameSite=lax` cookie session storage and token persistence.
- **📐 Live Figma Importer & Token Exporter**: Dynamic file key extraction, live canvas inspector, node image generation, and multi-format design token generator (Tailwind `@theme`, Flat JSON, Nested JSON, W3C DTCG).
- **🔀 Lo-Fi to Hi-Fi Interactive Toggle**: Live comparison engine between wireframe structures and polished production-ready UI components.
- **🛡️ Built-in Resilience**: Custom error handling (`FigmaApiError`, `FigmaRateLimitError` with HTTP 429 headers, `FigmaAuthError`, `FigmaNotFoundError`) and 100% test coverage for API utilities and token generation algorithms.

---

## 🛠 Architecture & Tech Stack

```
design-challenge/
├── src/
│   ├── app/
│   │   ├── api/figma/
│   │   │   ├── auth/route.ts         # Initiates Figma OAuth 2.0 redirect
│   │   │   ├── callback/route.ts     # Handles code exchange & httpOnly cookie set
│   │   │   ├── config/route.ts       # Returns server OAuth setup status
│   │   │   └── file/route.ts         # Multi-purpose Figma document/node/image fetcher
│   │   ├── globals.css               # Tailwind v4 @import & @theme inline definition
│   │   ├── layout.tsx                # Root layout with font optimization & theme provider
│   │   └── page.tsx                  # Interactive #BNB2026 showcase & importer UI
│   ├── components/
│   │   ├── bnb-hero.tsx              # Dynamic hero header component
│   │   ├── countdown.tsx             # Challenge deadline timer component
│   │   ├── figma-integration.tsx     # Figma OAuth connection dashboard
│   │   ├── figma-landing-importer.tsx# Real-time Figma document & token exporter UI
│   │   ├── final2-phase.tsx          # High-fidelity design phase component
│   │   ├── lofi-wireframe.tsx        # Blueprint wireframe mode switcher component
│   │   └── ui/                       # Accessible Radix UI / Shadcn primitives
│   └── lib/
│       ├── figma.ts                  # Figma REST client, URL parser & OAuth handler
│       ├── token-generator.ts        # Design token parser & Tailwind v4 generator
│       └── __tests__/                # Comprehensive node test suite
├── .env.local                        # Environment variables configuration
├── next.config.ts                    # Next.js 16 configuration
├── package.json                      # Dependency registry & execution scripts
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## 🔒 Figma OAuth 2.0 Configuration

The application includes an end-to-end Figma OAuth 2.0 integration. Follow these steps to set up OAuth authentication for local development or production.

### 1. Register a Figma App
1. Go to the [Figma Developer Platform](https://www.figma.com/developers/apps).
2. Click **Create a new app**.
3. Fill in your App Name (e.g., `SOD Design Challenge #BNB2026`).
4. Set the **Callback URL** to:
   - **Local Development**: `http://localhost:3000/api/figma/callback`
   - **Production (Vercel)**: `https://<your-app-name>.vercel.app/api/figma/callback`
5. Note your **Client ID** and **Client Secret**.

### 2. Configure Environment Variables
Create or update `.env.local` in the project root:

```env
# Figma OAuth 2.0 Client Credentials
FIGMA_CLIENT_ID=your_figma_client_id_here
FIGMA_CLIENT_SECRET=your_figma_client_secret_here

# OAuth Callback Redirect URI (Must match Figma Developer Portal exactly)
FIGMA_OAUTH_REDIRECT_URI=http://localhost:3000/api/figma/callback
```

### 3. Session & Security Specs
- Access tokens are stored in an `httpOnly`, `SameSite=lax` cookie named `figma_access_token`.
- Refresh tokens are stored in `figma_refresh_token` with a 1-year max age.
- When querying `/api/figma/file`, the server checks credentials in the following order:
  1. `x-figma-token` header
  2. `Authorization: Bearer <token>` header
  3. `token` query parameter
  4. `figma_access_token` session cookie

---

## ☁️ Vercel Deployment Guide

Deploying the SOD Design Challenge to Vercel is seamless with Next.js 16.

### Step 1: Push Code to GitHub / Git Provider
Ensure all changes are committed and pushed to your git repository.

### Step 2: Import Project into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project**.
3. Select your repository (`design-challenge`).
4. Framework Preset: **Next.js** (automatically detected).

### Step 3: Configure Environment Variables on Vercel
Under the **Environment Variables** section, add the following key-value pairs:

| Key | Value | Environment |
|---|---|---|
| `FIGMA_CLIENT_ID` | `<your_figma_client_id>` | Production, Preview, Development |
| `FIGMA_CLIENT_SECRET` | `<your_figma_client_secret>` | Production, Preview, Development |
| `FIGMA_OAUTH_REDIRECT_URI` | `https://<your-project>.vercel.app/api/figma/callback` | Production, Preview |

### Step 4: Update Callback URI in Figma Portal
Add your live Vercel deployment URL callback (`https://<your-project>.vercel.app/api/figma/callback`) to your app settings in the [Figma Developer Portal](https://www.figma.com/developers/apps).

### Step 5: Deploy
Click **Deploy**. Vercel will run `npm run build` and launch your application globally on the Edge Network.

---

## 🎨 Tailwind CSS v4 `@theme` Engine Documentation

This project uses **Tailwind CSS v4**, which eliminates traditional `tailwind.config.js` files in favor of **CSS-first configuration**.

### 1. Engine Core Setup (`src/app/globals.css`)
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
  --font-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  
  /* High-visibility #BNB2026 Volt Accent */
  --color-volt: var(--volt);
  --color-volt-foreground: var(--volt-foreground);
  
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
}
```

### 2. Design Tokens (`:root` & `.dark`)
The design system defines canonical design tokens directly in `:root`:

```css
:root {
  --background: #ededed;
  --foreground: #000000;
  --primary: #000000;
  --primary-foreground: #ffffff;
  --volt: #cffd3e;             /* Volt Highlight */
  --volt-foreground: #0a0a0a;
  --radius: 0rem;              /* Sharp zero-radius rules */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #ededed;
  --primary-foreground: #0a0a0a;
  --volt: #cffd3e;
  --volt-foreground: #0a0a0a;
}
```

### 3. Dynamic Token Generation Module (`src/lib/token-generator.ts`)
The `TokenGenerator` utility dynamically transforms Figma API responses into:
1. **Tailwind v4 `@theme` CSS Blocks**: Generates `@theme { --color-primary-500: #3B82F6; ... }` declarations.
2. **Flat JSON Tokens**: `{ "color.primary.500": "#3B82F6" }`
3. **Nested JSON Tokens**: `{ "color": { "primary": { "500": "#3B82F6" } } }`
4. **W3C DTCG Format**: `{ "color": { "primary": { "$value": "#3B82F6", "$type": "color" } } }`

---

## 🗺️ API Endpoint Sitemap

The server provides 4 REST API endpoints under `/api/figma/*`:

| Endpoint | Method | Parameters / Headers | Description | Status Codes |
|---|---|---|---|---|
| `/api/figma/auth` | `GET` | `state` (optional), `scope` (optional) | Initiates Figma OAuth 2.0 flow; redirects browser to Figma authorization screen. | `302 Redirect`, `500 Error` |
| `/api/figma/callback` | `GET` | `code`, `state`, `error` | Handles OAuth callback, exchanges code for access & refresh tokens, sets `httpOnly` cookies. | `302 Redirect` |
| `/api/figma/config` | `GET` | None | Returns server configuration status, masked Client ID, and redirect URI. | `200 OK`, `500 Error` |
| `/api/figma/file` | `GET` | `key` or `url`, `depth`, `ids`, `images`, `format`, `scale` | Fetches document tree, node details, style definitions, or rendered component PNG/SVG images. | `200 OK`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `429 Rate Limit`, `500 Server Error` |

### Endpoint Usage Examples

#### 1. Check Configuration Status
```bash
curl -X GET http://localhost:3000/api/figma/config
```
**Response (`200 OK`)**:
```json
{
  "configured": true,
  "clientId": "m4iC***RO",
  "redirectUri": "http://localhost:3000/api/figma/callback",
  "authUrl": "https://www.figma.com/oauth?client_id=...",
  "timestamp": "2026-09-21T02:55:00.000Z"
}
```

#### 2. Fetch Figma File Structure
```bash
curl -X GET "http://localhost:3000/api/figma/file?key=XYZ1234567890abcdef" \
     -H "x-figma-token: fgb_your_personal_access_token"
```

#### 3. Fetch Rendered Component Images
```bash
curl -X GET "http://localhost:3000/api/figma/file?key=XYZ1234567890abcdef&ids=1:2&images=true&format=svg" \
     -H "x-figma-token: fgb_your_personal_access_token"
```

---

## 💻 Local Setup & Commands

### Prerequisites
- **Node.js**: v20.0.0 or higher
- **npm**: v10.0.0 or higher

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-org/design-challenge.git
   cd design-challenge
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.local` or set up the environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Automated Testing & Verification

The repository features a built-in test suite powered by `tsx` unit test execution for zero-overhead validation.

### Run Unit Tests
```bash
npm run test
```
**Test Results**:
- `FigmaClient & API Utilities`: File key extraction (raw, design URL, legacy URL, FigJam board), key validation, configuration masking, error class instances.
- `TokenGenerator`: Color float to Hex conversion, 8-digit RGBA hex, style slugification, category auto-detection, rem spacing calculation, typography & drop shadow parsing, `@theme` block generation, DTCG JSON validation.
- Total: **28 passing unit tests (0 failures)**.

### Run Production Build
```bash
npm run build
```
Validates TypeScript static types, Turbopack bundle optimizations, dynamic route exports, and prerendered static pages.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details.

Developed for **SOD: Design Challenge (#BNB2026)**.
