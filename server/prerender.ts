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
  prerenderLib(req, res, next);
};
