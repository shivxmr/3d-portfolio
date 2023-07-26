import React from 'react';
import { motion } from 'framer-motion';
import AnimazingText from './AnimazingText';

export default function Preloader() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return (
    <motion.div
      className="h-screen w-screen z-50 absolute bg-red-500"
      initial={{ y: 0 }}
      animate={{
        y: -viewportHeight,
        transition: {
          delay: 4,
          duration: 2,
          type: 'spring',
        },
      }}
    >
      <motion.div
        className="h-full w-full bg-green-400 flex items-center justify-center"
        initial={{ x: 0 }}
        animate={{
          x: viewportWidth,
          transition: {
            delay: 3.5,
            duration: 1,
            type: 'spring',
          },
        }}
      >
        <motion.div
          className="h-full w-full bg-orange-400 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{
            y: viewportHeight,
            transition: {
              delay: 3,
              duration: 1,
              type: 'spring',
            },
          }}
        >
          <AnimazingText />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
