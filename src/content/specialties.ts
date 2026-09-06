export const specialtyCategories = [
  "Primary Care",
  "Surgical & ASCs",
  "Specialty & Infusion",
  "Facility",
] as const;

export type SpecialtyCategory = (typeof specialtyCategories)[number];

export type Specialty = {
  slug: string;
  name: string;
  summary: string;
  focus: string[];
  category: SpecialtyCategory;
  workflow?: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "primary-care",
    name: "Primary care & internal medicine",
    summary:
      "High-volume E/M, preventive, CCM, and hierarchical condition coding that stays honest and complete.",
    focus: ["E/M and preventive", "HCC / RAF support", "AWV and CCM billing"],
    category: "Primary Care",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    summary:
      "Diagnostic testing, interventions, and device follow-up with modifier and NCCI discipline.",
    focus: ["Cath and intervention", "Echo / nuclear / Holter", "Device clinic"],
    category: "Specialty & Infusion",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics & sports medicine",
    summary:
      "Fracture care, injections, DME, and surgical global periods without double-billing traps.",
    focus: ["Global surgical package", "Injections and DME", "ASC vs. office site of service"],
    category: "Surgical & ASCs",
  },
  {
    slug: "radiology",
    name: "Radiology",
    summary:
      "Professional and global imaging, contrast, and 3D post-processing with LCD-aware medical necessity.",
    focus: ["Professional vs. technical", "Contrast and 3D", "Prior auth for advanced imaging"],
    category: "Specialty & Infusion",
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    summary:
      "Endoscopy, screening vs. diagnostic colonoscopy logic, and anesthesia coordination.",
    focus: ["Screening vs. diagnostic", "Biopsy and intervention", "Anesthesia billing splits"],
    category: "Surgical & ASCs",
  },
  {
    slug: "behavioral-health",
    name: "Behavioral health",
    summary:
      "Psychotherapy, collaborative care, and testing codes with time documentation that holds up.",
    focus: ["Time-based psychotherapy", "Testing batteries", "Collaborative care"],
    category: "Specialty & Infusion",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    summary:
      "Destruction, biopsy, Mohs, and pathology with lesion counting and medical-necessity notes.",
    focus: ["Lesion counting", "Mohs stages", "Pathology and IHC"],
    category: "Specialty & Infusion",
  },
  {
    slug: "oncology",
    name: "Oncology & infusion",
    summary:
      "Drug units, wastage, administration hierarchy, and prior auth for high-cost regimens.",
    focus: ["J-code units and JW/JZ", "Admin hierarchy", "Auth for specialty drugs"],
    category: "Specialty & Infusion",
  },
  {
    slug: "emergency-medicine",
    name: "Emergency medicine",
    summary:
      "Facility and professional ED coding, critical care, and after-hours documentation patterns.",
    focus: ["ED E/M", "Critical care", "Procedure-heavy encounters"],
    category: "Facility",
  },
  {
    slug: "ambulatory-surgery",
    name: "ASCs & surgical specialists",
    summary:
      "Implants, laterality, multiple-procedure reductions, and payer carve-outs for outpatient surgery.",
    focus: ["Implants and devices", "Multiple procedure rules", "Carve-out contracts"],
    category: "Surgical & ASCs",
  },
  {
    slug: "multi-specialty",
    name: "Multi-specialty groups",
    summary:
      "Shared PM/EHR, mixed fee schedules, and queue design so one specialty does not starve another.",
    focus: ["Queue design", "Payer mix by department", "Centralized vs. pod staffing"],
    category: "Facility",
  },
  {
    slug: "fqhc-rural",
    name: "FQHC & rural health",
    summary:
      "PPS, wrap, sliding fee, and encounter-rate billing that still captures billable visits correctly.",
    focus: [
      "Medicare/Medicaid G-codes",
      "Dual-claim wrapping",
      "T-1015 billing QA",
      "PPS / RHC encounter capture",
      "Sliding-fee alignment",
      "Grant vs. visit billing",
    ],
    workflow: [
      "Qualify the visit against FQHC PPS and RHC encounter rules before charge drop.",
      "Wrap dual claims correctly for Medicare and Medicaid so the wrap is not left on the table.",
      "QA T-1015 and related G-codes against documentation, sliding-fee schedules, and grant vs. billable visit logic.",
    ],
    category: "Primary Care",
  },
];

export function getSpecialty(slug: string) {
  return specialties.find((specialty) => specialty.slug === slug);
}
