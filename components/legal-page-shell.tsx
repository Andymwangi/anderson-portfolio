"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { PageHeroGrid } from "@/components/page-hero-grid";

const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export type LegalPageShellProps = {
  sectionLabel: string;
  titleLine: string;
  titleAccent: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageShell({
  sectionLabel,
  titleLine,
  titleAccent,
  intro,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <PageTransition>
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 bg-[#FAFAFA] dark:bg-[#0D0D0D]" />

        <PageHeroGrid
          sectionLabel={sectionLabel}
          title={
            <h1
              className="font-serif font-light italic"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "var(--text-primary)",
                lineHeight: 0.98,
              }}
            >
              {titleLine}{" "}
              <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                {titleAccent}
              </span>
            </h1>
          }
          leftFooter={
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: "var(--text-muted)",
              }}
            >
              Last updated · {lastUpdated}
            </p>
          }
        >
          <p className="font-sans text-base font-light leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
            {intro}
          </p>
          <p className="font-sans text-sm font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
            This site is a personal portfolio. It does not offer user accounts, payments, or a hosted application beyond
            browsing project content and sending an optional contact message.
          </p>
        </PageHeroGrid>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-l border-r"
            style={{
              borderColor: "var(--border-raw)",
              background: "rgba(var(--accent-rgb) / 0.04)",
            }}
          >
            <article
              className="legal-prose border-b px-6 py-10 md:px-12 md:py-14 lg:px-16"
              style={{ borderColor: "var(--border-raw)" }}
            >
              {children}

              <nav
                className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t pt-10 font-mono text-[10px] uppercase tracking-[0.16em]"
                style={{ borderColor: "var(--border-raw)" }}
                aria-label="Legal pages"
              >
                {legalNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-[var(--accent-bright)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[var(--accent-bright)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Contact
                </Link>
              </nav>
            </article>
          </motion.div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
