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
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-2xl">Direct</h2>
            <p className="mt-3 text-sm leading-6">
              <span className="text-muted-foreground">Legal name</span>
              <br />
              {company.legalName}
            </p>
            <p className="mt-3 text-sm leading-6">
              <span className="text-muted-foreground">Email</span>
              <br />
              <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6">
              <span className="text-muted-foreground">Mobile</span>
              <br />
              <a className="underline-offset-4 hover:underline" href={`tel:${company.phoneTel}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6">
              <span className="text-muted-foreground">Hours</span>
              <br />
              {company.hours}
            </p>
          </div>
          <div className="rounded-xl bg-mist p-5 text-sm leading-6">
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
