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
  { href: "/certifications", label: "Certifications", icon: Award },
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
        "bg-white/95 dark:bg-slate-900/50 backdrop-blur-lg border-r border-slate-200 dark:border-slate-800/50",
        "shadow-lg shadow-black/5 dark:shadow-black/10",
        showFullSidebar ? "w-56" : "w-16",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo/Brand */}
      <div className="flex h-16 items-center justify-center border-b border-slate-200 dark:border-slate-800/50">
        <Link
          href="/"
          className="flex items-center gap-2 px-2"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-orange/20">
            <img
              src="/logo.png"
              alt="Anderson Mwangi Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {showFullSidebar && (
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-poppins">
              Portfolio
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-orange text-white shadow-md shadow-orange/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-orange",
                !showFullSidebar && "justify-center px-2"
              )}
            >
              <route.icon className="h-4 w-4 flex-shrink-0" />
              {showFullSidebar && (
                <span className="text-xs font-medium font-inter">
                  {route.label}
                </span>
              )}

              {/* Tooltip for collapsed state */}
              {!showFullSidebar && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 dark:bg-slate-800 text-slate-100 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {route.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Controls */}
      <div className="p-2 space-y-2 border-t border-slate-200 dark:border-slate-800/50">
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-orange text-slate-600 dark:text-slate-400 transition-colors"
            onClick={toggle}
          >
            {isOpen ? (
              <PanelLeftClose className="h-3.5 w-3.5" />
            ) : (
              <PanelRightClose className="h-3.5 w-3.5" />
            )}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
