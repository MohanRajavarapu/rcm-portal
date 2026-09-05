export const faqs = [
  {
    question: "Do you work with US payers from India?",
    answer:
      "Yes. 360VERTEXAI SOLUTIONS PRIVATE LIMITED operates from India and serves United States providers. Production work follows HIPAA-aligned controls, client BAAs, and payer companion guides. This public website never accepts PHI.",
  },
  {
    question: "Will AI replace our coders or billers?",
    answer:
      "No. Models flag eligibility gaps, coding variance, and likely denials. Certified staff remain responsible for codes, appeals, and payer contact. That split is how we stay accurate and defensible.",
  },
  {
    question: "Which EHRs and clearinghouses do you support?",
    answer:
      "We engage around the systems you already run—commonly eClinicalWorks, Athenahealth, NextGen, AdvancedMD, Kareo, and major clearinghouses. An assessment confirms connectivity, workqueues, and access model before go-live.",
  },
  {
    question: "Can we outsource only denials or A/R?",
    answer:
      "Yes. Many groups start with a denial or aged-A/R recovery slice, then expand to eligibility, coding, or full cycle once the operating cadence is proven.",
  },
  {
    question: "How do we start without sending patient data by email?",
    answer:
      "Use the contact form for company, specialty, volume, and EHR only. After a BAA and a secure channel are in place, we receive de-identified samples or live access as you approve—not through this website.",
  },
  {
    question: "Do you sign Business Associate Agreements?",
    answer:
      "Yes, before any PHI or system access. Request a BAA conversation from the contact page. Do not attach claims files or patient lists to the public form.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Revenue assessment",
    body: "Specialty, payer mix, EHR, and a sample of denials or aging—shared only after we agree how data will move.",
  },
  {
    n: "02",
    title: "Operating design",
    body: "Queues, SLAs, reporting pack, and which services we own versus what stays in your clinic.",
  },
  {
    n: "03",
    title: "Secure onboarding",
    body: "BAA, access, payer enrollments if needed, and a parallel-run period so cash does not dip on cutover.",
  },
  {
    n: "04",
    title: "Weekly cadence",
    body: "Production, quality, cash, and denial mix. AI outliers go to the same meeting as the human worklist.",
  },
] as const;
