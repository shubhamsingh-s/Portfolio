"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, BrainCircuit } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="glass p-3 rounded-2xl">
              <BrainCircuit className="w-12 h-12 text-accent" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Shubham Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium"
          >
            ML Engineer | AI Developer | Hackathon Winner
            <br />
            <span className="text-foreground/80 mt-2 block italic">
              "Building intelligent systems using AI & structured reasoning"
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#"
              className="glass hover:bg-white/20 text-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
