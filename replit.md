# Purety Clinic Website

## Overview

This is a full-stack medical clinic website for **Purety Family Medical Clinic** (puretyclinic.com), a holistic, integrative, and functional medicine practice based in Santa Barbara, CA. The site is a premium, conversion-focused, SEO-optimized marketing website featuring service pages, doctor profiles, a blog, an e-commerce shop (supplements), patient testimonials, FAQs, location-based SEO pages, and a contact/lead capture system.

The doctors are Dr. Jonathan Birch and Dr. Dena Birch. Key services include FMT (Fecal Microbiota Transplant), regenerative injections (PRP, stem cells), ozone therapy, IV drip therapies, bioidentical HRT, holistic pediatrics, and integrative oncology support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (React SPA)
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter (lightweight client-side router) — NOT React Router
- **Styling**: TailwindCSS v4 with `@tailwindcss/vite` plugin, plus shadcn/ui components (New York style)
- **Fonts**: Playfair Display (headings/serif) and Inter (body/sans) loaded via Google Fonts
- **Color palette**: Deep Sage Teal primary (`#5A8085`), Amber accent (`#BF780C`), white background, slate charcoal foreground — defined as CSS custom properties (HSL format) in `client/src/index.css`
- **Animation**: Framer Motion via a reusable `FadeIn` component
- **State management**: TanStack React Query for server state
- **Component library**: shadcn/ui with Radix UI primitives underneath
- **Data**: Most content is currently stored as static TypeScript data files in `client/src/data/` (blog posts, products, SEO strategy, stored pages) — not yet database-driven
- **Analytics**: Google Ads gtag.js integration with conversion tracking helpers in `client/src/lib/gtag.ts`
- **Forms**: Contact forms submit to `/api/contact` backend endpoint, which stores to PostgreSQL and sends Gmail notification to `drjonathan@puretyclinic.com` via Replit Google Mail connector

### Backend (Express)
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx`
- **API**: Minimal — the `server/routes.ts` file is mostly empty; the app is primarily a static marketing site
- **Storage**: In-memory storage (`MemStorage` class) for users, with a Drizzle ORM schema ready for PostgreSQL migration
- **Database schema**: PostgreSQL via Drizzle ORM — currently only a `users` table with `id`, `username`, `password`
- **Dev server**: Vite dev server is integrated as Express middleware for HMR during development
- **Production**: Client is built to `dist/public`, served as static files by Express with SPA fallback
- **Dynamic Rendering / Bot Prerendering**: `server/prerender.ts` uses `puppeteer-core` + the Nix Chromium binary to render pages for search engine bots (Googlebot, Bingbot, facebookexternalhit, etc.) — middleware in `server/index.ts` detects bot user agents and returns fully-rendered HTML; regular users still get the React SPA. Includes a 1-hour in-memory cache to avoid re-renders.

### Build System
- **Client build**: Vite → `dist/public`
- **Server build**: esbuild → `dist/index.cjs` (bundles key dependencies to reduce cold start)
- **Build script**: `script/build.ts` orchestrates both builds
- **Database migrations**: `drizzle-kit push` for schema sync

### Key Directory Structure
```
client/
  index.html              # SPA entry point
  src/
    App.tsx                # Router setup with all page routes
    index.css              # Tailwind config + CSS custom properties (theme)
    main.tsx               # React entry point
    components/
      ui/                  # shadcn/ui components
      layout/              # Navbar, Footer, FadeIn
      home/                # Home page sections (Hero, Philosophy, Services, Doctors, Testimonials)
      hero-safe.tsx         # Reusable hero with visibility guarantees
      safe-section.tsx      # Wrapper for sections with background images
    pages/                 # All page components
      services/            # Individual service detail pages
      blog/                # Blog post pages
    data/                  # Static content (posts, products, SEO strategy, stored pages)
    hooks/                 # Custom React hooks
    lib/                   # Utilities (cn, queryClient, gtag)
server/
  index.ts                # Express server entry
  routes.ts               # API route registration (minimal)
  storage.ts              # In-memory storage with IStorage interface
  static.ts               # Production static file serving
  vite.ts                 # Vite dev server integration
shared/
  schema.ts               # Drizzle ORM schema (shared between client/server)
migrations/               # Drizzle migration files
attached_assets/          # Reference content, branding JSON, original site content
```

### Design Patterns
- **Visibility Guard System**: Custom CSS utility classes (`ui-surface`, `ui-hero-overlay`, `ui-text-strong`) and components (`HeroSafe`, `SafeSection`) to guarantee text readability over background images
- **Component composition**: Pages are composed of section components (e.g., `Philosophy`, `Services`, `Doctors`, `Testimonials`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`
- **SEO strategy**: Location-based pages (`/locations/:city`) for local SEO, keyword strategy defined in `client/src/data/seo_strategy.ts`

## External Dependencies

### Database
- **PostgreSQL** via Drizzle ORM — requires `DATABASE_URL` environment variable
- Schema defined in `shared/schema.ts`, migrations managed by `drizzle-kit`
- Currently using in-memory storage as fallback; database integration is partially wired

### Third-Party Services
- **Google Mail (Replit Connector)**: Form notification emails sent to `drjonathan@puretyclinic.com`
- **Google Ads / gtag.js**: Conversion tracking (AW-11190214934) + GA4 (G-NFLLBLBKET for www.puretyclinic.com)
- **Google Fonts**: Playfair Display and Inter font families
- **Squarespace CDN**: Some doctor/clinic images are still hosted on the old Squarespace site
- **Unsplash**: Blog post placeholder images
- **PuretyClinicShop.com CDN**: Product images from existing Shopify store

### Key NPM Packages
- `express` v5 — HTTP server
- `drizzle-orm` + `drizzle-zod` — ORM and validation
- `@tanstack/react-query` — async state management
- `wouter` — client-side routing
- `framer-motion` — animations
- `zod` — schema validation
- `connect-pg-simple` — PostgreSQL session store (available but not yet used)
- Full shadcn/ui + Radix UI component suite