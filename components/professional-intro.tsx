"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const profileImages = [
  "/profileimage.jpg",
  "/profileimage2.jpg",
  "/profileimage3.jpg"
];

export default function ProfessionalIntro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* About Me Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-slate-600 dark:text-slate-300 mb-4 font-inter leading-relaxed text-lg">
          I am a passionate Full Stack Developer with specialized expertise in Cybersecurity and Cloud Engineering.
          With over 3 years of experience, I've helped organizations build secure, scalable, and efficient digital solutions.
        </p>
        <p className="text-slate-500 dark:text-slate-400 mb-6 font-inter leading-relaxed">
          My approach combines technical excellence with a deep understanding of business needs,
          ensuring that every solution not only meets but exceeds client expectations. I'm dedicated to
          creating robust systems that stand the test of time and evolving security challenges.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-brown hover:bg-brown-dark text-white px-6 py-3 rounded-xl shadow-lg shadow-brown/30 hover:shadow-xl hover:shadow-brown/40 transition-all duration-300 font-poppins">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
            <Button variant="outline" className="border-2 border-brown hover:border-brown-dark text-slate-700 dark:text-slate-300 hover:text-brown-dark px-6 py-3 rounded-xl transition-all duration-300 font-poppins">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Profile Image Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div 
            className="absolute inset-0 overflow-hidden animate-bubble"
            style={{ 
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={profileImages[currentImageIndex]}
                  alt="Anderson Mwangi"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {profileImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? "bg-brown w-8"
                  : "bg-white/60 hover:bg-white/90 w-2"
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>


        </div>
      </motion.div>
    </div>
  );
}
