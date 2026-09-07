import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "HIPAA & BAA",
  description: "HIPAA copy now lives on Trust & Security.",
  path: "/about/trust-security",
});

export default function Page() {
  return <LegacyRedirect to="/about/trust-security#hipaa" />;
}
