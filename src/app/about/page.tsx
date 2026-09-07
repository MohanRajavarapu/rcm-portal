import Link from "next/link";
import { Brain, ShieldCheck, Workflow, Mail, Phone, Clock, MapPin, Globe } from "lucide-react";
import { WhoWeAreLeadership } from "@/components/about/who-we-are-leadership";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us",
  description: `Who ${company.legalName} is and how we run US healthcare RCM.`,
  path: "/about",
});

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
        eyebrow="About Us"
        title="A private limited company built to run US revenue cycle with AI in the loop."
        lede={`${company.legalName} designs and operates eligibility, coding, claims, denials, A/R, and posting for United States providers.`}
        crumbs={[
          { href: "/about", label: "Company" },
          { href: "/about", label: "About Us" },
        ]}
      />
      <section className="page-section grid gap-6 py-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
            <article key={pillar.title} className="surface-card p-5">
            <span className="grid size-10 place-items-center rounded-lg bg-trust/10 text-trust">
              <pillar.icon className="size-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-xl">{pillar.title}</h2>
            <p className="mt-2 text-sm leading-[1.6] text-fg-muted">{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="border-t border-[var(--border-subtle)]">
        <div className="page-section grid gap-8 py-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-[1.6] text-fg-muted">
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
            <div className="surface-card p-5">
              <p className="eyebrow-label">Legal entity</p>
              <p className="mt-2 font-heading text-xl">{company.legalName}</p>
              <div className="mt-4 grid gap-2">
                {chips.map((chip) => {
                  const Icon = chip.icon;
                  const inner = (
                    <>
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-3 text-trust">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="eyebrow-label block text-[0.65rem]">
                          {chip.label}
                        </span>
                        <span className="block truncate text-sm text-fg">{chip.value}</span>
                      </span>
                    </>
                  );
                  return chip.href ? (
                    <a
                      key={chip.label}
                      href={chip.href}
                      className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-surface-0 px-3 py-2.5 hover:bg-surface-3"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={chip.label}
                      className="flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-surface-0 px-3 py-2.5"
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

      <WhoWeAreLeadership />
      <CtaBand />
    </>
  );
}
