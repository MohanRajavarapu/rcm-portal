"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { cn } from "@/lib/utils";

const fieldClass = "h-11";

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  specialty: string;
  interest: string;
  message: string;
};

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  specialty: "",
  interest: "",
  message: "",
};

export function LeadForm({ source = "contact" }: { source?: "contact" | "assessment" }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const res = await fetch("/api/v1/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source }),
    });
    const data = (await res.json()) as { error?: string; id?: string; nextStep?: string };
    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Could not send the request.");
      return;
    }
    setId(data.id ?? "");
    setStatus("ok");
    setStep(1);
    setForm(initial);
  }

  if (status === "ok") {
    return (
      <div className="glass-panel rounded-xl p-6">
        <p className="font-heading text-2xl">Request received</p>
        <p className="mt-2 text-sm leading-relaxed text-[#d1d5db]">
          Reference {id}. We will reply from our operations inbox. Do not send patient identifiers,
          claim files, or EHR exports until a BAA and a secure channel are in place.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div
        role="alert"
        className="rounded-lg border border-amber-500/40 bg-amber-950/40 px-4 py-3 text-sm leading-relaxed text-[#e0e0e0]"
      >
        <strong className="font-semibold text-amber-300">No PHI on this form.</strong> Tell us the
        practice, specialty, volume, and EHR only. Never include patient names, MRNs, dates of birth,
        member IDs, or claim numbers.
      </div>

      <div className="flex gap-2" aria-label="Form progress">
        {[1, 2, 3].map((n) => (
          <span key={n} className={cn("h-1 flex-1 rounded-full", step >= n ? "bg-mint" : "bg-white/10")} />
        ))}
      </div>

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5 sm:col-span-2">
            <p className="text-sm font-medium text-[#e0e0e0]">Step 1 — Who should we reply to?</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={fieldClass}
              autoComplete="name"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={fieldClass}
              autoComplete="email"
            />
          </div>
          <div className="sm:col-span-2">
            <Button
              type="button"
              className="btn-primary h-11 px-5"
              onClick={() => form.name && form.email && setStep(2)}
            >
              Continue
            </Button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5 sm:col-span-2">
            <p className="text-sm font-medium text-[#e0e0e0]">Step 2 — Practice context (optional fields welcome)</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="phone">Mobile</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={fieldClass}
              autoComplete="tel"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="organization">Practice or group</Label>
            <Input
              id="organization"
              value={form.organization}
              onChange={(e) => update("organization", e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="specialty">Specialty</Label>
            <select
              id="specialty"
              value={form.specialty}
              onChange={(e) => update("specialty", e.target.value)}
              className="h-11 w-full rounded-lg border border-input bg-[#181a20] px-2.5 text-sm text-[#e0e0e0]"
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
              value={form.interest}
              onChange={(e) => update("interest", e.target.value)}
              className="h-11 w-full rounded-lg border border-input bg-[#181a20] px-2.5 text-sm text-[#e0e0e0]"
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
          <div className="flex flex-wrap gap-2 sm:col-span-2">
            <Button type="button" variant="outline" className="h-11 px-5" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="button" className="btn-primary h-11 px-5" onClick={() => setStep(3)}>
              Continue
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <p className="text-sm font-medium text-[#e0e0e0]">Step 3 — What is stuck in the cycle?</p>
            <Label htmlFor="message">Brief summary</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Example: cardiology group, ~4,000 encounters/month, Athena, denial mix heavy on medical necessity. No patient data."
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" className="h-11 px-5" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="submit" disabled={status === "loading"} className="btn-primary h-11 px-5">
              {status === "loading" ? "Sending…" : "Request a conversation"}
            </Button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
