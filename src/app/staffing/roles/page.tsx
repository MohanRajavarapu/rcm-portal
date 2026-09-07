import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { StaffingCtaBand } from "@/components/staffing/staffing-cta-band";
import { staffingRoles } from "@/content/staffing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Medical coder and RCM roles we staff",
  description:
    "Healthcare RCM staffing for medical coders (CPC), billing operations, RCM analysts, RCM leads, and AI/automation reviewers.",
  path: "/staffing/roles",
});

export default function RolesPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing · roles"
        title="The seats we fill for US revenue cycle teams."
        lede="Certifications, engagement models, and a staffing request — not an RCM outsourcing pitch."
        crumbs={[
          { href: "/staffing", label: "Staffing" },
          { href: "/staffing/roles", label: "Roles we staff" },
        ]}
      />
      <section className="page-section space-y-4 py-10">
        {staffingRoles.map((role) => (
          <article key={role.slug} className="surface-card p-6">
            <h2 className="text-2xl">{role.name}</h2>
            <p className="mt-3 text-sm leading-6 text-fg-muted">
              <span className="eyebrow-label">Typical certifications</span>
              <br />
              {role.certifications}
            </p>
            <p className="mt-3 text-sm leading-6 text-fg-muted">
              <span className="eyebrow-label">Engagement models</span>
              <br />
              {role.models}
            </p>
            <Link href="/contact/staffing" className="btn-secondary mt-5 h-10 px-5 text-sm">
              Request Staffing
            </Link>
          </article>
        ))}
      </section>
      <StaffingCtaBand />
    </>
  );
}
