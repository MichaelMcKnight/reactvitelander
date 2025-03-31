import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
};

export default function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
