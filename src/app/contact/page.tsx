import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/lead-form";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.legalName} for a revenue assessment.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the practice. Keep patients off this form."
        lede="Use company, specialty, volume, and EHR. After we reply, we execute a BAA before any PHI or system access."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-2xl">Direct</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Legal name</span>
              <br />
              {company.legalName}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Contact</span>
              <br />
              <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Sales</span>
              <br />
              <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${company.salesEmail}`}>
                {company.salesEmail}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Careers</span>
              <br />
              <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${company.careersEmail}`}>
                {company.careersEmail}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Mobile</span>
              <br />
              <a className="text-emerald-400 hover:text-emerald-300" href={`tel:${company.phoneTel}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              <span className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Hours</span>
              <br />
              {company.hours}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-card p-5 text-sm leading-6 text-slate-200">
            Empty state: if you are not ready to talk volume, send specialty and EHR only. We still
            reply. Error state: if the form rejects your message, it likely saw a PHI-like phrase—remove
            identifiers and send again.
          </div>
        </div>
        <div className="lg:col-span-7">
          <LeadForm source="assessment" />
        </div>
      </section>
    </>
  );
}
