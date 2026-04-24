"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, BrainCircuit } from "lucide-react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: blob2Y }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" 
      />

      <motion.div 
        style={{ y: contentY, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.1 
            }}
            className="flex justify-center mb-10"
          >
            <div className="glass p-5 rounded-3xl shadow-xl shadow-accent/10 border-white/10">
              <BrainCircuit className="w-16 h-16 text-accent" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Hi, I'm <span className="text-gradient">Shubham Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium"
          >
            ML Engineer | AI Developer | Hackathon Winner
            <br />
            <span className="text-foreground/80 mt-4 block italic font-light">
              "Building intelligent systems using AI & structured reasoning"
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#projects"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 rounded-full font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 group"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#"
              className="glass hover:bg-white/20 text-foreground px-10 py-5 rounded-full font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-white/10"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-50">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
