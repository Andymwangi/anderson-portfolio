import { NextResponse } from "next/server";

/**
 * Global hit counter via CountAPI (no DB). Set COUNTAPI_NAMESPACE in production
 * to a unique string so your count isn’t shared with other demos.
 */
const NAMESPACE = process.env.COUNTAPI_NAMESPACE?.trim() || "andymwangi-portfolio";
const KEY = process.env.COUNTAPI_KEY?.trim() || "site-visitors";

export async function POST() {
  try {
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ count: null as number | null });
    }
    const body = (await res.json()) as { value?: number };
    const count = typeof body.value === "number" ? body.value : null;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null as number | null });
  }
}
