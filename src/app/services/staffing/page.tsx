import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Staffing & Workforce Solutions",
  description: "Staffing now lives under Services.",
  path: "/what-we-do/staffing",
});

export default function Page() {
  return <LegacyRedirect to="/what-we-do/staffing" />;
}
