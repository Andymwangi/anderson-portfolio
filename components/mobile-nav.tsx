"use client";

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
} from "lucide-react";

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/certifications", label: "Education & Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function MobileNav() {
  const { isOpen, setOpen } = useMobileMenu();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            className="absolute top-24 left-4 right-4 p-4 rounded-xl bg-cream dark:bg-charcoal shadow-xl"
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
                  onClick={() => setOpen(false)}
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
  );
}
