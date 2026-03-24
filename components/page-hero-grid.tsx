"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type PageHeroGridProps = {
  sectionLabel: string;
  /** Use an <h1> with the same typography as the About page */
  title: ReactNode;
  /** Optional lower block in the left column (e.g. motto / meta line) */
  leftFooter?: ReactNode;
  /** Right column: intro copy and optional footer row */
  children: ReactNode;
};

export function PageHeroGrid({ sectionLabel, title, leftFooter, children }: PageHeroGridProps) {
  return (
    <section
      className="relative w-full px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-32 lg:px-20"
      style={{ borderBottom: "1px solid var(--border-raw)" }}
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0"
          style={{
            borderTop: "1px solid var(--border-raw)",
            borderLeft: "1px solid var(--border-raw)",
          }}
        >
          <div
            className={cn(
              "flex flex-col p-8 md:p-10 lg:col-span-5",
              leftFooter ? "justify-between gap-12" : "justify-start gap-0"
            )}
            style={{
              borderRight: "1px solid var(--border-raw)",
              borderBottom: "1px solid var(--border-raw)",
              background: "var(--bg)",
            }}
          >
            <div>
              <div className="section-label mb-8">{sectionLabel}</div>
              {title}
              <div className="mt-8 h-px w-16" style={{ background: "var(--accent-bright)", opacity: 0.6 }} />
            </div>
            {leftFooter ? (
              <div className="border-t pt-8" style={{ borderColor: "var(--border-raw)" }}>
                {leftFooter}
              </div>
            ) : null}
          </div>

          <div
            className="flex flex-col justify-center gap-8 p-8 md:p-10 lg:col-span-7"
            style={{
              borderRight: "1px solid var(--border-raw)",
              borderBottom: "1px solid var(--border-raw)",
              background: "rgba(var(--accent-rgb) / 0.04)",
            }}
          >
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
