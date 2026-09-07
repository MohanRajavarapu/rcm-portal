export function ProcessLoop({
  eyebrow,
  steps,
}: {
  eyebrow: string;
  steps: readonly { n: string; title: string; body: string }[];
}) {
  return (
    <div className="surface-card bg-surface-2 p-5">
      <p className="eyebrow-label">{eyebrow}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step) => (
          <li
            key={step.n}
            className="flex gap-3 border-b border-[var(--border-subtle)] pb-3 last:border-0 last:pb-0"
          >
            <span className="font-heading text-sm font-semibold text-fg-subtle">{step.n}</span>
            <div>
              <p className="text-sm font-medium text-fg">{step.title}</p>
              <p className="text-sm leading-[1.6] text-fg-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
