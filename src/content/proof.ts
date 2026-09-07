export type CaseLine = "rcm" | "staffing";

export type CaseStudy = {
  slug: string;
  line: CaseLine;
  title: string;
  setting: string;
  result: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "specialty-group-denials",
    line: "rcm",
    title: "Denial mix, not a blended recovery rate",
    setting: "Multi-specialty physician group · US Southeast · anonymized",
    result: "Preventable denials concentrated in two CARCs; first-pass yield lifted after front-cycle fixes.",
    body: "We ran the cycle under a BAA. The published lesson is operational: the cash movement came from eligibility and coding edits, not from a staffing headcount story. Staffing KPIs are not on this card.",
  },
  {
    slug: "asc-ar",
    line: "rcm",
    title: "Aged A/R worked as a queue, not a project",
    setting: "ASC book · US · anonymized",
    result: "Days in A/R compressed on the worked inventory after posting and follow-up cadence were owned together.",
    body: "RCM operating proof only. Time-to-fill and retention are irrelevant to this engagement and are not cited here.",
  },
  {
    slug: "coder-bench-fill",
    line: "staffing",
    title: "CPC bench for a coding manager who already had the queue",
    setting: "Health-system RCM lead · US · anonymized",
    result: "Named coders presented inside the search window; 360VERTEXAI remained employer of record on staff augmentation.",
    body: "This is a staffing outcome (time-to-fill and who employed the worker). Clean-claim rate is not claimed — the client kept production RCM.",
  },
  {
    slug: "eor-known-operator",
    line: "staffing",
    title: "EOR for an operator the client already knew",
    setting: "Billing company · multi-state · anonymized",
    result: "Third-party payroll / EOR so the client did not put the worker on their EIN; conversion was not assumed.",
    body: "Staffing proof: employer of record, payroll tax, and workers’ compensation sat with 360VERTEXAI. No RCM operating metrics are attached.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
