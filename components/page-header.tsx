import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  /** Display heading. Wrap one word in <span className="accent-word"> for emphasis. */
  title: ReactNode;
  /** One or two sentence introduction, shown under the title on the left */
  lead?: ReactNode;
  /** Small mono meta line under the lead (location, date, scope) */
  meta?: ReactNode;
  /**
   * Page-specific content for the right column: a portrait, filters, a status card.
   * This is what keeps each page's opening distinct while the skeleton stays shared.
   */
  aside?: ReactNode;
  /** Vertical alignment of the aside against the title block */
  asideAlign?: "end" | "center" | "start";
  /** Extra content rendered under the lead and meta, in the left column */
  children?: ReactNode;
  className?: string;
};

/** Sub-page opening block: eyebrow, display title and lead on the left, page-specific aside on the right. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
  aside,
  asideAlign = "end",
  children,
  className,
}: PageHeaderProps) {
  const alignClass =
    asideAlign === "center" ? "lg:justify-center" : asideAlign === "start" ? "lg:justify-start" : "lg:justify-end";

  return (
    <header className={cn("hairline-b pb-14 pt-14 md:pb-20 md:pt-24", className)}>
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={cn("animate-fade-up flex flex-col", aside ? "lg:col-span-7" : "lg:col-span-8")}>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="display-xl">{title}</h1>
          {lead ? <p className="lead mt-8 max-w-xl">{lead}</p> : null}
          {meta ? <p className="caption mt-5">{meta}</p> : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
        {aside ? (
          <div className={cn("flex animate-fade-up flex-col [animation-delay:120ms] lg:col-span-5", alignClass)}>
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}
