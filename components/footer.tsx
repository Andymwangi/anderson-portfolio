"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'Visitor',
          email: formData.email,
          subject: 'New Project Inquiry from Footer',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <footer className="bg-[#020202] pt-32 pb-10 px-6 border-t border-accent/10 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5 flex justify-center">
        <span className="text-[16vw] font-serif italic font-black text-white whitespace-nowrap">
          ANDERSON
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Contact Form Section */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-serif italic text-white mb-2">Start a Project?</h3>
          <p className="text-gray-400 text-sm mb-6 font-sans">Send me a message and let's bring your ideas to life</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="bg-white/5 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white font-sans disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="bg-white/5 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white font-sans disabled:opacity-50"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={4}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white font-sans resize-none disabled:opacity-50"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-black px-8 py-3 rounded font-bold text-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm font-mono">✓ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm font-mono">✗ Failed to send. Please try again.</p>
              )}
            </div>
          </form>
        </div>

        {/* Links Section - Horizontal layout on the right */}
        <div className="flex justify-end">
          <div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
            <div className="flex flex-col gap-3">
              <span className="text-white">Socials</span>
              {SOCIAL_LINKS.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white">Navigate</span>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono uppercase">
        <span>© {new Date().getFullYear()} ANDERSON MWANGI. ALL RIGHTS RESERVED.</span>
        <span className="mt-2 md:mt-0 text-gray-500">DESIGNED WITH PASSION</span>
      </div>
    </footer>
  );
}
