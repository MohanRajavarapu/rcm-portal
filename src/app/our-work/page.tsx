import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyFilter } from "@/components/proof/case-study-filter";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Work",
  description:
    "Anonymized RCM operating outcomes and staffing outcomes in one feed. Filter by pillar — metrics are never blended.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="One feed. Every story is tagged to a pillar."
        lede="Filter All, RCM, or Staffing. RCM cards show cycle metrics. Staffing cards show workforce metrics. We do not blend them."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/our-work", label: "Our Work" },
        ]}
      />
      <section className="page-section py-10">
        <CaseStudyFilter />
      </section>
    </>
  );
}
