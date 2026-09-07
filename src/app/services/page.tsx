import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { services, servicesByCycle } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RCM services for healthcare providers",
  description: "Eligibility, coding, claims, denials, A/R, posting, credentialing, and analytics — not staffing.",
  path: "/services",
});

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
        eyebrow="For healthcare providers"
        title="Every station of the revenue cycle, available as a slice or the full loop."
        lede="Start with denials or aged A/R if that is where cash is stuck. Expand when the cadence is proven."
      />
      <nav
        className="sticky top-[var(--header-height)] z-[40] border-b border-[var(--border-subtle)] bg-surface-0/90 backdrop-blur-[12px]"
        aria-label="Service phases"
      >
        <div className="page-section flex gap-2 overflow-x-auto py-3">
          {phases.map((phase) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              className="trust-chip hover:bg-trust/20"
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
              <span className="eyebrow-label">{cycle}</span>
              <span className="mt-1 block">{cycle}-cycle</span>
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {servicesByCycle[cycle].map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="interactive-card h-full">
                    <CardHeader>
                      <Badge variant="secondary">{service.cycle}</Badge>
                      <CardTitle className="mt-2 text-xl">{service.name}</CardTitle>
                      <CardDescription>{service.summary}</CardDescription>
                      <p className="pt-2 text-sm text-fg">{service.outcome}</p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="caption">{services.length} services in the public catalog.</p>
      </section>
      <CtaBand />
    </>
  );
}
