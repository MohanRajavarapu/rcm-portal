import { company } from "@/content/company";

export function ContactSidebar({ line }: { line: "rcm" | "staffing" }) {
  return (
    <div className="space-y-6">
      <p className="trust-chip inline-flex">{line === "rcm" ? "RCM inquiry" : "Staffing inquiry"}</p>
      <div>
        <h2 className="text-2xl">Direct</h2>
        <p className="mt-3 text-sm leading-6 text-fg-muted">
          <span className="eyebrow-label">Legal name</span>
          <br />
          {company.legalName}
        </p>
        <p className="mt-3 text-sm leading-6 text-fg-muted">
          <span className="eyebrow-label">Inbox</span>
          <br />
          <a className="link-quiet underline-offset-4 hover:underline" href={`mailto:${company.salesEmail}`}>
            {company.salesEmail}
          </a>
        </p>
        <p className="mt-3 text-sm leading-6 text-fg-muted">
          <span className="eyebrow-label">Hours</span>
          <br />
          {company.hours}
        </p>
      </div>
      <div className="surface-card p-5 text-sm leading-6 text-fg-muted">
        {line === "rcm"
          ? "Describe specialty, volume, and EHR. If the form rejects the message, remove PHI-like phrases and send again."
          : "Describe roles, headcount, and engagement model. Do not attach candidate SSNs or patient files."}
      </div>
    </div>
  );
}
