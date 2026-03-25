"use client";

/// <reference path="../iconify-icon.d.ts" />
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE_METADATA, SOCIAL_LINKS } from "@/lib/constants";
import { FooterVisitorBadge } from "@/components/footer-visitor-badge";

const topNav = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
];

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h3>
      <ul className="flex flex-col gap-3.5">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-zinc-200 bg-[#FAFAFA] text-zinc-900"
      style={{ colorScheme: "light" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "multiply",
        }}
      />

    <div className="relative z-10 mx-auto max-w-[1400px] px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
    <div className="flex w-full flex-col gap-2 border-b border-zinc-200 pb-4 md:flex-row md:items-center md:justify-between md:gap-3 md:pb-4">
          <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-x-6 gap-y-2.5" aria-label="Footer quick links">
            {topNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[15px] font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${SITE_METADATA.email}`}
            className="shrink-0 self-end font-sans text-[15px] text-zinc-600 transition-colors hover:text-zinc-900 md:self-auto"
          >
            {SITE_METADATA.email}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-16 pt-12 lg:grid-cols-12 lg:gap-16 lg:gap-x-20 lg:pt-16">
          <div className="lg:col-span-4">
            <p
              className="font-serif font-light italic leading-[1.05] tracking-tight text-zinc-900"
              style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.5rem)" }}
            >
              Anderson Mwangi
            </p>
            <p className="mt-6 max-w-lg font-sans text-base font-normal leading-relaxed text-zinc-600">
              Full-stack development, cybersecurity, and cloud engineering — building systems that are secure,
              scalable, and approachable.
            </p>
            <p className="mt-12 font-sans text-xs text-zinc-500">
              © {new Date().getFullYear()} Anderson Mwangi. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:col-span-8 lg:gap-14">
            <FooterColumn title="Legal">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[15px] text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Pages">
              {pageLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="font-sans text-[15px] text-zinc-600 transition-colors hover:text-zinc-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <div className="flex flex-col gap-5">
              <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Socials
              </h3>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s) => {
                  const isMail = s.href.startsWith("mailto:");
                  const label = s.label === "Mail" ? "Email" : s.label;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center border border-zinc-200 bg-white/60 text-zinc-700 transition-colors hover:border-orange-300 hover:text-zinc-900"
                    >
                      <iconify-icon icon={s.icon} width="22" height="22" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-zinc-200 px-8 py-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16"
        >
          <FooterVisitorBadge />
          <p className="font-sans text-xs text-zinc-500 md:text-right">
            Designed and developed by <span className="font-medium text-zinc-800">Anderson Mwangi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
