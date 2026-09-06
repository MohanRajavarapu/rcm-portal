import { ehrSystems } from "@/content/trust";

function Wordmark({ name }: { name: string }) {
  return (
    <div className="flex h-14 min-w-[11.5rem] items-center justify-center rounded-xl border border-white/8 bg-card/80 px-5">
      <span className="text-sm font-semibold tracking-wide text-foreground/85">{name}</span>
    </div>
  );
}

export function EhrBanner() {
  const loop = [...ehrSystems, ...ehrSystems];
  return (
    <section className="border-b border-border bg-navy/60" aria-label="Compatible EHR systems">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs tracking-[0.2em] text-mint uppercase">EHR integration</p>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          We operate inside the practice-management stack you already run.
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy to-transparent" />
          <div className="ehr-marquee-track flex w-max gap-3">
            {loop.map((name, index) => (
              <Wordmark key={`${name}-${index}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
