"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";
import { services } from "@/content/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#121212] text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-12 md:py-10">
        <div className="md:col-span-4">
          <Logo light size="footer" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#d1d5db]">{company.description}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#e0e0e0]">
            <a className="text-cyan hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            {" · "}
            <a className="text-cyan hover:underline" href={`mailto:${company.salesEmail}`}>
              {company.salesEmail}
            </a>
            <br />
            <a className="hover:underline" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
            <br />
            <span className="text-[#d1d5db]">{company.hours}</span>
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Company</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[#d1d5db]">
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
          <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Services</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[#d1d5db]">
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
          <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Operations notes</p>
          <p className="mt-2 mb-2 text-sm text-[#d1d5db]">
            Occasional writing on denials, coding QA, and AI that stays in its lane.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>Public site · no PHI · BAA required</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
