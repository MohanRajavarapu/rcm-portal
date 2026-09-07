"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-surface-1">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-12 md:py-10">
        <div className="md:col-span-4">
          <Logo size="footer" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">{company.description}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg">
            <a className="link-quiet underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <br />
            <span className="caption">{company.hours}</span>
          </p>
          <p className="eyebrow-label mt-6">Also</p>
          <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {footerNav.more.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow-label">Company</p>
          <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow-label">Healthcare providers</p>
          <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {footerNav.providers.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow-label mt-6">Staffing & workforce</p>
          <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {footerNav.staffing.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow-label">Legal</p>
          <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow-label mt-6">Operations notes</p>
          <div className="mt-2">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {company.legalName}</p>
          <p>Public site · no PHI · BAA required before production access</p>
        </div>
      </div>
    </footer>
  );
}
