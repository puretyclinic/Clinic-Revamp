import { useEffect } from "react";

interface PageSEOOptions {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function usePageSEO({ title, description, canonicalPath, ogTitle, ogDescription }: PageSEOOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = metaDesc?.getAttribute("content") || "";
    metaDesc?.setAttribute("content", description);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.getAttribute("href") || "";
    if (canonical) canonical.href = `https://puretyclinic.com${canonicalPath}`;

    const ogTitleEl = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const prevOgTitle = ogTitleEl?.getAttribute("content") || "";
    ogTitleEl?.setAttribute("content", ogTitle || title);

    const ogDescEl = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    const prevOgDesc = ogDescEl?.getAttribute("content") || "";
    ogDescEl?.setAttribute("content", ogDescription || description);

    const ogUrlEl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const prevOgUrl = ogUrlEl?.getAttribute("content") || "";
    ogUrlEl?.setAttribute("content", `https://puretyclinic.com${canonicalPath}`);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
      if (canonical) canonical.href = prevCanonical;
      ogTitleEl?.setAttribute("content", prevOgTitle);
      ogDescEl?.setAttribute("content", prevOgDesc);
      ogUrlEl?.setAttribute("content", prevOgUrl);
    };
  }, [title, description, canonicalPath, ogTitle, ogDescription]);
}
