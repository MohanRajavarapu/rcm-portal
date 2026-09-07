import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { EngagementComparisonTable } from "@/components/staffing/engagement-comparison-table";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { engagementModels } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Compare RCM staffing engagement models",
  description:
    "Interactive comparison of staff augmentation, contract-to-hire, EOR, and direct hire — including who is the legal employer of record.",
  path: "/staffing/compare",
});

export default function CompareModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing · compare models"
        title="Who is the legal employer in each model?"
        lede="This table is the product. Read the first row before you request staffing. Individual model pages sit one click away."
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/engagement-models", label: "Engagement models" },
          { href: "/staffing/compare", label: "Compare" },
        ]}
      />
      <section className="page-section py-10">
        <EngagementComparisonTable />
        <ul className="mt-6 flex flex-wrap gap-3 text-sm">
          {engagementModels.map((model) => (
            <li key={model.slug}>
              <Link href={`/staffing/${model.slug}`} className="link-quiet underline-offset-4 hover:underline">
                {model.name} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <StaffingCtaBand />
    </>
  );
}
