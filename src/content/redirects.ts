/**
 * Permanent URL moves after the 6-item nav / pillar IA.
 * Server: next.config `redirects` (308) when not using static export.
 * GitHub Pages: matching route files render LegacyRedirect.
 */
export const permanentMoves: { source: string; destination: string }[] = [
  { source: "/services", destination: "/what-we-do/rcm" },
  { source: "/staffing", destination: "/what-we-do/staffing" },
  { source: "/staffing/engagement-models", destination: "/what-we-do/staffing" },
  { source: "/staffing/compare", destination: "/what-we-do/staffing" },
  { source: "/staffing/pods", destination: "/what-we-do/staffing" },
  { source: "/staffing/roles", destination: "/what-we-do/staffing" },
  { source: "/staffing/compliance", destination: "/about/trust-security" },
  { source: "/proof", destination: "/our-work" },
  { source: "/proof/case-studies", destination: "/our-work" },
  { source: "/proof/metrics", destination: "/our-work" },
  { source: "/trust", destination: "/about/trust-security" },
  { source: "/hipaa", destination: "/about/trust-security" },
  { source: "/company/leadership", destination: "/about/leadership" },
];

export const permanentMovePatterns: { source: string; destination: string }[] = [
  { source: "/services/:slug", destination: "/what-we-do/rcm/:slug" },
  { source: "/staffing/:slug", destination: "/what-we-do/staffing/:slug" },
];
