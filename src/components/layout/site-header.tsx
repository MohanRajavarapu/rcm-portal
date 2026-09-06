"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav } from "@/content/navigation";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

const ctaClass = cn(buttonVariants({ size: "lg" }), "btn-primary h-10 px-4");

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="z-[1001] w-[88vw] max-w-sm border-white/10 bg-[#121212]">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-base text-[#e0e0e0] hover:bg-white/5 hover:text-cyan"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" className={cn(ctaClass, "mt-4 h-11 justify-center")}>
                  Talk to an Expert
                </Link>
                <p className="mt-6 px-3 text-sm text-[#d1d5db]">
                  {company.phoneDisplay}
                  <br />
                  {company.email}
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
