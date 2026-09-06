import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { services, servicesByCycle } from "@/content/services";

export const metadata: Metadata = {
  title: "RCM services",
  description: "Eligibility, coding, claims, denials, A/R, posting, credentialing, and analytics.",
};

const phases = [
  { id: "front-cycle", label: "Front-cycle" },
  { id: "mid-cycle", label: "Mid-cycle" },
  { id: "back-cycle", label: "Back-cycle" },
  { id: "enablement", label: "Enablement" },
] as const;

const cycleAnchors: Record<keyof typeof servicesByCycle, string> = {
  Front: "front-cycle",
  Mid: "mid-cycle",
  Back: "back-cycle",
  Enablement: "enablement",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every station of the revenue cycle, available as a slice or the full loop."
        lede="Start with denials or aged A/R if that is where cash is stuck. Expand when the cadence is proven."
      />
      <nav
        className="sticky top-[var(--header-height)] z-[900] border-b border-white/10 bg-[rgba(11,12,16,0.92)] backdrop-blur-[12px]"
        aria-label="Service phases"
      >
        <div className="page-section flex gap-2 overflow-x-auto py-3">
          {phases.map((phase) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              className="shrink-0 rounded-full border border-mint/40 bg-mint/15 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-mint uppercase hover:bg-mint/25"
            >
              {phase.label}
            </a>
          ))}
        </div>
      </nav>
      <section className="page-section space-y-10 py-8">
        {(Object.keys(servicesByCycle) as Array<keyof typeof servicesByCycle>).map((cycle) => (
          <div key={cycle} id={cycleAnchors[cycle]} className="scroll-anchor">
            <h2 className="text-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">{cycle}</span>
              <span className="mt-1 block">{cycle}-cycle</span>
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {servicesByCycle[cycle].map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="interactive-card h-full">
                    <CardHeader>
                      <Badge variant="secondary">{service.cycle}</Badge>
                      <CardTitle className="mt-2 text-xl">{service.name}</CardTitle>
                      <CardDescription className="leading-[1.6] text-[#d1d5db]">{service.summary}</CardDescription>
                      <p className="pt-2 text-sm text-cyan">{service.outcome}</p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="text-sm text-[#d1d5db]">{services.length} services in the public catalog.</p>
      </section>
      <CtaBand />
    </>
  );
}
