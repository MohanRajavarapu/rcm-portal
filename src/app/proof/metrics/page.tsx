import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Metrics",
  description: "Proof metrics now live at Our Work.",
  path: "/our-work",
});

export default function Page() {
  return <LegacyRedirect to="/our-work" />;
}
