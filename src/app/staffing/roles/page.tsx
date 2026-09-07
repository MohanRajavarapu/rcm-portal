import { LegacyRedirect } from "@/components/layout/legacy-redirect";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Roles we staff",
  description: "Moved under What We Do · Staffing.",
  path: "/what-we-do/staffing",
});

export default function Page() {
  return <LegacyRedirect to="/what-we-do/staffing#roles" />;
}
