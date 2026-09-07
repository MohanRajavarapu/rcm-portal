"use client";

import Link from "next/link";
import type { NavLink } from "@/content/navigation";

/** Unused after the 6-item flat nav. Kept so leftover imports compile. */
export function NavDropdown({ item }: { item: NavLink }) {
  return (
    <Link href={item.href} className="link-quiet px-1 text-sm font-medium leading-snug">
      {item.label}
    </Link>
  );
}
