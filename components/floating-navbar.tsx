"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import {
  Home,
  Briefcase,
  User,
  Mail,
  Award,
  Code,
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useMobileMenu();

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
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between",
          "px-6 md:px-12 py-4 backdrop-blur-2xl border-b border-white/20 dark:border-white/10",
          "bg-white/60 dark:bg-slate-900/60 shadow-2xl shadow-black/10 dark:shadow-black/30",
          "transition-all duration-300 ease-in-out"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-brown/20 group-hover:shadow-brown/40 transition-shadow">
            <img
              src="/logo.png"
              alt="Anderson Mwangi Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-slate-900 dark:text-white font-bricolage">Anderson Mwangi</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-inter">Full Stack Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-end mr-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "px-4 py-2 font-medium transition-all duration-200 font-bricolage relative group",
                pathname === route.href
                  ? "text-brown"
                  : "text-slate-700 dark:text-slate-300 hover:text-brown"
              )}
            >
              {route.label}
              {/* Bottom line indicator */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-brown transition-all duration-300",
                  pathname === route.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </div>

        {/* Theme Toggle - Desktop */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-6 py-2.5 bg-brown hover:bg-brown-dark text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-brown/30 hover:shadow-xl hover:shadow-brown/40 font-bricolage text-sm">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 dark:text-slate-300 hover:text-brown transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default FloatingNavbar;
