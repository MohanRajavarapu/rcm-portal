import Link from "next/link";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { ProcessLoop } from "@/components/layout/process-loop";
import { EngagementComparisonTable } from "@/components/staffing/engagement-comparison-table";
import { TrustSnippet } from "@/components/trust/trust-snippet";
import { engagementModels, podFacts, staffingRoles } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Staffing & Workforce Solutions",
  description:
    "Staff augmentation, contract-to-hire, EOR, direct hire, dedicated pods, and the roles we staff. Separate from RCM operating services.",
  path: "/what-we-do/staffing",
});

export default function StaffingPillarPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Staffing"
        title="Scale the team without mixing this up with RCM outsourcing."
        lede="Workforce buyers: named operators, pods, EOR, and searches. If you need us to run the cycle, use RCM & AI Operations."
        crumbs={[
          { href: "/what-we-do", label: "Services" },
          { href: "/what-we-do/staffing", label: "Staffing & Workforce" },
        ]}
      />

      <section id="models" className="scroll-anchor page-section py-10">
        <p className="eyebrow-label">Engagement models</p>
        <h2 className="mt-2 max-w-3xl text-3xl">Staff augmentation through direct hire.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {engagementModels.map((model) => (
            <Link
              key={model.slug}
              href={`/what-we-do/staffing/${model.slug}`}
              className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-6 hover:bg-surface-3"
            >
              <h3 className="text-xl">{model.name}</h3>
              <p className="mt-2 text-sm leading-6 text-fg-muted">{model.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-alt border-y border-[var(--border-subtle)] py-10">
        <div className="page-section">
          <p className="eyebrow-label">Compare models</p>
          <h2 className="mt-2 mb-6 max-w-3xl text-3xl">Who is the legal employer? Do not guess.</h2>
          <EngagementComparisonTable />
        </div>
      </section>

      <section id="pods" className="scroll-anchor page-section grid gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow-label">Dedicated pods</p>
          <h2 className="mt-2 text-3xl">A cross-functional team, not a pile of contractors.</h2>
          <p className="mt-3 mb-6 text-sm leading-6 text-fg-muted">{podFacts.composition}</p>
          <ProcessLoop
            eyebrow="How a pod starts"
            steps={[
              { n: "01", title: "Queue scope", body: "Volume, specialty, systems, and whether anyone will see claims or EHR data." },
              { n: "02", title: "Seat the pod", body: "Named lead, operators, and a QA / AI reviewer. Not a bench of anonymous hours." },
              { n: "03", title: "Overlap hours", body: "Coverage mapped to US Eastern and Pacific business hours before go-live." },
              { n: "04", title: "Access only if needed", body: "If the pod can touch PHI-adjacent data, access waits on your BAA and the data-residency disclosure." },
            ]}
          />
        </div>
        <aside className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-5">
            <p className="eyebrow-label">Where the work is performed</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{podFacts.locations}</p>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-5">
            <p className="eyebrow-label">Time zone coverage</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{podFacts.hours}</p>
          </div>
        </aside>
      </section>

      <section id="roles" className="scroll-anchor section-alt border-t border-[var(--border-subtle)]">
        <div className="page-section space-y-4 py-10">
          <p className="eyebrow-label">Roles we staff</p>
          <h2 className="mt-2 text-3xl">The seats we fill for US revenue cycle teams.</h2>
          {staffingRoles.map((role) => (
            <article key={role.slug} className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-6">
              <h3 className="text-2xl">{role.name}</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                <span className="eyebrow-label">Typical certifications</span>
                <br />
                {role.certifications}
              </p>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                <span className="eyebrow-label">Engagement models</span>
                <br />
                {role.models}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section py-10">
        <TrustSnippet
          eyebrow="Staffing compliance"
          body="We employ staff-augmentation, contract-to-hire (during contract), and EOR workers on our books — not as a default independent-contractor pass-through. I-9 / E-Verify, workers’ compensation, and EPLI follow who the legal employer is. That is separate from HIPAA."
          href="/about/trust-security#staffing-compliance"
          linkLabel="Learn more"
        />
      </section>

      <CtaBand
        href="/contact/staffing"
        eyebrow="Staffing inquiry"
        lede="Role, model, and volume only. Do not send candidate SSNs, patient files, or PHI."
      />
    </>
  );
}
