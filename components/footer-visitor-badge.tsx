"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "anderson-portfolio-visitor-count";

export function FooterVisitorBadge() {
  const [count, setCount] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const n = Number.parseInt(raw, 10);
        if (!Number.isNaN(n)) {
          setCount(n);
          setReady(true);
          return;
        }
      }
    } catch {
      /* storage unavailable */
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/visitors", { method: "POST" });
        const data = (await res.json()) as { count: number | null };
        if (cancelled) return;
        if (typeof data.count === "number") {
          try {
            sessionStorage.setItem(STORAGE_KEY, String(data.count));
          } catch {
            /* storage unavailable */
          }
          setCount(data.count);
        } else {
          setCount(null);
        }
      } catch {
        if (!cancelled) setCount(null);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <p className="text-xs text-ink-muted" aria-live="polite">
        Counting visitors&hellip;
      </p>
    );
  }

  if (count == null) {
    return (
      <p className="text-xs text-ink-muted" aria-live="polite">
        Thanks for visiting.
      </p>
    );
  }

  return (
    <p className="text-xs text-ink-muted" aria-live="polite">
      You are visitor <span className="tabular-nums text-ink">#{count.toLocaleString()}</span>
    </p>
  );
}
