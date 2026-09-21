---
name: sod-design-system
description: >-
  Standardized guidelines and procedures for developing, maintaining, and scaling
  the School of Design (SOD), IIT Jodhpur Design & Innovation Challenge (#BNB2026)
  web platform. Covers brutalist design tokens, responsive grid layouts (desktop 1383px & mobile),
  interactivity, and component architecture.
---

# SOD: Design & Innovation Challenge (#BNB2026) Design System

This skill defines the official visual and technical standards for the School of Design, IIT Jodhpur (#BNB2026) web application.

---

## 1. Core Brand Colors & Tokens

| Token | Hex Value | Role | Usage |
| :--- | :--- | :--- | :--- |
| `background-default` | `#EDEDED` | Canvas & Grid Background | Primary page frame background |
| `accent-volt` | `#CFFD3E` | Signature Volt Highlight | `UNSERIOUS` block, high-impact highlights |
| `foreground-primary` | `#000000` | High-contrast Brutalist Black | Borders, headings, high-contrast buttons |
| `foreground-inverted`| `#FFFFFF` | Contrast Elements | Button text, crest background, card backgrounds |
| `surface-muted` | `#F3F4F6` | Secondary Panel Background | Step cards, subtle table borders |

---

## 2. Typography Rules

- **Font Family**: `'Inter', system-ui, -apple-system, sans-serif`
- **Brutalist Headings**:
  - `BEYOND NORMAL BELIEFS`: `font-weight: 900`, `letter-spacing: -0.04em`, `line-height: 88%`, uppercase.
  - `UNSERIOUS`: `font-weight: 900`, `letter-spacing: -0.03em`, `line-height: 100%`, uppercase.
- **Labels & Monospace Tags**:
  - `font-weight: 800`, `font-size: 11px`, `line-height: 13px`, uppercase.
  - `#BNB2026`, `IIT JODHPUR`, `SCHOOL OF DESIGN`.

---

## 3. Responsive Breakpoint Rules

- **Desktop (1383px+)**: Pixel-perfect grid layout matching Figma Frame `node-id=193-400` (`1383px × 773px`) on the `Final Development` canvas (`node-id=193-3`).
- **Tablet (768px - 1024px)**: Fluid column scaling, font scaling down proportionally (`clamp()`).
- **Mobile (< 768px)**:
  - Header: Collapses navigation into interactive `MENU` slide-out drawer.
  - Left/Right columns: Stack vertically without clipping.
  - Countdown: Scales to fluid 2-column or 4-digit badge layout.
  - Touch Targets: All interactive buttons (`ENTER`, `FOR INDUSTRY →`, `MENU`) must be at least `44px × 44px`.

---

## 4. Interactive Components

1. **Slide-Out Menu Drawer**:
   - Quick navigation: Ideas, People, Places, Possibilities, Submission Guidelines, FAQ, IITJ Campus directions.
2. **Participation / Registration Modal**:
   - Triggers on `ENTER` or `APPLY NOW`.
   - Team registration, student ID validation, challenge track selector.
3. **Industry Partnership Portal**:
   - Triggers on `FOR INDUSTRY →`.
   - Problem statement sponsorship, jury participation, hiring showcase.
4. **Live Submission Countdown**:
   - Real-time ticking timer synchronized with Gate 01 deadline.
