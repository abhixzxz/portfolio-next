"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";

export default function TestimonialsClient() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                activeTestimonial.id === testimonial.id
                  ? "scale-105 border-2 border-primary"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveTestimonial(testimonial)}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-[200px]"
              />
            </div>
          ))}
        </div>

        <motion.div
          key={activeTestimonial.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">
              {activeTestimonial.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {activeTestimonial.role}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
