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
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Specialty categories">
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
                : "border-white/20 bg-transparent text-[#d1d5db] hover:border-cyan/40 hover:text-white",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((specialty) => (
          <Link key={specialty.slug} href={`/specialties/${specialty.slug}`}>
            <Card className="interactive-card h-full">
              <CardHeader>
                <Badge variant="secondary">{specialty.category}</Badge>
                <CardTitle className="mt-2 text-xl">{specialty.name}</CardTitle>
                <CardDescription className="leading-[1.6] text-[#d1d5db]">{specialty.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
