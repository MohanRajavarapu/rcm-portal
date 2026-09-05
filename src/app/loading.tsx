export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="h-8 w-40 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-12 w-2/3 animate-pulse rounded bg-muted" />
      <div className="mt-8 h-40 animate-pulse rounded-xl bg-muted" />
    </div>
  );
}
