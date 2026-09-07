import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyFilter } from "@/components/proof/case-study-filter";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Case studies",
  description:
    "Anonymized RCM operating outcomes and staffing outcomes. Filter by business line — never a blended case.",
  path: "/proof/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof · case studies"
        title="Every story is tagged RCM or Staffing."
        lede="Use the filter. RCM cards do not cite time-to-fill. Staffing cards do not cite clean-claim rate."
        crumbs={[
          { href: "/proof", label: "Proof" },
          { href: "/proof/case-studies", label: "Case studies" },
        ]}
      />
      <section className="page-section py-10">
        <CaseStudyFilter />
      </section>
    </>
  );
}
