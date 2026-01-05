"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const routes = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "WORK" },
  { href: "/skills", label: "STACK" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/contact", label: "CONTACT" },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 w-full z-50 border-b border-accent/10 bg-[#050403]/80 backdrop-blur-md"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group hover-trigger">
            <span className="font-serif font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors italic">
              Anderson<span className="text-accent group-hover:text-white transition-colors not-italic">.Dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "hover:text-accent transition-colors hover-trigger",
                  pathname === route.href && "text-accent"
                )}
              >
                / {route.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-2 border border-accent/20 px-3 py-1 rounded-full bg-accent/5 text-[10px] font-mono text-accent">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              AVAILABLE FOR HIRE
            </span>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link href="/contact">
              <button className="border border-white/20 px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent hover:border-accent hover:text-black transition-all hover-trigger btn-magnetic">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default FloatingNavbar;
