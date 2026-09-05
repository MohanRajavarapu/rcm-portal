import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Technology",
  description: "How 360VERTEXAI uses AI, APIs, and microservices around US healthcare RCM.",
};

const layers = [
  {
    title: "Public website & BFF",
    body: "This Next.js application is the public surface and API gateway for leads, careers, content, and newsletter events. It never stores PHI.",
  },
  {
    title: "Lead service",
    body: "Validates inbound practice inquiries, rejects likely PHI strings, and persists a ticket for operations follow-up.",
  },
  {
    title: "Career service",
    body: "Publishes open roles and accepts applications without resume malware scanning on this slice—PDFs move over email after screening.",
  },
  {
    title: "Content service",
    body: "Services, specialties, FAQs, and company facts are versioned in the repository so marketing copy cannot drift from the catalog API.",
  },
  {
    title: "Notification service",
    body: "Newsletter and acknowledgement events. Production mail can be wired to SES or an equivalent without changing the public contract.",
  },
  {
    title: "Future production RCM plane",
    body: "Eligibility, coding assist, claim scrub, and denial clustering run in a separate, BAA-covered environment with EHR/clearinghouse connectors. That plane is not this website.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Microservices for the company website. A separate plane for claims."
        lede="v4 of this product splits public marketing from production RCM on purpose. Models that touch claims data never share a database with this site."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {layers.map((layer) => (
            <article key={layer.title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-xl">{layer.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-forest p-8 text-white">
          <h2 className="text-3xl">What AI is allowed to do</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/75 sm:grid-cols-2">
            <li>Flag eligibility and COB inconsistencies for a human queue.</li>
            <li>Suggest codes and documentation gaps; coder attests.</li>
            <li>Predict likely clearinghouse or payer edits before 837 leave.</li>
            <li>Cluster denials so prevention work is not anecdotal.</li>
            <li>Never auto-submit a claim or auto-write an appeal into production.</li>
            <li>Never accept PHI through public web forms.</li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
