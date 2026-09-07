import type { ReactNode } from "react";
import Link from "next/link";
import { TalkToExpertCta } from "@/components/cta/talk-to-an-expert";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  compact = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { href: string; label: string }[];
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="hero-wash relative overflow-hidden">
      <div
        className={
          compact
            ? "relative mx-auto max-w-6xl scroll-anchor px-4 py-8 sm:px-6 sm:py-10"
            : "relative mx-auto max-w-6xl scroll-anchor px-4 py-12 sm:px-6 sm:py-14"
        }
      >
        {crumbs ? (
          <p className="caption mb-3 tracking-[0.14em] uppercase">
            {crumbs.map((crumb, i) => (
              <span key={`${crumb.href}-${i}`}>
                {i > 0 ? " / " : null}
                <Link href={crumb.href} className="link-quiet">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
        {eyebrow ? <p className="eyebrow-label mb-2">{eyebrow}</p> : null}
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">{title}</h1>
        {lede ? (
          <p className="mt-3 max-w-[65ch] text-base leading-[1.6] text-fg-muted sm:text-lg">{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  href,
  eyebrow = "Inquiry",
  lede = "Tell us the practice or the workforce need. No PHI on this website.",
}: {
  href?: "/contact" | "/contact/rcm" | "/contact/staffing" | "/contact/general";
  eyebrow?: string;
  lede?: string;
}) {
  return (
    <section className="scroll-anchor border-t border-slate-200 bg-[#f8fafc]" id="assessment">
      <div className="page-section flex flex-col items-start justify-between gap-4 py-16 md:py-24 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow-label">{eyebrow}</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Talk to an Expert</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-fg-muted">{lede}</p>
        </div>
        {href ? (
          <Link href={href} className="btn-primary h-11 px-6 text-sm">
            Talk to an Expert
          </Link>
        ) : (
          <TalkToExpertCta className="h-11 px-6 text-sm" />
        )}
      </div>
    </section>
  );
}
