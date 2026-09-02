import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Subtle sections sit on the slightly lifted canvas tone */
  tone?: "default" | "subtle";
  /** Draw the hairline above the section; on by default */
  bordered?: boolean;
  /** Smaller vertical rhythm for supporting sections */
  compact?: boolean;
};

/** Standard page section: hairline, consistent vertical rhythm, centred container. */
export function Section({
  children,
  id,
  className,
  tone = "default",
  bordered = true,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        bordered && "hairline",
        tone === "subtle" && "bg-canvas-subtle",
        compact ? "py-14 md:py-20" : "py-20 md:py-28",
        id && "scroll-mt-24",
        className
      )}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  /** Supporting copy or a link rendered on the right on large screens */
  aside?: ReactNode;
  /** Optional link rendered as the aside */
  link?: { href: string; label: string };
  size?: "lg" | "md";
  className?: string;
};

/** Eyebrow plus display title on the left, optional aside on the right, hairline below. */
export function SectionHeading({ eyebrow, title, aside, link, size = "lg", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "hairline-b mb-12 flex flex-col gap-6 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className={size === "lg" ? "display-lg" : "display-md"}>{title}</h2>
      </div>
      {aside ? <div className="max-w-sm md:text-right">{aside}</div> : null}
      {link ? (
        <Link href={link.href} className="text-link mono-label shrink-0">
          {link.label}
          <span aria-hidden>&rarr;</span>
        </Link>
      ) : null}
    </div>
  );
}
