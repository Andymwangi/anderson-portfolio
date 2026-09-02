import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";
import { AboutTechStack } from "@/components/about-tech-stack";
import { GitHubContributionsCalendar } from "@/components/github-contributions-calendar";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "About - Anderson Mwangi",
  description:
    "Full-stack developer with a security and cloud background. Based in Nairobi, Kenya, working with teams worldwide.",
};

const facts = [
  { label: "Based", value: "Nairobi, Kenya" },
  { label: "Working", value: "Remote, worldwide" },
  { label: "Currently", value: "Mobile & Backend Developer, Tradecare Africa" },
  { label: "Education", value: "BSc Information Technology, JKUAT" },
];

type Hobby = {
  title: string;
  frequency: string;
  description: string;
  details: string[];
  quote?: string;
};

const hobbies: Hobby[] = [
  {
    title: "Strength training",
    frequency: "4x per week",
    description:
      "The bedrock for discipline. A push, pull, legs split to keep physical and mental performance at their peak.",
    details: ["Push: chest, shoulders, triceps", "Pull: back and biceps, controlled movements", "Legs: the foundation of all strength"],
  },
  {
    title: "Reading & philosophy",
    frequency: "Daily",
    description: "Books that challenge mental models: strategy, psychology, and technical mastery.",
    details: ["Atomic Habits: systems design for life", "The Psychology of Money: financial mindset", "Deep Work: focus in a noisy world"],
    quote: "The quality of your life is the quality of your relationships with yourself and others.",
  },
  {
    title: "Music",
    frequency: "Constant",
    description: "The engine for productivity. Hip-hop, R&B and soul, and reggae while architecting systems.",
    details: ["Hip-hop: Kendrick Lamar, Nas, Outkast", "Soul & R&B: Lauryn Hill, neo-soul classics", "Reggae and pop for high-energy sessions"],
  },
];

function HeaderPortrait() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-canvas-subtle shadow-[0_24px_60px_-36px_rgba(0,0,0,0.5)] ring-1 ring-ink/[0.06] dark:ring-white/[0.06] lg:max-w-[320px]">
      <Image
        src="/profileimage3.jpg"
        alt="Anderson Mwangi"
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 280px, 320px"
        priority
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
        aria-hidden
      />
    </div>
  );
}

function FactsList() {
  return (
    <dl className="hairline max-w-xl">
      {facts.map((fact) => (
        <div key={fact.label} className="hairline-b grid grid-cols-12 gap-3 py-3">
          <dt className="caption col-span-4 sm:col-span-3">{fact.label}</dt>
          <dd className="col-span-8 text-[14px] leading-snug text-ink sm:col-span-9">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About"
        title={
          <>
            My <span className="accent-word">journey</span>
          </>
        }
        lead="From curiosity to expertise in digital security, full-stack development, cloud engineering, and DevOps."
        meta="Invictus maneo · I remain unvanquished"
        aside={<HeaderPortrait />}
        asideAlign="start"
      >
        <FactsList />
      </PageHeader>

      {/* Mission */}
      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">Mission</p>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-9">
            <p className="display-md max-w-3xl">
              To bridge the gap between cutting-edge technology and robust security, creating solutions that are{" "}
              <span className="accent-word">secure by design</span>, scalable by nature, and accessible to all.
            </p>
            <p className="prose-copy mt-8 max-w-xl">
              As a full-stack developer with a background in cybersecurity and DevOps, I bring a blend of product
              engineering and security principles to every project. I care about systems that hold up in production,
              under real users and real constraints.
            </p>
          </Reveal>
        </div>
      </Section>

      <AboutTechStack />

      {/* Beyond code */}
      <Section>
        <SectionHeading eyebrow="Beyond code" title="Off the clock" size="md" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <Reveal key={hobby.title} as="article" delay={index * 0.06} className="hairline flex flex-col pt-6">
              <p className="caption text-brick-bright">{hobby.frequency}</p>
              <h3 className="display-sm mt-4">{hobby.title}</h3>
              <p className="prose-copy mt-4">{hobby.description}</p>
              {hobby.quote ? (
                <p className="mt-5 border-l border-brick-bright/40 pl-4 font-serif text-base italic text-ink">
                  &ldquo;{hobby.quote}&rdquo;
                </p>
              ) : null}
              <ul className="mt-6 flex flex-col gap-2">
                {hobby.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-brick-bright" aria-hidden />
                    {detail}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* GitHub */}
      <Section tone="subtle">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Open source</p>
            <h2 className="display-md">
              Coding <span className="accent-word">rhythm</span>
            </h2>
            <p className="prose-copy mt-5">
              Public commits on GitHub over the last year, the same cadence as client work and side projects.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <GitHubContributionsCalendar />
          </Reveal>
        </div>
      </Section>

      <ClosingCta
        title="Let's build something that lasts"
        copy="Open to full-stack, mobile, and security-minded collaborations, from product teams to freelance engagements."
      />

      <Footer />
    </PageTransition>
  );
}
