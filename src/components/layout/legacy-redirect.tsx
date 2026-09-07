"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/** Client fallback used on static GitHub Pages export, where next.config redirects are unsupported. */
export function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <section className="page-section py-16">
      <p className="text-sm text-fg-muted">
        This page has moved to{" "}
        <Link href={to} className="link-quiet underline-offset-4 hover:underline">
          {to}
        </Link>
        .
      </p>
    </section>
  );
}
