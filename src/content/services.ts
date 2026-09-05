export type Service = {
  slug: string;
  name: string;
  cycle: "Front" | "Mid" | "Back" | "Enablement";
  summary: string;
  outcome: string;
  body: string[];
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "eligibility-benefits",
    name: "Eligibility & benefits",
    cycle: "Front",
    summary:
      "Real-time and batch eligibility so visits are scheduled, authorized, and collected against the right plan.",
    outcome: "Fewer write-offs from coverage surprises at the front desk.",
    body: [
      "Coverage failures discovered after the visit become uncollectable A/R. We verify active coverage, plan type, copay, deductible remaining, and referral rules before the encounter whenever the payer connectivity allows it.",
      "Work includes demographic QA, coordination of benefits flags, and a documented exception path when a payer portal or 270/271 response is incomplete.",
    ],
    capabilities: [
      "270/271 and portal verification",
      "COB and inactive-plan flags",
      "Benefit summaries for high-dollar visits",
      "Front-desk collection talking points",
    ],
  },
  {
    slug: "prior-authorization",
    name: "Prior authorization",
    cycle: "Front",
    summary:
      "Payer-specific auth intake, clinical packet assembly, and status chase so procedures are not delayed or denied.",
    outcome: "Fewer day-of cancellations and medical-necessity denials.",
    body: [
      "Authorization is where specialty revenue is won or lost. We map CPT/HCPCS to payer auth lists, assemble clinical documentation, and track pending, pended, and expired auths against the schedule.",
      "Escalations are time-boxed. Expired auths are surfaced before the date of service, not after the claim rejects.",
    ],
    capabilities: [
      "Payer auth grid by specialty",
      "Clinical packet checklists",
      "Status chase and expiry alerts",
      "Peer-to-peer coordination handoff",
    ],
  },
  {
    slug: "medical-coding",
    name: "Medical coding",
    cycle: "Mid",
    summary:
      "ICD-10-CM, CPT, HCPCS, and E/M coding with specialty guidelines, NCCI, and LCD/NCD awareness.",
    outcome: "Accurate, defensible codes that survive audit and payer edits.",
    body: [
      "Coding is performed and reviewed by trained coders. AI assists with documentation gap detection and code suggestion; it does not replace coder attestation.",
      "We cover professional and, where engaged, facility coding. Query processes are written so providers are not interrupted for information already in the note.",
    ],
    capabilities: [
      "ICD-10-CM / CPT / HCPCS",
      "E/M leveling support",
      "NCCI, MUE, LCD/NCD checks",
      "Provider query workflow",
    ],
  },
  {
    slug: "charge-capture",
    name: "Charge capture & entry",
    cycle: "Mid",
    summary:
      "Complete, timely charges from the EHR or superbills—with missing-charge detection before the claim leaves.",
    outcome: "Revenue that was performed is actually billed.",
    body: [
      "Missed charges are silent leakage. We reconcile schedules, operative logs, and EHR charge files, then enter or validate charges with the correct units, modifiers, and rendering/billing NPIs.",
      "Late charges and hold-bill queues are aged and reported so coding and clinical teams can close the loop.",
    ],
    capabilities: [
      "Encounter-to-charge reconciliation",
      "Modifier and unit QA",
      "Missing-charge audits",
      "Hold-bill aging",
    ],
  },
  {
    slug: "claims-submission",
    name: "Claims submission",
    cycle: "Back",
    summary:
      "Scrubbed 837P/837I claims through clearinghouses, with edit resolution before the payer ever sees the file.",
    outcome: "Higher first-pass yield and fewer preventable rejects.",
    body: [
      "Claims are scrubbed against payer edits, NPI/taxonomy pairing, diagnosis pointers, and attachment rules. Rejects are worked the same day they return from the clearinghouse.",
      "We maintain a payer-companion playbook so recurring edits do not become a monthly surprise.",
    ],
    capabilities: [
      "837 professional and institutional",
      "Clearinghouse reject workdown",
      "Payer-specific edit libraries",
      "Attachment and medical-records routing",
    ],
  },
  {
    slug: "denial-management",
    name: "Denial management",
    cycle: "Back",
    summary:
      "Root-cause denial work: appeals, corrected claims, and front-end fixes so the same CARC does not recur.",
    outcome: "Recovered dollars and a shrinking denial mix.",
    body: [
      "Every denial is categorized, aged, and assigned. We distinguish true medical necessity from registration, coding, and timely-filing failures, then write appeals that cite the record—not boilerplate.",
      "Patterns feed back into eligibility, coding, and charge capture so the next claim is cleaner.",
    ],
    capabilities: [
      "CARC/RARC taxonomy",
      "Appeal letter production",
      "Corrected claim workflows",
      "Denial-prevention feedback loops",
    ],
  },
  {
    slug: "accounts-receivable",
    name: "A/R follow-up",
    cycle: "Back",
    summary:
      "Payer A/R worked by aging bucket, dollar threshold, and inventory rules—not by whoever shouts loudest.",
    outcome: "Shorter DSO and a visible path to cash.",
    body: [
      "Follow-up is scheduled work, not heroic salvage. We call, portal, and 276/277 status claims according to payer SLAs, document every touch, and escalate stalled high-dollar inventory.",
      "Credit balances and small-balance write-off policy are applied only as the client defines them.",
    ],
    capabilities: [
      "Aging-bucket worklists",
      "276/277 and portal status",
      "High-dollar escalation",
      "Client write-off policy adherence",
    ],
  },
  {
    slug: "payment-posting",
    name: "Payment posting",
    cycle: "Back",
    summary:
      "ERA/EFT and paper remits posted accurately, with underpayments and takebacks identified the same cycle.",
    outcome: "Books that match the bank, and underpayments that get worked.",
    body: [
      "835 posting, unmatched ERA research, and manual remits are handled with dual control on adjustments. Contractual vs. non-contractual write-offs are separated.",
      "Underpayment variances against contracted rates are queued for recovery, not buried in adjustments.",
    ],
    capabilities: [
      "835 / EFT posting",
      "Unmatched remit research",
      "Underpayment detection",
      "Takeback and recoup handling",
    ],
  },
  {
    slug: "patient-billing",
    name: "Patient billing",
    cycle: "Back",
    summary:
      "Clear statements, polite outreach, and payment-plan handling after insurance has adjudicated.",
    outcome: "Patient collections without damaging the practice brand.",
    body: [
      "Statements go out only after insurance posts, with itemization patients can understand. We do not collect or discuss clinical details on this public website, and production work follows client-approved scripts.",
      "Hardship, insurance-found-later, and small-balance policies are configured per practice.",
    ],
    capabilities: [
      "Statement cycles",
      "Payment-plan administration",
      "Insurance-found-later rebill",
      "Courtesy and collections scripts",
    ],
  },
  {
    slug: "credentialing",
    name: "Provider credentialing",
    cycle: "Enablement",
    summary:
      "Enrollment, CAQH, payer contracts, and recredentialing so claims are not held for an inactive provider.",
    outcome: "Clean enrollment files and fewer enrollment-related rejects.",
    body: [
      "We track applications, PECOS/NPPES hygiene, CAQH attestations, and payer effective dates. New providers are not scheduled into billed clinics until enrollment status is known.",
      "Recredentialing calendars prevent silent term dates.",
    ],
    capabilities: [
      "Payer enrollment packets",
      "CAQH maintenance",
      "Effective-date tracking",
      "Recredentialing calendar",
    ],
  },
  {
    slug: "analytics-reporting",
    name: "Analytics & reporting",
    cycle: "Enablement",
    summary:
      "Operating dashboards for clean-claim rate, denial mix, DSO, net collection, and coder productivity.",
    outcome: "Decisions from current inventory—not last quarter’s rumor.",
    body: [
      "Reports are defined with your finance and operations leads. We do not invent vanity metrics. Standard packs cover production, quality, cash, and aging, with specialty and payer slices.",
      "AI clustering highlights denial and coding outliers for the weekly ops review.",
    ],
    capabilities: [
      "Weekly ops pack",
      "Payer and specialty slices",
      "Coder / biller productivity",
      "Denial-root clustering",
    ],
  },
  {
    slug: "rcm-consulting",
    name: "RCM assessment & consulting",
    cycle: "Enablement",
    summary:
      "A structured look at leakage, staffing, EHR setup, and payer mix before you outsource or retool.",
    outcome: "A written map of where cash is stuck and what to change first.",
    body: [
      "Assessments review sample claims, denial files, fee schedules, and front-desk scripts. Findings are ranked by recoverability and effort.",
      "You can buy the assessment alone, or convert it into an operating engagement.",
    ],
    capabilities: [
      "Leakage and denial sample review",
      "EHR / PM configuration notes",
      "Staffing and queue design",
      "90-day action plan",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const servicesByCycle = {
  Front: services.filter((s) => s.cycle === "Front"),
  Mid: services.filter((s) => s.cycle === "Mid"),
  Back: services.filter((s) => s.cycle === "Back"),
  Enablement: services.filter((s) => s.cycle === "Enablement"),
};
