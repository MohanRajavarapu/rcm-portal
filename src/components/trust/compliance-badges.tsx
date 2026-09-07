import { ShieldCheck, FileCheck, BadgeCheck, Lock } from "lucide-react";
import { complianceBadges } from "@/content/trust";

const icons = [ShieldCheck, FileCheck, BadgeCheck, Lock];

export function ComplianceBadges() {
  return (
    <section className="border-b border-[var(--border-subtle)] bg-surface-0" aria-label="Compliance and security">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {complianceBadges.map((badge, index) => {
          const Icon = icons[index] ?? ShieldCheck;
          return (
            <article key={badge.label} className="surface-card p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-trust/10 text-trust">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-5 text-fg">{badge.label}</p>
                  <p className="caption mt-1 leading-5">{badge.detail}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
