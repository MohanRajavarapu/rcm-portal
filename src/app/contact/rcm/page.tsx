import { LeadForm } from "@/components/forms/lead-form";
import { ContactSidebar } from "@/components/forms/contact-sidebar";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Talk to an Expert",
  description:
    "Request a US healthcare RCM revenue assessment. Practice metadata only — no PHI on this form.",
  path: "/contact/rcm",
});

export default function ContactRcmPage() {
  return (
    <>
      <PageHero
        eyebrow="RCM contact"
        title="Talk to an Expert"
        lede="Tell us the practice, specialty, volume, and EHR. We execute a BAA before any PHI or system access."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "For Healthcare Providers" },
          { href: "/contact/rcm", label: "Talk to an Expert" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ContactSidebar line="rcm" />
        </div>
        <div className="lg:col-span-7">
          <LeadForm source="assessment" />
        </div>
      </section>
    </>
  );
}
