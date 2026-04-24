"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, HeartPulse, Bot } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const projects = [
  {
    title: "TalentVerse AI",
    description: "A fully functional AI-powered resume screening system (ATS) that provides intelligent applicant matching, automated screening, and job recommendations.",
    tech: ["Next.js", "Python", "OpenAI", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    demo: "https://cvetraaa.vercel.app",
    icon: <Bot className="w-6 h-6" />,
    image: "/projects/talentverse.png",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Chronic Disease Detection",
    description: "Hackathon-winning project that utilizes deep learning to predict chronic illnesses based on patient history and lifestyle factors with 95%+ accuracy.",
    tech: ["TensorFlow", "FastAPI", "React", "Cloud Computing"],
    github: "#",
    demo: "https://shealthcare.onrender.com",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "/projects/disease.png",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "UPI Fraud Detection",
    description: "A real-time monitoring system designed to detect fraudulent UPI transactions using anomaly detection algorithms, enhancing digital payment security.",
    tech: ["Python", "Scikit-Learn", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/projects/fraud.png",
    color: "from-orange-500/20 to-red-500/20"
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName("project-card");
    for (const card of cards as any) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="projects" className="py-32 relative" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-xl font-medium">
              Showcasing my work in AI, ML, and scalable software solutions.
            </p>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            className="flex items-center gap-3 px-6 py-3 glass rounded-full text-foreground font-bold hover:bg-white/10 transition-all border-white/10"
          >
            <GithubIcon className="w-5 h-5" /> View more on GitHub
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="project-card spotlight group relative flex flex-col h-full glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-accent/30 transition-all duration-500 shadow-2xl hover:shadow-accent/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60`} />
                <div className="absolute top-6 left-6 p-3 glass rounded-2xl text-white backdrop-blur-2xl border-white/20 z-10">
                  {project.icon}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow relative z-10">
                <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed line-clamp-3 font-medium">
                  {project.description}
                </p>

                <div className="mt-auto space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-black uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl text-foreground/70 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-accent transition-all group/link">
                      <GithubIcon className="w-5 h-5 opacity-50 group-hover/link:opacity-100" />
                      Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-accent transition-all">
                      <ExternalLink className="w-5 h-5" /> Live
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
