import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { getSpecialty, specialties } from "@/content/specialties";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) return {};
  return { title: specialty.name, description: specialty.summary };
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/specialties", label: "Specialties" },
          { href: `/specialties/${specialty.slug}`, label: specialty.name },
        ]}
        title={specialty.name}
        lede={specialty.summary}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl">Where we concentrate</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {specialty.focus.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card p-4 text-sm leading-6">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
