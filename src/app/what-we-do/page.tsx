/**
 * /what-we-do is a router, not a catalog.
 *
 * Adding a third capability area:
 * 1. Append one object to `pillars` in src/content/pillars.ts (renders a PillarCard).
 * 2. Add one page at src/app/what-we-do/[new-slug]/page.tsx (same layout pattern as rcm/ and staffing/).
 * 3. Add a ctaByRoutePrefix row in src/content/cta.ts if the pillar has its own contact route.
 *
 * Do not add a seventh top-level nav item. The header Services dropdown reads from `pillars`.
 */
import { PageHero } from "@/components/layout/page-hero";
import { PillarCard } from "@/components/what-we-do/pillar-card";
import { pillars } from "@/content/pillars";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "360VertexAI operates across RCM and AI operations, and staffing and workforce solutions.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="RCM operations and workforce solutions."
        lede="360VertexAI operates across distinct books of work. Choose a pillar — individual services and engagement models live one level down, not in the header."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/what-we-do", label: "Services" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 lg:grid-cols-2">
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.slug}
            title={pillar.title}
            summary={pillar.summary}
            href={pillar.href}
            ctaLabel={pillar.ctaLabel}
            icon={pillar.icon}
          />
        ))}
      </section>
    </>
  );
}
