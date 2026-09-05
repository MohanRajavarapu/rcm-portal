export const primaryNav = [
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All services" },
      { href: "/services/eligibility-benefits", label: "Eligibility" },
      { href: "/services/medical-coding", label: "Medical coding" },
      { href: "/services/claims-submission", label: "Claims" },
      { href: "/services/denial-management", label: "Denials" },
      { href: "/services/accounts-receivable", label: "A/R follow-up" },
    ],
  },
  { href: "/specialties", label: "Specialties" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/technology", label: "Technology" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/hipaa", label: "HIPAA & BAA" },
    { href: "/terms", label: "Terms" },
  ],
} as const;
