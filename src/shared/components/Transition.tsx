'use client';

import { motion } from 'framer-motion';

export default function Transition({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { duration: 0.8, delay: 0, ease: 'easeInOut' },
        opacity: { duration: 1, delay: 0, ease: 'easeInOut' },
        // opacity: { duration: 0.75, delay: 0, ease: 'easeInOut' },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export  function Transition2({
  children,
  className,
  xStart = 0,
  opacityStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  xStart?: number;
  opacityStart?: number;
}) {
  return (
    <motion.div
      initial={{ x: xStart, opacity: opacityStart }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { duration: 3, delay: 0, ease: 'easeInOut' },
        opacity: { duration: 1, delay: 0, ease: 'easeInOut' },
        // opacity: { duration: 0.75, delay: 0, ease: 'easeInOut' },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
