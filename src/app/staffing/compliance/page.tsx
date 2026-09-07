import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Staffing compliance",
  description: "Moved to Trust & Security.",
  path: "/about/trust-security",
});

export default function Page() {
  return <LegacyRedirect to="/about/trust-security#staffing-compliance" />;
}
