"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const routes = [
  { href: "/", label: "HOME", icon: "solar:home-2-bold" },
  { href: "/about", label: "ABOUT", icon: "solar:user-bold" },
  { href: "/projects", label: "WORK", icon: "solar:case-bold" },
  { href: "/skills", label: "STACK", icon: "solar:code-bold" },
  { href: "/experience", label: "EXPERIENCE", icon: "solar:history-bold" },
  { href: "/contact", label: "CONTACT", icon: "solar:letter-bold" },
];

export function MobileNav() {
  const { isOpen, setOpen } = useMobileMenu();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-[280px] z-[70] bg-[#0a0806]/95 border-l border-accent/10 md:hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-8 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif italic font-bold text-xl text-white">
                  Anderson<span className="text-accent not-italic">.Dev</span>
                </span>
                <button 
                  onClick={() => setOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <iconify-icon icon="solar:close-circle-bold" width="32"></iconify-icon>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 flex-1 relative">
                {routes.map((route, index) => {
                  const isActive = pathname === route.href;
                  return (
                    <motion.div
                      key={route.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-4 px-4 py-4 transition-all duration-300 group relative",
                          isActive 
                            ? "text-accent" 
                            : "text-gray-400 hover:text-white"
                        )}
                      >
                        <iconify-icon 
                          icon={route.icon} 
                          width="24"
                          class={cn(
                            "transition-colors",
                            isActive ? "text-accent" : "text-gray-500 group-hover:text-accent"
                          )}
                        ></iconify-icon>
                        <span className="font-serif italic text-lg tracking-wide">{route.label}</span>
                        
                        {isActive && (
                          <motion.div
                            layoutId="mobile-nav-indicator"
                            className="absolute bottom-1 left-4 right-4 h-[2px] bg-accent"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="mt-auto space-y-6">
                <div className="flex items-center justify-between pt-6 border-t border-accent/10">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Theme</span>
                  <ThemeToggle />
                </div>
                
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full border border-accent/20 bg-accent/5 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-black transition-all duration-300">
                    Let's Talk
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
