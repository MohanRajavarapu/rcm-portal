import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "Privacy notice covering public-site inquiries, PHI refusal, and candidate/HR data (resumes, not SSNs on this site).",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="This notice covers the public website. It addresses both practice inquiries (not PHI) and candidate/HR intake (not SSNs or medical history on this site). Production RCM systems are covered by a BAA and a separate policy."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-10 text-[1.02rem] leading-7 text-fg-muted sm:px-6">
        <h2 className="text-2xl text-fg">What this site collects</h2>
        <p>
          {company.legalName} (“we”) collects the business contact details you submit: name, work
          email, phone, organization, specialty or staffing need, and a free-text message. We use
          that data to reply and to keep a record of the conversation. Newsletter sign-ups store only
          an email address. You can ask to be removed by writing to {company.email}.
        </p>
        <h2 className="text-2xl text-fg">PHI — we do not want it here</h2>
        <p>
          Do not send patient names, medical record numbers, dates of birth, member IDs, claim
          numbers, clinical notes, or other PHI. Public forms run a conservative check and will
          reject obvious identifier language. That check is not a BAA. Production RCM data lives in
          a BAA-covered plane after you provision access. See HIPAA & BAA and Trust & Security.
        </p>
        <h2 className="text-2xl text-fg">Candidate and HR data</h2>
        <p>
          Talent-pool and job applications collect name, contact details, role interest, experience,
          certifications, availability, work-authorization status, optional notes, and a resume
          filename. We do not collect SSN or date of birth on this website. Those are post-offer
          steps on a secured HR channel. Do not paste background-check results, medical history, or
          disability details into free-text fields.
        </p>
        <p>
          Recruiting and HR staff with a named need to fill a role can see candidate records.
          Retention for talent-pool and unsuccessful applications is up to 24 months unless a shorter
          period is required or you request deletion. Hired-employee files follow employment and tax
          rules, not marketing logs. Detail: Trust & Security → Candidate & HR data handling.
        </p>
        <h2 className="text-2xl text-fg">Sharing, storage, contact</h2>
        <p>
          We do not sell this information. We may use subprocessors for hosting and email delivery.
          Leads and applications are stored on the application host for operations follow-up. Contact
          the privacy owner at {company.email} or {company.phoneDisplay}.
        </p>
      </article>
    </>
  );
}
