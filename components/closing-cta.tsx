import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";

type Action = { href: string; label: string };

type ClosingCtaProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  primary?: Action;
  secondary?: Action;
};

/** The single closing call to action used at the end of content pages. */
export function ClosingCta({
  eyebrow = "Next step",
  title,
  copy,
  primary = { href: "/contact", label: "Get in touch" },
  secondary = { href: "/projects", label: "View work" },
}: ClosingCtaProps) {
  return (
    <Section tone="subtle">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="display-lg">{title}</h2>
        <p className="lead mt-6 max-w-xl">{copy}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primary.href}>{primary.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={secondary.href}>{secondary.label}</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
