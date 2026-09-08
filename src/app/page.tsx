import Link from "next/link";
import { Cpu, Layers, Users } from "lucide-react";
import { WhoWeAreLeadership } from "@/components/about/who-we-are-leadership";
import { company } from "@/content/company";
import { specialties } from "@/content/specialties";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI-operated US healthcare RCM",
  description:
    "End-to-end revenue cycle management and dedicated workforce solutions for US healthcare providers.",
  path: "/",
});

const homeStats = [
  { value: "98%+", label: "Clean claim rate", hint: "RCM" },
  { value: "<30 Days", label: "Days in A/R", hint: "RCM" },
  { value: "24/7", label: "US EST/PST coverage", hint: "Staffing" },
  { value: "35% Avg", label: "Operational cost reduction", hint: "Combined" },
] as const;

const rcmCapabilities = [
  "Eligibility & prior authorization",
  "Human-attested coding & charge capture",
  "Unified claims, denials, and A/R management",
] as const;

const staffingModels = [
  {
    title: "Dedicated operators",
    body: "Individual specialists embedded directly into your workflow.",
  },
  {
    title: "Managed pods",
    body: "Dedicated operational teams complete with team leads.",
  },
  {
    title: "Employer of Record (EOR)",
    body: "Global hiring, HR, and payroll compliance without you becoming the employer.",
  },
  {
    title: "Talent search",
    body: "Specialized healthcare recruiting for RCM and operations seats.",
  },
] as const;

const featuredSpecialties = specialties.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="hero-wash">
        <div className="page-section py-8 md:py-10">
          <div className="relative z-0 max-w-3xl">
            <p className="eyebrow-label">{company.brandName}</p>
            <h1 className="mt-3 text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-[3.35rem]">
              Scalable Healthcare Operations
              <br />
              AI-Powered RCM &amp; Specialized Staffing
            </h1>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.65]">
              End-to-end revenue cycle management and dedicated workforce solutions—driven by
              certified US healthcare operators and risk-flagging AI.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#rcm-pillar" className="btn-primary h-11 px-6 text-sm">
                Explore RCM Operations
              </a>
              <a href="#staffing-pillar" className="btn-secondary h-11 px-6 text-sm">
                Explore Staffing &amp; Workforce
              </a>
            </div>
            <p className="caption mt-4">
              {company.email} · {company.phoneDisplay} · No PHI on this website
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-200 bg-white"
        aria-labelledby="performance-heading"
      >
        <div className="page-section py-8 md:py-10">
          <p className="eyebrow-label" id="performance-heading">
            Performance at a glance
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="surface-card p-5 text-center sm:text-left">
                <p className="stat-number text-3xl sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-fg">{stat.label}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#0f766e]">
                  {stat.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-12" id="services">
        <div className="page-section">
          <div className="min-w-0">
            <p className="eyebrow-label">Services</p>
            <div className="section-heading mt-2">
              <span className="section-heading-badge" aria-hidden>
                <Layers className="size-4" />
              </span>
              <h2 className="text-3xl leading-tight sm:text-4xl">Two offerings. Two doors.</h2>
            </div>
          </div>
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
            <article
              id="rcm-pillar"
              className="scroll-anchor flex h-full flex-col overflow-visible rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                <p className="eyebrow-label">Healthcare providers</p>
                <div className="section-heading mt-2">
                  <span className="section-heading-badge" aria-hidden>
                    <Cpu className="size-4" />
                  </span>
                  <h3 className="text-2xl leading-tight text-[#0F172A] sm:text-3xl">
                    RCM &amp; AI Operations
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                Full-cycle or modular revenue cycle management run by certified operators paired with
                AI that flags risk instead of inventing codes.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#0F172A]">Key capabilities</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#475569]">
                {rcmCapabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-[#0F172A]">Configured specialties</p>
              <ul className="mt-2 space-y-1 text-sm">
                {featuredSpecialties.map((specialty) => (
                  <li key={specialty.slug}>
                    <Link href={`/specialties/${specialty.slug}`} className="link-quiet">
                      {specialty.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/specialties"
                className="mt-2 inline-flex text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
              >
                View All Supported Specialties →
              </Link>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#0f766e]">
                HIPAA Compliant · BAA Required
              </p>
              <Link href="/services/rcm" className="btn-secondary mt-6 h-11 w-fit px-5 text-sm">
                Explore RCM Services →
              </Link>
            </article>

            <article
              id="staffing-pillar"
              className="scroll-anchor flex h-full flex-col overflow-visible rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                <p className="eyebrow-label">Workforce buyers</p>
                <div className="section-heading mt-2">
                  <span className="section-heading-badge" aria-hidden>
                    <Users className="size-4" />
                  </span>
                  <h3 className="text-2xl leading-tight text-[#0F172A] sm:text-3xl">
                    Staffing &amp; Workforce Solutions
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                Named operators, pods, and talent sourcing for US RCM teams looking to expand
                capacity without full-cycle outsourcing.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#0F172A]">Engagement models</p>
              <ul className="mt-2 space-y-3 text-sm leading-6 text-[#475569]">
                {staffingModels.map((model) => (
                  <li key={model.title}>
                    <span className="font-semibold text-[#0F172A]">{model.title}: </span>
                    {model.body}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/staffing"
                className="btn-secondary mt-6 h-11 w-fit px-5 text-sm"
              >
                Explore Staffing Solutions →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-alt section-block border-y border-slate-200">
        <div className="page-section max-w-3xl">
          <p className="eyebrow-label">Why 360VERTEXAI</p>
          <h2 className="mt-2 text-3xl">AI is a reviewer. Cash still needs operators.</h2>
          <p className="mt-3 text-base leading-7 text-[#475569]">
            Models flag eligibility gaps, coding variance, and denials. Certified staff attest codes
            and contact payers directly.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
          >
            Why practices choose 360VERTEXAI →
          </Link>
        </div>
      </section>

      <WhoWeAreLeadership />
    </>
  );
}
