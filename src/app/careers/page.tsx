import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/layout/page-hero";
import { jobs } from "@/content/jobs";
import { company } from "@/content/company";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${company.legalName}.`,
};

type Props = { searchParams: Promise<{ role?: string }> };

export default async function CareersPage({ searchParams }: Props) {
  const { role } = await searchParams;
  const defaultJobId = jobs.some((job) => job.id === role) ? role : jobs[0]?.id;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Operators who like clean inventory more than heroic month-end."
        lede="We hire US RCM specialists, certified coders, denial leads, and analysts who can sit between models and production queues."
      />
      <section className="mx-auto max-w-6xl space-y-4 px-4 py-10 sm:px-6">
        {jobs.map((job) => (
          <article key={job.id} id={job.id} className="scroll-mt-28 rounded-xl border border-white/10 bg-card p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-mint uppercase">
              {job.team} · {job.type}
            </p>
            <h2 className="mt-1 text-2xl">{job.title}</h2>
            <p className="mt-1 text-sm text-slate-300">{job.location}</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">{job.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href={`/careers?role=${job.id}#apply`}
              className={cn(buttonVariants({ size: "lg" }), "mt-4 h-10 px-4 font-semibold")}
            >
              Apply for this role
            </Link>
          </article>
        ))}
      </section>
      <section id="apply" className="scroll-mt-28 border-t border-white/10 bg-navy/50">
        <div className="relative z-20 mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl">Apply</h2>
          <p className="mt-1 mb-6 text-sm text-slate-200">
            No PHI in work samples. Write {company.careersEmail} if a recruiter already asked you to
            send materials.
          </p>
          <div className="relative isolate z-20 overflow-visible rounded-xl border border-white/10 bg-card p-5">
            <ApplyForm key={defaultJobId} jobs={jobs} defaultJobId={defaultJobId} />
          </div>
        </div>
      </section>
    </>
  );
}
