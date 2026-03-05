"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        setFormData({ name: "", email: "", subject: "", message: "" });
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border-raw)",
    padding: "14px 16px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-instrument, sans-serif)",
    fontSize: "15px",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
  } as React.CSSProperties;

  return (
    <PageTransition>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>

        {/* Global backdrop */}
        <div className="fixed inset-0 -z-50 dark:bg-[#0F0D0A] bg-[#F7F4EF]" />

        {/* Dot grid */}
        <div className="fixed inset-0 dot-grid opacity-40 pointer-events-none -z-10" />

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section
          className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-6 overflow-hidden"
          style={{ borderBottom: "1px solid var(--border-raw)" }}
        >
          {/* Radial glow rings */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            {[300, 500, 700].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border"
                style={{
                  width: size,
                  height: size,
                  borderColor: `rgba(201,168,122,${0.10 - i * 0.025})`,
                  animation: `ping ${4 + i}s cubic-bezier(0,0,0.2,1) infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="font-serif font-light italic mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: "var(--text-primary)" }}
              >
                Let's{" "}
                <span
                  className="font-bold not-italic"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--text-primary) 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Connect
                </span>
              </h1>

              <p
                className="font-sans font-light text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Have a project in mind? Let's collaborate and build something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CONTACT GRID
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// Reach Out</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
                >
                  Start a Conversation
                </h2>
              </div>
              <span
                className="font-mono text-[9px] tracking-widest uppercase hidden md:block"
                style={{ color: "var(--text-muted)" }}
              >
                Nairobi, Kenya · 2026
              </span>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0"
              style={{ borderTop: "1px solid var(--border-raw)", borderLeft: "1px solid var(--border-raw)" }}
            >

              {/* ── Left: Info panels ── */}
              <div
                className="lg:col-span-4 flex flex-col"
                style={{ borderRight: "1px solid var(--border-raw)" }}
              >

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-10 flex-1"
                  style={{ borderBottom: "1px solid var(--border-raw)" }}
                >
                  {/* Big number */}
                  <div
                    className="font-serif italic font-light mb-6"
                    style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    01
                  </div>
                  <h3
                    className="font-serif italic font-light mb-8"
                    style={{ fontSize: "24px", color: "var(--text-primary)" }}
                  >
                    Contact Information
                  </h3>

                  <div className="space-y-8">
                    {[
                      {
                        icon: "solar:letter-bold",
                        label: "Email",
                        value: "anderson.mitamboo@gmail.com",
                        href: "mailto:anderson.mitamboo@gmail.com",
                      },
                      {
                        icon: "solar:phone-calling-bold",
                        label: "Phone",
                        value: "+254-700-071-699",
                        href: "tel:+254700071699",
                      },
                      {
                        icon: "solar:map-point-bold",
                        label: "Location",
                        value: "Nairobi, Kenya",
                        href: "https://www.google.com/maps/search/?api=1&query=Nairobi+Kenya",
                      },
                    ].map((contact, i) => (
                      <a
                        key={i}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group/item"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="flex-shrink-0 p-2.5 transition-colors"
                          style={{
                            background: "rgba(201,168,122,0.08)",
                            border: "1px solid rgba(201,168,122,0.18)",
                          }}
                        >
                          <iconify-icon icon={contact.icon} width="18" style={{ color: "var(--accent-bright)" }} />
                        </div>
                        <div>
                          <p
                            className="font-mono uppercase tracking-widest mb-1"
                            style={{ fontSize: "9px", color: "var(--text-muted)" }}
                          >
                            {contact.label}
                          </p>
                          <p
                            className="font-sans font-light transition-colors group-hover/item:text-[var(--accent-bright)]"
                            style={{ fontSize: "14px", color: "var(--text-secondary)" }}
                          >
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-10"
                  style={{ borderBottom: "1px solid var(--border-raw)" }}
                >
                  <div
                    className="font-serif italic font-light mb-6"
                    style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    02
                  </div>
                  <h3
                    className="font-serif italic font-light mb-8"
                    style={{ fontSize: "24px", color: "var(--text-primary)" }}
                  >
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-3 transition-all"
                        style={{
                          background: "rgba(201,168,122,0.08)",
                          border: "1px solid var(--border-raw)",
                          color: "var(--accent-bright)",
                        }}
                      >
                        <iconify-icon icon={social.icon} width="20" height="20" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-10"
                  style={{ borderBottom: "1px solid var(--border-raw)" }}
                >
                  <div
                    className="font-serif italic font-light mb-6"
                    style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    03
                  </div>
                  <h3
                    className="font-serif italic font-light mb-8"
                    style={{ fontSize: "24px", color: "var(--text-primary)" }}
                  >
                    Availability
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Available for freelance projects",
                      "Open to full-time opportunities",
                      "Consulting & collaboration welcome",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                          style={{ background: "var(--accent-bright)" }}
                        />
                        <span
                          className="font-sans font-light text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* ── Right: Form ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 p-10 md:p-14"
                style={{ borderBottom: "1px solid var(--border-raw)" }}
              >
                {/* Big number */}
                <div
                  className="font-serif italic font-light mb-6"
                  style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}
                >
                  04
                </div>
                <h3
                  className="font-serif italic font-light mb-10"
                  style={{ fontSize: "32px", color: "var(--text-primary)" }}
                >
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Name + Email row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      borderTop: "1px solid var(--border-raw)",
                      borderLeft: "1px solid var(--border-raw)",
                    }}
                  >
                    {[
                      { id: "name", label: "Name", type: "text" },
                      { id: "email", label: "Email", type: "email" },
                    ].map((field) => (
                      <div
                        key={field.id}
                        className="p-0"
                        style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
                      >
                        <label
                          htmlFor={field.id}
                          className="block font-mono uppercase tracking-widest px-5 pt-4 pb-1"
                          style={{ fontSize: "9px", color: "var(--accent-bright)" }}
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          style={{
                            ...inputStyle,
                            background: "transparent",
                            border: "none",
                            padding: "8px 20px 16px",
                          }}
                          onFocus={(e) => (e.target.style.background = "rgba(201,168,122,0.04)")}
                          onBlur={(e) => (e.target.style.background = "transparent")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div
                    style={{
                      borderTop: "1px solid var(--border-raw)",
                      borderLeft: "1px solid var(--border-raw)",
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                    }}
                  >
                    <label
                      htmlFor="subject"
                      className="block font-mono uppercase tracking-widest px-5 pt-4 pb-1"
                      style={{ fontSize: "9px", color: "var(--accent-bright)" }}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        ...inputStyle,
                        background: "transparent",
                        border: "none",
                        padding: "8px 20px 16px",
                      }}
                      onFocus={(e) => (e.target.style.background = "rgba(201,168,122,0.04)")}
                      onBlur={(e) => (e.target.style.background = "transparent")}
                    />
                  </div>

                  {/* Message */}
                  <div
                    style={{
                      borderTop: "1px solid var(--border-raw)",
                      borderLeft: "1px solid var(--border-raw)",
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="block font-mono uppercase tracking-widest px-5 pt-4 pb-1"
                      style={{ fontSize: "9px", color: "var(--accent-bright)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={8}
                      required
                      style={{
                        ...inputStyle,
                        background: "transparent",
                        border: "none",
                        padding: "8px 20px 16px",
                        resize: "none",
                      }}
                      onFocus={(e) => (e.target.style.background = "rgba(201,168,122,0.04)")}
                      onBlur={(e) => (e.target.style.background = "transparent")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-magnetic w-full py-5 font-bold flex items-center justify-center gap-3 transition-all"
                    style={{
                      background: isSubmitting ? "var(--surface-2)" : "var(--accent-bright)",
                      color: "var(--bg)",
                      border: "none",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="h-4 w-4 border-2 border-t-transparent rounded-full"
                          style={{ borderColor: "var(--bg)" }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <iconify-icon icon="solar:letter-bold" width="16" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submissionStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center font-sans font-light"
                      style={{ color: "var(--accent-bright)" }}
                    >
                      ✓ Your message has been sent successfully!
                    </motion.p>
                  )}
                  {submissionStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center font-sans font-light"
                      style={{ color: "#E05252" }}
                    >
                      ✗ Failed to send. Please try again later.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            RESPONSE STATS
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{ background: "var(--bg)" }}
        >
          <div className="max-w-7xl mx-auto">

            <div className="mb-16">
              <div className="section-label">/// Response</div>
              <h2
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
              >
                Quick Response Guarantee
              </h2>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {[
                { value: "< 24h", label: "Response Time" },
                { value: "100%", label: "Response Rate" },
                { value: "24/7", label: "Availability" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="py-12 px-8 text-center relative"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                  }}
                >
                  <div
                    className="font-serif italic font-light mb-2"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--accent-bright)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono uppercase tracking-widest"
                    style={{ fontSize: "9px", color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                  <span
                    className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--accent-bright)" }}
                  />
                </motion.div>
              ))}
            </div>

            <p
              className="font-sans font-light text-base mt-8 max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              I typically respond to all enquiries within 24 hours. For urgent matters, feel free to call directly.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}