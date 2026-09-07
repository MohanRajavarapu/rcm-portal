"use client";

import { useState } from "react";
import { caseStudies, type CaseLine } from "@/content/proof";
import { pillars } from "@/content/pillars";

const filters: { id: "all" | CaseLine; label: string }[] = [
  { id: "all", label: "All" },
  { id: "rcm", label: "RCM" },
  { id: "staffing", label: "Staffing" },
];

function pillarLabel(line: CaseLine) {
  return pillars.find((pillar) => pillar.slug === line)?.title ?? line;
}

export function CaseStudyFilter() {
  const [line, setLine] = useState<"all" | CaseLine>("all");
  const visible = caseStudies.filter((item) => (line === "all" ? true : item.line === line));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by pillar">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={line === filter.id}
            className={line === filter.id ? "trust-chip bg-trust/20" : "trust-chip hover:bg-trust/20"}
            onClick={() => setLine(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {visible.map((item) => (
          <article key={item.slug} className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-6">
            <p className="trust-chip w-fit">{item.line === "rcm" ? "RCM" : "Staffing"}</p>
            <h2 className="mt-3 text-2xl">{item.title}</h2>
            <p className="caption mt-1">{item.setting}</p>
            <p className="mt-3 text-sm font-medium text-fg">{item.result}</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{item.body}</p>
            <dl className="mt-5 grid gap-3 border-t border-[var(--border-subtle)] pt-4 sm:grid-cols-2">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="eyebrow-label">{metric.label}</dt>
                  <dd className="mt-1 text-sm text-fg">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="sr-only">Pillar: {pillarLabel(item.line)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
