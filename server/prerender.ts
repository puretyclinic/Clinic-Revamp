import type { Request, Response, NextFunction } from "express";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

// prerender-node is a CJS module kept external by esbuild.
// Default import works correctly: esbuild converts it to require() in CJS output.
// @ts-ignore - prerender-node has no TypeScript type declarations
import prerenderLib from "prerender-node";

const token = process.env.PRERENDER_TOKEN;
if (token) {
  prerenderLib.set("prerenderToken", token);
}

prerenderLib.set("protocol", "https");

prerenderLib.set("shouldPreRender", (req: Request) => {
  if (req.path.startsWith("/api")) return false;
  if (/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map|txt|xml|json|webmanifest)$/i.test(req.path)) return false;
  return true;
});

export const prerenderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Tell prerender.io to cache each page for 24 hours (86400 seconds).
  // Without this, prerender.io may cache pages indefinitely.
  res.setHeader("Prerender-Cache-Duration", "86400");
  prerenderLib(req, res, next);
};

/**
 * Reads the local sitemap.xml and submits every URL to prerender.io for recaching.
 * Call this once on startup to flush stale cached pages (e.g. removed/renamed routes).
 */
export async function recacheSitemap(): Promise<void> {
  if (!token) {
    console.log("[prerender] No PRERENDER_TOKEN — skipping sitemap recache.");
    return;
  }

  // Resolve sitemap path — production build writes to dist/public, dev uses client/public
  const candidates = [
    join(process.cwd(), "dist/public/sitemap.xml"),
    join(process.cwd(), "client/public/sitemap.xml"),
  ];
  const sitemapPath = candidates.find(existsSync);
  if (!sitemapPath) {
    console.warn("[prerender] sitemap.xml not found — skipping recache.");
    return;
  }

  const xml = readFileSync(sitemapPath, "utf-8");
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    console.warn("[prerender] No URLs found in sitemap — skipping recache.");
    return;
  }

  console.log(`[prerender] Submitting ${urls.length} URLs for recaching…`);

  let succeeded = 0;
  let failed = 0;
  await Promise.all(
    urls.map(async (url) => {
      try {
        const res = await fetch("https://api.prerender.io/recache", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prerenderToken: token, url }),
        });
        if (res.ok) {
          succeeded++;
        } else {
          failed++;
          console.warn(`[prerender] Recache failed for ${url}: ${res.status}`);
        }
      } catch (err) {
        failed++;
        console.warn(`[prerender] Recache error for ${url}:`, err);
      }
    })
  );

  console.log(`[prerender] Recache complete — ${succeeded} succeeded, ${failed} failed.`);
}
