"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

export const PRIMARY_ROUTES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export function Brand({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex items-baseline transition-opacity hover:opacity-80", className)}
      aria-label="Anderson Mwangi, home"
    >
      <span className="font-serif text-[1.35rem] italic leading-none text-ink">Anderson</span>
      <span className="font-serif text-[1.6rem] font-medium leading-none text-brick-bright">.</span>
    </Link>
  );
}

export function FloatingNavbar() {
  const pathname = usePathname();
  const { toggle, isOpen } = useMobileMenu();

  return (
    <>
      <header className="hairline-b fixed inset-x-0 top-0 z-50 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.25rem]">
          <Brand />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {PRIMARY_ROUTES.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "mono-label relative px-3 py-2 transition-colors",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {route.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-brick-bright"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
            <button
              type="button"
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <iconify-icon icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" />
            </button>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-[4.25rem]" aria-hidden />
    </>
  );
}

export default FloatingNavbar;
