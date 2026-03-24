"use client";

import { useState, useCallback } from "react";
import { GreetingSequenceLoader } from "./greeting-sequence-loader";

export function AppLoaderManager({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <GreetingSequenceLoader variant="intro" onComplete={handleComplete} />;
  }

  return <>{children}</>;
}
