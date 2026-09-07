export const ehrSystems = [
  "Epic",
  "Athenahealth",
  "Cerner",
  "eClinicalWorks",
  "NextGen",
  "Kareo",
] as const;

export const complianceBadges = [
  {
    label: "HIPAA Compliant",
    detail: "Controls aligned to the Security and Privacy Rules before PHI is in scope.",
  },
  {
    label: "BAA Ready",
    detail: "Business Associate Agreement executed before system access or claim files.",
  },
  {
    label: "SOC 2 Type II",
    detail: "Independent control reporting for the production operating environment.",
  },
  {
    label: "100% Zero-PHI Web Architecture",
    detail: "This public site never stores, transmits, or displays patient identifiers.",
  },
] as const;

export const performanceStats = [
  {
    value: "98%+",
    label: "Clean claim rate",
    hint: "Target operating standard after parallel-run, by specialty mix.",
  },
  {
    value: "<30 Days",
    label: "Days in A/R",
    hint: "Worked inventory with payer-specific follow-up SLAs.",
  },
  {
    value: "35% Avg",
    label: "Cost reduction",
    hint: "Versus fragmented vendor stacks on comparable visit volume.",
  },
] as const;
