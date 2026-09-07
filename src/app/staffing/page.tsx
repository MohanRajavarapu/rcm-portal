import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { StaffingFaq } from "@/components/staffing/staffing-faq";
import { MetricsBar } from "@/components/trust/metrics-bar";
import { staffingRoles } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Healthcare RCM staffing agency",
  description:
    "Medical coder contract staffing, RCM staff augmentation, contract-to-hire, EOR, and direct hire. Separate from our RCM operating services.",
  path: "/staffing",
});

const links = [
  { href: "/staffing/engagement-models", label: "Engagement models", body: "Staff augmentation, C2H, EOR, direct hire." },
  { href: "/staffing/compare", label: "Compare engagement models", body: "Who employs whom — the table." },
  { href: "/staffing/pods", label: "Dedicated pods", body: "Lead + operators + QA, with location and hours." },
  { href: "/staffing/roles", label: "Roles we staff", body: "Coders, billing ops, analysts, leads, AI reviewers." },
  { href: "/staffing/compliance", label: "Compliance & risk", body: "Classification, I-9, workers’ comp, EPLI, locations." },
];

export default function StaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing & workforce solutions"
        title="Scale the team without mixing this up with RCM outsourcing."
        lede="This branch is for workforce buyers: named operators, pods, EOR, and searches. It is not a subsection of our healthcare RCM operating services. If you need us to run the cycle, use For Healthcare Providers."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/staffing", label: "Staffing" },
        ]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact/staffing" className="btn-secondary h-11 px-6 text-sm">
            Request Staffing
          </Link>
          <Link href="/staffing/compare" className="btn-primary h-11 px-6 text-sm">
            Compare models
          </Link>
        </div>
      </PageHero>
      <MetricsBar line="staffing" />
      <section className="page-section py-10">
        <p className="eyebrow-label">Who is the employer?</p>
        <h2 className="mt-2 max-w-3xl text-3xl">Do not guess. Open the comparison table.</h2>
        <p className="mt-3 mb-6 max-w-[65ch] text-sm text-fg-muted">
          Most staffing objections come from not knowing who employs the worker. That table is a
          first-class page in this branch — not a footnote.
        </p>
        <Link href="/staffing/compare" className="btn-primary h-11 px-6 text-sm">
          Compare engagement models
        </Link>
      </section>
      <section className="section-alt py-10">
        <div className="page-section grid gap-4 md:grid-cols-2">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="surface-card p-6 hover:bg-surface-3">
              <h2 className="text-xl">{item.label}</h2>
              <p className="mt-2 text-sm text-fg-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="page-section py-10">
        <p className="eyebrow-label">Roles</p>
        <h2 className="mt-2 text-3xl">What we actually staff</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {staffingRoles.map((role) => (
            <Link
              key={role.slug}
              href="/staffing/roles"
              className="trust-chip hover:bg-trust/20"
            >
              {role.name}
            </Link>
          ))}
        </div>
      </section>
      <StaffingFaq />
      <StaffingCtaBand />
    </>
  );
}
