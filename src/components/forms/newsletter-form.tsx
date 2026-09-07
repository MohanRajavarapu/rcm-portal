"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { withBasePath } from "@/lib/base-path";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const res = await fetch(withBasePath("/api/v1/newsletter"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = (await res.json()) as { error?: string };
    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Could not subscribe.");
      return;
    }
    setStatus("ok");
    setEmail("");
  }

  if (status === "ok") {
    return <p className="text-sm text-fg">You are on the list. No PHI, ever, in this inbox.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        className="h-10"
        aria-label="Email for operations notes"
      />
      <Button type="submit" disabled={status === "loading"} className="h-10 px-4">
        {status === "loading" ? "Sending…" : "Subscribe"}
      </Button>
      {error ? <p className="text-sm text-destructive sm:col-span-2">{error}</p> : null}
    </form>
  );
}
