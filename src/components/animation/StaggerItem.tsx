import type { ReactNode } from "react";
import { motion } from "framer-motion";

type StaggerItemProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
  duration?: number;
};

export default function StaggerItem({
  children,
  direction = "up",
  className = "",
  distance = 30,
  duration = 0.5,
}: StaggerItemProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const item = {
    hidden: { opacity: 0, ...directionMap[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={item}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
