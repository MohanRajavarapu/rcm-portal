import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Choose an RCM operations conversation or a staffing request. These are separate inquiry paths.",
  path: "/contact",
});

export default function ContactChooserPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Which conversation do you need?"
        lede="RCM operations and staffing are separate books of work. Pick the path that matches the buyer problem — we do not mix them on one form."
        crumbs={[
          { href: "/about", label: "Company" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 md:grid-cols-2">
        <Link href="/contact/rcm" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Healthcare providers</p>
          <h2 className="mt-2 text-2xl">Talk to an Expert</h2>
          <p className="mt-2 text-sm text-fg-muted">
            Eligibility through posting, AI review, BAA, and operating cadence.
          </p>
        </Link>
        <Link href="/contact/staffing" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Workforce buyers</p>
          <h2 className="mt-2 text-2xl">Request Staffing</h2>
          <p className="mt-2 text-sm text-fg-muted">
            Staff augmentation, contract-to-hire, EOR, direct hire, and dedicated pods.
          </p>
        </Link>
      </section>
    </>
  );
}
