"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/lib/project-types";

const SWIPE_THRESHOLD_PX = 48;

/**
 * Screenshot carousel for a case study.
 *
 * Advance is manual only - arrows, dots, keyboard and swipe. Several of these
 * sit on the projects page at once, so nothing auto-plays; the page stays still
 * until the reader asks it to move.
 */
export function ProjectCarousel({
  images,
  label,
  className,
  priority = false,
}: {
  images: ProjectImage[];
  /** Project title, used to label the control group for screen readers. */
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count]
  );

  // Clamp if the slide set ever shrinks beneath us.
  useEffect(() => {
    setActive((i) => (i < count ? i : 0));
  }, [count]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(active + 1);
    }
  };

  const current = images[active];

  return (
    <figure className={cn("flex flex-col", className)}>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${label} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          touchStartX.current = null;
          if (start == null) return;
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
          go(dx < 0 ? active + 1 : active - 1);
        }}
        className={cn(
          "group relative aspect-[16/9] w-full overflow-hidden border border-line bg-canvas-subtle",
          "outline-none focus-visible:ring-2 focus-visible:ring-brick-bright focus-visible:ring-offset-2",
          "focus-visible:ring-offset-canvas"
        )}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
            style={{ zIndex: active === index ? 1 : 0 }}
            aria-hidden={active !== index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority && index === 0}
            />
          </motion.div>
        ))}

        {count > 1 ? (
          <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-between px-3">
            <CarouselArrow
              direction="prev"
              label={`Previous screenshot of ${label}`}
              onClick={() => go(active - 1)}
            />
            <CarouselArrow
              direction="next"
              label={`Next screenshot of ${label}`}
              onClick={() => go(active + 1)}
            />
          </div>
        ) : null}

        <p className="sr-only" aria-live="polite">
          {`Screenshot ${active + 1} of ${count}: ${current.caption}`}
        </p>
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <span className="caption">{current.caption}</span>

        {count > 1 ? (
          <span className="flex shrink-0 items-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show screenshot ${index + 1} of ${count}: ${image.caption}`}
                aria-current={active === index}
                onClick={() => go(index)}
                className="group/dot -my-2 py-2"
              >
                <span
                  className={cn(
                    "block h-px transition-all duration-300",
                    active === index
                      ? "w-6 bg-brick-bright"
                      : "w-3 bg-line group-hover/dot:bg-ink-muted"
                  )}
                />
              </button>
            ))}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

function CarouselArrow({
  direction,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "pointer-events-auto flex h-9 w-9 items-center justify-center",
        // Opaque: the raw colour tokens are plain hex vars with no
        // <alpha-value> placeholder, so Tailwind drops any /opacity modifier.
        "border border-line bg-canvas text-ink shadow-sm",
        "opacity-0 transition-opacity duration-200",
        "group-hover:opacity-100 focus-visible:opacity-100",
        "hover:border-brick-bright hover:text-brick-bright",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick-bright"
      )}
    >
      <span aria-hidden className="text-sm leading-none">
        {direction === "prev" ? "←" : "→"}
      </span>
    </button>
  );
}
