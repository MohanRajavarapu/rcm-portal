import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "HIPAA & BAA",
  description: "How 360VERTEXAI treats PHI and Business Associate Agreements.",
};

export default function HipaaPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="HIPAA, BAAs, and why this website refuses patient data."
        lede="US healthcare RCM requires a Business Associate Agreement before PHI or EHR access. The public site is built to make that boundary obvious."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-10 text-[1.02rem] leading-7 text-slate-200 sm:px-6">
        <p>
          {company.legalName} will execute a Business Associate Agreement with covered entities and
          business associates before receiving PHI, accessing a practice management system, or
          connecting to a clearinghouse on your behalf.
        </p>
        <p>
          Workforce members handling production work are trained on the minimum-necessary standard,
          access logging, and prohibition on using personal email or this website for claims files.
        </p>
        <p>
          Public forms run a conservative check for PHI-like language and will reject the submission.
          That check is not a substitute for your own discipline. When in doubt, omit the detail and
          wait for a secure channel.
        </p>
        <p>
          Request a BAA conversation from the contact page or {company.email} / {company.salesEmail}. Do not attach a census
          or 837 file to that first message.
        </p>
      </article>
    </>
  );
}
