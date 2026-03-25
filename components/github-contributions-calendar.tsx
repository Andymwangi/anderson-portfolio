"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { GITHUB_USERNAME } from "@/lib/constants";

type Day = { date: string; count: number; level: number };

function parseISODate(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
}

function formatISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const x = new Date(d.getTime());
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}

function buildWeekColumns(contributions: Day[]) {
  if (!contributions.length) return [];
  const map = new Map(contributions.map((c) => [c.date, c]));
  const first = parseISODate(contributions[0].date);
  const last = parseISODate(contributions[contributions.length - 1].date);
  let cursor = new Date(first);
  cursor.setUTCDate(cursor.getUTCDate() - cursor.getUTCDay());
  const endPad = new Date(last);
  endPad.setUTCDate(endPad.getUTCDate() + (6 - endPad.getUTCDay()));

  const weeks: Day[][] = [];
  while (cursor <= endPad) {
    const col: Day[] = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(cursor, i);
      const key = formatISO(day);
      col.push(map.get(key) ?? { date: key, count: 0, level: 0 });
    }
    weeks.push(col);
    cursor = addDays(cursor, 7);
  }
  return weeks;
}

function levelStyle(level: number): CSSProperties {
  if (level <= 0) {
    return { background: "rgba(var(--accent-rgb) / 0.06)", border: "1px solid var(--border-raw)" };
  }
  const o = 0.28 + Math.min(level, 4) * 0.18;
  return { background: `rgba(var(--accent-rgb) / ${o})` };
}

export function GitHubContributionsCalendar() {
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/github-contributions");
        const data = (await res.json()) as {
          contributions?: Day[];
          total?: { lastYear?: number };
          error?: string;
        };
        if (!res.ok) {
          throw new Error(data.error || "Failed to load");
        }
        if (cancelled) return;
        const list = data.contributions ?? [];
        setWeeks(buildWeekColumns(list));
        setTotal(typeof data.total?.lastYear === "number" ? data.total.lastYear : null);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Could not load activity");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const colCount = weeks.length;
  const scrollable = useMemo(() => colCount > 40, [colCount]);

  if (error) {
    return (
      <p className="font-sans text-sm font-light" style={{ color: "var(--text-muted)" }}>
        {error}.{" "}
        <Link href={`https://github.com/${GITHUB_USERNAME}`} className="underline decoration-[rgba(var(--accent-rgb)/0.4)]" style={{ color: "var(--accent-bright)" }}>
          View GitHub profile
        </Link>
      </p>
    );
  }

  if (!weeks.length) {
    return (
      <div className="flex h-32 items-center justify-center font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        Loading activity…
      </div>
    );
  }

  return (
    <div>
      <div
        className={`${scrollable ? "max-w-full overflow-x-auto pb-2" : ""}`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-[3px]" style={{ minWidth: scrollable ? `${weeks.length * 13}px` : undefined }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  className="h-[10px] w-[10px] shrink-0 rounded-[2px] transition-opacity hover:opacity-90"
                  style={levelStyle(day.level)}
                  title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "var(--border-raw)" }}>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: "var(--text-muted)" }}>
          {total != null ? (
            <>
              <span style={{ color: "var(--accent-bright)" }}>{total.toLocaleString()}</span> contributions in the last year
              (public)
            </>
          ) : (
            <>Public GitHub activity</>
          )}
        </p>
        <Link
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:opacity-90"
          style={{ color: "var(--accent-bright)" }}
        >
          @{GITHUB_USERNAME} →
        </Link>
      </div>
    </div>
  );
}
