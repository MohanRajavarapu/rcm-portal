import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { specialties } from "@/content/specialties";

export const metadata: Metadata = {
  title: "Specialties",
  description: "RCM configured for primary care, cardiology, orthopedics, radiology, and more.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Queues, edits, and coding rules that match the clinic—not a generic mill."
        lede="A cardiology cath schedule and an FQHC encounter rate are not the same business. We staff and configure accordingly."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {specialties.map((specialty) => (
          <Link key={specialty.slug} href={`/specialties/${specialty.slug}`}>
            <Card className="h-full hover:bg-mist/50">
              <CardHeader>
                <CardTitle className="text-xl">{specialty.name}</CardTitle>
                <CardDescription className="leading-6">{specialty.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
