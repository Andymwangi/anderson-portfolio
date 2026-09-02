"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const SLIDES = [
  { src: "/profileimage.jpg", alt: "Anderson Mwangi", caption: "Nairobi" },
  { src: "/profileimage2.jpg", alt: "Anderson Mwangi at graduation", caption: "JKUAT graduation" },
  { src: "/profileimage3.jpg", alt: "Anderson Mwangi, portrait", caption: "Building, always" },
] as const;

const INTERVAL_MS = 5500;

/**
 * Hero portrait with a slow crossfade between three photographs.
 * The frame is deliberately soft: no hard rule, a faint accent wash behind,
 * and a bottom fade into the canvas so the image belongs to the section.
 */
export function HeroProfileCarousel({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = SLIDES.length;

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(id);
  }, [count, reduceMotion]);

  return (
    <figure className={cn("relative w-full max-w-[340px] lg:max-w-[400px]", className)}>
      {/* Ambient wash that ties the portrait to the canvas */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl dark:opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(var(--accent-rgb) / 0.18), rgba(var(--accent-rgb) / 0.04) 60%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-canvas-subtle shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] ring-1 ring-ink/[0.06] dark:shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] dark:ring-white/[0.06]">
        {SLIDES.map((slide, idx) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === idx ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: active === idx ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 340px, 400px"
              priority={idx === 0}
            />
          </motion.div>
        ))}

        {/* Bottom dissolve into the page canvas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5"
          style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
          aria-hidden
        />
        {/* Soft inner vignette so the edges do not read as a hard cut-out */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] rounded-2xl"
          style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.12)" }}
          aria-hidden
        />
      </div>

      <figcaption className="relative z-[3] -mt-6 flex items-center justify-between px-1">
        <span className="caption">{SLIDES[active].caption}</span>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Portrait selector">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={active === idx}
              aria-label={`Portrait ${idx + 1} of ${count}`}
              onClick={() => setActive(idx)}
              className={cn(
                "h-px transition-all duration-300",
                active === idx ? "w-6 bg-brick-bright" : "w-3 bg-line hover:bg-ink-muted"
              )}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
