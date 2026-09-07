import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Life at 360VertexAI",
  description:
    "How operators work at 360VERTEXAI: US-hours overlap from India, weekly cadence, zero PHI on public channels.",
  path: "/careers/life",
});

const notes = [
  {
    title: "US hours, India delivery",
    body: "Production work overlaps EST and PST business hours. This is not a follow-the-sun ticket shop with nobody on the queue at 9 a.m. Eastern.",
  },
  {
    title: "Operators, not a bench of anonymous hours",
    body: "You own a queue or a specialty slice. Models flag risk; you attest. Staffing colleagues who sit in EOR or augmentation seats are employed cleanly — see Compliance & Risk.",
  },
  {
    title: "No heroics as a culture",
    body: "Weekly production truth over month-end theater. If inventory is ugly, we say so in the pack, not in a slide.",
  },
  {
    title: "Zero PHI on this website",
    body: "Recruiting and talent-pool forms never collect SSN, date of birth, or medical history. Patient work samples do not belong in a public application.",
  },
];

export default function LifePage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · life at 360VertexAI"
        title="The work is the cycle and the people who run it."
        lede="This page is for candidates. Client buyers should use For Healthcare Providers or For Staffing — not this funnel."
        crumbs={[
          { href: "/careers", label: "Careers" },
          { href: "/careers/life", label: "Life at 360VertexAI" },
        ]}
      />
      <section className="page-section grid gap-4 py-10 md:grid-cols-2">
        {notes.map((note) => (
          <article key={note.title} className="surface-card p-6">
            <h2 className="text-xl">{note.title}</h2>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{note.body}</p>
          </article>
        ))}
      </section>
      <div className="page-section flex flex-wrap gap-3 pb-10">
        <Link href="/careers#open-roles" className="btn-primary h-11 px-6 text-sm">
          Browse open roles
        </Link>
        <Link href="/careers#talent-pool" className="btn-secondary h-11 px-6 text-sm">
          Join talent pool
        </Link>
      </div>
    </>
  );
}
