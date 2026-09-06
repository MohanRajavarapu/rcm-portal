import type { ReactNode } from "react";
import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";

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
    <section className="hero-wash relative overflow-hidden text-white">
      <div className="vertex-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className={
          compact
            ? "relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
            : "relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14"
        }
      >
        {crumbs ? (
          <p className="mb-3 text-xs tracking-[0.14em] text-slate-300 uppercase">
            {crumbs.map((crumb, i) => (
              <span key={crumb.href}>
                {i > 0 ? " / " : null}
                <Link href={crumb.href} className="text-emerald-400 hover:text-emerald-300">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-mint uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">{title}</h1>
        {lede ? (
          <p className="mt-3 max-w-[65ch] text-base leading-7 text-slate-200 sm:text-lg">{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-white/10 bg-navy" id="assessment">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Revenue assessment</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Tell us the practice. Keep patients off this form.</h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-6 text-slate-200">
            Specialty, monthly visit volume, and EHR. Leave patient data out until we have a BAA. The
            header CTA stays available on every page.
          </p>
        </div>
        <div className="lg:col-span-8">
          <LeadForm source="assessment" />
        </div>
      </div>
    </section>
  );
}
