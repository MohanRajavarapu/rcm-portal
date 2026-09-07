import Link from "next/link";

export function TrustSnippet({
  eyebrow,
  body,
  href,
  linkLabel,
}: {
  eyebrow: string;
  body: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <aside className="rounded-xl border border-[var(--border-subtle)] bg-surface-2 p-6">
      <p className="trust-chip w-fit">{eyebrow}</p>
      <p className="mt-4 text-[1.02rem] leading-7 text-fg-muted">{body}</p>
      <Link href={href} className="link-quiet mt-4 inline-flex text-sm underline-offset-4 hover:underline">
        {linkLabel}
      </Link>
    </aside>
  );
}
