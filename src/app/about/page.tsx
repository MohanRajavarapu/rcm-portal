import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description: `Who ${company.legalName} is and how we run US healthcare RCM.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A private limited company built to run US revenue cycle with AI in the loop."
        lede={`${company.legalName} designs and operates eligibility, coding, claims, denials, A/R, and posting for United States providers. Delivery is from India. Accountability is documented, measured, and human.`}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-7 text-foreground/85">
          <p>
            Healthcare billing fails in the seams: an eligibility miss, a modifier, a clearinghouse
            edit, a denial nobody categorized. We built 360VERTEXAI to own those seams as one
            operating system—not twelve vendors forwarding tickets.
          </p>
          <p>
            Applied AI sits in review: coverage anomalies, coding variance, likely rejects, denial
            clusters. Certified coders and RCM specialists still attest codes, write appeals, and
            speak to payers. That is how the work stays defensible in an audit.
          </p>
          <p>
            We do not publish fictional client logos or invented collection rates. If we engage, you
            will see your own inventory, your own denial mix, and a weekly pack your CFO can read.
          </p>
        </div>
        <aside className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs tracking-[0.16em] text-primary uppercase">Legal entity</p>
            <p className="mt-2 font-heading text-xl">{company.legalName}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Mobile</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`tel:${company.phoneTel}`}>
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Registered / operating region</dt>
                <dd>{company.region}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Market served</dt>
                <dd>{company.serving}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Hours</dt>
                <dd>{company.hours}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
      <section className="border-t border-border bg-mist/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {[
            {
              t: "Mission",
              d: "Return earned clinical revenue to the practice with fewer preventable denials and a cycle leadership can see.",
            },
            {
              t: "Vision",
              d: "RCM operations where models never outrun documentation, and every dollar has a named owner.",
            },
            {
              t: "Values",
              d: "No PHI on public channels. No vanity metrics. No code without an attester. Weekly truth over quarterly theater.",
            },
          ].map((item) => (
            <div key={item.t} className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <h2 className="text-2xl">{item.t}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
