"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { buttonVariants } from "@/components/ui/button";
import { mobileNav, primaryNav } from "@/content/navigation";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="mx-auto flex h-[var(--header-height)] max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-start gap-2 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavDropdown key={item.href} item={item} />
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/contact/rcm" className="btn-primary hidden h-10 px-3 text-sm xl:inline-flex">
            Talk to an Expert
          </Link>
          <Link href="/contact/staffing" className="btn-secondary hidden h-10 px-3 text-sm xl:inline-flex">
            Request Staffing
          </Link>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline", size: "icon" }), "xl:hidden")}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-[1001] xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-surface-0/70"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[88vw] max-w-sm flex-col overflow-y-auto border-l border-[var(--border-default)] bg-surface-1 p-4">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <button
                type="button"
                className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-6" aria-label="Mobile">
              {mobileNav.map((section) => (
                <div key={section.heading}>
                  <p className="eyebrow-label px-3">{section.heading}</p>
                  <p className="caption px-3 pt-1">{section.hint}</p>
                  <div className="mt-2 flex flex-col gap-1">
                    {section.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="link-quiet rounded-lg px-3 py-2.5 text-base hover:bg-surface-3"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link href="/contact/rcm" className="btn-primary mt-2 h-11 justify-center px-5 text-sm" onClick={() => setMenuOpen(false)}>
                Talk to an Expert
              </Link>
              <Link href="/contact/staffing" className="btn-secondary h-11 justify-center px-5 text-sm" onClick={() => setMenuOpen(false)}>
                Request Staffing
              </Link>
              <p className="caption mt-2 px-3">
                {company.phoneDisplay}
                <br />
                {company.email}
              </p>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
