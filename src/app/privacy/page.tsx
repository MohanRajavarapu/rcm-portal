import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notice for the ${company.brandName} public website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        lede="This notice covers the public marketing website only. Production RCM systems are covered by a BAA and a separate policy."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-[1.02rem] leading-7 sm:px-6">
        <p>
          {company.legalName} (“we”) collects the business contact details you submit on this site:
          name, work email, phone, organization, specialty, and a free-text message about billing
          operations. We use that data to reply to your inquiry and to keep a record of the
          conversation.
        </p>
        <p>
          Newsletter sign-ups store only an email address. You can ask to be removed by writing to{" "}
          {company.email}.
        </p>
        <p>
          We do not want PHI on this website. Do not send patient names, medical record numbers, dates
          of birth, member IDs, claim numbers, or clinical notes. If you send PHI in error, write to us
          immediately so we can delete it from website storage.
        </p>
        <p>
          Leads and applications are stored on the application host for operations follow-up. We do not
          sell this information. We may use subprocessors for hosting and email delivery.
        </p>
        <p>
          Contact the privacy owner at {company.email} or {company.phoneDisplay}.
        </p>
      </article>
    </>
  );
}
