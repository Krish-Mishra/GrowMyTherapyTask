"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where is your office located, and do you offer virtual sessions?",
    answer: "I offer both in-person and online therapy. My physical office is located in Santa Monica, California, designed to be a quiet, private, and grounding space with natural light. For clients who prefer or require remote support, I also offer secure, confidential telehealth sessions for anyone located throughout the state of California."
  },
  {
    question: "What therapeutic methods and approaches do you use?",
    answer: "I take a warm, collaborative, and structured approach, integrating several evidence-based methods depending on your specific needs. My primary modalities include Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented (somatic) techniques. This integrative approach allows us to carefully address both the emotional weight of your experiences and the physical tension stored in your body, particularly when processing trauma or chronic stress."
  },
  {
    question: "Who do you typically work with, and what are your main areas of focus?",
    answer: "I work exclusively with adults, specializing in anxiety, panic, trauma (both single-incident and complex), and professional burnout. Many of the people I support are high-achieving professionals, entrepreneurs, and creatives who look highly \"functional\" on the outside but internally feel emotionally exhausted, stuck in overthinking, or disconnected from themselves."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-[100px] flex justify-center px-10">
      <div className="w-full max-w-[1200px] grid grid-cols-12 gap-16 px-8">
        <div className="col-span-4 flex flex-col pt-4">
          <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12">
            Frequently Asked <br />
            <span className="italic text-[#6E7E65] font-muli">Questions</span>
          </h2>
        </div>

        <div className="col-span-8 flex flex-col border-t border-[#393E50]/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#393E50]/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-6 group cursor-pointer"
                >
                  <h3 className="text-[17px] tracking-[0.05em] text-[#393E50] font-muli pr-8 transition-colors group-hover:text-[#6B78C2]">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-[#6B78C2] relative w-4 h-4">
                    {/* Horizontal Line (always present) */}
                    <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current -translate-y-1/2 rounded-full"></div>
                    {/* Vertical Line (rotates and fades when open) */}
                    <div
                      className={`absolute top-0 left-1/2 w-[1.5px] h-full bg-current -translate-x-1/2 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                        }`}
                    ></div>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#555] font-light leading-[1.8] text-[16px] font-muli">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
