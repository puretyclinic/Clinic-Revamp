const BOT_AGENTS = [
  "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
  "yandexbot", "facebookexternalhit", "twitterbot", "linkedinbot",
  "whatsapp", "telegrambot", "applebot", "ia_archiver"
];

export function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

export async function prerenderPage(url: string): Promise<string> {
  const token = process.env.PRERENDER_TOKEN;
  if (!token) {
    throw new Error("[prerender] PRERENDER_TOKEN is not set.");
  }

  const prerenderUrl = `https://service.prerender.io/${url}`;
  console.log(`[prerender] Fetching: ${prerenderUrl}`);

  const response = await fetch(prerenderUrl, {
    headers: {
      "X-Prerender-Token": token,
    },
  });

  if (!response.ok) {
    throw new Error(`[prerender] prerender.io returned ${response.status} for ${url}`);
  }

  return response.text();
}
