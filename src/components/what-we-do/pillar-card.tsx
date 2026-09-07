import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function PillarCard({
  title,
  summary,
  href,
  ctaLabel,
  icon: Icon,
}: {
  title: string;
  summary: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
}) {
  return (
    <article className="surface-card flex h-full flex-col p-6 sm:p-8">
      <span className="grid size-11 place-items-center rounded-lg bg-trust/10 text-trust">
        <Icon className="size-5" aria-hidden />
      </span>
      <h2 className="mt-5 text-2xl sm:text-3xl">{title}</h2>
      <p className="mt-3 flex-1 text-[1.02rem] leading-7 text-fg-muted">{summary}</p>
      <Link href={href} className="btn-secondary mt-8 h-11 w-fit px-5 text-sm">
        {ctaLabel}
      </Link>
    </article>
  );
}
