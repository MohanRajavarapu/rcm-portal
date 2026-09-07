import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand } from "@/components/layout/page-hero";
import { ComplianceBadges } from "@/components/trust/compliance-badges";
import { EhrBanner } from "@/components/trust/ehr-banner";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { company, differentiators } from "@/content/company";
import { faqs, processSteps } from "@/content/faqs";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI-operated US healthcare RCM",
  description:
    "End-to-end US healthcare revenue cycle for physician groups, ASCs, and specialty practices. Staffing is a separate offering.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero-wash">
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow-label">{company.legalName}</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-balance sm:text-6xl">
              Recover the revenue the visit already earned.
            </h1>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.6] text-fg-muted">
              End-to-end US healthcare RCM—eligibility through posting—run with certified operators
              and AI that flags risk instead of inventing codes. Built for physician groups, ASCs,
              and specialty practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/rcm" className="btn-primary h-11 px-6 text-sm">
                Talk to an Expert
              </Link>
              <Link href="/services" className="btn-secondary h-11 px-6 text-sm">
                View the cycle
              </Link>
            </div>
            <p className="caption mt-6">
              {company.email} · {company.phoneDisplay} · No PHI on this website
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <div className="surface-card bg-surface-2 p-5">
              <p className="eyebrow-label">Operating loop</p>
              <ol className="mt-4 space-y-3">
                {processSteps.map((step) => (
                  <li
                    key={step.n}
                    className="flex gap-3 border-b border-[var(--border-subtle)] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-heading text-sm font-semibold text-fg-subtle">{step.n}</span>
                    <div>
                      <p className="text-sm font-medium text-fg">{step.title}</p>
                      <p className="text-sm leading-[1.6] text-fg-muted">{step.body}</p>
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
      <MetricsBar line="rcm" />

      <section className="section-alt border-y border-[var(--border-subtle)]">
        <div className="page-section flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow-label">Staffing & workforce solutions</p>
            <h2 className="mt-2 text-2xl sm:text-3xl">Need to scale your team?</h2>
            <p className="mt-2 max-w-[60ch] text-sm text-fg-muted">
              Contract staffing, EOR, pods, and direct hire — a separate buyer path from RCM
              operations. Not mixed into the hero above.
            </p>
          </div>
          <Link href="/staffing" className="btn-secondary h-11 px-6 text-sm">
            See Staffing & Workforce Solutions
          </Link>
        </div>
      </section>

      <section className="bg-surface-0 py-12">
        <div className="page-section">
          <p className="eyebrow-label">Service pillars</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Two offerings. Two doors.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/services" className="surface-card p-6 hover:bg-surface-3">
              <p className="eyebrow-label">For healthcare providers</p>
              <h3 className="mt-2 text-2xl">Core Operations & AI Automation</h3>
              <p className="mt-2 text-sm leading-[1.6] text-fg-muted">
                Eligibility through posting. BAA, attested AI, and RCM operating metrics.
              </p>
            </Link>
            <Link href="/staffing" className="surface-card p-6 hover:bg-surface-3">
              <p className="eyebrow-label">For workforce buyers</p>
              <h3 className="mt-2 text-2xl">Staffing & Workforce Solutions</h3>
              <p className="mt-2 text-sm leading-[1.6] text-fg-muted">
                Who employs whom, time-to-fill, and compliance — not a slice of the RCM catalog.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-0 py-12">
        <div className="page-section">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow-label">RCM services</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">The cycle, owned in slices or entire.</h2>
            </div>
            <Link href="/services" className="link-quiet hidden text-sm underline-offset-4 hover:underline sm:inline">
              All services
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="interactive-card h-full">
                  <CardHeader>
                    <Badge variant="secondary">{service.cycle}</Badge>
                    <CardTitle className="mt-2 text-lg text-fg">{service.name}</CardTitle>
                    <CardDescription>{service.summary}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt py-12">
        <div className="page-section">
          <p className="eyebrow-label">Why 360VERTEXAI</p>
          <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">AI is a reviewer. Your cash still needs operators.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="surface-card p-5">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-fg-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/why" className="link-quiet mt-6 inline-flex text-sm underline-offset-4 hover:underline">
            Why practices choose 360VERTEXAI
          </Link>
        </div>
      </section>

      <section className="bg-surface-0 py-12">
        <div className="page-section">
          <p className="eyebrow-label">Specialties</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Configured for how you actually bill.</h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-[1.6] text-fg-muted">
            Specialty-tailored coding precision for all major commercial, Medicare, Medicaid, and
            regional insurance payers.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Link
                key={specialty.slug}
                href={`/specialties/${specialty.slug}`}
                className="rounded-full border border-[var(--border-default)] bg-surface-2 px-4 py-2 text-sm text-fg-muted hover:bg-surface-3 hover:text-fg"
              >
                {specialty.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt border-t border-[var(--border-subtle)]">
        <div className="page-section grid gap-8 py-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow-label">RCM questions</p>
            <h2 className="mt-2 text-3xl">Straight answers before a BAA.</h2>
            <p className="mt-3 leading-[1.6] text-fg-muted">
              Onboarding, EHR connectivity, and how AI stays in review. System access and claim
              samples happen after legal and security—not through this form.
            </p>
          </div>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base text-fg">{faq.question}</AccordionTrigger>
                <AccordionContent className="leading-[1.6] text-fg-muted">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
