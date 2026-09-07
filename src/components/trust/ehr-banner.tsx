function Mark({
  width,
  label,
  ariaLabel,
}: {
  width: number;
  label: string;
  ariaLabel: string;
}) {
  return (
    <svg viewBox={`0 0 ${width} 32`} className="h-8 w-auto" aria-label={ariaLabel}>
      <rect width={width} height="32" rx="6" fill="var(--surface-2)" stroke="var(--border-subtle)" />
      <text
        x={width / 2}
        y="21"
        textAnchor="middle"
        fill="var(--text-primary)"
        fontSize="11"
        fontWeight="650"
        fontFamily="system-ui,sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

const marks = [
  { width: 120, label: "Epic", ariaLabel: "Epic" },
  { width: 160, label: "athenahealth", ariaLabel: "Athenahealth" },
  { width: 120, label: "Cerner", ariaLabel: "Cerner" },
  { width: 180, label: "eClinicalWorks", ariaLabel: "eClinicalWorks" },
  { width: 130, label: "NextGen", ariaLabel: "NextGen" },
  { width: 100, label: "Kareo", ariaLabel: "Kareo" },
];

export function EhrBanner() {
  return (
    <section className="section-alt border-b border-[var(--border-subtle)]" aria-label="Compatible EHR systems">
      <div className="page-section py-8">
        <p className="eyebrow-label text-center">EHR integration</p>
        <p className="mt-2 text-center text-sm text-fg-muted">
          We operate inside the practice-management stack you already run.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {marks.map((mark) => (
            <li key={mark.label}>
              <Mark {...mark} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
