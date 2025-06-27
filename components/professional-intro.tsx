"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function ProfessionalIntro() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-deep-forest dark:text-warm-copper">
          Professional Summary
        </h3>
        <p className="text-slate-grey dark:text-cream/80 mb-4">
          I am a passionate Full Stack Developer with specialized expertise in Cybersecurity and Cloud Engineering. 
          With over 3 years of experience, I've helped organizations build secure, scalable, and efficient digital solutions.
        </p>
        <p className="text-slate-grey dark:text-cream/80 mb-6">
          My approach combines technical excellence with a deep understanding of business needs, 
          ensuring that every solution not only meets but exceeds client expectations. I'm dedicated to 
          creating robust systems that stand the test of time and evolving security challenges.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-deep-forest hover:bg-deep-forest/90 text-cream">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
            <Button variant="outline" className="border-warm-copper text-warm-copper hover:bg-warm-copper/10 hover:text-gray-700 dark:hover:text-warm-copper">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Creative Image with Sketched Outline */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-4 bg-gradient-to-br from-deep-forest to-warm-copper rounded-lg overflow-hidden">
            <Image
              src="/profileimage.png"
              alt="Anderson Mwangi"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          
          {/* Sketched Outline Effect */}
          <div className="absolute inset-0 border-2 border-dashed border-warm-copper rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 border-2 border-dotted border-deep-forest rounded-lg transform -rotate-2"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-warm-copper"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-deep-forest"></div>
        </div>
      </motion.div>
    </div>
  );
}
