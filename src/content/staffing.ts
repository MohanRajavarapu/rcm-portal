export const engagementModels = [
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    headline: "Named operators on your queue, under your direction.",
    summary:
      "We source, screen, and deploy RCM talent who work as an extension of your team. You direct day-to-day work; we remain the employer of record for payroll and statutory coverage.",
    employer: "360VERTEXAI (employer of record)",
    duration: "3–18 months, typically renewable",
    payroll: "360VERTEXAI runs payroll, statutory benefits, and tax withholding",
    direction: "Client managers direct daily work, SLAs, and tools",
    conversion: "Optional conversion after a defined period; fee disclosed in the SOW",
    bestFit: "Backfill, census spikes, specialty coding overflow, denial projects with a known end date",
    steps: [
      { n: "01", title: "Role intake", body: "Scope, systems, shift, certifications, and whether PHI access is in play." },
      { n: "02", title: "Screen and present", body: "Credential check, skills screen, and two to three named candidates." },
      { n: "03", title: "Start on your stack", body: "We remain EOR. You provision access after your BAA and access review." },
      { n: "04", title: "Weekly quality", body: "Attendance, output, and QA notes. Conversion discussion is optional, not assumed." },
    ],
    compliance:
      "360VERTEXAI is the legal employer of record. We withhold payroll tax and carry workers’ compensation for the assigned worker. You direct the work. If the role can see claims or EHR data, access starts only after your BAA and our Trust & Security data-residency review.",
  },
  {
    slug: "contract-to-hire",
    name: "Contract-to-Hire",
    headline: "Prove the fit on contract, then convert without a second search.",
    summary:
      "A time-boxed contract with a documented conversion path. Useful when you want production output now and a permanent seat later, without guessing from interviews alone.",
    employer: "360VERTEXAI during the contract; client after conversion",
    duration: "90–180 days contract, then conversion window",
    payroll: "360VERTEXAI during contract; client payroll after hire",
    direction: "Client directs work from day one",
    conversion: "Yes — conversion fee and timing are in the SOW before start",
    bestFit: "Lead coder, RCM analyst, or supervisor seats you intend to keep if quality holds",
    steps: [
      { n: "01", title: "Define the conversion bar", body: "Quality, attendance, and system proficiency written before the worker starts." },
      { n: "02", title: "Contract start", body: "We employ and pay the worker. You manage the queue." },
      { n: "03", title: "Checkpoint", body: "Mid-term review against the bar — not a surprise at day 90." },
      { n: "04", title: "Convert or extend", body: "Client becomes employer after conversion paperwork, or the contract ends/extends." },
    ],
    compliance:
      "Until conversion, 360VERTEXAI is the employer of record, including payroll tax and workers’ compensation. After conversion, the worker is on your payroll and your benefits. Work authorization is re-confirmed at conversion. PHI access, if any, follows the same BAA rules as staff augmentation.",
  },
  {
    slug: "eor",
    name: "3rd-Party Payroll / EOR",
    headline: "You found the person. We employ them cleanly.",
    summary:
      "Employer-of-record and third-party payroll for workers you source or already know. We run payroll, tax, and statutory coverage so you are not improvising multi-state employment.",
    employer: "360VERTEXAI (employer of record)",
    duration: "Open-ended; 30-day offboard typical",
    payroll: "360VERTEXAI — payroll, benefits administration, tax, unemployment, workers’ comp",
    direction: "Client directs day-to-day work and performance",
    conversion: "Client may assume employment with a documented transfer; not a recruiting conversion fee",
    bestFit: "A known operator, returning contractor, or multi-state hire you do not want on your EIN yet",
    steps: [
      { n: "01", title: "Worker packet", body: "Identity, work authorization, and classification review before the first paycheck." },
      { n: "02", title: "EOR onboarding", body: "We put the worker on our payroll and statutory coverage." },
      { n: "03", title: "You run the work", body: "Schedules, systems, and quality stay with your supervisors." },
      { n: "04", title: "Pay and file", body: "We remit wages, tax, and unemployment. Offboard is a written notice, not a disappearing contractor." },
    ],
    compliance:
      "360VERTEXAI is the legal employer of record for EOR assignments. We handle payroll tax withholding, unemployment insurance, and workers’ compensation. You are not the employer, but you still control the work. This is not an independent-contractor pass-through. I-9 / E-Verify is completed before work starts. See Compliance & Risk for classification and insurance.",
  },
  {
    slug: "direct-hire",
    name: "Direct Hire",
    headline: "A permanent search. They join your company, not ours.",
    summary:
      "Retained or contingency search for full-time RCM roles on your payroll. We recruit and screen; you employ. No ongoing EOR relationship after start.",
    employer: "Client (from start date)",
    duration: "Permanent hire; guarantee window in the search agreement",
    payroll: "Client — salary, benefits, tax, workers’ compensation",
    direction: "Client in full",
    conversion: "Not applicable — they are your employee from day one",
    bestFit: "Directors, coding managers, and scarce specialty seats you will carry on your census",
    steps: [
      { n: "01", title: "Scorecard", body: "Must-have credentials, specialty, compensation band, and onsite vs remote." },
      { n: "02", title: "Search and screen", body: "Sourcing, credential check, and structured interviews with your hiring panel." },
      { n: "03", title: "Offer support", body: "We coordinate the offer; you extend it as the employer." },
      { n: "04", title: "Guarantee window", body: "If the hire leaves inside the agreed window, we re-search on the terms in the agreement." },
    ],
    compliance:
      "The client is the legal employer from the start date and is responsible for payroll tax, benefits, and workers’ compensation. We do not remain employer of record. Work authorization is verified to the extent of a recruiting screen; you complete I-9 as the hiring employer. Candidate data handling is described on Trust & Security — not on this page as a BAA substitute.",
  },
] as const;

export type EngagementModel = (typeof engagementModels)[number];

export function getEngagementModel(slug: string) {
  return engagementModels.find((model) => model.slug === slug);
}

export const comparisonRows = [
  { key: "employer", label: "Who is the legal employer of record?" },
  { key: "duration", label: "Typical engagement duration" },
  { key: "payroll", label: "Who manages payroll, benefits, tax compliance?" },
  { key: "direction", label: "Who directs day-to-day work?" },
  { key: "conversion", label: "Conversion path to permanent hire" },
  { key: "bestFit", label: "Best fit for" },
] as const;

export const staffingRoles = [
  {
    slug: "medical-coders",
    name: "Medical Coders",
    certifications: "CPC, CCS, CCS-P, or specialty credentials as required by the book of business",
    models: "Staff augmentation, contract-to-hire, EOR, direct hire",
  },
  {
    slug: "billing-operations",
    name: "Billing Operations",
    certifications: "Hands-on PM/EHR billing; clearinghouse literacy; payer-specific posting",
    models: "Staff augmentation, contract-to-hire, EOR",
  },
  {
    slug: "rcm-analysts",
    name: "RCM Analysts",
    certifications: "Denial mix, A/R aging, and reporting — SQL/Excel fluency preferred",
    models: "Staff augmentation, contract-to-hire, direct hire",
  },
  {
    slug: "rcm-leads",
    name: "RCM Leads",
    certifications: "Prior team lead or supervisor experience in US RCM; coding credential a plus",
    models: "Contract-to-hire, direct hire, staff augmentation for interim leads",
  },
  {
    slug: "ai-reviewers",
    name: "AI / Automation Reviewers",
    certifications: "Production RCM background plus comfort reviewing model queues — not a substitute for an attester",
    models: "Staff augmentation, contract-to-hire",
  },
] as const;

export const staffingFaqs = [
  {
    question: "What's the difference between contract staffing and 3rd-party payroll?",
    answer:
      "Contract staffing (staff augmentation) means we recruit and employ the worker, then assign them to your queue. Third-party payroll / EOR means you already have the person — we employ and pay them. In both cases 360VERTEXAI is typically the employer of record until a documented conversion. Direct hire is different: they are your employee from day one.",
  },
  {
    question: "Who is the legal employer if we use your EOR service?",
    answer:
      "360VERTEXAI SOLUTIONS PRIVATE LIMITED is the legal employer of record for EOR assignments. We run payroll, tax withholding, unemployment insurance, and workers’ compensation. You direct the work. The engagement-models table states the employer for every other model as well.",
  },
  {
    question: "Can staffed personnel access patient data?",
    answer:
      "Only if your BAA, access model, and role design allow it — and never through this website. Many staffing seats are non-PHI (reporting, QA of de-identified queues, training). If a pod or contractor will see EHR or claims data, read Trust & Security (data residency) before access is provisioned.",
  },
  {
    question: "Do you handle work authorization verification?",
    answer:
      "Yes for workers we employ (staff augmentation, contract-to-hire during the contract, and EOR): I-9 and E-Verify are completed before start. For direct hire, you are the hiring employer and complete I-9; we screen work-authorization status as a recruiting step only.",
  },
] as const;

export const staffingMetrics = [
  {
    value: "14 days",
    label: "Average time-to-fill (priority RCM seats)",
    hint: "Operating target for screened, credential-matched presentation — not a guarantee for every specialty.",
  },
  {
    value: "86% / 79%",
    label: "Placement retention at 6 / 12 months",
    hint: "Share of converted or still-assigned workers remaining at those marks on comparable books.",
  },
  {
    value: "92%",
    label: "Fill rate on accepted reqs (coders & billing ops)",
    hint: "Accepted requisitions filled within the agreed search window, trailing twelve months target.",
  },
] as const;

export const podFacts = {
  composition: "Lead + operators + QA / AI reviewer. Sized to a queue, not a headcount vanity number.",
  locations: "Production staffing and operations are performed from India with overlap coverage for US EST and PST business hours. Onshore client managers remain in the United States when the SOW requires it.",
  hours: "Core overlap 8:00 a.m.–6:00 p.m. US Eastern, with follow-the-sun coverage for agreed queues.",
};
