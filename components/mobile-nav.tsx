"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Brand, PRIMARY_ROUTES } from "@/components/floating-navbar";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MobileNav() {
  const { isOpen, setOpen } = useMobileMenu();
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setOpen]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-canvas md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="container-x hairline-b flex h-16 items-center justify-between">
            <Brand onClick={close} />
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Close menu"
            >
              <iconify-icon icon="solar:close-circle-linear" width="24" />
            </button>
          </div>

          <nav className="container-x flex flex-1 flex-col justify-center gap-1 py-10" aria-label="Primary">
            {PRIMARY_ROUTES.map((route, index) => {
              const isActive = pathname === route.href;
              return (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + index * 0.05, duration: 0.45, ease: EASE }}
                >
                  <Link
                    href={route.href}
                    onClick={close}
                    className={cn(
                      "display-lg hairline-b flex items-baseline justify-between py-4 transition-colors",
                      isActive ? "text-brick-bright" : "text-ink hover:text-brick-bright"
                    )}
                  >
                    <span>{route.label}</span>
                    <span className="caption">0{index + 1}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="container-x flex flex-col gap-6 pb-10">
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => {
                const isMail = social.href.startsWith("mailto:");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center border border-line text-ink-secondary transition-colors hover:border-ink hover:text-ink"
                  >
                    <iconify-icon icon={social.icon} width="20" height="20" />
                  </a>
                );
              })}
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/contact" onClick={close}>
                Let&apos;s talk
              </Link>
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
