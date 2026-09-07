import { PageHero } from "@/components/layout/page-hero";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RCM and staffing metrics",
  description:
    "RCM operating metrics (clean-claim, days in A/R, cost-to-collect) and staffing metrics (time-to-fill, retention, fill rate) in labeled groups.",
  path: "/proof/metrics",
});

export default function ProofMetricsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof · metrics"
        title="RCM numbers, then staffing numbers — never one blended row."
        lede="Same design tokens. Separate labels. A workforce buyer can skip the first group entirely."
        crumbs={[
          { href: "/proof", label: "Proof" },
          { href: "/proof/metrics", label: "Metrics" },
        ]}
      />
      <MetricsBar line="both" />
    </>
  );
}
