import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin, Globe } from "lucide-react";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description: `Who ${company.legalName} is and how we run US healthcare RCM.`,
};

const chips = [
  {
    icon: Mail,
    label: "Contact",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Mail,
    label: "Sales",
    value: company.salesEmail,
    href: `mailto:${company.salesEmail}`,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: company.phoneDisplay,
    href: `tel:${company.phoneTel}`,
  },
  {
    icon: Clock,
    label: "Coverage",
    value: company.hours,
  },
  {
    icon: MapPin,
    label: "Registered",
    value: company.region,
  },
  {
    icon: Globe,
    label: "Market",
    value: company.serving,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A private limited company built to run US revenue cycle with AI in the loop."
        lede={`${company.legalName} designs and operates eligibility, coding, claims, denials, A/R, and posting for United States providers. Delivery is from India. Accountability is documented, measured, and human.`}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-7 text-slate-200">
          <p>
            Healthcare billing fails in the seams: an eligibility miss, a modifier, a clearinghouse
            edit, a denial nobody categorized. We built 360VERTEXAI to own those seams as one
            operating system—not twelve vendors forwarding tickets.
          </p>
          <p>
            Applied AI sits in review: coverage anomalies, coding variance, likely rejects, denial
            clusters. Certified coders and RCM specialists still attest codes, write appeals, and
            speak to payers. That is how the work stays defensible in an audit.
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
                      <span className="block truncate text-sm text-slate-200">{chip.value}</span>
                    </span>
                  </>
                );
                return chip.href ? (
                  <a
                    key={chip.label}
                    href={chip.href}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#061d21]/50 px-3 py-2.5 transition-colors hover:border-emerald-400/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={chip.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#061d21]/50 px-3 py-2.5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
      <section className="border-t border-white/10 bg-navy/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
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
              <p className="mt-2 text-sm leading-6 text-slate-200">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
