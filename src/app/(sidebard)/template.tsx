'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { duration: 0.8, delay: 0, ease: 'easeInOut' },
        opacity: { duration: 0.75, delay: 0, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}