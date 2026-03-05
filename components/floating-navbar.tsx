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
  { href: "/",           label: "HOME" },
  { href: "/about",      label: "ABOUT" },
  { href: "/projects",   label: "WORK" },
  { href: "/skills",     label: "STACK" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/contact",    label: "CONTACT" },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toggle, isOpen } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/*
        FIX: Wrap in a fixed full-width positioner div that handles centering.
        The motion.div inside only animates translateY — it never touches translateX.
        This prevents Framer Motion from clobbering the horizontal centering.
      */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{ pointerEvents: "auto" }}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pill - light theme: light bg + darker text; dark theme: dark bg + current text */}
          <div
            className="navbar-pill"
            style={{
              display: "flex",
              alignItems: "center",
              height: "52px",
              paddingLeft: "8px",
              paddingRight: "8px",
              gap: "2px",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
            }}
          >
            {/* Nav links */}
            <div className="nav-links-row" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {routes.map((route) => {
                const isActive = pathname === route.href;
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "navbar-link",
                      isActive && "navbar-link-active"
                    )}
                    style={{
                      position: "relative",
                      padding: "6px 11px",
                      borderRadius: "9999px",
                      fontFamily: "var(--font-dm-mono, monospace)",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      textDecoration: "none",
                      transition: "color 0.2s, background 0.2s, border 0.2s",
                    }}
                  >
                    /{route.label}
                    {isActive && (
                      <motion.span
                        layoutId="pill-indicator"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "9999px",
                          pointerEvents: "none",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Separator */}
            <span className="navbar-sep" style={{ width: "1px", height: "18px", margin: "0 6px", flexShrink: 0 }} />

            {/* Theme toggle */}
            <div style={{ flexShrink: 0 }}>
              <ThemeToggle />
            </div>

            {/* Let's Talk */}
            <Link
              href="/contact"
              className="navbar-cta"
              style={{
                display: "inline-block",
                marginLeft: "4px",
                padding: "7px 16px",
                borderRadius: "9999px",
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s, border 0.2s",
                flexShrink: 0,
              }}
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={toggle}
              className="mobile-menu-btn navbar-hamburger"
              style={{
                display: "none",
                padding: "6px 8px",
                background: "none",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
              }}
              aria-label="Toggle menu"
            >
              <iconify-icon
                icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"}
                width="24"
              />
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Pill shape: always rounded-full, with theme-aware fill */
        .navbar-pill {
          border-radius: 9999px;
          border: 1px solid rgba(28,20,16,0.12);
          background: rgba(247,244,239,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .navbar-link {
          color: #2d2520;
          background: transparent;
          border: 1px solid transparent;
        }
        .navbar-link:hover { color: #1C1410; }
        .navbar-link-active {
          color: #6B5210 !important;
          background: rgba(201,168,122,0.18);
          border: 1px solid rgba(201,168,122,0.4) !important;
        }
        .navbar-sep { background: rgba(28,20,16,0.2); }
        .navbar-cta {
          border: 1px solid rgba(139,105,20,0.45);
          color: #5c4410;
        }
        .navbar-cta:hover {
          color: #3d2e0a;
          background: rgba(201,168,122,0.15);
        }
        .navbar-hamburger { color: #2d2520 !important; }
        html.dark .navbar-pill {
          border: 1px solid rgba(201,168,122,0.2);
          background: rgba(15,13,10,0.94);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        html.dark .navbar-link { color: #8a7366; }
        html.dark .navbar-link:hover { color: #C9A87A; }
        html.dark .navbar-link-active {
          color: #C9A87A !important;
          background: rgba(201,168,122,0.12);
          border: 1px solid rgba(201,168,122,0.3) !important;
        }
        html.dark .navbar-sep { background: rgba(201,168,122,0.2); }
        html.dark .navbar-cta {
          border: 1px solid rgba(201,168,122,0.4);
          color: #C9A87A;
        }
        html.dark .navbar-cta:hover { background: rgba(201,168,122,0.12); }
        html.dark .navbar-hamburger { color: rgba(237,229,216,0.92) !important; }
        @media (max-width: 768px) {
          .nav-links-row { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <div className="h-20" />
    </>
  );
}

export default FloatingNavbar;