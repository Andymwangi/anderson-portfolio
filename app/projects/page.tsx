"use client";

import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ProjectShowcaseCard } from "@/components/project-showcase-card";
import { ClosingCta } from "@/components/closing-cta";
import { useProjects } from "@/hooks";

export default function ProjectsPage() {
  const { projects, filteredProjects, categories, filters, setFilter } = useProjects();
  const displayCategories = ["All", ...categories];

  const filterPanel = (
    <div className="flex w-full flex-col gap-4 lg:max-w-[360px]">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow">Filter</p>
        <p className="caption" aria-live="polite">
          {filteredProjects.length} of {projects.length}
        </p>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {displayCategories.map((category) => {
          const isActive = filters.category === category || (category === "All" && !filters.category);
          return (
            <Button
              key={category}
              type="button"
              variant="chip"
              size="sm"
              data-active={isActive}
              aria-pressed={isActive}
              onClick={() => setFilter("category", category === "All" ? null : category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">
        Enterprise platforms, public-sector systems, and product work. Each case study covers the problem, the
        approach, and the stack.
      </p>
    </div>
  );

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Selected <span className="accent-word">works</span>
          </>
        }
        meta={`${projects.length} case studies · Enterprise · Product · Freelance`}
        aside={filterPanel}
      />

      <Section bordered={false} className="pt-0 md:pt-0">
        <div className="flex flex-col [&>article:first-child]:border-t-0">
          {filteredProjects.map((project, index) => (
            <ProjectShowcaseCard key={project.id} project={project} index={index} />
          ))}
          {filteredProjects.length === 0 ? (
            <p className="prose-copy py-16 text-center">No projects in this category yet.</p>
          ) : null}
        </div>
      </Section>

      <ClosingCta
        title="Have a system in mind?"
        copy="Tell me about the problem, the users, and the constraints. I'll reply with clear next steps."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/experience", label: "See experience" }}
      />

      <Footer />
    </PageTransition>
  );
}
