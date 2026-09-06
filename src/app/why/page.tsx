import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { ComplianceBadges } from "@/components/trust/compliance-badges";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { differentiators } from "@/content/company";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why 360VERTEXAI",
  description:
    "Why physician groups choose 360VERTEXAI for AI-operated US revenue cycle with human attestation.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why 360VERTEXAI"
        title="AI is a reviewer. Your cash still needs operators."
        lede="We own the seams of the cycle—eligibility through posting—with models that flag risk and certified staff who attest every production decision."
      />
      <MetricsBar />
      <section className="page-section py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="glass-panel interactive-card rounded-xl p-6">
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-[1.6] text-[#d1d5db]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/technology" className="text-sm font-medium text-cyan hover:text-mint">
            See the security model →
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-primary h-10 px-4")}>
            Request an assessment
          </Link>
        </div>
      </section>
      <ComplianceBadges />
      <CtaBand />
    </>
  );
}
