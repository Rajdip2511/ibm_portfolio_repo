'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-700">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Recommendations />
      </div>
    </div>
  );
}
