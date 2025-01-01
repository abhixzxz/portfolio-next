"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-zinc-900/50 rounded-lg md:rounded-xl overflow-hidden hover:bg-zinc-900/80 transition-all duration-300">
      <button
        className="w-full flex items-center justify-between p-3 md:p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className="text-sm md:text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors pr-3 md:pr-4"
          style={{
            fontFamily: "var(--font-bangers)",
            letterSpacing: "0.05em",
          }}
        >
          {question}
        </h3>
        <ChevronDownIcon
          className={`w-4 h-4 md:w-6 md:h-6 flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="px-3 pb-3 md:px-6 md:pb-6 text-xs md:text-base text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
