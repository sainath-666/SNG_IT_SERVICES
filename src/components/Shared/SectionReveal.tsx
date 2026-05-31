import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
