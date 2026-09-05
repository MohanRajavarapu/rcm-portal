import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/layout/page-hero";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${company.legalName}.`,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Operators who like clean inventory more than heroic month-end."
        lede="We hire US RCM specialists, certified coders, denial leads, and analysts who can sit between models and production queues."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          {jobs.map((job) => (
            <article key={job.id} id={job.id} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs tracking-[0.14em] text-primary uppercase">
                {job.team} · {job.type}
              </p>
              <h2 className="mt-1 text-2xl">{job.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
              <p className="mt-3 text-sm leading-6">{job.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {job.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-card p-5">
            <h2 className="text-2xl">Apply</h2>
            <p className="mt-1 mb-4 text-sm text-muted-foreground">
              No PHI in work samples. Use {company.email} if a recruiter already asked you to write.
            </p>
            <ApplyForm jobs={jobs} />
          </div>
        </div>
      </section>
    </>
  );
}
