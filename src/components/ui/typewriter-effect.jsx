"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const hasAnimated = useRef(false); // Track animation state

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
      hasAnimated.current = true; // Mark as animated
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className="ml-2">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="ml-4 inline-block font-normal mb-4 font-albert text-[30px] sm:text-[50px] text-center text-[#7F7B8A]">
          {word.text.map((char, index) => (
            <span key={`char-${index}`} className={cn(``, word.className)}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        viewport={{ once: true }} // Add this to trigger only once
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>
    </div>
  );
};