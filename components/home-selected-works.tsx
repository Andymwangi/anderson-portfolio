"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/project-types";

const FEATURED_IDS = [10, 11, 12] as const;

function getFeatured(): Project[] {
  return FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => p != null,
  );
}

export function HomeSelectedWorks() {
  const featured = getFeatured();

  return (
    <section
      className="relative z-20 px-6 py-24 md:px-12 md:py-28 lg:px-20"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border-raw)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="border px-5 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16"
          style={{ borderColor: "var(--border-raw)" }}
        >
          {/* Header — reference: label + blurb + view all */}
          <header className="mb-14 flex flex-col gap-8 border-b pb-10 md:mb-16 md:flex-row md:items-start md:justify-between md:pb-12" style={{ borderColor: "var(--border-raw)" }}>
            <div className="max-w-xl">
              <p
                className="mb-3 font-mono text-[9px] uppercase tracking-[0.24em]"
                style={{ color: "var(--text-muted)" }}
              >
                Selected works
              </p>
              <p className="font-sans text-sm font-light leading-relaxed md:text-base" style={{ color: "var(--text-secondary)" }}>
                A snapshot of products and collaborations I&apos;ve been building recently — enterprise platforms, public
                sector systems, and high-trust digital products.
              </p>
            </div>
            <Link
              href="/projects"
              className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              View all work +
            </Link>
          </header>

          <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 lg:gap-x-16"
              >
                <div
                  className={cn(
                    "relative min-h-[220px] overflow-hidden border sm:min-h-[280px] lg:min-h-[320px]",
                    i % 2 === 1 && "lg:order-2",
                  )}
                  style={{
                    borderColor: "var(--border-raw)",
                    background: "var(--surface)",
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className={cn("flex flex-col gap-5 lg:max-w-xl", i % 2 === 1 && "lg:order-1")}>
                  <p
                    className="font-mono text-[9px] uppercase tracking-[0.22em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.category.replace(/\s+/g, " ").toUpperCase()}
                  </p>
                  <h3
                    className="font-sans text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-mono text-[9px] uppercase tracking-[0.18em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.client}
                  </p>
                  <p className="font-sans text-base font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.des}
                  </p>
                  <p className="font-sans text-xs font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.technologies.slice(0, 6).join(" · ")}
                    {project.technologies.length > 6 ? " · …" : ""}
                  </p>
                  <Link
                    href="/projects"
                    className="mt-2 inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[var(--accent-bright)]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    View on work page +
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 flex justify-center border-t pt-12 md:mt-20 md:pt-14" style={{ borderColor: "var(--border-raw)" }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border px-8 py-4 font-mono text-[9px] uppercase tracking-[0.22em] transition-colors hover:bg-[rgba(var(--accent-rgb)/0.08)]"
              style={{ borderColor: "var(--border-raw)", color: "var(--text-primary)" }}
            >
              View all work
              <span className="text-sm leading-none" aria-hidden>
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
