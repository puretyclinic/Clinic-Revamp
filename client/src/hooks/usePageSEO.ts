import { useEffect } from "react";

interface PageSEOOptions {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
}

function getOrCreate<T extends HTMLElement>(
  selector: string,
  tag: string,
  attrs: Record<string, string>
): T {
  let el = document.querySelector<T>(selector);
  if (!el) {
    el = document.createElement(tag) as T;
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  return el;
}

export function usePageSEO({ title, description, canonicalPath, ogTitle, ogDescription }: PageSEOOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const metaDesc = getOrCreate<HTMLMetaElement>('meta[name="description"]', "meta", { name: "description", content: "" });
    const prevDesc = metaDesc.getAttribute("content") || "";
    metaDesc.setAttribute("content", description);

    const canonical = getOrCreate<HTMLLinkElement>('link[rel="canonical"]', "link", { rel: "canonical", href: "" });
    const prevCanonical = canonical.getAttribute("href") || "";
    canonical.href = `https://puretyclinic.com${canonicalPath}`;

    const ogTitleEl = getOrCreate<HTMLMetaElement>('meta[property="og:title"]', "meta", { property: "og:title", content: "" });
    const prevOgTitle = ogTitleEl.getAttribute("content") || "";
    ogTitleEl.setAttribute("content", ogTitle || title);

    const ogDescEl = getOrCreate<HTMLMetaElement>('meta[property="og:description"]', "meta", { property: "og:description", content: "" });
    const prevOgDesc = ogDescEl.getAttribute("content") || "";
    ogDescEl.setAttribute("content", ogDescription || description);

    const ogUrlEl = getOrCreate<HTMLMetaElement>('meta[property="og:url"]', "meta", { property: "og:url", content: "" });
    const prevOgUrl = ogUrlEl.getAttribute("content") || "";
    ogUrlEl.setAttribute("content", `https://puretyclinic.com${canonicalPath}`);

    return () => {
      document.title = prevTitle;
      metaDesc.setAttribute("content", prevDesc);
      canonical.href = prevCanonical;
      ogTitleEl.setAttribute("content", prevOgTitle);
      ogDescEl.setAttribute("content", prevOgDesc);
      ogUrlEl.setAttribute("content", prevOgUrl);
    };
  }, [title, description, canonicalPath, ogTitle, ogDescription]);
}
