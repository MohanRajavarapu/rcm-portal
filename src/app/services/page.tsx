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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every station of the revenue cycle, available as a slice or the full loop."
        lede="Start with denials or aged A/R if that is where cash is stuck. Expand when the cadence is proven."
      />
      <section className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6">
        {(Object.keys(servicesByCycle) as Array<keyof typeof servicesByCycle>).map((cycle) => (
          <div key={cycle}>
            <h2 className="text-2xl">{cycle}-cycle</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {servicesByCycle[cycle].map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="h-full hover:bg-mist/50">
                    <CardHeader>
                      <Badge variant="secondary">{service.cycle}</Badge>
                      <CardTitle className="mt-2 text-xl">{service.name}</CardTitle>
                      <CardDescription className="leading-6">{service.summary}</CardDescription>
                      <p className="pt-2 text-sm text-primary">{service.outcome}</p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="text-sm text-muted-foreground">{services.length} services in the public catalog.</p>
      </section>
      <CtaBand />
    </>
  );
}
