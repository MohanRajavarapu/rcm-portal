import Link from "next/link";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { ComplianceBadges } from "@/components/trust/compliance-badges";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { differentiators } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Why 360VERTEXAI",
  description:
    "Why physician groups choose 360VERTEXAI for AI-operated US revenue cycle with human attestation.",
  path: "/why",
});

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why 360VERTEXAI"
        title="AI is a reviewer. Your cash still needs operators."
        lede="We own the seams of the cycle—eligibility through posting—with models that flag risk and certified staff who attest every production decision."
      />
      <MetricsBar line="rcm" />
      <section className="page-section py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-[1.6] text-fg-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/technology" className="link-quiet text-sm font-medium underline-offset-4 hover:underline">
            See the security model →
          </Link>
          <Link href="/contact/rcm" className="btn-primary h-10 px-5 text-sm">
            Talk to an Expert
          </Link>
        </div>
      </section>
      <ComplianceBadges />
      <CtaBand />
    </>
  );
}
