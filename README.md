# SmartCalc

SmartCalc is a React + TypeScript + Vite calculator index designed for fast browser-side calculations, search-friendly detail pages, and a content architecture that can grow beyond 100 tools.

## Included in this first version

The first release includes 20 real calculators across Financial, Math, Date & Time, and Health categories. Each calculator is driven by a definition in `client/src/data/calculators.ts` and pure formulas in `client/src/lib/calculations.ts`; the shared detail template handles the surrounding SEO-friendly content structure.

The interface uses a mobile-first editorial system called **Paper Precision**: warm paper tones, ink typography, DM Serif Display for display hierarchy, IBM Plex Sans for controls and results, and Editor Coral for action states.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
npm run deploy
```

The Cloudflare configuration is in `wrangler.jsonc` and points Workers Static Assets at `dist/`. Before deploying, set the desired Cloudflare project context through Wrangler; account IDs, domains, and secrets are intentionally not hard-coded.

## Add a calculator

1. Add a definition and SEO metadata object to `client/src/data/calculators.ts`.
2. Add pure formula functions to `client/src/lib/calculations.ts`.
3. Add the input/output branch to the shared `CalculatorForm` or extract a dedicated module when the UI becomes specialized.
4. Add the canonical URL to `client/public/sitemap.xml`.

The browser performs the core calculations locally. No database or login is required for the free calculator flow. Ad placement is intentionally not inserted into the calculator input or result controls; an `AdSlot` component can be added later without changing the calculation engine.

## Cloudflare deployment

The project is compatible with Cloudflare Workers Static Assets. Build first so that Vite emits `dist/`, then run `wrangler deploy`. The site is a static frontend and does not require an Express server, VPS, Docker, or a database for the initial release.
