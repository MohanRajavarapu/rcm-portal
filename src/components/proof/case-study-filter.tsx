"use client";

import { useState } from "react";
import { caseStudies, type CaseLine } from "@/content/proof";

export function CaseStudyFilter() {
  const [line, setLine] = useState<"all" | CaseLine>("all");
  const visible = caseStudies.filter((item) => (line === "all" ? true : item.line === line));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by business line">
        {(
          [
            ["all", "All (still labeled)"],
            ["rcm", "RCM outcomes"],
            ["staffing", "Staffing outcomes"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={line === id}
            className={line === id ? "trust-chip bg-trust/20" : "trust-chip hover:bg-trust/20"}
            onClick={() => setLine(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {visible.map((item) => (
          <article key={item.slug} className="surface-card p-6">
            <p className="eyebrow-label">{item.line === "rcm" ? "RCM outcome" : "Staffing outcome"}</p>
            <h2 className="mt-2 text-2xl">{item.title}</h2>
            <p className="caption mt-1">{item.setting}</p>
            <p className="mt-3 text-sm font-medium text-fg">{item.result}</p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
