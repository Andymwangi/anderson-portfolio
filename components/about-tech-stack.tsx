import { skillCategories, personalAttributes } from "@/lib/data/skills";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";

const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0);

export function AboutTechStack() {
  return (
    <>
      <Section id="tech-stack">
        <SectionHeading
          eyebrow="Stack"
          title="Tech & tools"
          aside={
            <p className="caption">
              {skillCategories.length} domains &middot; {totalSkills} technologies
            </p>
          }
        />

        <div className="flex flex-col">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.slug}
              as="article"
              delay={index * 0.04}
              className="hairline grid scroll-mt-28 grid-cols-1 gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div id={`tech-stack-${category.slug}`} className="sr-only" aria-hidden />
              <div className="md:col-span-4">
                <p className="caption">{category.num}</p>
                <h3 className="display-sm mt-3">{category.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{category.subtitle}</p>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-8 md:pt-1">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="tag gap-2">
                    <iconify-icon icon={skill.icon} width="14" height="14" class="text-ink-muted" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          eyebrow="Collaboration"
          title="How I work with others"
          size="md"
          aside={<p className="prose-copy">Beyond code: the habits that keep teams aligned and shipping.</p>}
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {personalAttributes.map((attribute, index) => (
            <Reveal key={attribute.name} delay={index * 0.05} className="hairline pt-6">
              <p className="caption">{String(index + 1).padStart(2, "0")}</p>
              <h4 className="mt-4 text-lg">{attribute.name}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{attribute.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
