import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Leadership",
  description: `How ${company.legalName} is led across RCM operations, staffing, security, and people — without mixing those books of work.`,
  path: "/about/leadership",
});

const seats = [
  {
    title: "RCM operations",
    body: "Owns cycle design, quality, and client operating cadence for healthcare providers. Does not run the staffing desk as a side job.",
  },
  {
    title: "Staffing & workforce",
    body: "Owns requisitions, classification, EOR payroll, and placement quality. Does not quote clean-claim rates as a staffing KPI.",
  },
  {
    title: "Security & compliance",
    body: "BAA and production access for RCM; candidate/HR file handling for staffing. Those are separate control sets on Trust & Security.",
  },
  {
    title: "People",
    body: "Employment of record for staffed workers we employ, and for our own operators. I-9 / E-Verify and insurance sit with this seat when we are the employer.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="About · leadership"
        title="Named bios when they are cleared. Seats are public now."
        lede="We do not invent executives for the website. The operating seats below are how the company is actually led. Individual names and photos publish here with written approval."
        crumbs={[
          { href: "/about", label: "About Us" },
          { href: "/about/leadership", label: "Leadership" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 md:grid-cols-2">
        {seats.map((seat) => (
          <article key={seat.title} className="surface-card p-6">
            <h2 className="text-xl">{seat.title}</h2>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{seat.body}</p>
          </article>
        ))}
      </section>
      <p className="page-section pb-10 text-sm text-fg-muted">
        Entity: {company.legalName}.{" "}
        <Link href="/about" className="link-quiet underline-offset-4 hover:underline">
          About Us
        </Link>
        {" · "}
        <Link href="/contact" className="link-quiet underline-offset-4 hover:underline">
          Contact
        </Link>
      </p>
    </>
  );
}
