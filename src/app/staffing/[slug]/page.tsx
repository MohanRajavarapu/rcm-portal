import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { engagementModels, getEngagementModel } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return engagementModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const model = getEngagementModel(slug);
  return pageMeta({
    title: model?.name ?? "Engagement model",
    description: model?.summary ?? "Moved under What We Do.",
    path: `/what-we-do/staffing/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <LegacyRedirect to={`/what-we-do/staffing/${slug}`} />;
}
