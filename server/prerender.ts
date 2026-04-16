import type { Request, Response, NextFunction } from "express";

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
 * Submits all URLs in the sitemap to prerender.io for recaching.
 * Call this once to flush stale cached pages (e.g. removed/renamed routes).
 */
export async function recacheSitemap(): Promise<void> {
  if (!token) {
    console.log("[prerender] No PRERENDER_TOKEN — skipping sitemap recache.");
    return;
  }
  try {
    const res = await fetch("https://api.prerender.io/recache", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prerenderToken: token,
        sitemap: "https://puretyclinic.com/sitemap.xml",
      }),
    });
    if (res.ok) {
      console.log("[prerender] Sitemap recache submitted successfully — stale cached pages will be refreshed.");
    } else {
      const body = await res.text();
      console.warn(`[prerender] Recache API returned ${res.status}: ${body}`);
    }
  } catch (err) {
    console.warn("[prerender] Failed to call recache API:", err);
  }
}
