import { StaffingForm } from "@/components/forms/staffing-form";
import { ContactSidebar } from "@/components/forms/contact-sidebar";
import { PageHero } from "@/components/layout/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Request Staffing",
  description:
    "Request healthcare RCM staffing: staff augmentation, contract-to-hire, EOR, or direct hire. No PHI or SSN on this form.",
  path: "/contact/staffing",
});

export default function ContactStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="Staffing contact"
        title="Request Staffing"
        lede="Role, model, and volume. Candidate SSNs and patient data are out of scope on this website."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/what-we-do/staffing", label: "Staffing & Workforce" },
          { href: "/contact/staffing", label: "Request Staffing" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ContactSidebar line="staffing" />
        </div>
        <div className="lg:col-span-7">
          <StaffingForm />
        </div>
      </section>
    </>
  );
}
