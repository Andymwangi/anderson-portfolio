"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { SOCIAL_LINKS } from "@/lib/constants";
import Script from "next/script";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [unicornLoaded, setUnicornLoaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Initialize Unicorn Studio after script loads
    if (typeof window !== 'undefined' && (window as any).UnicornStudio && !unicornLoaded) {
      (window as any).UnicornStudio.init();
      setUnicornLoaded(true);
    }
  }, [unicornLoaded]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* GLOBAL BACKDROP */}
        <div className="fixed inset-0 bg-[#050403] -z-50"></div>

        {/* 3D BACKGROUND (Unicorn Studio) */}
        <div 
          className="fixed top-0 w-full h-screen -z-10 aura-filter" 
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
            filter: 'sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.8)'
          }}
        >
          <div className="absolute w-full h-full left-0 top-0 -z-10">
            <div data-us-project="NMlvqnkICwYYJ6lYb064" className="absolute w-full h-full left-0 top-0 -z-10"></div>
          </div>
        </div>

        {/* Unicorn Studio Script */}
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            `
          }}
        />

        {/* Iconify Script for Solar Icons */}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />

        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] w-full flex items-center justify-center py-32 px-6">
          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Get In Touch</span>
              </div>
              <h1 className="font-serif italic text-5xl md:text-7xl text-black dark:text-white mb-6 leading-tight">
                Let's <span className="text-accent not-italic font-bold">Connect</span>
              </h1>
              <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                Have a project in mind? Let's collaborate and build something amazing together
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-gray-200 dark:border-accent/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Contact Info - Left Column */}
              <div className="lg:col-span-5 space-y-6">
                {/* Contact Information Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group"
                >
                  <div className="scan-line"></div>
                  <h3 className="font-serif italic text-2xl text-black dark:text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: "letter",
                        label: "Email",
                        value: "anderson.mitamboo@gmail.com",
                        href: "mailto:anderson.mitamboo@gmail.com"
                      },
                      {
                        icon: "phone-calling",
                        label: "Phone",
                        value: "+254-700-071-699",
                        href: "tel:+254700071699"
                      },
                      {
                        icon: "map-point",
                        label: "Location",
                        value: "Nairobi, Kenya",
                        href: "https://www.google.com/maps/search/?api=1&query=Nairobi+Kenya"
                      }
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform"
                      >
                        <div className="p-3 bg-accent/10 rounded-full flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                          <iconify-icon icon={`solar:${contact.icon}-bold`} width="20" className="text-accent"></iconify-icon>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">{contact.label}</p>
                          <p className="text-black dark:text-white font-sans group-hover/item:text-accent transition-colors">{contact.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group"
                >
                  <div className="scan-line"></div>
                  <h3 className="font-serif italic text-2xl text-black dark:text-white mb-6">Connect With Me</h3>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-accent/10 rounded-full hover:bg-accent hover:text-black transition-all text-accent"
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Availability Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group"
                >
                  <div className="scan-line"></div>
                  <h3 className="font-serif italic text-2xl text-black dark:text-white mb-6">Availability</h3>
                  <div className="space-y-3">
                    {[
                      "Available for freelance projects",
                      "Open to full-time opportunities",
                      "Consulting & collaboration welcome"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-gray-900 dark:text-gray-300 text-sm font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form - Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 glass-panel spotlight-card rounded-2xl p-8 relative group"
              >
                <div className="scan-line"></div>
                <h3 className="font-serif italic text-2xl text-black dark:text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-accent tracking-widest uppercase mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors font-sans"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-accent tracking-widest uppercase mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-accent tracking-widest uppercase mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors font-sans"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-accent tracking-widest uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none font-sans"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all btn-magnetic flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="h-4 w-4 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <iconify-icon icon="solar:letter-bold" width="16"></iconify-icon>
                        Send Message
                      </>
                    )}
                  </button>

                  {submissionStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-accent font-sans"
                    >
                      ✓ Your message has been sent successfully!
                    </motion.p>
                  )}
                  {submissionStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-400 font-sans"
                    >
                      ✗ Failed to send message. Please try again later.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RESPONSE TIME SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel spotlight-card rounded-2xl p-12 text-center relative group"
            >
              <div className="scan-line"></div>
              <h3 className="font-serif italic text-3xl text-black dark:text-white mb-4">Quick Response Guarantee</h3>
              <p className="text-gray-900 dark:text-gray-300 mb-8 font-sans max-w-2xl mx-auto">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call directly.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "< 24h", label: "Response Time" },
                  { value: "100%", label: "Response Rate" },
                  { value: "24/7", label: "Availability" },
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-serif italic">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-800 dark:text-gray-400 font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <span className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageTransition>
  );
}
