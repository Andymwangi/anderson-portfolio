import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/contact", label: "Contact" },
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
      <PageHeader
        eyebrow={sectionLabel}
        title={
          <>
            {titleLine} <span className="accent-word">{titleAccent}</span>
          </>
        }
        lead={intro}
        meta={`Last updated · ${lastUpdated}`}
      />

      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <p className="eyebrow mb-4">Legal</p>
            <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 lg:flex-col" aria-label="Legal pages">
              {legalNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[15px] text-ink-secondary transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              This site is a personal portfolio. It has no user accounts or payments; the only data flow is an
              optional contact message.
            </p>
          </aside>
          <article className="legal-prose max-w-prose lg:col-span-8 lg:col-start-5">{children}</article>
        </div>
      </Section>

      <Footer />
    </PageTransition>
  );
}
