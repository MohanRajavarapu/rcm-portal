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
            ? "relative mx-auto max-w-6xl scroll-anchor px-4 py-8 sm:px-6 sm:py-10"
            : "relative mx-auto max-w-6xl scroll-anchor px-4 py-12 sm:px-6 sm:py-14"
        }
      >
        {crumbs ? (
          <p className="mb-3 text-xs tracking-[0.14em] text-[#d1d5db] uppercase">
            {crumbs.map((crumb, i) => (
              <span key={`${crumb.href}-${i}`}>
                {i > 0 ? " / " : null}
                <Link href={crumb.href} className="text-cyan hover:text-mint">
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
          <p className="mt-3 max-w-[65ch] text-base leading-[1.6] text-[#e0e0e0] sm:text-lg">{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="scroll-anchor border-t border-white/10 bg-[#121212]" id="assessment">
      <div className="page-section grid gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Revenue assessment</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Tell us the practice. Keep patients off this form.</h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-[1.6] text-[#d1d5db]">
            Three quick steps—specialty, volume, and EHR. Leave patient data out until we have a BAA.
          </p>
        </div>
        <div className="lg:col-span-8">
          <LeadForm source="assessment" />
        </div>
      </div>
    </section>
  );
}
