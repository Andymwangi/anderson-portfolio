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
      /* ignore */
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
            /* ignore */
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
      <p className="font-sans text-xs text-zinc-400" aria-live="polite">
        Visitor count…
      </p>
    );
  }

  if (count == null) {
    return (
      <p className="font-sans text-xs text-zinc-500" aria-live="polite">
        Thanks for visiting.
      </p>
    );
  }

  return (
    <p className="font-sans text-xs text-zinc-600" aria-live="polite">
      You are visitor{" "}
      <span className="font-medium tabular-nums text-zinc-900">#{count.toLocaleString()}</span>
    </p>
  );
}
