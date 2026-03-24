"use client";

/// <reference path="../iconify-icon.d.ts" />
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
          {/* Brand */}
          <Link
            href="/"
            className="relative flex shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="Anderson Mwangi — Home"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={160}
              height={73}
              className="h-8 w-auto md:h-9 lg:h-10"
              priority
            />
          </Link>

          {/* Desktop nav — flat row, accent rule on active */}
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
                    isActive ? "text-[var(--accent-bright)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
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

      {/* Spacer — matches header height */}
      <div className="h-16 md:h-[4.5rem]" />
    </>
  );
}

export default FloatingNavbar;
