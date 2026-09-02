"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { HeroProfileCarousel } from "@/components/hero-profile-carousel";
import { TechMarquee, type MarqueeItem } from "@/components/tech-marquee";
import { HomeSelectedWorks } from "@/components/home-selected-works";
import { ClosingCta } from "@/components/closing-cta";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const STACK: readonly MarqueeItem[] = [
  { name: "React", icon: "simple-icons:react" },
  { name: "React Native", icon: "simple-icons:react" },
  { name: "Expo", icon: "simple-icons:expo" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
  { name: "NestJS", icon: "simple-icons:nestjs" },
  { name: "Go", icon: "simple-icons:go" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql" },
  { name: "MongoDB", icon: "simple-icons:mongodb" },
  { name: "Prisma", icon: "simple-icons:prisma" },
  { name: "Docker", icon: "simple-icons:docker" },
  { name: "AWS", icon: "simple-icons:amazonwebservices" },
];

const SERVICES = [
  {
    num: "01",
    title: "Full-stack engineering",
    description:
      "End-to-end web platforms with React, Next.js, NestJS, and PostgreSQL. Typed from the database to the browser.",
    items: ["React & Next.js", "Node.js & NestJS", "Database design"],
  },
  {
    num: "02",
    title: "Mobile, offline-first",
    description:
      "React Native and Expo apps that keep working without signal, with local storage as the source of truth and background sync.",
    items: ["React Native & Expo", "Local-first data", "Background sync"],
  },
  {
    num: "03",
    title: "Security & cloud",
    description:
      "Hardened APIs, role-based access, and AWS infrastructure with automated delivery. Secure by design, not by afterthought.",
    items: ["Security audits", "AWS & Docker", "CI/CD pipelines"],
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="container-x flex min-h-[calc(100vh-4.25rem)] flex-col justify-center py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-7">
            <motion.p className="eyebrow mb-8" {...enter(0.05)}>
              Full-stack &middot; Mobile &middot; Security &middot; Cloud
            </motion.p>

            <motion.h1 className="display-xl" {...enter(0.12)}>
              <span className="block">Anderson</span>
              <span className="accent-word block">Mwangi</span>
            </motion.h1>

            <motion.p className="lead mt-8 max-w-lg" {...enter(0.22)}>
              I build production-grade systems, from offline-first mobile apps to hardened backend APIs and cloud
              infrastructure. Based in Nairobi, working globally.
            </motion.p>

            <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" {...enter(0.3)}>
              <Button asChild size="lg">
                <Link href="/projects">View projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">About me</Link>
              </Button>
            </motion.div>

            <motion.p className="caption mt-12 flex items-center gap-3" {...enter(0.4)}>
              <span className="h-1.5 w-1.5 rounded-full bg-brick-bright" aria-hidden />
              Currently Mobile &amp; Backend Developer at Tradecare Africa
            </motion.p>
          </div>

          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
            {...enter(0.08)}
          >
            <HeroProfileCarousel />
          </motion.div>
        </div>
      </section>

      <TechMarquee items={STACK} />

      {/* What I do */}
      <Section bordered={false}>
        <SectionHeading
          eyebrow="Services"
          title="What I do"
          aside={
            <p className="prose-copy">
              Three disciplines, one standard: systems that are secure, scalable, and pleasant to use.
            </p>
          }
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.num} as="article" delay={index * 0.08} className="hairline flex flex-col pt-6">
              <p className="caption">{service.num}</p>
              <h3 className="display-sm mt-6">{service.title}</h3>
              <p className="prose-copy mt-4 flex-1">{service.description}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {service.items.map((item) => (
                  <li key={item} className="caption flex items-center gap-3">
                    <span className="h-px w-3 bg-brick-bright" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <HomeSelectedWorks />

      <ClosingCta
        eyebrow="Let's collaborate"
        title="Let's build something that lasts"
        copy="Open to full-stack, mobile, and security-minded work, from product teams to freelance engagements."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/experience", label: "See experience" }}
      />

      <Footer />
    </PageTransition>
  );
}
