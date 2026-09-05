import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="hero-wash relative overflow-hidden text-white">
      <div className="vertex-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {crumbs ? (
          <p className="mb-5 text-xs tracking-[0.14em] text-white/55 uppercase">
            {crumbs.map((crumb, i) => (
              <span key={crumb.href}>
                {i > 0 ? " / " : null}
                <Link href={crumb.href} className="hover:text-vertex">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-xs tracking-[0.22em] text-vertex uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{lede}</p> : null}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-border bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="text-3xl">Ready for a revenue assessment?</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Tell us specialty, monthly visit volume, and EHR. Leave patient data out until we have a BAA.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Contact 360VERTEXAI
        </Link>
      </div>
    </section>
  );
}
