import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How contracts work",
  description:
    "MSA and SOW overview for RCM operations and for staffing/EOR. A BAA is separate and required before PHI.",
  path: "/legal/contracts",
});

export default function ContractsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · how contracts work"
        title="MSA, SOW, and BAA are not the same document."
        lede="This is an overview of how we contract — not a substitute for signed paper. RCM work and staffing work get their own statements of work."
        crumbs={[
          { href: "/privacy", label: "Legal" },
          { href: "/legal/contracts", label: "How contracts work" },
        ]}
      />
      <article className="page-section max-w-3xl space-y-8 py-10 text-[1.02rem] leading-7 text-fg-muted">
        <section>
          <h2 className="text-2xl text-fg">Master services agreement (MSA)</h2>
          <p className="mt-3">
            The MSA sets the commercial frame: parties, confidentiality, liability, insurance,
            invoicing, and termination. It does not by itself authorize PHI access or put a named
            worker on a queue.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-fg">Statement of work (SOW)</h2>
          <p className="mt-3">
            Each book of work gets its own SOW. An RCM SOW names cycle stations, SLAs, systems, and
            volume assumptions. A staffing SOW names roles, engagement model, who is the employer of
            record, start date, and whether PHI access is in scope. We do not bury staffing inside an
            RCM SOW as a “resource line.”
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-fg">Business Associate Agreement (BAA)</h2>
          <p className="mt-3">
            A BAA is required before PHI, EHR credentials, or claim files. It is not implied by an
            MSA or by a staffing SOW. Public website forms never receive PHI. See{" "}
            <Link href="/about/trust-security#hipaa" className="link-quiet underline-offset-4 hover:underline">
              HIPAA & BAA
            </Link>{" "}
            and{" "}
            <Link href="/about/trust-security#hipaa" className="link-quiet underline-offset-4 hover:underline">
              Trust & Security
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-fg">Staffing-specific paper</h2>
          <p className="mt-3">
            Staff augmentation, contract-to-hire, EOR, and direct hire change who employs the worker.
            That fact is written in the staffing SOW and is summarized on{" "}
            <Link href="/what-we-do/staffing" className="link-quiet underline-offset-4 hover:underline">
              Compare engagement models
            </Link>
            . Classification, I-9, and insurance are described on{" "}
            <Link href="/about/trust-security#staffing-compliance" className="link-quiet underline-offset-4 hover:underline">
              Trust & Security
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
