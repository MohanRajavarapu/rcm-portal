import { randomUUID } from "node:crypto";
import { appendJsonRecord } from "@/server/store";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(emailRaw: string) {
  const email = emailRaw.trim().toLowerCase();
  if (!emailRe.test(email)) {
    return { ok: false as const, error: "Please enter a valid email." };
  }
  await appendJsonRecord("newsletter.json", {
    id: randomUUID(),
    email,
    createdAt: new Date().toISOString(),
  });
  return { ok: true as const };
}
