import Link from "next/link";

export function StaffingCtaBand() {
  return (
    <section className="scroll-anchor section-alt border-t border-[var(--border-subtle)]">
      <div className="page-section flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow-label">Staffing inquiry</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Request Staffing</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-fg-muted">
            Role, model, and volume only. Do not send candidate SSNs, patient files, or PHI.
          </p>
        </div>
        <Link href="/contact/staffing" className="btn-secondary h-11 px-6 text-sm">
          Request Staffing
        </Link>
      </div>
    </section>
  );
}
