"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { TalkToExpertCta } from "@/components/cta/talk-to-an-expert";
import { ServicesDropdown } from "@/components/layout/nav-dropdown";
import { buttonVariants } from "@/components/ui/button";
import { primaryNav, serviceNav } from "@/content/navigation";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const update = () => {
      const navWidth = measureRef.current?.scrollWidth ?? 0;
      const logoWidth = logoRef.current?.offsetWidth ?? 0;
      const ctaWidth = ctaRef.current?.offsetWidth ?? 0;
      const available = bar.clientWidth - logoWidth - ctaWidth - 64;
      const next = navWidth > available;
      setCompact(next);
      if (!next) setMenuOpen(false);
    };

    const observer = new ResizeObserver(update);
    observer.observe(bar);
    update();
    return () => observer.disconnect();
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
    <header className="site-header">
      <div
        ref={barRef}
        className="relative mx-auto flex h-[var(--header-height)] max-w-[90rem] items-center gap-3 px-4 sm:px-6"
      >
        <div ref={logoRef} className="z-10 shrink-0">
          <Logo />
        </div>

        <nav
          ref={measureRef}
          aria-hidden
          className="pointer-events-none invisible absolute flex items-center gap-0.5 whitespace-nowrap"
        >
          <span className="px-2.5 py-2 text-sm font-medium">Services</span>
          {primaryNav.map((item) => (
            <span key={item.href} className="px-2.5 py-2 text-sm font-medium">
              {item.label}
            </span>
          ))}
        </nav>

        <nav
          className={cn(
            "hidden min-w-0 flex-1 items-center justify-center gap-0.5",
            !compact && "flex",
          )}
          aria-label="Primary"
        >
          <ServicesDropdown />
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-quiet whitespace-nowrap rounded-lg px-2.5 py-2 text-center text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="z-10 ml-auto flex shrink-0 items-center gap-2">
          <div ref={ctaRef}>
            <TalkToExpertCta className="h-10 px-3 text-sm" />
          </div>
          {compact ? (
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white",
              )}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="size-4" />
            </button>
          ) : null}
        </div>
      </div>
      {menuOpen && compact ? (
        <div className="fixed inset-0 z-[1001]" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-surface-0/70"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[88vw] max-w-sm flex-col overflow-y-auto border-l border-slate-700 bg-[#0f172a] p-4">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <button
                type="button"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white",
                )}
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-wide text-[#0f766e]">
                Services
              </p>
              {serviceNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-quiet rounded-lg px-3 py-2.5 text-base hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-quiet rounded-lg px-3 py-2.5 text-base hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="caption mt-6 px-3 text-slate-400">
              {company.phoneDisplay}
              <br />
              {company.email}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
