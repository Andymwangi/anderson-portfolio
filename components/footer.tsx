"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SOCIAL_LINKS } from "@/lib/constants";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];

const services = [
    "Full Stack Development",
    "Cybersecurity Solutions",
    "Cloud Engineering",
    "DevOps & CI/CD",
    "Technical Consulting",
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate newsletter subscription
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <div className="relative overflow-hidden pb-16">
          {/* Organic SVG Blob Container */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="w-full h-full min-h-screen" viewBox="0 0 1440 900" preserveAspectRatio="none">
              <path
                d="M0,120 C240,30 480,210 720,120 C1000,30 1440,250 1440,600 L1440,900 L0,900 Z"
                fill="#8B6F47"
              />
            </svg>
          </div>
          
          {/* Footer content positioned within blob */}
          <footer className="bg-transparent pt-48 pb-8 relative z-10">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Newsletter Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-2 text-white font-bricolage">Stay Updated</h3>
                        <p className="text-slate-200 mb-4 font-inter">
                            Subscribe to get latest updates on tech trends, projects, and insights
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 bg-white dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 focus:border-brown font-inter"
                            />
                            <Button
                                type="submit"
                                className="bg-brown hover:bg-brown-dark text-white px-6 font-poppins"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-green-600 dark:text-green-400 font-inter"
                            >
                                ✓ Successfully subscribed!
                            </motion.p>
                        )}
                        <p className="text-xs text-slate-500 dark:text-slate-500 font-inter">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white font-bricolage">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-200 hover:text-white transition-colors font-inter text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white font-bricolage">Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service} className="text-slate-200 font-inter text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-300 font-inter">
                        © {new Date().getFullYear()} Anderson Mitambo Mwangi. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 rounded-full text-white hover:bg-white hover:text-brown transition-colors duration-300"
                            >
                                <link.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
}
