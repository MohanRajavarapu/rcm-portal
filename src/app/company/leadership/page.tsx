import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Leadership",
  description: "Leadership now lives under About.",
  path: "/about/leadership",
});

export default function Page() {
  return <LegacyRedirect to="/about/leadership" />;
}
