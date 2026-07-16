"use client";
import { motion, useReducedMotion } from "framer-motion";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

const lineVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01 },
  },
};

interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

export function LineReveal({ lines, className, lineClassName }: LineRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.div
            custom={i}
            variants={prefersReducedMotion ? lineVariantsReduced : lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
