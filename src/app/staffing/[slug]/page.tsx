import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { ProcessLoop } from "@/components/layout/process-loop";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { engagementModels, getEngagementModel } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return engagementModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const model = getEngagementModel(slug);
  if (!model) return {};
  const titles: Record<string, string> = {
    "staff-augmentation": "Medical coder contract staffing & RCM staff augmentation",
    "contract-to-hire": "Healthcare RCM contract-to-hire staffing",
    eor: "Healthcare RCM employer of record and 3rd-party payroll",
    "direct-hire": "Healthcare RCM direct hire recruiting",
  };
  return pageMeta({
    title: titles[model.slug] ?? model.name,
    description: model.summary,
    path: `/staffing/${model.slug}`,
  });
}

export default async function EngagementModelPage({ params }: Props) {
  const { slug } = await params;
  const model = getEngagementModel(slug);
  if (!model) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Staffing · ${model.name}`}
        title={model.headline}
        lede={model.summary}
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/engagement-models", label: "Engagement models" },
          { href: `/staffing/${model.slug}`, label: model.name },
        ]}
      />
      <section className="page-section grid gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ProcessLoop eyebrow="How it works" steps={model.steps} />
        </div>
        <aside className="lg:col-span-5 space-y-4">
          <div className="surface-card p-5">
            <p className="eyebrow-label">Legal employer of record</p>
            <p className="mt-2 text-sm leading-6 text-fg">{model.employer}</p>
          </div>
          <div className="surface-card p-5">
            <p className="eyebrow-label">Compliance note</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{model.compliance}</p>
          </div>
        </aside>
      </section>
      <StaffingCtaBand />
    </>
  );
}
