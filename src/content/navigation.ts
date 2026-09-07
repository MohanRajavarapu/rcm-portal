export type NavLink = {
  href: string;
  label: string;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavItem = {
  href: string;
  label: string;
  columns?: NavColumn[];
};

export const primaryNav: NavItem[] = [
  {
    href: "/services",
    label: "For Healthcare Providers",
    columns: [
      {
        heading: "Services",
        links: [
          { href: "/services", label: "All RCM services" },
          { href: "/services/eligibility-benefits", label: "Eligibility & Benefits" },
          { href: "/services/prior-authorization", label: "Prior Authorization" },
          { href: "/services/medical-coding", label: "Medical Coding" },
          { href: "/services/charge-capture", label: "Charge Capture & Entry" },
          { href: "/services/claims-submission", label: "Claims Submission" },
          { href: "/services/denial-management", label: "Denial Management" },
        ],
      },
      {
        heading: "More for providers",
        links: [
          { href: "/specialties", label: "Specialties" },
          { href: "/technology", label: "Technology / AI Approach" },
          { href: "/why", label: "Why 360VertexAI" },
        ],
      },
    ],
  },
  {
    href: "/staffing",
    label: "For Staffing & Workforce Solutions",
    columns: [
      {
        heading: "Engagement models",
        links: [
          { href: "/staffing/engagement-models", label: "All models" },
          { href: "/staffing/staff-augmentation", label: "Staff Augmentation / Contract Staffing" },
          { href: "/staffing/contract-to-hire", label: "Contract-to-Hire" },
          { href: "/staffing/eor", label: "3rd-Party Payroll / EOR" },
          { href: "/staffing/direct-hire", label: "Direct Hire / Permanent Placement" },
        ],
      },
      {
        heading: "Workforce",
        links: [
          { href: "/staffing/pods", label: "Dedicated Pods" },
          { href: "/staffing/roles", label: "Roles We Staff" },
          { href: "/staffing/compliance", label: "Compliance & Risk" },
          { href: "/staffing/compare", label: "Compare Engagement Models" },
        ],
      },
    ],
  },
  {
    href: "/proof",
    label: "Proof",
    columns: [
      {
        heading: "Proof",
        links: [
          { href: "/proof", label: "Proof overview" },
          { href: "/proof/case-studies", label: "Case Studies" },
          { href: "/proof/metrics", label: "Metrics" },
        ],
      },
    ],
  },
  {
    href: "/trust",
    label: "Trust & Security",
    columns: [
      {
        heading: "Trust & Security",
        links: [
          { href: "/trust", label: "Overview" },
          { href: "/trust#hipaa", label: "HIPAA & BAA" },
          { href: "/trust#soc2", label: "SOC 2 Type II" },
          { href: "/trust#candidate-hr", label: "Candidate / HR Data Handling" },
          { href: "/trust#data-residency", label: "Data Residency & Offshore Disclosure" },
        ],
      },
    ],
  },
  {
    href: "/careers",
    label: "Careers",
    columns: [
      {
        heading: "Careers",
        links: [
          { href: "/careers#open-roles", label: "Open Roles" },
          { href: "/careers#talent-pool", label: "Talent Pool Registration" },
          { href: "/careers/life", label: "Life at 360VertexAI" },
        ],
      },
    ],
  },
  {
    href: "/about",
    label: "Company",
    columns: [
      {
        heading: "Company",
        links: [
          { href: "/about", label: "About Us" },
          { href: "/company/leadership", label: "Leadership" },
          { href: "/contact", label: "Contact" },
        ],
      },
    ],
  },
];

export const mobileNav = [
  {
    heading: "For healthcare providers",
    hint: "RCM and AI operations",
    links: [
      { href: "/services", label: "Services" },
      { href: "/services/eligibility-benefits", label: "Eligibility & Benefits" },
      { href: "/services/prior-authorization", label: "Prior Authorization" },
      { href: "/services/medical-coding", label: "Medical Coding" },
      { href: "/specialties", label: "Specialties" },
      { href: "/technology", label: "Technology / AI Approach" },
      { href: "/why", label: "Why 360VertexAI" },
    ],
  },
  {
    heading: "For staffing & workforce",
    hint: "Talent, EOR, and pods",
    links: [
      { href: "/staffing", label: "Staffing overview" },
      { href: "/staffing/engagement-models", label: "Engagement models" },
      { href: "/staffing/compare", label: "Compare engagement models" },
      { href: "/staffing/pods", label: "Dedicated pods" },
      { href: "/staffing/roles", label: "Roles we staff" },
      { href: "/staffing/compliance", label: "Compliance & risk" },
    ],
  },
  {
    heading: "Proof",
    hint: "Outcomes by business line",
    links: [
      { href: "/proof", label: "Proof overview" },
      { href: "/proof/case-studies", label: "Case studies" },
      { href: "/proof/metrics", label: "Metrics" },
    ],
  },
  {
    heading: "Trust & Security",
    hint: "PHI and candidate data, separately",
    links: [
      { href: "/trust#hipaa", label: "HIPAA & BAA" },
      { href: "/trust#soc2", label: "SOC 2 Type II" },
      { href: "/trust#candidate-hr", label: "Candidate / HR data" },
      { href: "/trust#data-residency", label: "Data residency" },
    ],
  },
  {
    heading: "Careers",
    hint: "Own funnel — not under Company",
    links: [
      { href: "/careers#open-roles", label: "Open roles" },
      { href: "/careers#talent-pool", label: "Talent pool" },
      { href: "/careers/life", label: "Life at 360VertexAI" },
    ],
  },
  {
    heading: "Company",
    hint: "About, leadership, contact",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/company/leadership", label: "Leadership" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/company/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
  ],
  providers: [
    { href: "/services", label: "Services" },
    { href: "/specialties", label: "Specialties" },
    { href: "/technology", label: "Technology / AI" },
    { href: "/why", label: "Why 360VertexAI" },
  ],
  staffing: [
    { href: "/staffing/engagement-models", label: "Engagement models" },
    { href: "/staffing/compare", label: "Compare models" },
    { href: "/staffing/pods", label: "Dedicated pods" },
    { href: "/staffing/roles", label: "Roles we staff" },
    { href: "/staffing/compliance", label: "Compliance & risk" },
  ],
  more: [
    { href: "/proof", label: "Proof" },
    { href: "/trust", label: "Trust & Security" },
    { href: "/careers", label: "Careers" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/hipaa", label: "HIPAA & BAA" },
    { href: "/legal/contracts", label: "How Contracts Work" },
  ],
} as const;
