"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

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
    })
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground p-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">


          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's collaborate on your next project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-warm-gold glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "anderson.mitamboo@gmail.com",
                      color: "text-orange-500",
                      glow: "glow-orange",
                      href: "mailto:anderson.mitamboo@gmail.com"
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+254-700-071-699",
                      color: "text-orange-500",
                      glow: "glow-orange",
                      href: "tel:+254700071699"
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Nairobi, Kenya",
                      color: "text-orange-500",
                      glow: "glow-orange",
                      href: "https://www.google.com/maps/search/?api=1&query=Nairobi+Kenya"
                    }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        className="flex items-center space-x-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <motion.div
                          className={`p-3 bg-card/50 rounded-full ${contact.glow}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <contact.icon className={`h-6 w-6 ${contact.color}`} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="font-medium text-orange-500 dark:text-orange-400 group-hover:text-warm-gold transition-colors">{contact.value}</p>
                        </div>
                      </motion.div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-warm-gold glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-6">
                    {SOCIAL_LINKS.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: index * 0.2,
                        }}
                        className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                      >
                        <div className="p-3 bg-card/50 rounded-full glow-warm-gold">
                          <social.icon className="h-8 w-8" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-warm-gold glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full pulse-glow"></div>
                      <span className="text-gray-600 dark:text-gray-300">Available for freelance projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full pulse-glow"></div>
                      <span className="text-gray-600 dark:text-gray-300">Open to full-time opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full pulse-glow"></div>
                      <span className="text-gray-600 dark:text-gray-300">Consulting & collaboration welcome</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-warm-gold glow-hover animated-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-card/50 border-warm-copper/30 focus:border-warm-copper"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-card/50 border-warm-copper/30 focus:border-warm-copper"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-card/50 border-warm-copper/30 focus:border-warm-copper"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-card/50 border-warm-copper/30 focus:border-warm-copper resize-none"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-warm-gold hover:bg-warm-gold/90 text-black dark:text-white glow-warm-gold glow-hover"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="h-4 w-4 mr-2 text-black dark:text-white" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                  {submissionStatus === 'success' && (
                    <p className="mt-4 text-center text-green-500">Your message has been sent successfully!</p>
                  )}
                  {submissionStatus === 'error' && (
                    <p className="mt-4 text-center text-red-500">Failed to send message. Please try again later.</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-warm-gold glow-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Quick Response Guarantee</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call directly.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-warm-gold dark:text-warm-copper mb-1">&lt; 24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warm-gold dark:text-warm-copper mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warm-gold dark:text-warm-copper mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
