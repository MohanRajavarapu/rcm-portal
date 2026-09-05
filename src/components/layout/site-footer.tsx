"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";
import { services } from "@/content/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{company.description}</p>
          <p className="mt-4 text-sm text-white/80">
            <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <br />
            <a className="underline-offset-4 hover:underline" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.16em] text-vertex uppercase">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.16em] text-vertex uppercase">Cycle</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.16em] text-vertex uppercase">Operations notes</p>
          <p className="mt-3 mb-3 text-sm text-white/70">
            Occasional writing on denials, coding QA, and AI that stays in its lane. No patient data.
          </p>
          <NewsletterForm />
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/55">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Public site · no PHI · BAA required before system access</p>
        </div>
      </div>
    </footer>
  );
}
