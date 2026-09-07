import Link from "next/link";
import { FileCheck, ShieldCheck, BadgeCheck } from "lucide-react";
import { PillarCard } from "@/components/what-we-do/pillar-card";
import { pillars } from "@/content/pillars";
import { company } from "@/content/company";
import { specialties } from "@/content/specialties";
import { performanceStats } from "@/content/trust";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI-operated US healthcare RCM",
  description:
    "End-to-end US healthcare revenue cycle for physician groups, ASCs, and specialty practices. Staffing is a separate offering.",
  path: "/",
});

const trustItems = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: FileCheck, label: "BAA Ready" },
  { icon: BadgeCheck, label: "SOC 2 Type II" },
] as const;

const cyclePreview = [
  { cycle: "Front", tease: "Eligibility and prior auth before the visit." },
  { cycle: "Mid", tease: "Coding and charge capture with human attestation." },
  { cycle: "Back", tease: "Claims, denials, and A/R as one queue." },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-wash">
        <div className="page-section section-block">
          <div className="max-w-3xl">
            <p className="eyebrow-label">{company.legalName}</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Recover the revenue the visit already earned.
            </h1>
            <p className="mt-4 max-w-[65ch] text-lg leading-[1.65]">
              End-to-end US healthcare RCM—eligibility through posting—run with certified operators
              and AI that flags risk instead of inventing codes.
            </p>
            <div className="mt-8">
              <Link href="/what-we-do" className="btn-secondary h-11 px-6 text-sm">
                See what we do
              </Link>
            </div>
            <p className="caption mt-6">
              {company.email} · {company.phoneDisplay} · No PHI on this website
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="Operating targets">
        <div className="page-section py-6 md:py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {performanceStats.map((stat) => (
              <div key={stat.label} className="surface-card p-6 text-center sm:text-left">
                <p className="stat-number text-3xl sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-fg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-slate-200" aria-label="Trust and compliance">
        <div className="page-section flex flex-col items-center gap-4 py-5 md:flex-row md:justify-center md:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <p key={item.label} className="flex items-center gap-2 text-sm font-semibold text-fg">
                <span className="grid size-9 place-items-center rounded-lg bg-[#f0fdfa] text-[#0f766e]">
                  <Icon className="size-4" aria-hidden />
                </span>
                {item.label}
              </p>
            );
          })}
          <Link
            href="/about/trust-security"
            className="text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
          >
            Trust &amp; Security →
          </Link>
        </div>
      </section>

      <section className="bg-white section-block">
        <div className="page-section">
          <p className="eyebrow-label">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Two offerings. Two doors.</h2>
          <p className="mt-3 max-w-[65ch] text-base leading-7">
            Individual services and engagement models live one level down — not on this page.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
          </div>
        </div>
      </section>

      <section className="section-alt section-block border-y border-slate-200">
        <div className="page-section">
          <p className="eyebrow-label">The cycle</p>
          <h2 className="mt-2 text-3xl">Slices or the full loop.</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {cyclePreview.map((item) => (
              <li key={item.cycle} className="surface-card p-6">
                <p className="eyebrow-label">{item.cycle}-cycle</p>
                <p className="mt-2 text-sm leading-6">{item.tease}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/what-we-do/rcm"
            className="mt-8 inline-flex text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
          >
            Explore Services →
          </Link>
        </div>
      </section>

      <section className="bg-white section-block">
        <div className="page-section grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow-label">Why 360VERTEXAI</p>
            <h2 className="mt-2 text-3xl">AI is a reviewer. Cash still needs operators.</h2>
            <p className="mt-3 max-w-[60ch] text-base leading-7">
              Models flag eligibility gaps, coding variance, and denials. Certified staff attest
              codes and contact payers.
            </p>
            <Link
              href="/why"
              className="mt-4 inline-flex text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
            >
              Why practices choose 360VERTEXAI →
            </Link>
          </div>
          <div>
            <p className="eyebrow-label">Specialties</p>
            <h2 className="mt-2 text-3xl">Configured for how you bill.</h2>
            <ul className="mt-4 space-y-2 text-base">
              {specialties.slice(0, 4).map((specialty) => (
                <li key={specialty.slug}>
                  <Link href={`/specialties/${specialty.slug}`} className="link-quiet">
                    {specialty.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/specialties"
              className="mt-4 inline-flex text-sm font-semibold text-[#0f766e] underline-offset-4 hover:underline"
            >
              View All Specialties →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-alt section-block border-t border-slate-200" aria-label="Who we are and leadership">
        <div className="page-section">
          <p className="eyebrow-label text-center">Who we are &amp; leadership</p>
          <h2 className="mt-2 text-center text-3xl text-[#0F172A] sm:text-4xl">
            Built on Precision, Led by Healthcare Veterans
          </h2>
          <ul className="mt-8 grid items-stretch gap-4 sm:grid-cols-3">
            {[
              {
                title: "Mission",
                body: "To maximize clean-claim yields and accelerate cash flow for US healthcare organizations through cutting-edge AI and expert operational execution.",
              },
              {
                title: "Vision",
                body: "To be the premiere end-to-end partner for healthcare revenue cycle management and specialized operational staffing.",
              },
              {
                title: "Core Values",
                body: "Uncompromising HIPAA Compliance, 98%+ Accuracy Precision, and Transparent Client Partnership.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-xl text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#475569]">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="eyebrow-label">Executive leadership</p>
            <p className="mx-auto mt-3 max-w-[65ch] text-base leading-7 text-[#475569]">
              Driven by RCM operators and healthcare staffing specialists with decades of combined
              experience managing billing cycles, first-pass resolutions, and provider growth.
            </p>
            <Link href="/about/leadership" className="btn-secondary mt-6 inline-flex h-11 px-6 text-sm">
              Meet Our Leadership Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
