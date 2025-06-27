"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Briefcase,
  User,
  Mail,
  Award,
  GraduationCap,
  Code,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/certifications", label: "Education & Certifications", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  const showFullSidebar = isOpen || isHovered;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 flex h-full flex-col transition-all duration-300 ease-in-out",
        "bg-gradient-to-b from-cream/5 to-cream/10 dark:from-charcoal/90 dark:to-charcoal/95 backdrop-blur-sm",
        "shadow-lg shadow-deep-forest/5 dark:shadow-warm-copper/5",
        showFullSidebar ? "w-72" : "w-24",
        "rounded-r-3xl overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-24 items-center justify-center border-b border-warm-copper/10 dark:border-warm-copper/20">
        <Link 
          href="/" 
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-xl",
            "bg-gradient-to-r from-deep-forest/10 to-warm-copper/10 dark:from-deep-forest/20 dark:to-warm-copper/20",
            "transition-all duration-300"
          )}
        >
          <div className="w-10 h-10 rounded-full bg-deep-forest dark:bg-warm-copper flex items-center justify-center text-cream font-bold text-xl">
            AM
          </div>
          {showFullSidebar && (
            <span className="text-xl font-bold text-deep-forest dark:text-warm-copper">
              Portfolio
            </span>
          )}
        </Link>
      </div>
      
      <nav className="flex-1 space-y-3 px-6 py-8">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-deep-forest text-cream dark:bg-warm-copper dark:text-charcoal shadow-md"
                  : "text-slate-grey dark:text-cream/70 hover:bg-deep-forest/10 dark:hover:bg-warm-copper/10",
                !showFullSidebar && "justify-center px-2"
              )}
            >
              <route.icon className={cn(
                "h-5 w-5", 
                isActive ? "text-cream dark:text-charcoal" : "text-deep-forest dark:text-warm-copper"
              )} />
              {showFullSidebar && (
                <span className={cn(
                  "font-medium",
                  isActive ? "" : "text-slate-grey dark:text-cream/70"
                )}>
                  {route.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="mb-6 mx-6 p-4 rounded-xl bg-cream/5 dark:bg-charcoal/50 flex items-center justify-center gap-3 border border-warm-copper/10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex-1 rounded-lg hover:bg-deep-forest/10 dark:hover:bg-warm-copper/10" 
          onClick={toggle}
        >
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5 text-deep-forest dark:text-warm-copper" />
          ) : (
            <PanelRightClose className="h-5 w-5 text-deep-forest dark:text-warm-copper" />
          )}
        </Button>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;