'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { FC } from 'react';

const projects = [
  {
    title: "Chatbot",
    description: "Developed a secure website integrated with Chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant",
  },
  {
    title: "Sentiment Analyzer",
    description: "Developed and deployed a sentiment analyzer for the live reviews section of an e-commerce platform using IBM NLU",
  },
  {
    title: "Fashion Website",
    description: "Created a fully multi page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway",
  },
] as const;

const Projects: FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-purple-200">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 