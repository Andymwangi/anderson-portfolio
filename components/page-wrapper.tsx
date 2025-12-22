"use client";

import { cn } from "@/lib/utils";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 w-full">
      {children}
    </main>
  );
}
