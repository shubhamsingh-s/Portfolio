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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName("contact-card");
    for (const card of cards as any) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="contact" className="py-32" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium"
          >
            Open for collaborations, internships, and research opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="contact-card spotlight glass p-12 rounded-[2.5rem] space-y-10 border-white/5 shadow-2xl">
              <h3 className="text-3xl font-black tracking-tight mb-8">Contact Information</h3>
              
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-all shadow-inner">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">Email</p>
                  <a href="mailto:shubham.s.45665@gmail.com" className="text-xl font-bold hover:text-accent transition-colors">shubham.s.45665@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-all shadow-inner">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/shubham-singh-2a65a2285" className="text-xl font-bold hover:text-accent transition-colors">shubham-singh</a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-all shadow-inner">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-black tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">India</p>
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
            <form onSubmit={handleSubmit} className="contact-card spotlight glass p-12 rounded-[2.5rem] space-y-8 border-white/5 shadow-2xl">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all font-medium text-lg"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all font-medium text-lg"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we work together?"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent/50 transition-all font-medium text-lg resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/20"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
