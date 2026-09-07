import { randomUUID } from "node:crypto";
import { getJob, jobs, type Job } from "@/content/jobs";
import { containsRestrictedCandidateText } from "@/lib/phi";
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
  if (containsRestrictedCandidateText(`${note} ${name}`)) {
    return {
      ok: false,
      error: "Do not include patient information, SSN, date of birth, or personal health details.",
    };
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

export type TalentPoolInput = {
  name: string;
  email: string;
  phone: string;
  roleInterest: string;
  yearsExperience: string;
  certifications: string;
  availability: string;
  workAuthorization: string;
  resumeName?: string;
};

export async function submitTalentPool(input: TalentPoolInput) {
  const record = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await appendJsonRecord("talent-pool.json", record);
  return record;
}

export function validateTalentPool(input: Partial<TalentPoolInput> & { extra?: string }):
  | { ok: true; value: TalentPoolInput }
  | { ok: false; error: string } {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const roleInterest = input.roleInterest?.trim() ?? "";
  const yearsExperience = input.yearsExperience?.trim() ?? "";
  const certifications = input.certifications?.trim() ?? "";
  const availability = input.availability?.trim() ?? "";
  const workAuthorization = input.workAuthorization?.trim() ?? "";
  const extra = input.extra?.trim() ?? "";
  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!emailRe.test(email)) return { ok: false, error: "Please enter a valid email." };
  if (phone.length < 7) return { ok: false, error: "Please enter a phone number." };
  if (!roleInterest) return { ok: false, error: "Select a role interest." };
  if (!workAuthorization) return { ok: false, error: "Select work authorization status." };
  const blob = [name, certifications, extra, roleInterest].join(" ");
  if (containsRestrictedCandidateText(blob)) {
    return {
      ok: false,
      error: "Do not include patient information, SSN, date of birth, or personal health details.",
    };
  }
  return {
    ok: true,
    value: {
      name,
      email,
      phone,
      roleInterest,
      yearsExperience,
      certifications,
      availability,
      workAuthorization,
      resumeName: input.resumeName?.trim() || undefined,
    },
  };
}

