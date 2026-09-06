"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Job } from "@/content/jobs";
import { withBasePath } from "@/lib/base-path";

export function ApplyForm({ jobs, defaultJobId }: { jobs: Job[]; defaultJobId?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch(withBasePath("/api/v1/careers/apply"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { error?: string };
    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Could not submit the application.");
      return;
    }
    setStatus("ok");
    event.currentTarget.reset();
  }

  if (status === "ok") {
    return (
      <div className="glass-panel rounded-xl p-6">
        <p className="font-heading text-2xl">Application received</p>
        <p className="mt-2 text-sm text-muted-foreground">
          If the role is a match, we will write to the email you provided. Do not attach patient work
          samples that contain PHI.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative z-20 grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="jobId">Role</Label>
        <select
          id="jobId"
          name="jobId"
          required
          defaultValue={defaultJobId ?? jobs[0]?.id}
          className="relative z-20 h-11 w-full rounded-lg border border-input bg-[#0f282d] px-2.5 text-sm text-slate-200"
        >
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required className="h-11" autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="h-11" autoComplete="email" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Mobile</Label>
          <Input id="phone" name="phone" type="tel" className="h-11" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="location">City / region</Label>
          <Input id="location" name="location" className="h-11" />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="linkedin">LinkedIn or portfolio URL</Label>
        <Input id="linkedin" name="linkedin" type="url" className="h-11" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="note">Relevant experience</Label>
        <Textarea
          id="note"
          name="note"
          required
          rows={5}
          placeholder="US RCM systems, specialties, coding credentials, denial or A/R inventory sizes you have owned."
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button type="submit" disabled={status === "loading"} className="h-11 px-5">
        {status === "loading" ? "Sending…" : "Submit application"}
      </Button>
    </form>
  );
}
