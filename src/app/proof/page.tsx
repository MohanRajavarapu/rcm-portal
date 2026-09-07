import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Work",
  description: "Proof now lives at Our Work.",
  path: "/our-work",
});

export default function Page() {
  return <LegacyRedirect to="/our-work" />;
}
