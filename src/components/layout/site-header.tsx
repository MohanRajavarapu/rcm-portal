"use client";

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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061d21]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center lg:flex lg:gap-8 xl:gap-10" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-1 text-sm whitespace-nowrap text-slate-200 transition-colors hover:text-mint"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 px-4 text-sm font-semibold text-primary-foreground sm:inline-flex",
            )}
          >
            Talk to RCM
          </Link>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="z-50 w-[88vw] max-w-sm border-white/10 bg-navy">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-base text-slate-200 hover:bg-white/5 hover:text-mint"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "mt-4 h-11 justify-center font-semibold")}
                >
                  Talk to RCM
                </Link>
                <p className="mt-6 px-3 text-sm text-slate-300">
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
