"use client";

import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { Coffee, Server, Shield, Search, Code, Cloud, Moon, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const daySegments = [
  {
    icon1: Coffee,
    icon2: Server,
    title: "Morning: The Architect",
    time: "9:00 AM - 12:00 PM",
    description: "Fueling up, the day begins at Coseke. I'm architecting backend microservices, designing secure APIs, and ensuring database schemas are robust and scalable. It's a world of Docker, Kubernetes, and clean code.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    cardClassName: "h-full glow-sage backdrop-blur-sm border border-border/50 glow-hover overflow-hidden",
  },
  {
    icon1: Shield,
    icon2: Search,
    title: "Midday: The Analyst",
    time: "12:00 PM - 1:00 PM",
    description: "Switching hats to a cybersecurity analyst. I scan threat intelligence feeds, review firewall logs, and hunt for vulnerabilities. It's a constant cat-and-mouse game, and I love the challenge.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    cardClassName: "h-full glow-orange backdrop-blur-sm border border-border/50 glow-hover overflow-hidden",
  },
  {
    icon1: Code,
    icon2: Cloud,
    title: "Afternoon: The Builder",
    time: "1:00 PM - 5:00 PM",
    description: "Back to development. I'm writing Python and Go, deploying services to AWS, and configuring CI/CD pipelines. It's about turning complex requirements into elegant, functional software.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    cardClassName: "h-full glow-pink backdrop-blur-sm border border-border/50 glow-hover overflow-hidden",
  },
  {
    icon1: Moon,
    icon2: Laptop,
    title: "Evening: The Freelance Maverick",
    time: "7:00 PM onwards",
    description: "The corporate day is done, but the passion isn't. I dive into freelance projects, helping startups build their MVPs or securing their applications. This is where I experiment and push creative boundaries.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1978&auto=format&fit=crop",
    cardClassName: "h-full glow-sage backdrop-blur-sm border border-border/50 glow-hover overflow-hidden",
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const DayInTheLife = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-forest dark:text-warm-copper">
          A Day in the Life
        </h2>
        <p className="text-lg text-slate-grey dark:text-cream/80 max-w-3xl mx-auto">
          Juggling the worlds of full-stack development and cybersecurity, from corporate challenges to freelance adventures.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {daySegments.map((segment, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            <Card className={segment.cardClassName}>
              <div className="relative h-40 w-full">
                <Image src={segment.image} alt={segment.title} layout="fill" objectFit="cover" className="opacity-50" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <CardHeader className="relative">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-slate-900 dark:text-slate-100">{segment.title}</CardTitle>
                  <div className="flex gap-2">
                    <segment.icon1 className="h-6 w-6 text-muted-foreground" />
                    <segment.icon2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-1">{segment.time}</p>
              </CardHeader>
              <CardContent className="transition-all duration-500 ease-in-out">
                <p className="text-slate-grey dark:text-cream/80 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {segment.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DayInTheLife;
