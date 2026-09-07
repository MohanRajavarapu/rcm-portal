export type NavLink = {
  href: string;
  label: string;
};

/** Exactly five primary destinations. The sixth nav element is the Talk to an Expert CTA. */
export const primaryNav: NavLink[] = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export const footerNav = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/about/leadership", label: "Leadership" },
    { href: "/about/trust-security", label: "Trust & Security" },
    { href: "/contact", label: "Contact Us" },
  ],
  offerings: [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/what-we-do/rcm", label: "RCM & AI Operations" },
    { href: "/what-we-do/staffing", label: "Staffing & Workforce" },
    { href: "/our-work", label: "Our Work" },
  ],
  more: [
    { href: "/careers", label: "Careers" },
    { href: "/technology", label: "Technology / AI" },
    { href: "/why", label: "Why 360VertexAI" },
  ],
  specialties: [
    { href: "/specialties", label: "All specialties" },
    { href: "/specialties/primary-care", label: "Primary care" },
    { href: "/specialties/cardiology", label: "Cardiology" },
    { href: "/specialties/orthopedics", label: "Orthopedics" },
    { href: "/specialties/radiology", label: "Radiology" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/about/trust-security#hipaa", label: "HIPAA & BAA" },
    { href: "/legal/contracts", label: "How Contracts Work" },
  ],
} as const;
