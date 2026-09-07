import { LeadForm } from "@/components/forms/lead-form";
import { ContactSidebar } from "@/components/forms/contact-sidebar";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "General inquiry",
  description: "Contact 360VertexAI about a topic that is not an RCM operations or staffing request. No PHI on this form.",
  path: "/contact/general",
});

export default function ContactGeneralPage() {
  return (
    <>
      <PageHero
        eyebrow="General contact"
        title="Something else"
        lede="Partnerships, press, or a question that does not fit RCM or staffing. Do not send patient data."
        crumbs={[
          { href: "/contact", label: "Contact Us" },
          { href: "/contact/general", label: "Something else" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ContactSidebar line="rcm" />
        </div>
        <div className="lg:col-span-7">
          <LeadForm source="general" />
        </div>
      </section>
    </>
  );
}
