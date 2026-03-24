"use client";

/// <reference path="../iconify-icon.d.ts" />
import { motion } from "framer-motion";
import type { Skill, SkillCategory } from "@/lib/data/skills";
import { skillCategories, personalAttributes } from "@/lib/data/skills";

const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0);
const featuredCategories = skillCategories.filter((c) => c.featured);
const moreCategories = skillCategories.filter((c) => !c.featured);

const borderStyle = { borderColor: "var(--border-raw)" } as const;

function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.25 }}
      className="inline-flex items-center gap-2 rounded-full border bg-[var(--bg-subtle)] px-3 py-2 transition-colors hover:border-[rgba(var(--accent-rgb)/0.35)]"
      style={borderStyle}
    >
      <Icon
        size={18}
        style={{ color: skill.color, filter: "brightness(0.92)" }}
        className="shrink-0"
      />
      <span
        className="font-mono text-[10px] uppercase leading-none tracking-[0.1em]"
        style={{ color: "var(--text-secondary)" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryBlock({
  category,
  categoryIndex,
}: {
  category: SkillCategory;
  categoryIndex: number;
}) {
  return (
    <motion.article
      id={`tech-stack-${category.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: categoryIndex * 0.06 }}
      className="scroll-mt-32 border p-6 md:p-8"
      style={{ ...borderStyle, background: "var(--bg)" }}
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <span
            className="font-serif font-light italic tabular-nums"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)", color: "var(--border-raw)", lineHeight: 1 }}
          >
            {category.num}
          </span>
          <div className="min-w-0 pt-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <iconify-icon
                icon={category.solarIcon}
                width="20"
                style={{ color: "var(--accent-bright)" }}
              />
              <h3
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", color: "var(--text-primary)" }}
              >
                {category.title}
              </h3>
              <span
                className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full"
                style={{ background: "var(--accent-bright)" }}
              />
            </div>
            <p className="max-w-prose font-sans text-sm font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {category.subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">{category.skills.map((skill, i) => (
        <SkillPill key={skill.name} skill={skill} index={i} />
      ))}</div>
    </motion.article>
  );
}

export function AboutTechStack() {
  return (
    <>
      <section
        id="tech-stack"
        className="scroll-mt-28 py-24 px-6 md:px-12 lg:px-20"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border-raw)",
          borderBottom: "1px solid var(--border-raw)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <header
            className="mb-10 flex flex-col gap-8 pb-10 md:flex-row md:items-end md:justify-between"
            style={{ borderBottom: "1px solid var(--border-raw)" }}
          >
            <div>
              <div className="section-label">/// Stack</div>
              <h2
                className="font-serif font-light italic"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "var(--text-primary)",
                }}
              >
                Tech &amp; Tools
              </h2>
              <p
                className="mt-4 max-w-xl font-sans text-sm font-light leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Grouped by how I use them day to day — from product UI through APIs, data, security, and delivery.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <span
                className="font-mono text-[9px] uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {skillCategories.length} domains · {totalSkills} technologies
              </span>
            </div>
          </header>

          <nav
            className="mb-12 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
            aria-label="Jump to stack category"
          >
            {skillCategories.map((c) => (
              <a
                key={c.slug}
                href={`#tech-stack-${c.slug}`}
                className="shrink-0 rounded-full border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:border-[rgba(var(--accent-rgb)/0.4)]"
                style={{ ...borderStyle, color: "var(--text-muted)" }}
              >
                {c.shortNavLabel}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            <div>
              <div
                className="mb-6 flex flex-col gap-2 border-b pb-4 md:flex-row md:items-baseline md:justify-between"
                style={{ borderColor: "var(--border-raw)" }}
              >
                <h3 className="font-serif text-lg font-light italic md:text-xl" style={{ color: "var(--text-primary)" }}>
                  Core delivery
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Where most shipping happens
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {featuredCategories.map((category, i) => (
                  <CategoryBlock key={category.slug} category={category} categoryIndex={i} />
                ))}
              </div>
            </div>

            <div>
              <div
                className="mb-6 flex flex-col gap-2 border-b pb-4 md:flex-row md:items-baseline md:justify-between"
                style={{ borderColor: "var(--border-raw)" }}
              >
                <h3 className="font-serif text-lg font-light italic md:text-xl" style={{ color: "var(--text-primary)" }}>
                  Data, security &amp; platforms
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Persistence, hardening, and ops
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {moreCategories.map((category, i) => (
                  <CategoryBlock key={category.slug} category={category} categoryIndex={i + featuredCategories.length} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-6 md:px-12 lg:px-20"
        style={{
          background: "var(--bg-subtle)",
          borderBottom: "1px solid var(--border-raw)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="mb-16 flex flex-col items-end justify-between gap-6 pb-8 md:flex-row"
            style={{ borderBottom: "1px solid var(--border-raw)" }}
          >
            <div>
              <div className="section-label">/// Collaboration</div>
              <h2
                className="font-serif font-light italic"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  color: "var(--text-primary)",
                }}
              >
                How I work with others
              </h2>
            </div>
            <p
              className="hidden max-w-sm text-right font-sans font-light text-sm md:block"
              style={{ color: "var(--text-secondary)" }}
            >
              Beyond code — habits that keep teams aligned and shipping.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              borderTop: "1px solid var(--border-raw)",
              borderLeft: "1px solid var(--border-raw)",
            }}
          >
            {personalAttributes.map((attribute, index) => (
              <motion.div
                key={attribute.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="relative flex flex-col gap-5 p-8 md:p-10"
                style={{
                  borderRight: "1px solid var(--border-raw)",
                  borderBottom: "1px solid var(--border-raw)",
                }}
              >
                <div
                  className="absolute right-8 top-6 font-serif font-light italic"
                  style={{ fontSize: "36px", color: "var(--border-raw)", lineHeight: 1 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative w-fit">
                  <div
                    className="p-3"
                    style={{
                      background: "rgba(var(--accent-rgb) / 0.08)",
                      border: "1px solid rgba(var(--accent-rgb) / 0.15)",
                    }}
                  >
                    <iconify-icon
                      icon={attribute.solarIcon}
                      width="24"
                      style={{ color: "var(--accent-bright)" }}
                    />
                  </div>
                  <span
                    className="absolute -right-1 -top-1 h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: "var(--accent-bright)" }}
                  />
                </div>
                <h3
                  className="font-serif font-light italic"
                  style={{ fontSize: "22px", color: "var(--text-primary)" }}
                >
                  {attribute.name}
                </h3>
                <p
                  className="font-sans font-light text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {attribute.description}
                </p>
                <div
                  className="mt-auto h-px w-8"
                  style={{ background: "var(--accent-bright)", opacity: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
