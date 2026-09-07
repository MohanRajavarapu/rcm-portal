"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { withBasePath } from "@/lib/base-path";
import { noPhiCopy } from "@/lib/phi";
import { staffingRoles } from "@/content/staffing";

export function TalentPoolForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      roleInterest: String(data.get("roleInterest") ?? ""),
      yearsExperience: String(data.get("yearsExperience") ?? ""),
      certifications: String(data.get("certifications") ?? ""),
      availability: String(data.get("availability") ?? ""),
      workAuthorization: String(data.get("workAuthorization") ?? ""),
      extra: String(data.get("extra") ?? ""),
      resumeName: resume instanceof File && resume.name ? resume.name : "",
    };
    const res = await fetch(withBasePath("/api/v1/careers/talent-pool"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = (await res.json()) as { error?: string };
    if (!res.ok) {
      setStatus("error");
      setError(json.error ?? "Could not join the talent pool.");
      return;
    }
    setStatus("ok");
    form.reset();
  }

  if (status === "ok") {
    return (
      <div className="surface-card">
        <p className="font-heading text-2xl text-fg">You are in the talent pool</p>
        <p className="mt-2 text-sm text-fg-muted">
          We will reach out if a role matches. SSN and date of birth are collected only after an offer,
          never on this form.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div role="alert" className="rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-fg">
        <strong className="text-warning">Zero PHI / no medical history.</strong> {noPhiCopy} Resume
        files should not contain patient work samples.
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="tp-name">Name</Label>
          <Input id="tp-name" name="name" required className="h-11" autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="tp-email">Email</Label>
          <Input id="tp-email" name="email" type="email" required className="h-11" autoComplete="email" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="tp-phone">Phone</Label>
          <Input id="tp-phone" name="phone" type="tel" required className="h-11" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="tp-role">Role interest</Label>
          <select
            id="tp-role"
            name="roleInterest"
            required
            className="h-11 w-full rounded-lg border border-[var(--border-default)] bg-surface-3 px-2.5 text-sm text-fg"
          >
            <option value="">Select</option>
            {staffingRoles.map((role) => (
              <option key={role.slug} value={role.name}>
                {role.name}
              </option>
            ))}
            <option value="Other RCM operations">Other RCM operations</option>
          </select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="tp-years">Years of experience</Label>
          <Input id="tp-years" name="yearsExperience" className="h-11" placeholder="e.g. 6" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="tp-avail">Availability</Label>
          <Input id="tp-avail" name="availability" className="h-11" placeholder="e.g. 2 weeks notice" />
        </div>
        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="tp-certs">Certifications</Label>
          <Input id="tp-certs" name="certifications" className="h-11" placeholder="CPC, CCS, none yet…" />
        </div>
        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="tp-auth">Work authorization status</Label>
          <select
            id="tp-auth"
            name="workAuthorization"
            required
            className="h-11 w-full rounded-lg border border-[var(--border-default)] bg-surface-3 px-2.5 text-sm text-fg"
          >
            <option value="">Select</option>
            <option value="Authorized to work in the US">Authorized to work in the US</option>
            <option value="Will require sponsorship">Will require sponsorship</option>
            <option value="Authorized to work in India for US-hours coverage">
              Authorized to work in India for US-hours coverage
            </option>
          </select>
        </div>
        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="tp-resume">Resume upload</Label>
          <Input id="tp-resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="h-11 py-2" />
          <p className="caption">Filename is stored. Do not upload documents that contain patient data.</p>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tp-extra">Additional notes</Label>
        <Textarea id="tp-extra" name="extra" rows={4} placeholder={noPhiCopy} />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button type="submit" disabled={status === "loading"} variant="outline" className="h-11 px-5">
        {status === "loading" ? "Sending…" : "Join talent pool"}
      </Button>
    </form>
  );
}
