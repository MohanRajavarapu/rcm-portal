import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Proof",
  description:
    "RCM operating outcomes and staffing outcomes, kept in separate groups — never a blended scorecard.",
  path: "/proof",
});

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="Two scorecards. Do not blend them."
        lede="A CFO evaluating the cycle should not parse time-to-fill. A workforce buyer should not hunt for clean-claim rate inside a staffing story."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/proof", label: "Proof" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 md:grid-cols-3">
        <Link href="/proof/case-studies" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Case studies</p>
          <h2 className="mt-2 text-xl">RCM outcomes / staffing outcomes</h2>
          <p className="mt-2 text-sm text-fg-muted">Tagged and filterable. Anonymized until a client clears a named mark.</p>
        </Link>
        <Link href="/proof/metrics" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Metrics</p>
          <h2 className="mt-2 text-xl">Operating KPIs and staffing KPIs</h2>
          <p className="mt-2 text-sm text-fg-muted">Clean-claim, A/R, cost-to-collect — then time-to-fill, retention, fill rate.</p>
        </Link>
        <div className="surface-card p-6">
          <p className="eyebrow-label">Client logos / testimonials</p>
          <h2 className="mt-2 text-xl">Named marks only with permission</h2>
          <p className="mt-2 text-sm text-fg-muted">
            We do not invent logos or quotes. When a client authorizes a mark or testimonial, it will
            appear here and will be tagged RCM or Staffing.
          </p>
        </div>
      </section>
    </>
  );
}
