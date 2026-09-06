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
import { ComplianceBadges } from "@/components/trust/compliance-badges";
import { EhrBanner } from "@/components/trust/ehr-banner";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { company, differentiators } from "@/content/company";
import { faqs, processSteps } from "@/content/faqs";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden text-white">
        <div className="vertex-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-mint uppercase">
              {company.legalName}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-balance sm:text-6xl">
              Recover the revenue the visit already earned.
            </h1>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.6] text-[#e0e0e0]">
              End-to-end US healthcare RCM—eligibility through posting—run with certified operators
              and AI that flags risk instead of inventing codes. Built for physician groups, ASCs,
              and specialty practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-primary h-11 px-5")}>
                Get Started
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-white/20 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                View the cycle
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#d1d5db]">
              {company.email} · {company.phoneDisplay} · No PHI on this website
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <div className="glass-panel interactive-card rounded-2xl p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Operating loop</p>
              <ol className="mt-4 space-y-3">
                {processSteps.map((step) => (
                  <li key={step.n} className="flex gap-3 border-b border-white/8 pb-3 last:border-0 last:pb-0">
                    <span className="font-heading text-mint">{step.n}</span>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-sm leading-[1.6] text-[#d1d5db]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <EhrBanner />
      <ComplianceBadges />
      <MetricsBar />

      <section className="page-section py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">The cycle, owned in slices or entire.</h2>
          </div>
          <Link href="/services" className="hidden text-sm text-cyan underline-offset-4 hover:underline sm:inline">
            All services
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="interactive-card h-full">
                <CardHeader>
                  <Badge variant="secondary">{service.cycle}</Badge>
                  <CardTitle className="mt-2 text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm leading-[1.6] text-[#d1d5db]">{service.summary}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#121212] py-12">
        <div className="page-section">
          <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Why 360VERTEXAI</p>
          <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">AI is a reviewer. Your cash still needs operators.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="glass-panel interactive-card rounded-xl p-5">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-[#d1d5db]">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/why" className="mt-6 inline-flex text-sm text-cyan underline-offset-4 hover:underline">
            Why practices choose 360VERTEXAI
          </Link>
        </div>
      </section>

      <section className="page-section py-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Specialties</p>
        <h2 className="mt-2 text-3xl sm:text-4xl">Configured for how you actually bill.</h2>
        <p className="mt-3 max-w-[65ch] text-sm leading-[1.6] text-[#d1d5db]">
          Specialty-tailored coding precision for all major commercial, Medicare, Medicaid, and
          regional insurance payers.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              href={`/specialties/${specialty.slug}`}
              className="rounded-full border border-white/15 bg-card px-4 py-2 text-sm hover:border-cyan/40"
            >
              {specialty.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#121212]/80">
        <div className="page-section grid gap-8 py-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">Questions</p>
            <h2 className="mt-2 text-3xl">Straight answers before a BAA.</h2>
            <p className="mt-3 leading-[1.6] text-[#d1d5db]">
              Onboarding, EHR connectivity, and how AI stays in review. System access and claim
              samples happen after legal and security—not through this form.
            </p>
          </div>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="leading-[1.6] text-[#d1d5db]">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
