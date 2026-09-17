"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="px-6 md:px-10 lg:px-18 pt-4 pb-4 flex items-center justify-between bg-[#6B78C2] relative z-50">
        <div className="flex-shrink-0 cursor-pointer flex flex-col items-center justify-center h-auto min-h-[75px]">
          <span className="text-[18px] md:text-[22px] tracking-[0.15em] font-serif text-white leading-tight text-center">
            DR. MAYA REYNOLDS
          </span>
          <span className="text-[11px] md:text-[14px] tracking-[0.3em] font-muli text-white leading-tight text-center mt-1">
            CLINICAL PSYCHOLOGIST
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <nav>
                <div className="flex justify-around items-center gap-8 text-[13.5px] uppercase tracking-wider">
                  <a href="#about" className="text-white hover:opacity-80 transition-opacity">ABOUT</a>
                  <a href="#focus" className="text-white hover:opacity-80 transition-opacity">FOCUS</a>
                  <a href="#specialities" className="text-white hover:opacity-80 transition-opacity">SPECIALTIES</a>
                  <a href="#benefits" className="text-white hover:opacity-80 transition-opacity">BENEFITS</a>
                  <a href="#faqs" className="text-white hover:opacity-80 transition-opacity">FAQS</a>
                </div>
              </nav>
            </div>
          </div>

          <div>
            <a href="#contact" className="inline-block bg-transparent px-8 py-3 text-[13px] tracking-wider uppercase text-white cursor-pointer rounded-[100px] border border-white hover:bg-white hover:text-[#6B78C2] transition-colors">
              CONTACT
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-[#6B78C2] z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-white text-xl font-muli uppercase tracking-widest">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#focus" onClick={() => setIsMenuOpen(false)}>Focus</a>
          <a href="#specialities" onClick={() => setIsMenuOpen(false)}>Specialties</a>
          <a href="#benefits" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          <a href="#faqs" onClick={() => setIsMenuOpen(false)}>FAQs</a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-transparent px-10 py-4 text-[15px] tracking-wider uppercase text-white rounded-[100px] border border-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
