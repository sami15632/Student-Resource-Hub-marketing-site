# Student Resource Hub — Marketing Website

A premium, frontend-only marketing/landing site for **Student Resource Hub**. This is **not** the application itself — every call-to-action redirects visitors to the live app at `https://studify-world.lovable.app/feed`.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom dark theme design tokens (see `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, hover/tilt interactions, page transition
- **React Three Fiber + drei** — ambient constellation scene in the hero
- **lucide-react** — icon set

No backend, database, auth, or API routes are included by design — this is a fully static marketing page.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.

## Project structure

```
app/
  layout.tsx        — fonts, full SEO metadata, viewport, Organization/WebSite JSON-LD
  page.tsx           — assembles all sections in order
  globals.css         — design tokens, glass/btn utilities, reduced-motion support
  icon.svg            — favicon
  apple-icon.tsx       — generated iOS home-screen icon (next/og)
  opengraph-image.tsx  — generated share-card image for Facebook/LinkedIn/etc. (next/og)
  twitter-image.tsx    — generated share-card image for X/Twitter (next/og)
  manifest.ts          — web app manifest
  robots.ts             — robots.txt (allows all, points to sitemap)
  sitemap.ts            — sitemap.xml
components/
  Navbar.tsx          — sticky glass nav, mobile menu
  Hero.tsx            — aurora + grid + parallax + R3F constellation
  HeroScene.tsx         — React Three Fiber scene (signature element — twinkling glow-node network)
  BrowserMockup.tsx    — reusable app preview chrome (used in Hero + Preview)
  Features.tsx        — six tilt-on-hover glass cards
  HowItWorks.tsx       — four-step animated timeline
  PlatformPreview.tsx  — floating/tilting product preview
  Stats.tsx            — animated count-up statistics
  Testimonials.tsx     — auto-scrolling glass testimonial cards
  FAQ.tsx              — accordion + FAQPage structured data
  CTA.tsx               — glowing call-to-action panel
  Footer.tsx            — link columns + social row (with icons)
  CursorGlow.tsx        — ambient cursor-follow glow (desktop only)
  PageTransition.tsx    — brief load animation + fade-in
  ScrollProgress.tsx     — thin gradient progress bar tied to scroll position
  BackToTop.tsx           — floating return-to-top button
lib/
  constants.ts          — site URL + app URL + nav/social link data (edit here to update links)
  og-image.tsx           — shared JSX markup for the two generated share-card images
```

## SEO

- Full metadata in `app/layout.tsx`: title template, description, keywords, canonical, Open Graph, Twitter Card, robots directives.
- `Organization` + `WebSite` JSON-LD in `app/layout.tsx`, `FAQPage` JSON-LD in `components/FAQ.tsx` (all derived from the same content already on the page, so nothing can drift out of sync).
- Auto-generated `robots.txt`, `sitemap.xml`, web manifest, and branded OG/Twitter share images and apple touch icon — all via Next.js's file-based metadata conventions, so there's nothing to wire up manually.
- **Before deploying**, set the real production domain in `lib/constants.ts` (`SITE_URL`) — canonical URLs, the sitemap, JSON-LD, and the OG image all read from that one constant.

## Editing links and the SEO domain

Both live in `lib/constants.ts`:

```ts
export const SITE_URL = "https://studentresourcehub.com"; // this marketing site's real domain — update before deploy
export const APP_URL = "https://studify-world.lovable.app/feed"; // the live app — every CTA points here
```

Every button across the site imports `APP_URL`, so updating that one constant updates every CTA. Every SEO file (metadata, sitemap, robots, JSON-LD, OG image) imports `SITE_URL`.

## Accessibility & performance notes

- Visible focus rings on all interactive elements.
- `prefers-reduced-motion` is respected globally (animations collapse to near-instant).
- The R3F constellation is visible at every breakpoint — it auto-rotates on its own clock and was never dependent on mouse movement to begin with. What scales down on phones is render cost only: fewer nodes, a capped pixel ratio, and a pulled-back camera framing so the cluster reads centered on a tall, narrow viewport instead of clipped to one side. It also freezes (instead of continuing to spin) when `prefers-reduced-motion` is set. The cursor glow stays desktop-only, since it has nothing meaningful to do without a persistent mouse position.
- Fonts are loaded via `next/font/google` (self-hosted, no layout shift).
