"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { specialties, specialtyCategories, type SpecialtyCategory } from "@/content/specialties";
import { cn } from "@/lib/utils";

const filters = ["All", ...specialtyCategories] as const;
type Filter = (typeof filters)[number];

export function SpecialtiesCatalog() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? specialties
        : specialties.filter((specialty) => specialty.category === (filter as SpecialtyCategory)),
    [filter],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Specialty categories"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              filter === item
                ? "border-mint bg-mint text-primary-foreground"
                : "border-white/10 bg-card text-slate-200 hover:border-emerald-400/30 hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((specialty) => (
          <Link key={specialty.slug} href={`/specialties/${specialty.slug}`}>
            <Card className="h-full transition-colors hover:border-emerald-400/30">
              <CardHeader>
                <Badge variant="secondary">{specialty.category}</Badge>
                <CardTitle className="mt-2 text-xl">{specialty.name}</CardTitle>
                <CardDescription className="leading-6 text-slate-200">{specialty.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
