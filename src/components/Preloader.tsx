import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash for 700ms on initial site load, then smoothly dissolve
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#0F172A] flex flex-col items-center justify-center pointer-events-none select-none"
        >
          {/* Subtle ambient orange glow in background */}
          <div className="absolute w-72 h-72 rounded-full bg-[#FFA42D]/10 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo in stacked light variant for dark background */}
            <Logo variant="stacked" theme="dark" size="lg" />

            {/* Subtle progress indicator */}
            <div className="mt-8 w-36 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: 'easeInOut'
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#FFA42D] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
