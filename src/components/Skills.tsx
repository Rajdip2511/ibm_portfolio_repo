'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { FC } from 'react';

const skills = [
  { name: "HTML", years: 2, icon: "🌐" },
  { name: "CSS", years: 1.5, icon: "🎨" },
  { name: "JavaScript", years: 3, icon: "📜" },
  { name: "React", years: 3, icon: "⚛️" },
  { name: "Node.js", years: 1, icon: "🟢" },
  { name: "Git", years: 2, icon: "📚" },
] as const;

const Skills: FC = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-purple-200">
                    {skill.years} {skill.years === 1 ? "year" : "years"} experience
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 