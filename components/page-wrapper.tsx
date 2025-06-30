"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <main
      className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isOpen ? "md:pl-72" : "md:pl-24"
      )}
    >
      <div className="p-4 sm:p-6 md:p-8">{children}</div>
    </main>
  );
}
