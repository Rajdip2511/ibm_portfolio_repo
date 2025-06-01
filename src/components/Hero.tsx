'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <section id="about" className="py-16 text-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/avatar.svg"
              alt="Jane Doe"
              width={192}
              height={192}
              className="rounded-full bg-purple-600"
              priority
            />
          </motion.div>
        </div>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Hi, I'm Jane Doe! 👋
            </h1>
            <p className="text-lg text-purple-100">
              I am a full stack developer with 5 years of experience in both application
              and product development. I specialize in building scalable web applications
              deployed on IBM Cloud. I am an avid user of IBM Watson Services and have
              worked on Watson Assistant, NLU, Sentiment analyzer to create a few.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 