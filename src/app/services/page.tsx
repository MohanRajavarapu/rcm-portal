import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RCM services",
  description: "This catalog now lives under Services.",
  path: "/what-we-do/rcm",
});

export default function ServicesRedirectPage() {
  return <LegacyRedirect to="/what-we-do/rcm" />;
}
