"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { primaryNav } from "@/content/navigation";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

const ctaClass = cn(buttonVariants({ size: "lg" }), "btn-primary h-10 px-4");

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-white/10 bg-[rgba(11,12,16,0.92)] backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center lg:flex lg:gap-8 xl:gap-10" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-1 text-sm whitespace-nowrap text-[#e0e0e0] transition-colors hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/contact" className={cn(ctaClass, "hidden sm:inline-flex")}>
            Talk to an Expert
          </Link>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline", size: "icon" }), "lg:hidden")}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-[1001] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[88vw] max-w-sm flex-col border-l border-white/10 bg-[#121212] p-4">
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
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-base text-[#e0e0e0] hover:bg-white/5 hover:text-cyan"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(ctaClass, "mt-4 h-11 justify-center")}
                onClick={() => setMenuOpen(false)}
              >
                Talk to an Expert
              </Link>
              <p className="mt-6 px-3 text-sm text-[#d1d5db]">
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
