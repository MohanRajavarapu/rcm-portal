"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!item.columns?.length) {
    return (
      <Link href={item.href} className="link-quiet px-1 text-sm font-medium leading-snug">
        {item.label}
      </Link>
    );
  }

  const wide = item.columns.length > 1;

  return (
    <div
      ref={root}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="link-quiet inline-flex max-w-[10.5rem] items-center gap-0.5 px-1 text-left text-sm font-medium leading-snug"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown className={cn("size-3.5 shrink-0 text-fg-subtle", open && "rotate-180")} />
      </button>
      {open ? (
        <div
          id={id}
          className={cn(
            "absolute top-full z-[60] pt-3",
            wide ? "left-1/2 w-[36rem] -translate-x-1/2" : "left-0 w-64",
          )}
        >
          <div className="rounded-xl border border-[var(--border-default)] bg-surface-1 p-4 shadow-lg">
            <Link
              href={item.href}
              className="link-quiet mb-3 inline-flex text-xs font-semibold tracking-wide uppercase"
              onClick={() => setOpen(false)}
            >
              {item.label} overview
            </Link>
            <div className={cn("grid gap-6", wide && "grid-cols-2")}>
              {item.columns.map((column) => (
                <div key={column.heading}>
                  <p className="eyebrow-label mb-2">{column.heading}</p>
                  <ul className="space-y-1">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="link-quiet block rounded-md px-2 py-1.5 text-sm hover:bg-surface-3"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
