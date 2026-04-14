import puppeteer, { type Browser } from "puppeteer-core";
import { execSync } from "child_process";

const BOT_AGENTS = [
  "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
  "yandexbot", "facebookexternalhit", "twitterbot", "linkedinbot",
  "whatsapp", "telegrambot", "applebot", "ia_archiver"
];

export function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

function findChromium(): string {
  const fromEnv = process.env.CHROMIUM_PATH;
  if (fromEnv) return fromEnv;
  const commands = ["chromium-browser", "chromium", "google-chrome"];
  for (const cmd of commands) {
    try {
      const p = execSync(`which ${cmd} 2>/dev/null`).toString().trim();
      if (p) return p;
    } catch {
      // not found, try next
    }
  }
  return "";
}

const cache = new Map<string, { html: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60;

let browser: Browser | null = null;
let chromiumPath = "";

async function getBrowser(): Promise<Browser> {
  if (!browser) {
    if (!chromiumPath) {
      chromiumPath = findChromium();
    }
    browser = await puppeteer.launch({
      executablePath: chromiumPath,
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
        "--single-process",
      ],
    });
  }
  return browser;
}

export async function prerenderPage(url: string, path: string): Promise<string> {
  const cached = cache.get(path);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.html;
  }

  const b = await getBrowser();
  const page = await b.newPage();
  try {
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
    } catch (err) {
      console.warn(`[prerender] Navigation warning for ${url}:`, (err as Error).message);
    }
    const html = await page.content();
    cache.set(path, { html, timestamp: Date.now() });
    return html;
  } finally {
    await page.close();
  }
}

export function clearCache(): void {
  cache.clear();
}
