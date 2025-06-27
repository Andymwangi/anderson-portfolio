"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Code, Shield, Server, Database, Cpu, GitBranch, Lock, ShieldCheck, Key, FileWarning, Layers, Container, Globe, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApproachCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  colorClass: string;
  delay: number;
}

const ApproachCard = ({ icon: Icon, title, description, steps, colorClass, delay }: ApproachCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowAnimation = {
    boxShadow: [
      `0 0 15px rgba(var(--${colorClass}-rgb), 0.4)`,
      `0 0 30px rgba(var(--${colorClass}-rgb), 0.7)`,
      `0 0 15px rgba(var(--${colorClass}-rgb), 0.4)`,
    ],
  };
  const glowTransition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  const stepVariants: Variants = {
    initial: { opacity: 0, height: 0, y: 15 },
    hover: { 
      opacity: 1, 
      height: 'auto',
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        className="h-full"
      >
        <Card className={`h-full overflow-hidden border-${colorClass}/20 group-hover:border-${colorClass} dark:bg-charcoal/50 transition-all duration-500 relative flex flex-col`}>
          <motion.div
            className={`absolute inset-0 rounded-xl border-2 border-${colorClass} opacity-0 group-hover:opacity-100`}
            animate={glowAnimation}
            transition={glowTransition}
          />
          <CardHeader className={`bg-${colorClass}/10 dark:bg-${colorClass}/5 z-10`}>
            <div className="flex items-center gap-4">
              <div className={`bg-${colorClass}/20 text-${colorClass} dark:bg-${colorClass}/10 p-3 rounded-full`}>
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className={`text-xl text-${colorClass}`}>{title}</CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-6 relative z-10 flex-grow flex flex-col">
            <motion.p 
              className="text-slate-grey dark:text-cream/70 mb-6"
              animate={{ opacity: isHovered ? 0 : 1, height: isHovered ? 0 : 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            <div className="flex-grow">
              <motion.div 
                className="space-y-4"
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={{ hover: { transition: { staggerChildren: 0.1 } } }}
              >
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={stepVariants}
                      className="flex items-start gap-4 overflow-hidden"
                    >
                      <div className={`relative z-10 mt-1 bg-charcoal p-2 rounded-full border-2 border-${colorClass}/30`}>
                        <StepIcon className={`h-5 w-5 text-${colorClass}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-deep-forest dark:text-cream">{step.title}</h4>
                        <p className="text-sm text-slate-grey/80 dark:text-cream/60 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function ApproachSection() {
  const approaches = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "I build robust, scalable, and secure full-stack applications from front-end to back-end, ensuring a seamless user experience.",
      colorClass: "deep-forest",
      steps: [
        {
          title: "Frontend Development",
          description: "I create responsive, interactive user interfaces with React and Next.js, focusing on performance and accessibility.",
          icon: Cpu
        },
        {
          title: "Backend API Design",
          description: "I design and implement secure, efficient RESTful APIs and GraphQL endpoints using Node.js, Express, and NestJS.",
          icon: Server
        },
        {
          title: "Database Management",
          description: "I work with both SQL (PostgreSQL) and NoSQL (MongoDB) databases, ensuring data integrity and performance.",
          icon: Database
        }
      ],
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "I integrate security best practices throughout the development lifecycle to protect applications and user data.",
      colorClass: "warm-copper",
      steps: [
        {
          title: "Threat Modeling",
          description: "I conduct STRIDE threat modeling sessions to identify potential vulnerabilities and attack vectors before development begins.",
          icon: Shield
        },
        {
          title: "Secure Authentication",
          description: "I implement OAuth 2.0 with PKCE for secure authentication flows, along with JWT handling and proper session management.",
          icon: Lock
        },
        {
          title: "Data Protection",
          description: "I ensure all sensitive data is encrypted at rest using AES-256 and in transit with TLS 1.3, with proper key management practices.",
          icon: Key
        },
        {
          title: "Security Testing",
          description: "I perform regular penetration testing using tools like OWASP ZAP and Burp Suite to identify and remediate security vulnerabilities.",
          icon: FileWarning
        },
        {
          title: "Compliance Verification",
          description: "I ensure all systems meet regulatory requirements like GDPR, HIPAA, or PCI DSS through comprehensive security controls and documentation.",
          icon: ShieldCheck
        }
      ],
      delay: 0.3
    },
    {
      icon: Layers,
      title: "DevOps Engineering",
      description: "I implement automated workflows and infrastructure as code to ensure reliable, scalable, and efficient deployments.",
      colorClass: "slate-grey",
      steps: [
        {
          title: "Infrastructure as Code",
          description: "I define cloud resources using Terraform or AWS CloudFormation to create reproducible, version-controlled infrastructure deployments.",
          icon: Layers
        },
        {
          title: "Containerization",
          description: "I package applications in Docker containers with optimized multi-stage builds and implement orchestration with Kubernetes for scalability.",
          icon: Container
        },
        {
          title: "CI/CD Pipeline Setup",
          description: "I create automated pipelines with GitHub Actions or Jenkins that include linting, testing, security scanning, and deployment stages.",
          icon: GitBranch
        },
        {
          title: "Monitoring & Alerting",
          description: "I implement comprehensive monitoring with Prometheus and Grafana, with automated alerts for performance issues or system failures.",
          icon: BarChart
        },
        {
          title: "Disaster Recovery",
          description: "I establish robust backup strategies and disaster recovery procedures with regular testing to ensure business continuity.",
          icon: Globe
        }
      ],
      delay: 0.5
    }
  ];

  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-deep-forest dark:text-warm-copper"
      >
        My Approach
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-slate-grey dark:text-cream/70 text-center max-w-3xl mx-auto mb-12"
      >
        I combine technical expertise with a deep understanding of business needs to deliver comprehensive solutions that address complex challenges.
      </motion.p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {approaches.map((approach, index) => (
          <ApproachCard
            key={index}
            icon={approach.icon}
            title={approach.title}
            description={approach.description}
            steps={approach.steps}
            colorClass={approach.colorClass}
            delay={approach.delay}
          />
        ))}
      </div>
    </div>
  );
}


