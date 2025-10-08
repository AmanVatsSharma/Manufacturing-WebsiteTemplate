"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Animated Counter Component
 * 
 * Purpose:
 * - Animate numbers from 0 to target value
 * - Triggered when scrolled into view
 * - Smooth counting animation
 * - Customizable duration and formatting
 * 
 * Props:
 * - end: Target number to count to
 * - duration: Animation duration in milliseconds (default: 2000)
 * - prefix: String to show before number (e.g., "$")
 * - suffix: String to show after number (e.g., "+", "%")
 * - decimals: Number of decimal places (default: 0)
 * 
 * Flow:
 * 1. Component mounts and observes intersection
 * 2. When scrolled into view, animation starts
 * 3. Number counts up smoothly using easing function
 * 4. Completes at target value
 */

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  console.log("AnimatedCounter rendered. Target:", end, "Current:", count, "Animated:", hasAnimated);

  useEffect(() => {
    try {
      // Intersection Observer to trigger animation when in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              console.log(`Counter animation started for value: ${end}`);
              animateCounter();
              setHasAnimated(true);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
        console.log("Counter intersection observer attached");
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
          console.log("Counter intersection observer cleaned up");
        }
      };
    } catch (error) {
      console.error("Error setting up counter animation:", error);
    }
  }, [hasAnimated]);

  /**
   * Animate counter with easing function
   * Uses requestAnimationFrame for smooth animation
   */
  const animateCounter = () => {
    try {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = end;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation (easeOutQuart)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
          console.log(`Counter animation completed at value: ${endValue}`);
        }
      };

      requestAnimationFrame(animate);
    } catch (error) {
      console.error("Error in counter animation:", error);
      // Fallback: set to end value immediately
      setCount(end);
    }
  };

  /**
   * Format the number with decimals
   */
  const formatNumber = (num: number): string => {
    try {
      return num.toFixed(decimals);
    } catch (error) {
      console.error("Error formatting number:", error);
      return num.toString();
    }
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
