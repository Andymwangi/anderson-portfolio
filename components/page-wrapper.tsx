import type { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <main className="relative w-full flex-1">{children}</main>;
}
