/** Display-only; update periodically for client-facing estimates. */
export const USD_TO_KES = 130;

function formatKes(kes: number): string {
  if (kes >= 1_000_000) {
    const m = kes / 1_000_000;
    return `KES ${Number.isInteger(m) ? m : m.toFixed(1)}M`;
  }
  if (kes >= 1_000) return `KES ${Math.round(kes / 1_000)}k`;
  return `KES ${kes.toLocaleString()}`;
}

function formatUsdApprox(kes: number): string {
  const usd = Math.round(kes / USD_TO_KES);
  if (usd >= 1_000) return `~$${(usd / 1_000).toFixed(usd >= 10_000 ? 0 : 1)}k`;
  return `~$${usd.toLocaleString()}`;
}

/** Engagement bands in Kenyan Shillings, with an indicative USD equivalent. */
export const PRICE_BANDS = [
  { value: "50k_100k", min: 50_000, max: 100_000 },
  { value: "100k_500k", min: 100_000, max: 500_000 },
  { value: "500k_1m", min: 500_000, max: 1_000_000 },
  { value: "1m_plus", min: 1_000_000, max: null },
] as const;

function bandLabel(band: (typeof PRICE_BANDS)[number]): string {
  const stripCurrency = (s: string) => s.replace(/^KES /, "");
  return band.max
    ? `${formatKes(band.min)} – ${stripCurrency(formatKes(band.max))}`
    : `${formatKes(band.min)}+`;
}

function bandUsd(band: (typeof PRICE_BANDS)[number]): string {
  return band.max
    ? `${formatUsdApprox(band.min)} – ${formatUsdApprox(band.max)}`
    : `${formatUsdApprox(band.min)}+`;
}

/** Guide row for the rates strip (not a quote). */
export const ENGAGEMENT_RATES = [
  {
    label: "Starter",
    kes: bandLabel(PRICE_BANDS[0]),
    usd: bandUsd(PRICE_BANDS[0]),
    note: "Websites, discovery, small integrations",
  },
  {
    label: "Focused build",
    kes: bandLabel(PRICE_BANDS[1]),
    usd: bandUsd(PRICE_BANDS[1]),
    note: "MVPs, modules, mobile apps",
  },
  {
    label: "Product & platform",
    kes: bandLabel(PRICE_BANDS[2]),
    usd: bandUsd(PRICE_BANDS[2]),
    note: "Multi-phase delivery, web plus mobile",
  },
  {
    label: "Enterprise",
    kes: bandLabel(PRICE_BANDS[3]),
    usd: bandUsd(PRICE_BANDS[3]),
    note: "Large systems, security programmes, retainers",
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
  ...PRICE_BANDS.map((band) => ({ value: band.value, label: bandLabel(band) })),
  { value: "discuss", label: "Prefer to discuss" },
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 30 days",
  "Flexible — planning phase",
] as const;
