"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden glass border-2 border-white/10">
                <img
                  src="/profile.jpg"
                  alt="Shubham Singh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">AI/ML</span> & Cloud Solutions
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a B.Tech Computer Science student with a deep fascination for how intelligent systems can solve real-world complexities. My journey in tech is fueled by a merge of <span className="text-foreground font-semibold px-2 py-0.5 glass rounded-md">Cloud Computing</span> and <span className="text-foreground font-semibold px-2 py-0.5 glass rounded-md">Machine Learning</span>.
              </p>
              <p>
                I thrive on building scalable, knowledge-augmented solutions like <span className="text-foreground font-medium">KnowBot</span>, where I focused on RAG architectures and NLP. My experience as an LLM Training intern has given me a unique perspective on fine-tuning and deploying large-scale models.
              </p>
              <p>
                Whether it's winning hackathons or developing fraud detection systems, I am dedicated to using structured reasoning and AI to build tools that matter. 
              </p>
            </div>

            <div className="grid grid-cols-2 mt-12 gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">ML Core</h4>
                  <p className="text-sm text-muted-foreground">Predictive Analytics</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Cloud Architect</h4>
                  <p className="text-sm text-muted-foreground">Scalable Deployments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
