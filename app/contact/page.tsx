"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE_METADATA, SOCIAL_LINKS } from "@/lib/constants";
import { sendContactEnquiry, type ContactEnquiry } from "@/lib/api/contact";
import {
  BUDGET_OPTIONS,
  ENGAGEMENT_RATES,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  USD_TO_KES,
} from "@/lib/contact-form";

const EMPTY: ContactEnquiry = {
  name: "",
  email: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

type Status = { kind: "idle" } | { kind: "sent" } | { kind: "error"; message: string };

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`field ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactEnquiry>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const setField = (name: keyof ContactEnquiry) => (value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ kind: "idle" });
    const result = await sendContactEnquiry(form);
    if (result.ok) {
      setStatus({ kind: "sent" });
      setForm(EMPTY);
    } else {
      setStatus({ kind: "error", message: result.message });
    }
    setSubmitting(false);
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Start a <span className="accent-word">project</span>
          </>
        }
        lead="Share what you are building, your budget band, and when you would like to talk. I reply with clear next steps."
        aside={
          <div className="flex w-full flex-col gap-6 lg:max-w-[380px]">
            <div>
              <p className="eyebrow mb-3">Direct</p>
              <a href={`mailto:${SITE_METADATA.email}`} className="text-link display-sm break-all">
                {SITE_METADATA.email}
              </a>
            </div>
            <dl className="hairline">
              {[
                { label: "Reply", value: "Within 24 hours" },
                { label: "Based", value: "Nairobi, Kenya · UTC+3" },
                { label: "Working", value: "Remote, worldwide" },
              ].map((row) => (
                <div key={row.label} className="hairline-b grid grid-cols-12 gap-3 py-3">
                  <dt className="caption col-span-4">{row.label}</dt>
                  <dd className="col-span-8 text-[14px] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.filter((s) => !s.href.startsWith("mailto:")).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center border border-line text-ink-secondary transition-colors hover:border-ink hover:text-ink"
                >
                  <iconify-icon icon={social.icon} width="20" height="20" />
                </a>
              ))}
            </div>
          </div>
        }
        asideAlign="start"
      />

      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Direct channels and rates */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-2">Indicative rates</p>
              <p className="text-sm text-ink-muted">
                Guide only. Final quotes depend on scope and discovery. USD figures at ~{USD_TO_KES} KES per dollar.
              </p>
              <dl className="hairline mt-6">
                {ENGAGEMENT_RATES.map((row) => (
                  <div key={row.label} className="hairline-b grid grid-cols-12 gap-4 py-4">
                    <dt className="col-span-5">
                      <span className="block text-[15px] text-ink">{row.label}</span>
                      <span className="mt-1 block text-xs text-ink-muted">{row.note}</span>
                    </dt>
                    <dd className="col-span-7 text-right">
                      <span className="block font-serif text-lg italic text-ink">{row.kes}</span>
                      <span className="caption mt-0.5 block">{row.usd}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2" noValidate={false}>
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={onChange}
                  className="field-control"
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={onChange}
                  className="field-control"
                />
              </Field>

              <Field label="Service" htmlFor="service">
                <Select name="service" required value={form.service} onValueChange={setField("service")}>
                  <SelectTrigger id="service" aria-label="Service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Budget" htmlFor="budget">
                <Select name="budget" required value={form.budget} onValueChange={setField("budget")}>
                  <SelectTrigger id="budget" aria-label="Budget">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.label}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field label="When to talk" htmlFor="timeline" className="sm:col-span-2">
                <Select name="timeline" required value={form.timeline} onValueChange={setField("timeline")}>
                  <SelectTrigger id="timeline" aria-label="When to talk">
                    <SelectValue placeholder="Select timing" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMELINE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Project details" htmlFor="message" className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Goals, stack, deadlines, links"
                  value={form.message}
                  onChange={onChange}
                  className="field-control resize-none"
                />
              </Field>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
                  {submitting ? "Sending" : "Send enquiry"}
                </Button>
                <p className="text-xs text-ink-muted">Sent as one email. I reply within a day.</p>
              </div>

              <div className="sm:col-span-2" aria-live="polite">
                {status.kind === "sent" ? (
                  <p className="text-[15px] text-brick-bright">Message sent. I will get back to you shortly.</p>
                ) : null}
                {status.kind === "error" ? (
                  <p className="text-[15px] text-ink-secondary">
                    {status.message}{" "}
                    <a href={`mailto:${SITE_METADATA.email}`} className="text-link text-ink">
                      Email directly
                    </a>
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </PageTransition>
  );
}
