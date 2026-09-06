import type { Metadata } from "next";
import { Brain, ShieldCheck, Workflow, Mail, Phone, Clock, MapPin, Globe } from "lucide-react";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description: `Who ${company.legalName} is and how we run US healthcare RCM.`,
};

const pillars = [
  {
    icon: Brain,
    title: "Applied AI",
    body: "Models flag eligibility gaps, coding variance, and likely denials—never attested codes on their own.",
  },
  {
    icon: ShieldCheck,
    title: "Human accountability",
    body: "Certified coders and RCM specialists attest every production decision and payer contact.",
  },
  {
    icon: Workflow,
    title: "Seamless integration",
    body: "We operate inside your EHR and clearinghouse stack with queues configured by specialty.",
  },
];

const chips = [
  { icon: Mail, label: "Contact", value: company.email, href: `mailto:${company.email}` },
  { icon: Mail, label: "Sales", value: company.salesEmail, href: `mailto:${company.salesEmail}` },
  { icon: Phone, label: "Mobile", value: company.phoneDisplay, href: `tel:${company.phoneTel}` },
  { icon: Clock, label: "Coverage", value: company.hours },
  { icon: MapPin, label: "Registered", value: company.region },
  { icon: Globe, label: "Market", value: company.serving },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A private limited company built to run US revenue cycle with AI in the loop."
        lede={`${company.legalName} designs and operates eligibility, coding, claims, denials, A/R, and posting for United States providers.`}
      />
      <section className="page-section grid gap-6 py-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="glass-panel interactive-card rounded-xl p-5">
            <span className="grid size-10 place-items-center rounded-lg bg-mint/15 text-mint">
              <pillar.icon className="size-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-xl">{pillar.title}</h2>
            <p className="mt-2 text-sm leading-[1.6] text-[#d1d5db]">{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="border-t border-white/10">
        <div className="page-section grid gap-8 py-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-[1.6] text-[#e0e0e0]">
            <p>
              Healthcare billing fails in the seams: an eligibility miss, a modifier, a clearinghouse
              edit, a denial nobody categorized. We built 360VERTEXAI to own those seams as one
              operating system—not twelve vendors forwarding tickets.
            </p>
            <p>
              We do not publish fictional client logos or invented collection rates. If we engage, you
              will see your own inventory, your own denial mix, and a weekly pack your CFO can read.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="glass-panel rounded-xl p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">Legal entity</p>
              <p className="mt-2 font-heading text-xl">{company.legalName}</p>
              <div className="mt-4 grid gap-2">
                {chips.map((chip) => {
                  const Icon = chip.icon;
                  const inner = (
                    <>
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-mint/15 text-mint">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-mint uppercase">
                          {chip.label}
                        </span>
                        <span className="block truncate text-sm text-[#e0e0e0]">{chip.value}</span>
                      </span>
                    </>
                  );
                  return chip.href ? (
                    <a
                      key={chip.label}
                      href={chip.href}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0c10]/60 px-3 py-2.5 transition-colors hover:border-cyan/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={chip.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0c10]/60 px-3 py-2.5"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#121212]/60">
        <div className="page-section grid gap-4 py-8 sm:grid-cols-3">
          {[
            {
              t: "Mission",
              d: "Return earned clinical revenue to the practice with fewer preventable denials and a cycle leadership can see.",
            },
            {
              t: "Vision",
              d: "RCM operations where models never outrun documentation, and every dollar has a named owner.",
            },
            {
              t: "Values",
              d: "No PHI on public channels. No vanity metrics. No code without an attester. Weekly truth over quarterly theater.",
            },
          ].map((item) => (
            <div key={item.t} className="glass-panel rounded-xl p-5">
              <h2 className="text-2xl">{item.t}</h2>
              <p className="mt-2 text-sm leading-[1.6] text-[#d1d5db]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
