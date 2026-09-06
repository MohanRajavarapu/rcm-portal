"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ApplyForm } from "@/components/forms/apply-form";
import { PageHero } from "@/components/layout/page-hero";
import { jobs, type Job } from "@/content/jobs";
import { company } from "@/content/company";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CareersContent({ defaultJobId }: { defaultJobId?: string }) {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Operators who like clean inventory more than heroic month-end."
        lede="We hire US RCM specialists, certified coders, denial leads, and analysts who can sit between models and production queues."
      />
      <section className="page-section py-8">
        <Accordion defaultValue={[defaultJobId ?? jobs[0]?.id ?? ""]}>
          {jobs.map((job) => (
            <JobAccordionItem key={job.id} job={job} />
          ))}
        </Accordion>
      </section>
      <section id="apply" className="scroll-anchor border-t border-white/10 bg-[#121212]/60">
        <div className="page-section max-w-3xl py-8">
          <h2 className="text-2xl">Apply</h2>
          <p className="mt-1 mb-6 text-sm leading-[1.6] text-[#d1d5db]">
            No PHI in work samples. Write {company.careersEmail} if a recruiter already asked you to
            send materials.
          </p>
          <div className="rounded-xl border border-white/10 bg-card p-5">
            <ApplyForm key={defaultJobId} jobs={jobs} defaultJobId={defaultJobId} />
          </div>
        </div>
      </section>
    </>
  );
}

function JobAccordionItem({ job }: { job: Job }) {
  return (
    <AccordionItem value={job.id} className="mb-3 rounded-xl border border-white/10 bg-card px-4">
      <AccordionTrigger className="py-4 text-left hover:no-underline">
        <span>
          <span className="block text-xs font-semibold tracking-[0.14em] text-mint uppercase">
            {job.team} · {job.type}
          </span>
          <span className="mt-1 block text-xl font-semibold">{job.title}</span>
          <span className="mt-1 block text-sm font-normal text-[#d1d5db]">{job.location}</span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-4">
        <p className="text-sm leading-[1.6] text-[#e0e0e0]">{job.summary}</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-[1.6] text-[#d1d5db]">
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href={`/careers?role=${job.id}#apply`}
          className={cn(buttonVariants({ size: "lg" }), "btn-primary mt-4 h-10 px-4")}
        >
          Apply for this role
        </Link>
      </AccordionContent>
    </AccordionItem>
  );
}
