import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand } from "@/components/layout/page-hero";
import { company, differentiators, metrics } from "@/content/company";
import { faqs, processSteps } from "@/content/faqs";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden text-white">
        <div className="vertex-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.22em] text-vertex uppercase">
              {company.legalName}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-balance sm:text-6xl">
              Recover the revenue the visit already earned.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              End-to-end US healthcare RCM—eligibility through posting—run with certified operators
              and AI that flags risk instead of inventing codes. Built for physician groups, ASCs,
              and specialty practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-11 bg-vertex px-5 text-forest hover:bg-vertex/90")}>
                Request a revenue assessment
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-white/25 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                View the cycle
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">
              {company.email} · {company.phoneDisplay} · No PHI on this website
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs tracking-[0.18em] text-vertex uppercase">Operating loop</p>
              <ol className="mt-4 space-y-3">
                {processSteps.map((step) => (
                  <li key={step.n} className="flex gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="font-heading text-vertex">{step.n}</span>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-sm text-white/60">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value}>
              <p className="font-heading text-xl">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-primary uppercase">Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">The cycle, owned in slices or entire.</h2>
          </div>
          <Link href="/services" className="hidden text-sm text-primary underline-offset-4 hover:underline sm:inline">
            All services
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full transition-colors hover:bg-mist/60">
                <CardHeader>
                  <Badge variant="secondary">{service.cycle}</Badge>
                  <CardTitle className="mt-2 text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm leading-6">{service.summary}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs tracking-[0.2em] text-vertex uppercase">Why 360VERTEXAI</p>
          <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">AI is a reviewer. Your cash still needs operators.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.2em] text-primary uppercase">Specialties</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Configured for how you actually bill.</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              href={`/specialties/${specialty.slug}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:bg-mist"
            >
              {specialty.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-primary uppercase">Questions</p>
            <h2 className="mt-2 text-3xl">Straight answers before a BAA.</h2>
            <p className="mt-3 text-muted-foreground">
              If you need system access or claim samples, we set that up after legal and security—not
              through this form.
            </p>
          </div>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
