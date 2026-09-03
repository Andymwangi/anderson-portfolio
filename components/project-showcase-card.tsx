import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/project-types";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { ProjectClientLine } from "@/components/project-client-line";

function isRealLink(url: string | null | undefined) {
  return Boolean(url && url !== "#");
}

export function ProjectShowcaseCard({ project, index }: { project: Project; index: number }) {
  const imageLeft = index % 2 === 0;
  const hasLive = isRealLink(project.link);
  const hasSource = isRealLink(project.githubLink);
  const slides = project.images ?? [];

  return (
    <Reveal
      as="article"
      className="hairline grid scroll-mt-28 grid-cols-1 gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14"
    >
      <div id={`project-${project.id}`} className="sr-only" aria-hidden />

      <div className={cn("lg:col-span-6", imageLeft ? "lg:order-1" : "lg:order-2")}>
        {slides.length > 0 ? (
          <ProjectCarousel images={slides} label={project.title} priority={index === 0} />
        ) : (
          <div className="relative aspect-[16/11] w-full overflow-hidden border border-line bg-canvas-subtle">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )}
      </div>

      <div className={cn("flex flex-col lg:col-span-6", imageLeft ? "lg:order-2" : "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="caption">
            {String(index + 1).padStart(2, "0")} &middot; {project.category}
          </p>
          <span className="caption text-brick-bright">{project.status}</span>
        </div>

        <h3 className="display-md mt-5">{project.title}</h3>
        <ProjectClientLine client={project.client} />
        <p className="prose-copy mt-5">{project.des}</p>

        <dl className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <dt className="eyebrow mb-2">Problem</dt>
            <dd className="text-[15px] leading-relaxed text-ink-secondary">{project.challenge}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">Approach</dt>
            <dd className="text-[15px] leading-relaxed text-ink-secondary">{project.solution}</dd>
          </div>
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {hasLive || hasSource ? (
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {hasLive ? (
              <a
                href={project.link as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mono-label"
              >
                Live site
                <span aria-hidden>&#8599;</span>
              </a>
            ) : null}
            {hasSource ? (
              <a
                href={project.githubLink as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mono-label text-ink-muted"
              >
                Source
                <span aria-hidden>&#8599;</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
