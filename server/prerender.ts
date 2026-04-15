import { createRequire } from "module";
import type { Request, Response, NextFunction } from "express";

const require = createRequire(import.meta.url);
const prerender = require("prerender-node");

const token = process.env.PRERENDER_TOKEN;
if (token) {
  prerender.set("prerenderToken", token);
}

prerender.set("protocol", "https");

prerender.set("shouldPreRender", (req: Request) => {
  if (req.path.startsWith("/api")) return false;
  if (/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map|txt|xml|json|webmanifest)$/i.test(req.path)) return false;
  return true;
});

export const prerenderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  prerender(req, res, next);
};
