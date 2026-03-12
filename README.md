# Assessment

A small React + Vite UI prototype for building a custom bowl.

The app includes:
- Theme toggle with light/dark mode persistence
- Design tokens generated from `tokens.json`
- SVG icon pipeline with SVGO + SVGR
- Reusable `Icon` and `Accordion` components

## Tech Stack

- React 18
- Vite 5
- SWC React plugin
- SVGR (`vite-plugin-svgr`)
- SVGO

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

This runs token generation first, then starts Vite.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`
  - Generates `src/styles/tokens.css` from `tokens.json`, then starts Vite.
- `npm run build`
  - Regenerates tokens, then builds production assets.
- `npm run preview`
  - Serves the production build locally.
- `npm run tokens`
  - Runs token generation only.
- `npm run tokens:sync`
  - Sync helper for `tokens.json` from current working directory, then regenerates CSS tokens.
- `npm run icons`
  - Optimizes all SVG files in `src/icons`.

## Design Tokens

Source of truth: `tokens.json`

Generated output: `src/styles/tokens.css` (auto-generated, do not edit manually)

Generated token categories:
- Color tokens for light/dark themes
- Typography tokens (`--font-family`, size/line-height, and shorthand type tokens)
- Explicit overrides for `:root[data-theme='light']` and `:root[data-theme='dark']`

Theme behavior:
- App writes `data-theme` on `document.documentElement`
- Selected mode is persisted in `localStorage`
- If no saved preference exists, system preference is used

## SVG Pipeline

### Runtime SVG import (SVGR via Vite)

Configured in `vite.config.js`:
- Keeps `viewBox`
- Removes fixed dimensions
- Removes `fill` attributes from shape elements so icons can follow `currentColor`

### Source SVG optimization

Script: `scripts/optimize-icons.mjs`

Runs SVGO on all files in `src/icons` with the same core behavior as runtime config.

## Project Structure

```text
.
├── scripts/
│   ├── build-tokens.mjs
│   ├── optimize-icons.mjs
│   └── sync-tokens.mjs
├── src/
│   ├── components/
│   │   ├── Accordion/
│   │   └── Icon/
│   ├── icons/
│   ├── styles/
│   │   ├── reset.css
│   │   └── tokens.css
│   ├── App.jsx
│   └── main.jsx
├── tokens.json
└── vite.config.js
```

## Notes

- `src/styles/tokens.css` is generated. Update `tokens.json` and run `npm run tokens` instead of editing CSS by hand.
- `npm run icons` mutates SVG files in-place in `src/icons`.


## Todo
- A11y more semantic grouping for checkbox and radio usage and componetize
- A11y icon review
- Icon bowl visual issue from light mode to dark mode
- JSON mock data for full menu items once compoentized

