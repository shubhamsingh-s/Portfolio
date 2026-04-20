"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Code2, 
  Layers, 
  GitBranch, 
  Terminal, 
  Box, 
  BrainCircuit,
  Settings2
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-6 h-6" />,
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Scikit-Learn"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
      title: "Backend & Dev",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings2 className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Vercel", "Docker", "AWS (Basics)"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-accent">Stack</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring intelligent ideas to life.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
