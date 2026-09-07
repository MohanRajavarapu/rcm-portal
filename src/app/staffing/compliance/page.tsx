import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Healthcare staffing compliance and risk",
  description:
    "Worker classification, I-9/E-Verify, workers’ compensation, unemployment insurance, EPLI, and where staffed personnel are located versus client data access.",
  path: "/staffing/compliance",
});

const chips = ["I-9 / E-Verify", "Workers’ compensation", "Unemployment insurance", "EPLI"];

const sections = [
  {
    title: "Worker classification",
    body: "We do not treat production RCM operators as a default independent-contractor model. Staff augmentation, contract-to-hire (during the contract), and EOR assignments are W-2 or equivalent employment on 360VERTEXAI’s books, or the documented local employment vehicle we use for India-based operators. Classification is reviewed against the facts of the engagement and applicable US state tests (including ABC-style tests where they apply). If a role cannot be employed cleanly, we decline the IC workaround rather than pass misclassification risk to the client.",
  },
  {
    title: "I-9 / E-Verify",
    body: "For workers we employ, Form I-9 and E-Verify are completed before the start date. We do not start paid work on a handshake. Direct-hire candidates are screened for work-authorization status as a recruiting step; the client, as hiring employer, completes I-9.",
  },
  {
    title: "Workers’ compensation and unemployment insurance",
    body: "When 360VERTEXAI is the employer of record, we carry workers’ compensation and remit unemployment insurance for the assigned worker under that employment relationship. When the client is the employer (direct hire, and after contract-to-hire conversion), those coverages sit with the client. The engagement-models table states who employs whom so this is not ambiguous.",
  },
  {
    title: "Professional liability / EPLI",
    body: "360VERTEXAI maintains professional liability (errors and omissions) coverage for our operating and staffing services, and employment-practices liability insurance (EPLI) for our role as employer of record. Certificates are available under NDA as part of contracting. Coverage does not replace your own cyber, HIPAA, or employment policies for work performed under your direction on your systems.",
  },
  {
    title: "Where people sit, and what that means for data",
    body: "Production staffing and RCM operations are performed from India, with overlap for US Eastern and Pacific business hours. Onshore client managers may sit in the United States when the SOW requires it. Physical location is not permission to see patient data. Staffed personnel access claims, EHR, or PHI-adjacent information only after your BAA, your access provisioning, and the data-residency terms on Trust & Security. Many seats (reporting on de-identified queues, training, non-production QA) never receive PHI.",
  },
];

export default function StaffingCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing · compliance & risk"
        title="How we employ people — separate from how we handle PHI."
        lede="This page is for workforce buyers. HIPAA, BAA, and SOC 2 live on Trust & Security. Do not treat this as a BAA."
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/compliance", label: "Compliance & risk" },
        ]}
      >
        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li key={chip} className="trust-chip">
              {chip}
            </li>
          ))}
        </ul>
      </PageHero>
      <article className="page-section max-w-3xl space-y-8 py-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <p className="mt-3 text-[1.02rem] leading-7 text-fg-muted">{section.body}</p>
          </section>
        ))}
        <p className="text-sm text-fg-muted">
          Data residency and candidate/HR file handling:{" "}
          <Link href="/trust#candidate-hr" className="link-quiet underline-offset-4 hover:underline">
            Trust & Security
          </Link>
          . Model-by-model employer:{" "}
          <Link href="/staffing/engagement-models" className="link-quiet underline-offset-4 hover:underline">
            engagement models
          </Link>
          .
        </p>
      </article>
      <StaffingCtaBand />
    </>
  );
}
