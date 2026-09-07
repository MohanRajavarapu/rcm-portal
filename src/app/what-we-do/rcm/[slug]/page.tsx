import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { getService, services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.name,
    description: service.summary,
    path: `/what-we-do/rcm/${service.slug}`,
  });
}

export default async function RcmServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        compact
        eyebrow={`${service.cycle}-cycle`}
        title={service.name}
        lede={service.summary}
        crumbs={[
          { href: "/what-we-do", label: "Services" },
          { href: "/what-we-do/rcm", label: "RCM & AI Operations" },
          { href: `/what-we-do/rcm/${service.slug}`, label: service.name },
        ]}
      />
      <section className="page-section grid gap-6 py-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-[1.6] text-fg-muted">
          <div className="grid gap-3 sm:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-4">
                <p className="stat-number text-xl">{stat.value}</p>
                <p className="caption mt-1 leading-[1.6]">{stat.label}</p>
              </div>
            ))}
          </div>
          {service.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{service.outcome}</p>
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
          <div className="surface-card p-5">
            <Badge variant="secondary">{service.cycle}</Badge>
            <h2 className="mt-3 text-xl">What we run</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-[1.6] text-fg-muted">
              {service.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <CtaBand
        href="/contact/rcm"
        eyebrow="RCM inquiry"
        lede="Practice, specialty, volume, and EHR only. BAA before PHI or system access."
      />
    </>
  );
}
