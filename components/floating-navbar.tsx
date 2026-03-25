"use client";

/// <reference path="../iconify-icon.d.ts" />
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toggle, isOpen } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -92, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -92, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{
          borderColor: "var(--border-raw)",
          background: "color-mix(in srgb, var(--bg) 92%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-9 py-2 md:h-[4.5rem] md:gap-8 md:px-14 md:py-2.5 lg:px-20">
          <Link
            href="/"
            className="relative flex shrink-0 items-center transition-opacity hover:opacity-80"
            aria-label="Anderson Mwangi — Home"
          >
            <span
              className="font-serif italic font-light leading-none select-none"
              style={{
                fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Anderson
            </span>
            <span
              className="font-serif font-bold not-italic leading-none select-none"
              style={{
                fontSize: "clamp(1.35rem, 1.9vw, 1.65rem)",
                color: "var(--accent-bright)",
                marginLeft: "0.05em",
                lineHeight: 1,
              }}
            >
              .
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center"
            aria-label="Primary"
          >
            {routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "text-[var(--accent-bright)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {route.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bar"
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ background: "var(--accent-bright)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1 md:gap-3">
            <div
              className="hidden h-5 w-px md:block"
              style={{ background: "var(--border-raw)" }}
              aria-hidden
            />
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-[rgba(var(--accent-rgb)/0.12)] md:inline-block"
              style={{
                borderColor: "rgba(var(--accent-rgb) / 0.45)",
                color: "var(--accent-bright)",
              }}
            >
              Let&apos;s talk
            </Link>

            <button
              type="button"
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              style={{ color: "var(--text-primary)" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <iconify-icon
                icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"}
                width="26"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <div className="h-16 md:h-[4.5rem]" />
    </>
  );
}

export default FloatingNavbar;
