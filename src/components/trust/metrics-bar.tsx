import { performanceStats } from "@/content/trust";

export function MetricsBar() {
  return (
    <section className="border-b border-white/10 bg-[#121212]" aria-label="Operating targets">
      <div className="page-section grid gap-4 py-8 sm:grid-cols-3">
        {performanceStats.map((stat) => (
          <div
            key={stat.label}
            className="interactive-card rounded-xl border border-white/10 bg-[#181a20] px-5 py-5 text-center sm:text-left"
          >
            <p className="text-4xl font-semibold tracking-tight text-mint sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-[#e0e0e0]">{stat.label}</p>
            <p className="mt-1 text-xs leading-[1.6] text-[#d1d5db]">{stat.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
