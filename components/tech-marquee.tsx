"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type MarqueeItem = { name: string; icon: string };

type TechMarqueeProps = {
  items: readonly MarqueeItem[];
  className?: string;
};

function Track({ items, hidden }: { items: readonly MarqueeItem[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16" aria-hidden={hidden}>
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-3 whitespace-nowrap">
          <iconify-icon icon={item.icon} width="18" height="18" class="text-ink-muted" />
          <span className="font-serif text-lg italic text-ink-secondary">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Calm, continuous strip of the working stack. Pauses on hover and respects reduced motion. */
export function TechMarquee({ items, className }: TechMarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={cn("hairline hairline-b py-6", className)}>
        <ul className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li key={item.name} className="flex items-center gap-2">
              <iconify-icon icon={item.icon} width="16" height="16" class="text-ink-muted" />
              <span className="font-serif text-base italic text-ink-secondary">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cn("hairline hairline-b marquee-mask overflow-hidden py-6", className)}>
      <div className="animate-marquee flex w-max">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </div>
  );
}
