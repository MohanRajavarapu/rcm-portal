/**
 * Explicit Talk to an Expert destinations.
 * The header CTA reads this table by pathname prefix — not referrer, hash, or form state.
 * Add a row when a new pillar (or other contextual cluster) needs its own contact route.
 */
export type CtaHref = "/contact" | "/contact/rcm" | "/contact/staffing" | "/contact/general";

export const DEFAULT_CTA_HREF: CtaHref = "/contact";

export const ctaByRoutePrefix: { prefix: string; href: CtaHref }[] = [
  { prefix: "/what-we-do/rcm", href: "/contact/rcm" },
  { prefix: "/what-we-do/staffing", href: "/contact/staffing" },
  { prefix: "/contact/rcm", href: "/contact/rcm" },
  { prefix: "/contact/staffing", href: "/contact/staffing" },
  { prefix: "/contact/general", href: "/contact/general" },
];

export function getCtaTarget(pathname: string): CtaHref {
  const path = (pathname.replace(/\/$/, "") || "/") as string;
  const match = ctaByRoutePrefix.find(
    (row) => path === row.prefix || path.startsWith(`${row.prefix}/`),
  );
  return match?.href ?? DEFAULT_CTA_HREF;
}
