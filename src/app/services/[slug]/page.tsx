import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CtaBand, PageHero } from "@/components/layout/page-hero";
import { getService, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
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
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.name },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-7 text-slate-200">
          <div className="grid gap-3 sm:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-card p-4">
                <p className="text-xl font-semibold text-mint">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
          {service.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-slate-200">{service.outcome}</p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border border-white/10 bg-card p-5">
            <Badge variant="secondary">{service.cycle}</Badge>
            <h2 className="mt-3 text-xl">What we run</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
              {service.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
