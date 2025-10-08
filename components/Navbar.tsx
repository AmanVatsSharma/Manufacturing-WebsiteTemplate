"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Navbar Component - Professional Navigation Bar
 * Features:
 * - Logo integration with actual company logo
 * - Smooth scroll animations
 * - Responsive mobile menu
 * - High contrast design for professional look
 * - Sticky navigation with backdrop blur
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Console log for debugging navbar state
  console.log("Navbar rendered - Mobile menu open:", isOpen, "Scrolled:", scrolled);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        console.log("Scroll position changed. Scrolled:", isScrolled);
      }
    };

    // Add scroll event listener with error handling
    try {
      window.addEventListener("scroll", handleScroll);
      console.log("Scroll listener attached successfully");
    } catch (error) {
      console.error("Error attaching scroll listener:", error);
    }

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll);
        console.log("Scroll listener removed");
      } catch (error) {
        console.error("Error removing scroll listener:", error);
      }
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-xl' 
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Using actual company logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Company Logo Image */}
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logo_favicon.webp" 
                  alt="Vedpragya bharat Logo" 
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                  onError={(e) => {
                    console.error("Logo image failed to load:", e);
                  }}
                  onLoad={() => {
                    console.log("Logo image loaded successfully");
                  }}
                />
              </div>
              {/* Company Name */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Vedpragya bharat
                </span>
                <span className="text-xs text-gray-600 font-medium">Manufacturing Excellence</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Professional menu items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: Home clicked")}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: About clicked")}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: Features clicked")}
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: Services clicked")}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: Testimonials clicked")}
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                onClick={() => console.log("Navigation: Contact clicked")}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => console.log("CTA: Get Started clicked")}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("Mobile menu toggled. New state:", !isOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Enhanced with animations */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: Home clicked");
                setIsOpen(false);
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: About clicked");
                setIsOpen(false);
              }}
            >
              About
            </a>
            <a 
              href="#features" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: Features clicked");
                setIsOpen(false);
              }}
            >
              Features
            </a>
            <a 
              href="#services" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: Services clicked");
                setIsOpen(false);
              }}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: Testimonials clicked");
                setIsOpen(false);
              }}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
              onClick={() => {
                console.log("Mobile Navigation: Contact clicked");
                setIsOpen(false);
              }}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block mx-3 mt-2 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              onClick={() => {
                console.log("Mobile CTA: Get Started clicked");
                setIsOpen(false);
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}