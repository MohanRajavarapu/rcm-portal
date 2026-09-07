import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trust & Security",
  description: "Trust & Security now lives under About.",
  path: "/about/trust-security",
});

export default function Page() {
  return <LegacyRedirect to="/about/trust-security" />;
}
