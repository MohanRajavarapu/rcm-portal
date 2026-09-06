import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { Shield, Ban, Eye, Server, ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Enterprise HIPAA security, a zero-PHI public web plane, and human-in-the-loop AI guardrails for US healthcare RCM.",
};

const pillars = [
  {
    icon: Server,
    title: "Enterprise HIPAA security",
    body: "Production RCM runs in a BAA-covered plane: access control, encryption in transit and at rest, audit logs, and least-privilege EHR/clearinghouse credentials. Workforce training and incident response are part of the operating model—not a slide.",
  },
  {
    icon: Shield,
    title: "Zero-PHI web architecture",
    body: "This public website is a marketing and intake surface only. Forms accept practice metadata (specialty, volume, EHR). Common identifier language is rejected. Claim files, charts, and patient lists never land here.",
  },
  {
    icon: Eye,
    title: "Human-in-the-loop AI",
    body: "Models score risk and cluster work. Certified coders and billers attest codes, appeals, and payer contact. The system is designed so automation cannot silently change production claims.",
  },
];

const aiDoes = [
  "Flag eligibility, COB, and coverage inconsistencies for a human queue.",
  "Surface coding variance and documentation gaps for coder review.",
  "Predict likely clearinghouse or payer edits before an 837 leaves.",
  "Cluster denials so prevention work is not anecdotal.",
  "Prioritize aged A/R by recoverability—not just dollars sitting.",
];

const aiNever = [
  "Auto-submit a claim into a live payer or clearinghouse.",
  "Auto-write or auto-post an appeal without operator attestation.",
  "Invent diagnosis or procedure codes from incomplete notes.",
  "Accept PHI through public web forms or marketing inboxes.",
  "Share a database between this website and the production RCM plane.",
];

const architecture = [
  "Public web form",
  "BAA production plane",
  "Certified coder attestation",
  "Clearinghouse submission",
];

const heroBadges = ["HIPAA Compliant", "SOC 2 Type II", "ISO 27001"];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Security first. Models second. Humans on the claim."
        lede="Enterprise HIPAA controls, a public site that never holds patient data, and AI that cannot move money without a named attester."
      >
        <ul className="mt-5 flex flex-wrap gap-2">
          {heroBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-mint/45 bg-mint/20 px-3 py-1 text-xs font-semibold tracking-wide text-mint uppercase"
            >
              {badge}
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-panel rounded-xl p-6">
              <span className="grid size-10 place-items-center rounded-lg bg-mint/15 text-mint">
                <pillar.icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-xl">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-200">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-card p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">System architecture</p>
          <h2 className="mt-2 text-2xl">How work moves after the public form</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-4">
            {architecture.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <div className="flex-1 rounded-xl border border-white/10 bg-[#061d21] p-4">
                  <p className="text-xs font-semibold text-mint">0{index + 1}</p>
                  <p className="mt-2 text-sm font-medium text-slate-200">{step}</p>
                </div>
                {index < architecture.length - 1 ? (
                  <ArrowRight className="mt-6 hidden size-4 shrink-0 text-mint md:block" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-mint/30 bg-mint/8 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">What AI does</p>
            <h2 className="mt-2 text-2xl">Review, score, and queue</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {aiDoes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-500/45 bg-amber-950/35 p-6 sm:p-8">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
              <ShieldAlert className="size-3.5" aria-hidden />
              What AI never does without human attestation
            </p>
            <h2 className="mt-2 text-2xl">No silent production writes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {aiNever.map((item) => (
                <li key={item} className="flex gap-3">
                  <Ban className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
