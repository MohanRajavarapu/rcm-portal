"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-14">
        <div className="md:col-span-4">
          <Logo size="footer" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{company.description}</p>
          <p className="mt-3 text-sm font-medium text-fg">
            <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <br />
            <span className="caption">{company.hours}</span>
          </p>
          <p className="eyebrow-label mt-6">Operations notes</p>
          <div className="mt-2 max-w-sm">
            <NewsletterForm />
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow-label">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow-label">What we do</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.offerings.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow-label">Specialties</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.specialties.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow-label">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-[#334155] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {company.legalName}</p>
          <p>Public site · no PHI · BAA required before production access</p>
        </div>
      </div>
    </footer>
  );
}
