"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DynamicGreetingProps {
  name: string;
  role: string;
}

export function DynamicGreeting({ name, role }: DynamicGreetingProps) {
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = "";
    
    if (hour >= 5 && hour < 12) {
      newGreeting = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
      newGreeting = "Good Afternoon!";
    } else {
      newGreeting = "Good Evening!";
    }
    
    setGreeting(newGreeting);
  }, []);
  
  return (
    <div className="mb-6">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl text-warm-copper mb-2"
      >
        {greeting}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        Hi, I'm <span className="text-warm-copper">{name}</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-grey dark:text-cream/80 mt-2"
      >
        a Professional {role}
      </motion.h2>
    </div>
  );
}

export default DynamicGreeting;
