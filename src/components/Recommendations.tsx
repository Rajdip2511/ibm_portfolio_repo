'use client';

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { FC } from 'react';

const testimonials = [
  {
    text: "Jane is a very quick learner and quickly grasped the project requirements. She has good knowledge of development and is very professional.",
    author: "John Smith",
  },
  {
    text: "Working with Jane has been an awesome experience. She is technically sound and always ready to learn new skills.",
    author: "Sarah Johnson",
  },
  {
    text: "I had worked along with Jane during the IBM internship. She is a collaborative team player and has very good problem solving skills.",
    author: "Mike Wilson",
  },
] as const;

const Recommendations: FC = () => {
  return (
    <section id="recommendations" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Recommendations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardContent>
                    <p className="text-purple-100 italic mb-4">"{testimonial.text}"</p>
                    <p className="text-white font-semibold">- {testimonial.author}</p>
                  </CardContent>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Leave a Recommendation</h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Recommendation"
                  className="bg-white/5 border-white/20 text-white placeholder:text-purple-200 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                Submit
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations; 