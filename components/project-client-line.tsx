import { cn } from "@/lib/utils";
import { STUDIO_NAME, STUDIO_URL } from "@/lib/constants";

/**
 * Renders a project's client line. Work carrying the studio label links out to
 * the studio site; client engagements stay as plain text.
 */
export function ProjectClientLine({ client, className }: { client: string; className?: string }) {
  const studioIndex = client.indexOf(STUDIO_NAME);

  if (studioIndex === -1) {
    return <p className={cn("mt-2 text-sm text-ink-muted", className)}>{client}</p>;
  }

  return (
    <p className={cn("mt-2 text-sm text-ink-muted", className)}>
      {client.slice(0, studioIndex)}
      <a
        href={STUDIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link text-ink"
      >
        {STUDIO_NAME}
        <span aria-hidden>&#8599;</span>
      </a>
      {client.slice(studioIndex + STUDIO_NAME.length)}
    </p>
  );
}
