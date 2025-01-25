"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Testimonial } from "@/types/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  }, [isTransitioning, testimonials.length]);

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [isTransitioning, testimonials.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="text-center mb-16">
            <h2
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4"
            >
              What People Say
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-purple-500 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500 to-purple-500 rounded-2xl transform -rotate-6"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden border-4 border-white/10 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={currentTestimonial.image}
                    alt={`Testimonial by ${currentTestimonial.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    onError={(e) => {
                      console.error(
                        `Error loading image for ${currentTestimonial.name}:`,
                        e
                      );
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative bg-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-white/10">
                <div className="relative">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                    {currentTestimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-cyan-500">{currentTestimonial.role}</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {currentIndex + 1} / {testimonials.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
