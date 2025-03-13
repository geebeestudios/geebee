import React from 'react';
import { motion } from 'framer-motion';

const PortfolioLoader = () => {
  return (
    <div className="fixed z-[999] h-screen w-full flex flex-col items-center justify-center bg-white">
      {/* Construction Crane */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 relative"
      >
        {/* Crane Arm */}
        <div className="w-[200px] h-[120px] relative flex items-center justify-center">
          <div className="absolute w-1 h-[80px] bg-[#2F4858] left-1/2 -translate-x-1/2" />
          
          {/* Moving Cable */}
          <motion.div
            className="absolute w-[2px] h-[60px] bg-[#2F4858] left-1/2 -translate-x-1/2"
            animate={{ y: [0, 40] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Building Blocks */}
          <motion.div
            className="absolute bottom-0 flex flex-col items-center"
            animate={{ y: [-10, 10] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
          >
            <div className="w-[40px] h-[40px] bg-[#2F4858] mb-1" />
            <div className="w-[30px] h-[30px] bg-[#2F4858]/80" />
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Text */}
      <motion.h2
        className="text-2xl font-bold text-[#2F4858] mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Building Your Vision
      </motion.h2>

      <motion.p
        className="text-[#2F4858]/80 text-center max-w-[280px] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Crafting your perfect web solution
      </motion.p>

      {/* Progress Dots */}
      <motion.div
        className="flex space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#2F4858]"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioLoader;
