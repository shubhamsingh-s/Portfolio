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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName("skill-card");
    for (const card of cards as any) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Technical <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium"
          >
            A comprehensive set of tools and technologies I use to bring intelligent ideas to life.
          </motion.p>
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
              className="skill-card spotlight glass p-10 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 group shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 tracking-tight">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
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
