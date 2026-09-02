import type { Metadata } from "next";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "Education & certifications - Anderson Mwangi",
  description: "Degree and industry credentials in cybersecurity, data, and backend engineering.",
};

const education = {
  degree: "BSc Information Technology",
  institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
  location: "Nairobi, Kenya",
  period: "2021 – 2025",
  status: "Graduated, Second Class Honours (Upper Division)",
  description:
    "A comprehensive programme covering software development, cybersecurity, database management, and cloud computing.",
  highlights: [
    "Specialised in cybersecurity and cloud computing",
    "Advanced coursework in network security",
    "Multiple technology innovation projects",
    "Secure system design and database optimisation focus",
  ],
};

type Certification = {
  title: string;
  issuer: string;
  year: string;
  status: "Completed" | "In progress";
  description: string;
  skills: string[];
  verificationUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Junior Cybersecurity Certificate",
    issuer: "Cisco Networking Academy",
    year: "2024",
    status: "Completed",
    description: "Cybersecurity fundamentals covering threat analysis, network security, and incident response.",
    skills: ["Network security", "Threat analysis", "Incident response", "Security protocols"],
  },
  {
    title: "Endpoint Security Certificate",
    issuer: "Cisco Networking Academy",
    year: "2024",
    status: "Completed",
    description: "Securing endpoints, operating systems, and networks against common attack vectors.",
    skills: ["Endpoint hardening", "OS security", "Network defence"],
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    status: "Completed",
    description: "Data science foundations in Python, including analysis, visualisation, and machine learning basics.",
    skills: ["Python", "Data analysis", "Visualisation", "Machine learning basics"],
  },
  {
    title: "IBM Data Engineering Certificate",
    issuer: "IBM",
    year: "2024",
    status: "Completed",
    description: "Data engineering programme covering ETL processes, data warehousing, and big data technologies.",
    skills: ["ETL", "Data warehousing", "Big data", "Database design"],
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    year: "Ongoing",
    status: "In progress",
    description: "Security operations: monitoring, threat hunting, digital forensics, and SOC workflows.",
    skills: ["Security monitoring", "Threat hunting", "Digital forensics", "SOC operations"],
  },
  {
    title: "Backend Development Programme",
    issuer: "ALX",
    year: "Ongoing",
    status: "In progress",
    description: "Intensive backend programme focused on scalable system design and modern engineering practice.",
    skills: ["System design", "API development", "Database optimisation", "DevOps"],
  },
];

function isRealUrl(url?: string) {
  return Boolean(url && url !== "#");
}

export default function CertificationsPage() {
  const completed = certifications.filter((c) => c.status === "Completed").length;

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Credentials"
        title={
          <>
            Education &amp; <span className="accent-word">certifications</span>
          </>
        }
        lead="A degree in information technology alongside industry credentials in cybersecurity, data, and backend engineering."
        meta="JKUAT · Cisco · IBM · ALX"
        aside={
          <dl className="hairline grid w-full grid-cols-3 lg:max-w-[380px]">
            {[
              { value: "1", label: "Degree" },
              { value: String(completed), label: "Completed" },
              { value: String(certifications.length - completed), label: "In progress" },
            ].map((stat, i) => (
              <div key={stat.label} className={`py-5 ${i > 0 ? "border-l border-line pl-5" : ""}`}>
                <dd className="display-md accent-word">{stat.value}</dd>
                <dt className="caption mt-2">{stat.label}</dt>
              </div>
            ))}
          </dl>
        }
      />

      <Section bordered={false}>
        <SectionHeading eyebrow="Education" title="Degree" size="md" />
        <Reveal as="article" className="hairline grid grid-cols-1 gap-8 py-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="caption text-brick-bright">{education.period}</p>
            <p className="caption mt-1.5">{education.location}</p>
            <p className="mt-6 text-[15px] text-ink">{education.status}</p>
          </div>
          <div className="md:col-span-8">
            <h3 className="display-md">{education.degree}</h3>
            <p className="mt-2 text-[15px] text-ink-secondary">{education.institution}</p>
            <p className="prose-copy mt-5 max-w-2xl">{education.description}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {education.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-secondary">
                  <span className="mt-3 h-px w-3 shrink-0 bg-brick-bright" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional credentials"
          aside={
            <p className="caption">
              {completed} completed &middot; {certifications.length - completed} in progress
            </p>
          }
        />
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} as="article" delay={index * 0.05} className="hairline flex flex-col pt-6">
              <div className="flex items-center justify-between gap-4">
                <p className="caption">
                  {cert.issuer} &middot; {cert.year}
                </p>
                <span className={cert.status === "Completed" ? "caption text-brick-bright" : "caption"}>
                  {cert.status}
                </span>
              </div>
              <h3 className="display-sm mt-4">{cert.title}</h3>
              <p className="prose-copy mt-3 flex-1">{cert.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
              {isRealUrl(cert.verificationUrl) ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mono-label mt-6 w-fit"
                >
                  Verify credential
                  <span aria-hidden>&#8599;</span>
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Credentials are the floor, not the ceiling"
        copy="See how the training shows up in shipped systems, or get in touch about a project."
        primary={{ href: "/projects", label: "View work" }}
        secondary={{ href: "/contact", label: "Get in touch" }}
      />

      <Footer />
    </PageTransition>
  );
}
