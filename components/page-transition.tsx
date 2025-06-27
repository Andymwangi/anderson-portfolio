"use client"

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const bannerImages: { [key: string]: string } = {
  '/projects': 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2940&auto=format&fit=crop',
  '/skills': 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2940&auto=format&fit=crop',
  '/certifications': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop',
  '/contact': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
  '/experience': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
  '/education': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2940&auto=format&fit=crop',
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const bannerImage = bannerImages[pathname];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {bannerImage && (
        <div
          className="absolute top-0 left-0 w-full h-[400px] -z-10 opacity-20 dark:opacity-5"
          style={{
            backgroundImage: `url('${bannerImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
