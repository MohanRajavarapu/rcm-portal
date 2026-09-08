import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RCM & AI Operations",
  description: "RCM services now live under Services.",
  path: "/what-we-do/rcm",
});

export default function Page() {
  return <LegacyRedirect to="/what-we-do/rcm" />;
}
