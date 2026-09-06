import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { SpecialtiesCatalog } from "@/components/specialties/specialties-catalog";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Specialty-tailored coding precision for commercial, Medicare, Medicaid, and regional payers.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Queues, edits, and coding rules that match the clinic—not a generic mill."
        lede="Specialty-tailored coding precision for all major commercial, Medicare, Medicaid, and regional insurance payers."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <SpecialtiesCatalog />
      </section>
      <CtaBand />
    </>
  );
}
