import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { ProcessLoop } from "@/components/layout/process-loop";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { podFacts } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Dedicated RCM staffing pods",
  description:
    "Pre-assembled healthcare RCM pods: lead, operators, and QA/AI reviewer. India production with US EST/PST overlap. Data-residency rules if PHI is in scope.",
  path: "/staffing/pods",
});

const steps = [
  { n: "01", title: "Queue scope", body: "Volume, specialty, systems, and whether anyone will see claims or EHR data." },
  { n: "02", title: "Seat the pod", body: "Named lead, operators, and a QA / AI reviewer. Not a bench of anonymous hours." },
  { n: "03", title: "Overlap hours", body: "Coverage mapped to US Eastern and Pacific business hours before go-live." },
  { n: "04", title: "Access only if needed", body: "If the pod can touch PHI-adjacent data, access waits on your BAA and the data-residency disclosure." },
];

export default function PodsPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing · dedicated pods"
        title="A cross-functional team, not a pile of contractors."
        lede={podFacts.composition}
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/pods", label: "Dedicated pods" },
        ]}
      />
      <section className="page-section grid gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          <ProcessLoop eyebrow="How a pod starts" steps={steps} />
        </div>
        <aside className="lg:col-span-5 space-y-4">
          <div className="surface-card p-5">
            <p className="eyebrow-label">Where the work is performed</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{podFacts.locations}</p>
          </div>
          <div className="surface-card p-5">
            <p className="eyebrow-label">Time zone coverage</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{podFacts.hours}</p>
          </div>
          <div className="surface-card p-5">
            <p className="eyebrow-label">PHI-adjacent roles</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">
              Coders, billers, and some QA reviewers may see claims or EHR data once you provision access.
              That is not automatic with a staffing SOW. Read the data-residency disclosure before any
              production login.
            </p>
            <Link href="/trust#data-residency" className="link-quiet mt-3 inline-flex text-sm underline-offset-4 hover:underline">
              Trust & Security · data residency
            </Link>
          </div>
        </aside>
      </section>
      <StaffingCtaBand />
    </>
  );
}
