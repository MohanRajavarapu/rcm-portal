import { Suspense } from "react";
import { CareersContentWrapper } from "@/components/careers/careers-content-wrapper";
import { PageHero } from "@/components/layout/page-hero";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers",
  description: `Open roles and talent-pool registration at ${company.legalName}. No PHI or medical history on application forms.`,
  path: "/careers",
});

export const dynamic = "force-static";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the operating team — or the talent pool."
        lede="This is independent of Company pages. Two paths: apply to a listed role, or register for future seats. No SSN, date of birth, or medical history on either form."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/careers", label: "Careers" },
        ]}
      />
      <Suspense fallback={<div className="page-section py-8 text-sm text-fg-muted">Loading careers…</div>}>
        <CareersContentWrapper />
      </Suspense>
    </>
  );
}
