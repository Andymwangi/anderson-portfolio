"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GreetingSequenceLoader } from "@/components/greeting-sequence-loader";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navLoading, setNavLoading] = useState(false);
  const skipNextPathEffect = useRef(true);

  useEffect(() => {
    if (skipNextPathEffect.current) {
      skipNextPathEffect.current = false;
      return;
    }
    setNavLoading(true);
  }, [pathname]);

  const handleNavComplete = useCallback(() => {
    setNavLoading(false);
  }, []);

  return (
    <main className={cn("relative w-full flex-1")}>
      {navLoading ? (
        <GreetingSequenceLoader
          key={pathname}
          variant="nav"
          onComplete={handleNavComplete}
        />
      ) : null}
      {children}
    </main>
  );
}
