"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { GreetingSequenceLoader } from "./greeting-sequence-loader";

const SESSION_KEY = "portfolio-intro-seen";

/**
 * Plays the greeting intro once per browser session. Returning visitors within
 * the same session go straight to the page.
 */
export function AppLoaderManager({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) setLoading(false);
  }, []);

  const handleComplete = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable: intro simply plays again next load */
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <GreetingSequenceLoader onComplete={handleComplete} />;
  }

  return <>{children}</>;
}
