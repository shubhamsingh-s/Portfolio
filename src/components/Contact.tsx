"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Mock)");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-accent">Touch</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open for collaborations, internships, and research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-tight">Email</p>
                  <a href="mailto:shubham.s.45665@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">shubham.s.45665@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-tight">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/shubham-singh-2a65a2285" className="text-lg font-medium hover:text-accent transition-colors">linkedin.com/in/shubham-singh-2a65a2285</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-tight">Location</p>
                  <p className="text-lg font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-muted/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all font-medium"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-muted/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all font-medium"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we work together?"
                  className="w-full bg-muted/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all font-medium resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-100 shadow-lg shadow-accent/20"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
