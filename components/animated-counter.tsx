"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Increased threshold for reliability
  const [hasAnimated, setHasAnimated] = useState(false);

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated && isClient) {
      setHasAnimated(true);
      let startTime: number | null = null;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure final value is exact
        }
      };

      animationFrame = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration, hasAnimated, isClient]);

  // Fallback: If animation doesn't trigger after 5 seconds, set to end value
  useEffect(() => {
    if (isClient && !hasAnimated) {
      const timeout = setTimeout(() => {
        if (!hasAnimated) {
          setCount(end);
          setHasAnimated(true);
        }
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isClient, hasAnimated, end]);

  // Render 0+suffix on server to avoid hydration mismatch
  if (!isClient) {
    return <div className={className}>0{suffix}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
}