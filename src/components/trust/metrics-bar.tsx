import { performanceStats } from "@/content/trust";

export function MetricsBar() {
  return (
    <section className="border-b border-white/10 bg-navy" aria-label="Operating targets">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {performanceStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-[#0f282d] px-5 py-6 text-center sm:text-left"
          >
            <p className="text-4xl font-semibold tracking-tight text-mint sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">{stat.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
