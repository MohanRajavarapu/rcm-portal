import { randomUUID } from "node:crypto";
import { company } from "@/content/company";
import { appendJsonRecord } from "@/server/store";

export type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  specialty?: string;
  interest?: string;
  message: string;
  source: "contact" | "assessment";
};

export type Lead = LeadInput & {
  id: string;
  createdAt: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phiHints =
  /\b(ssn|social security|mrn|date of birth|dob|patient name|icd-10|claim number|member id|subscriber)\b/i;

export function validateLead(input: Partial<LeadInput>): {
  ok: true;
  value: LeadInput;
} | { ok: false; error: string } {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";
  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!emailRe.test(email)) return { ok: false, error: "Please enter a valid work email." };
  if (message.length < 12) {
    return { ok: false, error: "Tell us a bit more about the practice or the problem." };
  }
  if (phiHints.test(message) || phiHints.test(name)) {
    return {
      ok: false,
      error:
        "Do not include patient identifiers, MRNs, claim numbers, or other PHI. Describe the practice only.",
    };
  }
  return {
    ok: true,
    value: {
      name,
      email,
      phone: input.phone?.trim() || undefined,
      organization: input.organization?.trim() || undefined,
      specialty: input.specialty?.trim() || undefined,
      interest: input.interest?.trim() || undefined,
      message,
      source: input.source === "assessment" ? "assessment" : "contact",
    },
  };
}

export async function createLead(input: LeadInput): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await appendJsonRecord("leads.json", lead);
  return lead;
}

export function leadAck(lead: Lead) {
  return {
    id: lead.id,
    receivedAt: lead.createdAt,
    nextStep: `We will reply from ${company.email}. Do not send PHI to this address until a BAA and secure channel are in place.`,
  };
}
