"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ApplyForm } from "@/components/forms/apply-form";
import { TalentPoolForm } from "@/components/forms/talent-pool-form";
import { jobs, type Job } from "@/content/jobs";
import { company } from "@/content/company";
import { noPhiCopy } from "@/lib/phi";

export function CareersContent({ defaultJobId }: { defaultJobId?: string }) {
  return (
    <>
      <section className="page-section grid gap-4 py-8 md:grid-cols-3">
        <a href="#open-roles" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Path 1</p>
          <h2 className="mt-2 text-2xl">Browse open roles</h2>
          <p className="mt-2 text-sm text-fg-muted">
            Listed jobs on this site. No Greenhouse, Lever, or other ATS is connected yet — listings
            and applications are first-party until an ATS is selected.
          </p>
        </a>
        <a href="#talent-pool" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Path 2</p>
          <h2 className="mt-2 text-2xl">Join our talent pool</h2>
          <p className="mt-2 text-sm text-fg-muted">
            Speculative intake. We will reach out when a seat matches. SSN and date of birth are
            post-offer only.
          </p>
        </a>
        <Link href="/careers/life" className="surface-card p-6 hover:bg-surface-3">
          <p className="eyebrow-label">Path 3</p>
          <h2 className="mt-2 text-2xl">Life at 360VertexAI</h2>
          <p className="mt-2 text-sm text-fg-muted">
            How operators work: US-hours overlap, queues, and zero PHI on public recruiting.
          </p>
        </Link>
      </section>
      <section id="open-roles" className="scroll-anchor page-section py-8">
        <p className="eyebrow-label">Browse open roles</p>
        <h2 className="mt-2 text-3xl">Current listings</h2>
        <p className="mt-2 mb-6 max-w-[65ch] text-sm text-fg-muted">
          Placeholder ATS: none selected. Applications post to our careers API, not a third-party
          board.
        </p>
        <Accordion defaultValue={[defaultJobId ?? jobs[0]?.id ?? ""]}>
          {jobs.map((job) => (
            <JobAccordionItem key={job.id} job={job} />
          ))}
        </Accordion>
      </section>
      <section id="apply" className="scroll-anchor section-alt border-t border-[var(--border-subtle)]">
        <div className="page-section max-w-3xl py-8">
          <h2 className="text-2xl">Apply to a listed role</h2>
          <p className="mt-1 mb-6 text-sm leading-[1.6] text-fg-muted">
            {noPhiCopy} Write {company.careersEmail} if a recruiter already asked you to send
            materials on a secure channel.
          </p>
          <div className="surface-card p-5">
            <ApplyForm key={defaultJobId} jobs={jobs} defaultJobId={defaultJobId} />
          </div>
        </div>
      </section>
      <section id="talent-pool" className="scroll-anchor page-section max-w-3xl py-10">
        <p className="eyebrow-label">Talent pool registration</p>
        <h2 className="mt-2 text-2xl">Join our talent pool</h2>
        <p className="mt-2 mb-6 text-sm text-fg-muted">
          Lighter-weight than a role application. Still zero PHI and no medical history — including
          in additional notes.
        </p>
        <div className="surface-card p-5">
          <TalentPoolForm />
        </div>
      </section>
    </>
  );
}

function JobAccordionItem({ job }: { job: Job }) {
  return (
    <AccordionItem value={job.id} className="mb-3 rounded-xl border border-[var(--border-subtle)] bg-surface-2 px-4">
      <AccordionTrigger className="py-4 text-left hover:no-underline">
        <span>
          <span className="eyebrow-label block">
            {job.team} · {job.type}
          </span>
          <span className="mt-1 block text-xl font-semibold">{job.title}</span>
          <span className="mt-1 block text-sm font-normal text-fg-muted">{job.location}</span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-4">
        <p className="text-sm leading-[1.6] text-fg-muted">{job.summary}</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-[1.6] text-fg-muted">
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link href={`/careers?role=${job.id}#apply`} className="btn-primary mt-4 h-10 px-5 text-sm">
          Apply for this role
        </Link>
      </AccordionContent>
    </AccordionItem>
  );
}
