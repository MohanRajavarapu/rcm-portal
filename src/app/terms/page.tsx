import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms",
  description: `Website terms for ${company.legalName}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Website terms" lede="These terms apply to 360vertexai.com and this application—not to a signed RCM services agreement." />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-10 text-[1.02rem] leading-7 text-slate-200 sm:px-6">
        <p>
          Content on this site is informational. It is not medical, coding, or legal advice and does
          not create a client relationship. Paid RCM work starts only when both parties sign a
          services agreement and, where required, a BAA.
        </p>
        <p>
          You may not use this site to transmit malware, scrape at a volume that degrades service, or
          submit another person’s personal data without a lawful basis.
        </p>
        <p>
          Job applications and lead forms are invitations to talk, not offers of employment or
          guaranteed engagement.
        </p>
        <p>
          Governing communications for the company: {company.legalName}, {company.email},{" "}
          {company.phoneDisplay}.
        </p>
      </article>
    </>
  );
}
