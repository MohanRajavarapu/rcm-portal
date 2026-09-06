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
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="glass-panel rounded-xl p-6">
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-200">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/technology" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
            See the security model
          </Link>
          <span className="text-white/20">·</span>
          <Link href="/technology" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
            Explore security model
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-10 px-4 font-semibold")}>
            Request an assessment
          </Link>
        </div>
      </section>
      <ComplianceBadges />
      <CtaBand />
    </>
  );
}
