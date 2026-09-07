import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { getService, services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  return pageMeta({
    title: service?.name ?? "Service",
    description: service?.summary ?? "Moved under What We Do.",
    path: `/what-we-do/rcm/${slug}`,
  });
}

export default async function ServiceRedirectPage({ params }: Props) {
  const { slug } = await params;
  return <LegacyRedirect to={`/what-we-do/rcm/${slug}`} />;
}
