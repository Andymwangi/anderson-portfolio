/** Display-only; update periodically for client-facing estimates. */
export const USD_TO_KES = 130;

export function formatKesApprox(usd: number): string {
  const kes = Math.round(usd * USD_TO_KES);
  if (kes >= 1_000_000) return `~KES ${(kes / 1_000_000).toFixed(1)}M`;
  if (kes >= 1_000) return `~KES ${(kes / 1_000).toFixed(0)}k`;
  return `~KES ${kes.toLocaleString()}`;
}

/** Guide row for the rates strip (not a quote). */
export const ENGAGEMENT_RATES = [
  {
    label: "Discovery / scoping",
    usd: "From $200",
    kes: formatKesApprox(200),
    note: "Workshop or technical discovery",
  },
  {
    label: "Focused build",
    usd: "$2.5k – $12k",
    kes: `${formatKesApprox(2500)} – ${formatKesApprox(12000)}`,
    note: "MVPs, modules, integrations",
  },
  {
    label: "Product & platform",
    usd: "$12k – $50k+",
    kes: `${formatKesApprox(12000)} – ${formatKesApprox(50000)}+`,
    note: "Multi-phase delivery",
  },
  {
    label: "Advisory / security",
    usd: "Custom",
    kes: "Case by case",
    note: "Retainers & audits",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Full-stack web & APIs",
  "Mobile (React Native / Expo)",
  "Cloud & DevOps",
  "Security & hardening",
  "Ongoing support / retainer",
  "General consultation",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  { value: "under_2500", label: `Under $2,500 (${formatKesApprox(2500)} approx.)` },
  { value: "2500_10000", label: `$2,500 – $10,000 (${formatKesApprox(2500)} – ${formatKesApprox(10000)})` },
  { value: "10000_25000", label: `$10,000 – $25,000 (${formatKesApprox(10000)} – ${formatKesApprox(25000)})` },
  { value: "25000_plus", label: `$25,000+ (${formatKesApprox(25000)}+)` },
  { value: "discuss", label: "Prefer to discuss" },
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 30 days",
  "Flexible — planning phase",
] as const;
