"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { withBasePath } from "@/lib/base-path";
import { noPhiCopy } from "@/lib/phi";
import { engagementModels, staffingRoles } from "@/content/staffing";

export function StaffingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      organization: String(form.get("organization") ?? ""),
      specialty: String(form.get("model") ?? ""),
      interest: String(form.get("role") ?? ""),
      message: String(form.get("message") ?? ""),
      source: "staffing" as const,
    };
    const res = await fetch(withBasePath("/api/v1/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { error?: string; id?: string };
    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Could not send the request.");
      return;
    }
    setId(data.id ?? "");
    setStatus("ok");
    event.currentTarget.reset();
  }

  if (status === "ok") {
    return (
      <div className="surface-card">
        <p className="font-heading text-2xl text-fg">Staffing request received</p>
        <p className="mt-2 text-sm text-fg-muted">
          Reference {id}. We will reply from the staffing desk. Do not send SSNs, background-check
          files, or patient data on this channel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div role="alert" className="rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-fg">
        <strong className="text-warning">Staffing intake — no PHI, no SSN.</strong> {noPhiCopy}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required className="h-11" autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required className="h-11" autoComplete="email" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Mobile</Label>
          <Input id="phone" name="phone" type="tel" className="h-11" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" name="organization" className="h-11" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="model">Engagement model</Label>
          <select
            id="model"
            name="model"
            className="h-11 w-full rounded-lg border border-[var(--border-default)] bg-surface-3 px-2.5 text-sm text-fg"
          >
            <option value="">Not sure yet</option>
            {engagementModels.map((model) => (
              <option key={model.slug} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="role">Role to fill</Label>
          <select
            id="role"
            name="role"
            className="h-11 w-full rounded-lg border border-[var(--border-default)] bg-surface-3 px-2.5 text-sm text-fg"
          >
            <option value="">Select</option>
            {staffingRoles.map((role) => (
              <option key={role.slug} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">What do you need to staff?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={`Headcount, specialty, systems, start date. ${noPhiCopy}`}
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button type="submit" disabled={status === "loading"} variant="outline" className="h-11 px-5">
        {status === "loading" ? "Sending…" : "Request Staffing"}
      </Button>
    </form>
  );
}
