import type { ReactNode } from "react";
import Link from "next/link";
import { SITE_METADATA, SOCIAL_LINKS } from "@/lib/constants";
import { FooterVisitorBadge } from "@/components/footer-visitor-badge";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="eyebrow">{title}</p>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[15px] text-ink-secondary transition-colors hover:text-ink">
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="hairline bg-canvas-subtle">
      <div className="container-x pb-8 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="display-md">Anderson Mwangi</p>
            <p className="prose-copy mt-5 max-w-sm">
              Full-stack, mobile, and security-minded engineering. Building systems that are secure, scalable, and
              approachable.
            </p>
            <a
              href={`mailto:${SITE_METADATA.email}`}
              className="text-link mt-8 inline-flex text-[15px] text-ink"
            >
              {SITE_METADATA.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3 md:gap-8">
            <FooterColumn title="Pages">
              {pageLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Legal">
              {legalLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <p className="eyebrow">Elsewhere</p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const isMail = social.href.startsWith("mailto:");
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      aria-label={social.label === "Mail" ? "Email" : social.label}
                      className="flex h-11 w-11 items-center justify-center border border-line text-ink-secondary transition-colors hover:border-ink hover:text-ink"
                    >
                      <iconify-icon icon={social.icon} width="20" height="20" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col gap-3 pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Anderson Mwangi. All rights reserved.</p>
          <FooterVisitorBadge />
          <p>
            Designed and developed by <span className="text-ink">Anderson Mwangi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
