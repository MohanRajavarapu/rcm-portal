import { randomUUID } from "node:crypto";
import { getJob, jobs, type Job } from "@/content/jobs";
import { appendJsonRecord } from "@/server/store";

export type ApplicationInput = {
  jobId: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  note: string;
};

export type Application = ApplicationInput & {
  id: string;
  jobTitle: string;
  createdAt: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function listJobs(): Job[] {
  return jobs;
}

export function validateApplication(input: Partial<ApplicationInput>): {
  ok: true;
  value: ApplicationInput;
  job: Job;
} | { ok: false; error: string } {
  const job = input.jobId ? getJob(input.jobId) : undefined;
  if (!job) return { ok: false, error: "That role is no longer listed." };
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const note = input.note?.trim() ?? "";
  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!emailRe.test(email)) return { ok: false, error: "Please enter a valid email." };
  if (note.length < 20) {
    return { ok: false, error: "Share a short note on relevant US RCM or coding experience." };
  }
  return {
    ok: true,
    job,
    value: {
      jobId: job.id,
      name,
      email,
      phone: input.phone?.trim() || undefined,
      location: input.location?.trim() || undefined,
      linkedin: input.linkedin?.trim() || undefined,
      note,
    },
  };
}

export async function submitApplication(input: ApplicationInput, job: Job): Promise<Application> {
  const application: Application = {
    ...input,
    jobTitle: job.title,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await appendJsonRecord("applications.json", application);
  return application;
}
