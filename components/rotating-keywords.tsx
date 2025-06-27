"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_KEYWORDS } from '@/lib/constants';

export default function RotatingKeywords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_KEYWORDS.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={HERO_KEYWORDS[index]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-deep-forest dark:text-warm-copper font-medium"
      >
        {HERO_KEYWORDS[index]}
      </motion.span>
    </AnimatePresence>
  );
}
