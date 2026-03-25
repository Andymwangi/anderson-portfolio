import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/lib/constants";

const UPSTREAM = (user: string) =>
  `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`;

export async function GET() {
  const user = process.env.GITHUB_CONTRIBUTIONS_USER?.trim() || GITHUB_USERNAME;
  try {
    const res = await fetch(UPSTREAM(user), {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Upstream unavailable" }, { status: 502 });
    }
    const data = (await res.json()) as {
      total?: { lastYear?: number };
      contributions?: { date: string; count: number; level: number }[];
    };
    return NextResponse.json({ user, ...data });
  } catch {
    return NextResponse.json({ error: "Failed to load contributions" }, { status: 502 });
  }
}
