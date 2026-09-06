/**
 * GitHub Pages serves this app under /rcm-portal.
 * Next.js Link/Image already apply `basePath` from next.config — do not prefix hrefs.
 * Use withBasePath() only for raw URLs (img src, fetch, metadata).
 */
export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function withBasePath(path: string) {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
