"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import { PageHeroGrid } from "@/components/page-hero-grid";
import { SOCIAL_LINKS } from "@/lib/constants";
import {
  BUDGET_OPTIONS,
  ENGAGEMENT_RATES,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  USD_TO_KES,
} from "@/lib/contact-form";

const gridBorder = { borderColor: "var(--border-raw)" } as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldShell = (label: string, id: string, children: ReactNode, className = "") => (
    <div
      className={`min-w-0 ${className}`}
      style={{
        ...gridBorder,
        borderRight: "1px solid var(--border-raw)",
        borderBottom: "1px solid var(--border-raw)",
      }}
    >
      <label
        htmlFor={id}
        className="block px-5 pt-4 pb-1 font-mono uppercase tracking-widest"
        style={{ fontSize: "9px", color: "var(--accent-bright)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );

  const controlBase =
    "w-full bg-transparent px-5 pb-4 pt-1 font-sans text-[15px] font-light outline-none transition-colors";

  return (
    <PageTransition>
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 bg-[#FAFAFA] dark:bg-[#0D0D0D]" />

        <PageHeroGrid
          sectionLabel="/// Contact"
          title={
            <h1
              className="font-serif font-light italic"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "var(--text-primary)",
                lineHeight: 0.98,
              }}
            >
              Start a{" "}
              <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                project
              </span>
            </h1>
          }
          leftFooter={
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: "var(--accent-bright)",
                opacity: 0.85,
              }}
            >
              Nairobi · Worldwide · USD + KES
            </p>
          }
        >
          <p
            className="font-serif italic leading-relaxed md:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Share what you&apos;re building, your budget band, and when you&apos;d like to talk. I&apos;ll reply with
            clear next steps.
          </p>
          <p
            className="font-sans text-base font-light leading-relaxed md:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Indicative ranges below are in USD with Kenyan Shilling equivalents at ~{USD_TO_KES} KES per 1 USD
            (illustrative only).
          </p>
        </PageHeroGrid>

        <section
          className="relative z-20 px-6 py-24 md:px-12 md:py-28 lg:px-20"
          style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="grid grid-cols-12 gap-0"
              style={{ borderTop: "1px solid var(--border-raw)", borderLeft: "1px solid var(--border-raw)" }}
            >
              {/* Rates guide */}
              <div
                className="col-span-12 px-6 py-8 md:px-10 md:py-10"
                style={{ ...gridBorder, borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
              >
                <div className="section-label !mb-4">/// Indicative rates</div>
                <h2
                  className="mb-2 font-serif text-2xl font-light italic md:text-3xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Engagement guide
                </h2>
                <p className="mb-8 max-w-2xl font-sans text-sm font-light" style={{ color: "var(--text-muted)" }}>
                  Final quotes depend on scope and discovery. Use the form to share context — figures help me triage
                  faster.
                </p>
                <div
                  className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4"
                  style={{ borderTop: "1px solid var(--border-raw)", borderLeft: "1px solid var(--border-raw)" }}
                >
                  {ENGAGEMENT_RATES.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-2 p-5 md:p-6"
                      style={{
                        borderRight: "1px solid var(--border-raw)",
                        borderBottom: "1px solid var(--border-raw)",
                        background: "rgba(var(--accent-rgb) / 0.03)",
                      }}
                    >
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                        {row.label}
                      </p>
                      <p className="font-serif text-xl italic text-[var(--text-primary)]">{row.usd}</p>
                      <p className="font-mono text-xs" style={{ color: "var(--accent-bright)" }}>
                        {row.kes}
                      </p>
                      <p className="font-sans text-xs font-light leading-snug" style={{ color: "var(--text-secondary)" }}>
                        {row.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick channels */}
              {[
                {
                  icon: "solar:letter-bold",
                  label: "Email",
                  value: "anderson.mitamboo@gmail.com",
                  href: "mailto:anderson.mitamboo@gmail.com",
                },
                {
                  icon: "solar:map-point-bold",
                  label: "Location",
                  value: "Nairobi, Kenya",
                  href: "https://www.google.com/maps/search/?api=1&query=Nairobi+Kenya",
                  openInNewTab: true,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.openInNewTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="col-span-12 flex items-start gap-4 p-6 transition-colors hover:bg-[rgba(var(--accent-rgb)/0.04)] md:col-span-6 md:flex-col md:gap-3"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="flex-shrink-0 p-2.5"
                    style={{
                      background: "rgba(var(--accent-rgb) / 0.08)",
                      border: "1px solid rgba(var(--accent-rgb) / 0.18)",
                    }}
                  >
                    <iconify-icon icon={c.icon} width="18" style={{ color: "var(--accent-bright)" }} />
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {c.label}
                    </p>
                    <p className="font-sans text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div
                className="col-span-12 flex flex-wrap items-center gap-3 px-6 py-6 md:px-10"
                style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
              >
                <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Social
                </span>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 transition-colors hover:bg-[rgba(var(--accent-rgb)/0.08)]"
                      style={{
                        border: "1px solid var(--border-raw)",
                        color: "var(--accent-bright)",
                      }}
                    >
                      <iconify-icon icon={social.icon} width="20" height="20" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Form — visually distinct enquiry block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="col-span-12"
                style={{
                  borderRight: "1px solid var(--border-raw)",
                  borderBottom: "1px solid var(--border-raw)",
                  background: "rgba(var(--accent-rgb) / 0.06)",
                  boxShadow: "inset 0 0 0 1px rgba(var(--accent-rgb) / 0.12)",
                }}
              >
                <div
                  className="border-b px-6 py-8 md:px-10 md:py-10"
                  style={{ ...gridBorder, background: "rgba(var(--accent-rgb) / 0.04)" }}
                >
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border md:h-14 md:w-14"
                        style={{
                          borderColor: "rgba(var(--accent-rgb) / 0.45)",
                          background: "rgba(var(--accent-rgb) / 0.1)",
                          color: "var(--accent-bright)",
                        }}
                        aria-hidden
                      >
                        <iconify-icon icon="solar:document-text-bold" width="26" height="26" />
                      </div>
                      <div>
                        <p
                          className="mb-1 inline-flex items-center gap-2 rounded-sm border px-2 py-1 font-mono uppercase tracking-[0.18em]"
                          style={{
                            fontSize: "9px",
                            color: "var(--accent-bright)",
                            borderColor: "rgba(var(--accent-rgb) / 0.35)",
                            background: "rgba(var(--accent-rgb) / 0.08)",
                          }}
                        >
                          Enquiry form
                        </p>
                        <h2
                          id="contact-form-title"
                          className="mt-3 font-serif text-3xl font-light italic md:text-4xl"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Send a message
                        </h2>
                        <p
                          className="mt-2 max-w-xl font-sans text-sm font-light leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Use the <strong className="font-medium text-[var(--text-primary)]">fields below</strong> to
                          tell me about your project. When you&apos;re done, press{" "}
                          <strong className="font-medium text-[var(--accent-bright)]">Send enquiry</strong> — your
                          answers are sent as one email. Fields marked * are required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-0" aria-labelledby="contact-form-title">
                  <div
                    className="col-span-12 border-b px-6 py-4 md:px-10"
                    style={{ borderColor: "var(--border-raw)", background: "var(--bg)" }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                      Step 1 — Your contact details
                    </p>
                  </div>

                  {fieldShell(
                    "Name *",
                    "name",
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${controlBase} placeholder:text-[var(--text-muted)] placeholder:opacity-60`}
                      style={{ color: "var(--text-primary)" }}
                      onFocus={(e) => (e.target.style.background = "rgba(var(--accent-rgb) / 0.08)")}
                      onBlur={(e) => (e.target.style.background = "transparent")}
                    />,
                    "col-span-12 md:col-span-6",
                  )}

                  {fieldShell(
                    "Email *",
                    "email",
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${controlBase} placeholder:text-[var(--text-muted)] placeholder:opacity-60`}
                      style={{ color: "var(--text-primary)" }}
                      onFocus={(e) => (e.target.style.background = "rgba(var(--accent-rgb) / 0.08)")}
                      onBlur={(e) => (e.target.style.background = "transparent")}
                    />,
                    "col-span-12 md:col-span-6",
                  )}

                  <div
                    className="col-span-12 border-b px-6 py-4 md:px-10"
                    style={{ borderColor: "var(--border-raw)", background: "var(--bg)" }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                      Step 2 — Scope, budget & timing
                    </p>
                  </div>

                  {fieldShell(
                    "Service *",
                    "service",
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${controlBase} cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      style={{
                        color: formData.service ? "var(--text-primary)" : "var(--text-muted)",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      }}
                      onFocus={(e) => (e.target.style.backgroundColor = "rgba(var(--accent-rgb) / 0.08)")}
                      onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>,
                    "col-span-12 md:col-span-6",
                  )}

                  {fieldShell(
                    "Budget * (USD + KES approx.)",
                    "budget",
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className={`${controlBase} cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      style={{
                        color: formData.budget ? "var(--text-primary)" : "var(--text-muted)",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      }}
                      onFocus={(e) => (e.target.style.backgroundColor = "rgba(var(--accent-rgb) / 0.08)")}
                      onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
                    >
                      <option value="">Select a range</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b.value} value={b.label}>
                          {b.label}
                        </option>
                      ))}
                    </select>,
                    "col-span-12 md:col-span-6",
                  )}

                  {fieldShell(
                    "When to discuss *",
                    "timeline",
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`${controlBase} cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                      style={{
                        color: formData.timeline ? "var(--text-primary)" : "var(--text-muted)",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      }}
                      onFocus={(e) => (e.target.style.backgroundColor = "rgba(var(--accent-rgb) / 0.08)")}
                      onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
                    >
                      <option value="">Select timing</option>
                      {TIMELINE_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>,
                    "col-span-12 md:col-span-6",
                  )}

                  <div
                    className="col-span-12 border-b px-6 py-4 md:px-10"
                    style={{ borderColor: "var(--border-raw)", background: "var(--bg)" }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                      Step 3 — Describe the work
                    </p>
                  </div>

                  {fieldShell(
                    "Project details *",
                    "message",
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${controlBase} resize-none`}
                      style={{ color: "var(--text-primary)" }}
                      placeholder="Goals, stack, deadlines, links…"
                      onFocus={(e) => (e.target.style.background = "rgba(var(--accent-rgb) / 0.05)")}
                      onBlur={(e) => (e.target.style.background = "transparent")}
                    />,
                    "col-span-12",
                  )}

                  <div
                    className="col-span-12 space-y-4 border-t p-6 md:p-10"
                    style={{
                      borderColor: "rgba(var(--accent-rgb) / 0.25)",
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                      background: "rgba(var(--accent-rgb) / 0.04)",
                    }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                      Submit
                    </p>
                    <p className="mb-2 font-sans text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                      This button sends everything above in one message to my inbox.
                    </p>
                    <LiquidMetalButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="filled"
                      className="flex w-full items-center justify-center gap-3 py-5"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="h-4 w-4 rounded-full border-2 border-t-transparent"
                            style={{ borderColor: "currentColor" }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <iconify-icon icon="solar:letter-bold" width="16" />
                          Send enquiry
                        </>
                      )}
                    </LiquidMetalButton>

                    {submissionStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center font-sans font-light"
                        style={{ color: "var(--accent-bright)" }}
                      >
                        Message sent — I&apos;ll get back to you shortly.
                      </motion.p>
                    )}
                    {submissionStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center font-sans font-light"
                        style={{ color: "#E05252" }}
                      >
                        Couldn&apos;t send. Please email directly or try again.
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>

              {/* Response strip */}
              <div
                className="col-span-12 grid grid-cols-1 gap-0 md:grid-cols-3"
                style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
              >
                {[
                  { value: "< 24h", label: "Typical reply" },
                  { value: "100%", label: "Enquiries answered" },
                  { value: "UTC+3", label: "Nairobi time" },
                ].map((stat, i, arr) => (
                  <div
                    key={stat.label}
                    className={`border-b px-6 py-8 text-center md:border-b-0 ${i < arr.length - 1 ? "md:border-r" : ""}`}
                    style={{ borderColor: "var(--border-raw)" }}
                  >
                    <p
                      className="mb-1 font-serif text-3xl italic"
                      style={{ color: "var(--accent-bright)", lineHeight: 1 }}
                    >
                      {stat.value}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
