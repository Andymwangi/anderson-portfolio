"use client";

/// <reference path="../iconify-icon.d.ts" />
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/project-types";

const ICON_LIST_TO_ICONIFY: Record<string, string> = {
  FaReact: "simple-icons:react",
  SiNextdotjs: "simple-icons:nextdotjs",
  SiTailwindcss: "simple-icons:tailwindcss",
  SiTypescript: "simple-icons:typescript",
  SiFramer: "simple-icons:framer",
  SiAppwrite: "simple-icons:appwrite",
  SiPrisma: "simple-icons:prisma",
  SiPostgresql: "simple-icons:postgresql",
  SiPhp: "simple-icons:php",
  SiLaravel: "simple-icons:laravel",
  SiShadcnui: "simple-icons:shadcnui",
  SiJavascript: "simple-icons:javascript",
  SiDocker: "simple-icons:docker",
};

function isRealLink(url: string | null | undefined) {
  return Boolean(url && url !== "#");
}

export function ProjectShowcaseCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageLeft = index % 2 === 0;
  const textBlock = (
    <div className="flex flex-col justify-center gap-8 py-10 md:py-14 lg:py-16">
      <div>
        <p
          className="mb-3 font-mono text-[10px] uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          {project.category}
        </p>
        <h3
          className="mb-4 font-serif font-light italic"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
        <p
          className="max-w-xl font-sans font-light leading-relaxed"
          style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}
        >
          {project.des}
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <p
            className="mb-2 font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Problem
          </p>
          <p
            className="font-sans font-light leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            {project.challenge}
          </p>
        </div>
        <div>
          <p
            className="mb-2 font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            System architecture
          </p>
          <p
            className="font-sans font-light leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            {project.solution}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono"
            style={{
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 10px",
              border: "1px solid var(--border-raw)",
              color: "var(--text-muted)",
              background: "rgba(var(--accent-rgb) / 0.04)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {isRealLink(project.link) && (
          <a
            href={project.link!}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest underline-offset-4 transition-opacity hover:opacity-80"
            style={{ color: "var(--accent-bright)" }}
          >
            Live site
          </a>
        )}
        {isRealLink(project.githubLink) && (
          <a
            href={project.githubLink!}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest underline-offset-4 transition-opacity hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            Source
          </a>
        )}
        <span
          className="font-mono text-[9px] uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-[var(--border-raw)] pt-6">
        {project.iconLists.map((iconName, idx) => {
          const iconId = ICON_LIST_TO_ICONIFY[iconName];
          if (!iconId) return null;
          return (
            <div
              key={`${iconName}-${idx}`}
              className="p-2"
              style={{
                background: "rgba(var(--accent-rgb) / 0.08)",
                border: "1px solid rgba(var(--accent-rgb) / 0.2)",
              }}
            >
              <iconify-icon icon={iconId} width="16" height="16" style={{ color: "var(--accent-bright)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );

  const imageBlock = (
    <div
      className="relative min-h-[280px] w-full md:min-h-[420px] lg:min-h-[480px]"
      style={{
        border: "1px solid var(--border-raw)",
        background: "var(--bg-subtle)",
      }}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 50vw"
        style={{ filter: "grayscale(20%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(var(--accent-rgb) / 0.08)",
        }}
      />
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.36) }}
      className="grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2 lg:gap-12 lg:items-center"
      style={{ borderBottom: "1px solid var(--border-raw)" }}
    >
      {imageLeft ? (
        <>
          <div className="order-1 lg:order-1">{imageBlock}</div>
          <div className="order-2 px-6 md:px-10 lg:order-2 lg:px-4">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 px-6 md:px-10 lg:order-1 lg:px-4">{textBlock}</div>
          <div className="order-1 lg:order-2">{imageBlock}</div>
        </>
      )}
    </motion.article>
  );
}
