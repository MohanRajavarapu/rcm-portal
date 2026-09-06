import { ShieldCheck, FileCheck, BadgeCheck, Lock } from "lucide-react";
import { complianceBadges } from "@/content/trust";

const icons = [ShieldCheck, FileCheck, BadgeCheck, Lock];

export function ComplianceBadges() {
  return (
    <section className="border-b border-border" aria-label="Compliance and security">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {complianceBadges.map((badge, index) => {
          const Icon = icons[index] ?? ShieldCheck;
          return (
            <article key={badge.label} className="glass-panel rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-mint/12 text-mint">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-5">{badge.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{badge.detail}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
