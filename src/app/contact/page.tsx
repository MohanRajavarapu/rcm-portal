import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Choose RCM services, staffing, or a general inquiry. These are separate routes — not one form with a hidden type field.",
  path: "/contact",
});

const choices = [
  {
    href: "/contact/rcm",
    eyebrow: "Healthcare providers",
    title: "RCM Services",
    body: "Eligibility through posting, AI review, BAA, and operating cadence.",
  },
  {
    href: "/contact/staffing",
    eyebrow: "Workforce buyers",
    title: "Staffing Services",
    body: "Staff augmentation, contract-to-hire, EOR, direct hire, and dedicated pods.",
  },
  {
    href: "/contact/general",
    eyebrow: "Everything else",
    title: "Something else",
    body: "Partnerships, press, vendors, or a question that is not RCM or staffing.",
  },
] as const;

export default function ContactChooserPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="What can we help with?"
        lede="Pick the path that matches the problem. Each choice is its own URL and form handler so ads, bookmarks, and no-JS links all resolve."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact Us" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 md:grid-cols-3">
        {choices.map((choice) => (
          <Link key={choice.href} href={choice.href} className="surface-card p-6 hover:bg-surface-3">
            <p className="eyebrow-label">{choice.eyebrow}</p>
            <h2 className="mt-2 text-2xl">{choice.title}</h2>
            <p className="mt-2 text-sm text-fg-muted">{choice.body}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
