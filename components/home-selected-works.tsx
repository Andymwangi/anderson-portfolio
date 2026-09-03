import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data/projects";
import { TIER_ORDER, type Project } from "@/lib/project-types";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";

/** Projects flagged `featured` in the data file, ranked by tier. */
function getFeatured(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier]);
}

export function HomeSelectedWorks() {
  const featured = getFeatured();

  return (
    <Section>
      <SectionHeading
        eyebrow="Selected work"
        title="Recent projects"
        link={{ href: "/projects", label: "All work" }}
      />

      <div className="flex flex-col">
        {featured.map((project, index) => (
          <Reveal
            key={project.id}
            as="article"
            className={cn(
              "grid grid-cols-1 items-start gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14",
              index > 0 && "hairline"
            )}
          >
            <Link
              href={`/projects#project-${project.id}`}
              className={cn(
                "group relative block aspect-[16/10] w-full overflow-hidden border border-line bg-canvas-subtle lg:col-span-7",
                index % 2 === 1 && "lg:order-2"
              )}
              aria-label={`${project.title} case study`}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Link>

            <div className={cn("flex flex-col lg:col-span-5", index % 2 === 1 && "lg:order-1")}>
              <p className="caption">
                {String(index + 1).padStart(2, "0")} &middot; {project.category}
              </p>
              <h3 className="display-md mt-5">{project.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{project.client}</p>
              <p className="prose-copy mt-5">{project.des}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
              <Link href={`/projects#project-${project.id}`} className="text-link mono-label mt-8 w-fit">
                Case study
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
