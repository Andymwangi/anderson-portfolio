"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SLIDES = [
  { src: "/profileimage.jpg", alt: "Anderson Mwangi" },
  { src: "/profileimage2.jpg", alt: "Anderson Mwangi — graduation portrait" },
  { src: "/profileimage3.jpg", alt: "Anderson Mwangi — professional portrait" },
] as const;

const INTERVAL_MS = 5500;

export function HeroProfileCarousel() {
  const [active, setActive] = useState(0);
  const count = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div
      className="relative w-[min(100%,280px)] sm:w-[300px] md:w-[min(320px,36vw)] lg:w-[min(360px,34vw)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.06] dark:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.65)] dark:ring-white/[0.08]"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
        {SLIDES.map((slide, idx) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === idx ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: active === idx ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 320px, 360px"
              priority={idx === 0}
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-auto absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className="h-2 w-2 rounded-full transition-opacity duration-300 hover:opacity-80"
            style={{
              background: "var(--accent-bright)",
              opacity: active === idx ? 1 : 0.35,
            }}
            aria-label={`Portrait ${idx + 1} of ${count}`}
            aria-current={active === idx ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
