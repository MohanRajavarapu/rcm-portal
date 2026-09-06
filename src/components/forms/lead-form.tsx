"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";

const fieldClass = "h-11";

export function LeadForm({ source = "contact" }: { source?: "contact" | "assessment" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/v1/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source }),
    });
    const data = (await res.json()) as { error?: string; id?: string; nextStep?: string };
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
      <div className="glass-panel rounded-xl p-6">
        <p className="font-heading text-2xl">Request received</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Reference {id}. We will reply from our operations inbox. Do not send patient identifiers,
          claim files, or EHR exports until a BAA and a secure channel are in place.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="rounded-lg border border-vertex/40 bg-accent/50 px-3 py-2 text-xs leading-5 text-foreground/80">
        Practice and billing operations only. Never include patient names, MRNs, dates of birth, member
        IDs, or claim numbers.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required className={fieldClass} autoComplete="email" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Mobile</Label>
          <Input id="phone" name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="organization">Practice or group</Label>
          <Input id="organization" name="organization" className={fieldClass} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="specialty">Specialty</Label>
          <select
            id="specialty"
            name="specialty"
            className="h-11 w-full rounded-lg border border-input bg-[#0f282d] px-2.5 text-sm text-slate-200"
            defaultValue=""
          >
            <option value="">Select</option>
            {specialties.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="interest">Where should we start?</Label>
          <select
            id="interest"
            name="interest"
            className="h-11 w-full rounded-lg border border-input bg-[#0f282d] px-2.5 text-sm text-slate-200"
            defaultValue=""
          >
            <option value="">Select</option>
            <option value="Full-cycle RCM">Full-cycle RCM</option>
            {services.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">What is stuck in the cycle?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Example: cardiology group, ~4,000 encounters/month, Athena, denial mix heavy on medical necessity. No patient data."
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button type="submit" disabled={status === "loading"} className="h-11 px-5">
        {status === "loading" ? "Sending…" : "Request a conversation"}
      </Button>
    </form>
  );
}
