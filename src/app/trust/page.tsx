import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trust & Security",
  description:
    "HIPAA and BAA for RCM operations, SOC 2 Type II, candidate and HR data handling, and data-residency disclosure for RCM and staffing work.",
  path: "/trust",
});

const sections = [
  { id: "hipaa", label: "HIPAA & BAA" },
  { id: "soc2", label: "SOC 2 Type II" },
  { id: "candidate-hr", label: "Candidate & HR data" },
  { id: "data-residency", label: "Data residency" },
] as const;

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & Security"
        title="Two books of data. Two sets of rules."
        lede="PHI belongs to RCM operations under a BAA. Resumes and HR files belong to staffing. This page keeps them apart on purpose."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/trust", label: "Trust & Security" },
        ]}
      />
      <nav
        className="sticky top-[var(--header-height)] z-[40] border-b border-[var(--border-subtle)] bg-surface-0/90 backdrop-blur-[12px]"
        aria-label="Trust sections"
      >
        <div className="page-section flex gap-2 overflow-x-auto py-3">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="trust-chip hover:bg-trust/20">
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-section max-w-3xl space-y-16 py-10">
        <section id="hipaa" className="scroll-anchor">
          <p className="eyebrow-label">RCM operations</p>
          <h2 className="mt-2 text-3xl">HIPAA & BAA</h2>
          <div className="mt-4 space-y-4 text-[1.02rem] leading-7 text-fg-muted">
            <p>
              {company.legalName} will execute a Business Associate Agreement with covered entities and
              business associates before receiving PHI, accessing a practice management system, or
              connecting to a clearinghouse on your behalf.
            </p>
            <p>
              Workforce members handling production RCM work are trained on the minimum-necessary
              standard, access logging, and prohibition on using personal email or this website for
              claims files.
            </p>
            <p>
              Public forms run a conservative check for PHI-like language and will reject the
              submission. That check is not a substitute for your own discipline. When in doubt, omit
              the detail and wait for a secure channel.
            </p>
            <p>
              Request a BAA conversation from{" "}
              <Link href="/contact/rcm" className="link-quiet underline-offset-4 hover:underline">
                Talk to an Expert
              </Link>{" "}
              or {company.email} / {company.salesEmail}. Do not attach a census or 837 file to that
              first message.
            </p>
            <p className="caption">
              Standalone copy also lives at{" "}
              <Link href="/hipaa" className="link-quiet underline-offset-4 hover:underline">
                /hipaa
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="soc2" className="scroll-anchor">
          <p className="eyebrow-label">RCM operations</p>
          <h2 className="mt-2 text-3xl">SOC 2 Type II</h2>
          <div className="mt-4 space-y-4 text-[1.02rem] leading-7 text-fg-muted">
            <p>
              Production RCM runs in a control environment designed for SOC 2 Type II reporting:
              access control, change management, encryption in transit and at rest, logging, and
              vendor review. The report covers the production operating environment — not this public
              marketing site.
            </p>
            <p>
              SOC 2 is not a substitute for a BAA. Independent control reporting and HIPAA
              obligations both apply before PHI is in scope. Reports are available to qualified
              prospects under NDA as part of security review.
            </p>
            <p>
              Architecture detail for the public vs production split is on{" "}
              <Link href="/technology" className="link-quiet underline-offset-4 hover:underline">
                Technology
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="candidate-hr" className="scroll-anchor">
          <p className="eyebrow-label">Staffing operations</p>
          <h2 className="mt-2 text-3xl">Candidate & HR data handling</h2>
          <div className="mt-4 space-y-4 text-[1.02rem] leading-7 text-fg-muted">
            <p>
              This is not PHI. Resumes, work-authorization attestations, and — after an offer —
              government identifiers used for employment are HR data. They are stored in a staffing /
              HR system separate from the RCM production plane.
            </p>
            <p>
              <strong className="text-fg">What we collect on this website:</strong> name, contact
              details, role interest, experience, certifications, availability, work-authorization
              status, and a resume filename. We do not collect SSN or date of birth on public forms.
              Those are post-offer steps on a secured HR channel.
            </p>
            <p>
              <strong className="text-fg">Who can see it:</strong> recruiting and HR staff with a
              named need to fill or employ a role. Hiring managers at a client see only the candidate
              packet you authorize for that req — not our full talent pool.
            </p>
            <p>
              <strong className="text-fg">Retention:</strong> talent-pool and unsuccessful application
              records are retained for up to 24 months unless a shorter period is required by the
              applicable jurisdiction or you request deletion. Hired-employee files follow employment
              and tax retention rules, not marketing-site logs.
            </p>
            <p>
              Background-check data, when ordered post-offer, is received from a consumer-reporting
              vendor under that vendor’s process. We do not ask candidates to paste background-check
              results, SSNs, or medical history into this website.
            </p>
          </div>
        </section>

        <section id="data-residency" className="scroll-anchor">
          <p className="eyebrow-label">Both business lines</p>
          <h2 className="mt-2 text-3xl">Data residency disclosure</h2>
          <div className="mt-4 space-y-4 text-[1.02rem] leading-7 text-fg-muted">
            <p>
              <strong className="text-fg">RCM operations</strong> are performed from India, with
              overlap coverage for US Eastern and Pacific business hours. PHI and EHR access occur
              only in the BAA-covered production plane, after you provision accounts. This public
              website is not that plane and does not store PHI in any region.
            </p>
            <p>
              <strong className="text-fg">Staffing operations</strong> (recruiting, EOR payroll
              administration, and people management) are also performed from India, with US-hours
              overlap. Candidate and employee files sit in HR systems, not in the claims database.
            </p>
            <p>
              Location of the person is not the same as location of the record. A coder in India
              accessing your EHR does so through your (or our BAA) access model — VPN, SSO, and
              audit — not by copying charts onto this site. If a staffed role will not receive PHI,
              say so in the staffing SOW; we will not request production logins.
            </p>
            <p>
              Pods that could touch claims data:{" "}
              <Link href="/staffing/pods" className="link-quiet underline-offset-4 hover:underline">
                dedicated pods
              </Link>
              . Staffing employment risk:{" "}
              <Link href="/staffing/compliance" className="link-quiet underline-offset-4 hover:underline">
                compliance & risk
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
