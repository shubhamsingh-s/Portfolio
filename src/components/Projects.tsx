"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, HeartPulse, Bot } from "lucide-react";

const projects = [
  {
    title: "TalentVerse AI",
    description: "A fully functional AI-powered resume screening system (ATS) that provides intelligent applicant matching, automated screening, and job recommendations.",
    tech: ["Next.js", "Python", "OpenAI", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    demo: "https://cvetraaa.vercel.app",
    icon: <Bot className="w-10 h-10" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Powered Chronic Disease Detection",
    description: "Hackathon-winning project that utilizes deep learning to predict chronic illnesses based on patient history and lifestyle factors with 95%+ accuracy.",
    tech: ["TensorFlow", "FastAPI", "React", "Cloud Computing"],
    github: "#",
    demo: "https://shealthcare.onrender.com",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "AI-Powered UPI Fraud Detection",
    description: "A real-time monitoring system designed to detect fraudulent UPI transactions using anomaly detection algorithms, enhancing digital payment security.",
    tech: ["Python", "Scikit-Learn", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "from-purple-500 to-indigo-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Showcasing my work in AI, ML, and scalable software solutions.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            className="flex items-center gap-2 text-accent font-bold hover:underline"
          >
            View more on GitHub <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors" />
                <motion.div 
                   whileHover={{ rotate: 10, scale: 1.1 }}
                   className="relative z-10 p-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-white shadow-2xl"
                >
                  {project.icon}
                </motion.div>
                
                {/* Decorative shapes */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-bold px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-accent transition-colors group/link transition-all">
                      <svg className="w-5 h-5 fill-current opacity-70 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-bold hover:text-accent transition-colors">
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
