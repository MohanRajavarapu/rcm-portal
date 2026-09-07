"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCtaTarget, type CtaHref } from "@/content/cta";
import { cn } from "@/lib/utils";

export function TalkToExpertCta({
  href,
  className,
}: {
  href?: CtaHref;
  className?: string;
}) {
  const pathname = usePathname();
  const target = href ?? getCtaTarget(pathname);
  return (
    <Link href={target} className={cn("btn-primary", className)}>
      Talk to an Expert
    </Link>
  );
}
