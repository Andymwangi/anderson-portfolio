"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  Award, 
  GraduationCap, 
  Code,
  Menu,
  X
} from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
          "px-4 py-3 rounded-full backdrop-blur-md border border-warm-copper/20",
          "bg-cream/10 dark:bg-charcoal/30 shadow-lg shadow-warm-copper/10",
          "transition-all duration-300 ease-in-out",
          "md:px-12 w-full max-w-12xl"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center flex-grow">
          <Link href="/" className="text-xl font-bold text-deep-forest dark:text-cream mr-4">
            AM
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                  "hover:bg-warm-copper/20 hover:text-warm-copper",
                  pathname === route.href 
                    ? "bg-deep-forest text-cream dark:bg-warm-copper dark:text-charcoal" 
                    : "text-charcoal dark:text-cream"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal dark:text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div
              className="absolute top-16 left-4 right-4 p-4 rounded-xl bg-cream dark:bg-charcoal shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid gap-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === route.href 
                        ? "bg-deep-forest text-cream dark:bg-warm-copper dark:text-charcoal" 
                        : "text-charcoal dark:text-cream hover:bg-warm-copper/20"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <route.icon className="h-5 w-5 mr-3" />
                    {route.label}
                  </Link>
                ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingNavbar;
