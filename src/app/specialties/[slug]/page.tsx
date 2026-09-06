import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
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
        compact
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/specialties", label: "Specialties" },
          { href: `/specialties/${specialty.slug}`, label: specialty.name },
        ]}
        title={specialty.name}
        lede={`${specialty.category}. ${specialty.summary}`}
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Badge variant="secondary">{specialty.category}</Badge>
        <h2 className="mt-4 text-2xl">Where we concentrate</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {specialty.focus.map((item) => (
            <li key={item} className="rounded-xl border border-white/10 bg-card p-4 text-sm leading-6 text-slate-200">
              {item}
            </li>
          ))}
        </ul>
        {specialty.workflow ? (
          <div className="mt-8 rounded-xl border border-white/10 bg-card p-5">
            <h3 className="text-xl">Actionable workflow</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-200">
              {specialty.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <CtaBand />
    </>
  );
}
