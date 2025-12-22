"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypewriterEffect from "./typewriter-effect";

interface DynamicGreetingProps {
  name: string;
  role: string;
}

export function DynamicGreeting({ name, role }: DynamicGreetingProps) {
  const [greeting, setGreeting] = useState("");

  const roles = [
    "Full Stack Developer",
    "Cybersecurity Specialist",
    "Cloud Engineer",
    "DevOps Expert"
  ];

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
    <div className="mb-8">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-orange font-bricolage font-semibold mb-4"
      >
        {greeting}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold font-bricolage mb-4"
      >
        Hi, I'm <span className="bg-gradient-to-r from-orange via-orange-light to-orange bg-clip-text text-transparent">{name}</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 dark:text-slate-300 font-bricolage"
      >
        a Professional <TypewriterEffect words={roles} className="text-orange font-bold font-bricolage" />
      </motion.div>
    </div>
  );
}

export default DynamicGreeting;
