import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  threshold?: number;
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smooth easing
      }}
      className={className}
      style={{ willChange: "opacity, transform" }} // Performance optimization
    >
      {children}
    </motion.div>
  );
}
