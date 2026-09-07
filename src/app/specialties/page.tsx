import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { SpecialtiesCatalog } from "@/components/specialties/specialties-catalog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RCM specialties",
  description:
    "Specialty-tailored coding precision for commercial, Medicare, Medicaid, and regional payers.",
  path: "/specialties",
});

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Queues, edits, and coding rules that match the clinic—not a generic mill."
        lede="Specialty-tailored coding precision for all major commercial, Medicare, Medicaid, and regional insurance payers."
      />
      <section className="page-section scroll-anchor py-8">
        <SpecialtiesCatalog />
      </section>
      <CtaBand />
    </>
  );
}
