# Calibre - Social Intelligence Dashboard

A single-page, fully data-driven social intelligence dashboard built with
Next.js (App Router) and React. It reads a competitive set of "houses" from one
dataset and renders share of voice, a weekly engagement trend, a per-house
playbook, summary metrics and auto-clustered content narratives - with an
optional live refresh straight from the KINETK graph over MCP.

It ships as a template: the branding lives in one config file and the data in
another, so you can point it at your own subjects without touching the UI.

## Quick start

Download the template (replace `YOUR_ORG/YOUR_REPO` with the published repo):

```bash
npx giget@latest gh:YOUR_ORG/YOUR_REPO my-dashboard
# or
npx gitpick YOUR_ORG/YOUR_REPO my-dashboard
```

Then install and run the dev server:

```bash
cd my-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Scripts: `npm run dev` (develop), `npm run build` + `npm run start` (production),
`npm run lint` (lint).

## Make it yours

A few small files hold everything you would change. The UI reads from them -
you should not need to edit the components.

### 1. Branding - [config/brand.ts](config/brand.ts)

This is the single place for your identity. The page copy is fixed and lives in
the components; only the branding is configurable here:

- **`brand.name`** - the product name, shown in the browser tab, masthead
  eyebrow and footer.
- **`brand.logo`** - an optional wordmark image served from `public/` (e.g.
  `/logo.svg`); falls back to `name` as the logotype when left `null`.
- **`brand.colors`** - the two brand accents. They override the CSS defaults at
  runtime, so a recolor here flows through every `*-accent` utility and the
  derived flag/live/glow tints.
- **`brand.contact`** - the email and URL shown in the footer.

### 2. Colors and fonts - [app/globals.css](app/globals.css)

The neutral palette and typography are Tailwind theme tokens in the `@theme`
block. Edit a value there (`--color-card`, `--font-display`, ...) and every
matching utility (`bg-card`, `font-display`) updates across the app. The two
brand accents (`--color-accent` / `--color-accent-2`) are defaults that
[config/brand.ts](config/brand.ts) overrides at runtime, so recolor those in
`brand.ts`. Translucent tints (glows, the caveat box, status tags) are derived
with `color-mix`, so they follow along automatically. Per-entity accent colors
(Rolex gold, etc.) are data - they live in `lib/data.ts`.

### 3. The dataset - [lib/data.ts](lib/data.ts)

Replace the `entities` array with your own subjects. Each entity carries only
**raw counts** (records, views, likes, comments, shares), per-platform post
counts, a weekly engagement series, narratives, white-space tags, top posts and
a playbook. The aggregate numbers - engagement score, share of voice and
comments-per-post - are **derived** in [lib/metrics.ts](lib/metrics.ts), so they
can never fall out of sync with the counts. Adjust `ENGAGEMENT_WEIGHTS` there to
change how the score is weighted.

The dashboard is written for any number of entities, so adding or removing a
house just works.

## Optional: live refresh

Section 06 has a "Refresh live from KINETK" button. It calls
[app/api/insights/route.ts](app/api/insights/route.ts), a server route that
opens an MCP connection to the KINETK graph, pulls fresh `insights` for one
house, and maps the structured narratives and tag signals into the section. No
model is involved - the summaries come straight from KINETK. Your key stays on
the server and is never exposed to the browser.

It is entirely optional. With nothing configured, the dashboard renders the
built-in snapshot and the button reports that live refresh is not set up.

To enable it, copy `.env.example` to `.env.local` and set:

- `KINETK_API_KEY` - required, your KINETK API key from
  [platform.kinetk.ai](https://platform.kinetk.ai); sent to the KINETK MCP
  endpoint as the `x-api-key` header.
- `KINETK_MCP_URL` - optional, the KINETK MCP endpoint URL (override per workspace).

## Project structure

Section-based: each page section is its own folder under `components/sections`;
shared primitives live in `components/ui` and cross-section state in
`components/providers`. Component files are kebab-case; the exported component
stays PascalCase.

```
app/
  layout.tsx              Root layout: fonts, metadata, brand color injection
  page.tsx                Composes the sections in order
  globals.css             Tailwind + the @theme design tokens
  api/insights/route.ts   Optional live-refresh proxy (server-side)
components/
  ui/                     Shared primitives (section, pill)
  providers/
    selection-provider.tsx  Cross-section "which house am I?" state
  sections/               One folder per page section
    ticker/  masthead/  share-of-voice/  brand-selector/
    weekly-pulse/  playbook/  summary-metrics/  narratives/  footer/
config/
  brand.ts                Branding: name, logo, colors, contact  <- edit to rebrand
lib/
  data.ts                 The dataset       <- edit for your subjects
  types.ts                Domain types
  metrics.ts              Derived metrics (score, share of voice)
  format.ts               Number and label formatting
```

## How it is built

- **Next.js App Router** with React Server Components. Static, data-driven
  sections render on the server; only the interactive pieces (brand selection,
  the trend chart, the accordion) are client components.
- **Tailwind CSS v4** with the palette, fonts and derived tints declared as
  `@theme` tokens in `app/globals.css` - no separate Tailwind config file.
- **`next/font`** self-hosts the fonts (Fraunces, Inter, IBM Plex Mono).
- **Hand-built SVG** for the share-of-voice dial and the trend chart - no
  charting dependency.
