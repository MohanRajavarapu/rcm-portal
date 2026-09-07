import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Staffing",
  description: "Staffing now lives under What We Do.",
  path: "/what-we-do/staffing",
});

export default function StaffingRedirectPage() {
  return <LegacyRedirect to="/what-we-do/staffing" />;
}
