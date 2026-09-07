import type { LucideIcon } from "lucide-react";
import { Cpu, Users } from "lucide-react";
import type { CtaHref } from "@/content/cta";

export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
  ctaTarget: CtaHref;
};

/**
 * Capability areas shown on /what-we-do. A third line of business is one object here
 * plus one page at /what-we-do/[slug] — never a new top-level nav item.
 */
export const pillars: Pillar[] = [
  {
    slug: "rcm",
    title: "RCM & AI Operations",
    summary:
      "We run US healthcare revenue cycle — eligibility through posting — with certified operators and AI that flags risk instead of inventing codes. Engagements sit under a BAA before PHI or system access.",
    href: "/what-we-do/rcm",
    ctaLabel: "Explore RCM Services",
    icon: Cpu,
    ctaTarget: "/contact/rcm",
  },
  {
    slug: "staffing",
    title: "Staffing & Workforce Solutions",
    summary:
      "Named operators, pods, EOR, and searches for US RCM teams. This is a workforce engagement, not an outsourcing of the cycle. Who employs whom is stated per model before anyone starts.",
    href: "/what-we-do/staffing",
    ctaLabel: "Explore Staffing Solutions",
    icon: Users,
    ctaTarget: "/contact/staffing",
  },
];
