import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { engagementModels } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Healthcare RCM staffing engagement models",
  description:
    "Staff augmentation, contract-to-hire, 3rd-party payroll/EOR, and direct hire. Compare who is the employer of record on the dedicated table.",
  path: "/staffing/engagement-models",
});

export default function EngagementModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing · engagement models"
        title="Four ways to engage. Pick a model, or compare them."
        lede="Each model answers who employs the worker. The comparison table is a separate page — it is the highest-value staffing asset on this site."
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/engagement-models", label: "Engagement models" },
        ]}
      >
        <Link href="/staffing/compare" className="btn-primary mt-6 h-11 px-6 text-sm">
          Compare engagement models
        </Link>
      </PageHero>
      <section className="page-section grid gap-4 py-10 sm:grid-cols-2">
        {engagementModels.map((model) => (
          <Link key={model.slug} href={`/staffing/${model.slug}`} className="surface-card p-5 hover:bg-surface-3">
            <p className="eyebrow-label">{model.name}</p>
            <h2 className="mt-2 text-xl">{model.headline}</h2>
            <p className="mt-2 text-sm text-fg-muted">{model.summary}</p>
            <p className="caption mt-3">Employer of record: {model.employer}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
