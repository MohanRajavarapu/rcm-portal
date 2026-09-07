import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";

const footerBio =
  "360VERTEXAI SOLUTIONS PRIVATE LIMITED combines certified healthcare Revenue Cycle Management (RCM) operations with specialized RCM staffing and workforce solutions—pairing experienced operators with applied AI to lift first-pass yield and scale billing operations.";

const linkClass = "text-slate-400 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 sm:px-6 md:grid-cols-12 md:py-8">
        <div className="md:col-span-4">
          <Logo size="footer" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{footerBio}</p>
          <p className="mt-3 text-sm font-medium">
            <a className={`${linkClass} underline-offset-4 hover:underline`} href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <br />
            <span className="text-slate-400">{company.hours}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-8 md:content-start">
          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="What We Do" items={footerNav.offerings} />
          <FooterColumn title="Specialties" items={footerNav.specialties} />
          <FooterColumn title="Legal" items={footerNav.legal} />
          <div className="col-span-2 sm:col-start-2">
            <p className="text-sm font-semibold text-white">Operations notes</p>
            <div className="mt-2 max-w-sm">
              <NewsletterForm tone="dark" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {company.legalName}</p>
          <p>Public site · no PHI · BAA required before production access</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
