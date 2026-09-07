import { ArrowDown, Clock, Percent, Timer, UserCheck, Users } from "lucide-react";
import { performanceStats } from "@/content/trust";
import { staffingMetrics } from "@/content/staffing";

const rcmIcons = [Percent, Timer, ArrowDown];
const staffingIcons = [Clock, UserCheck, Users];

function StatGrid({
  stats,
  icons,
}: {
  stats: readonly { value: string; label: string; hint: string }[];
  icons: typeof rcmIcons;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = icons[index] ?? Percent;
        return (
          <div key={stat.label} className="surface-card px-5 py-5 text-center sm:text-left">
            <p className="flex items-baseline justify-center gap-2 sm:justify-start">
              <Icon className="size-4 shrink-0 text-fg-subtle" aria-hidden />
              <span className="stat-number text-4xl sm:text-5xl">{stat.value}</span>
            </p>
            <p className="mt-2 text-sm font-medium text-fg">{stat.label}</p>
            <p className="caption mt-1 leading-[1.6]">{stat.hint}</p>
          </div>
        );
      })}
    </div>
  );
}

export function MetricsBar({ line = "rcm" }: { line?: "rcm" | "staffing" | "both" }) {
  return (
    <section className="section-alt border-b border-[var(--border-subtle)]" aria-label="Operating targets">
      <div className="page-section space-y-10 py-8">
        {line !== "staffing" ? (
          <div>
            <p className="eyebrow-label">RCM operating metrics</p>
            <p className="caption mt-1 mb-4">For CFOs and RCM directors evaluating the cycle — not staffing KPIs.</p>
            <StatGrid stats={performanceStats} icons={rcmIcons} />
          </div>
        ) : null}
        {line !== "rcm" ? (
          <div>
            <p className="eyebrow-label">Staffing metrics</p>
            <p className="caption mt-1 mb-4">For workforce buyers — not blended with clean-claim or A/R targets.</p>
            <StatGrid stats={staffingMetrics} icons={staffingIcons} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
