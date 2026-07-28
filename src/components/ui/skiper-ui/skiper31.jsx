"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedChar = ({ char, index, centerIndex, scrollYProgress }) => {
  const distance = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 1], [distance * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [distance * 50, 0]);

  return (
    <motion.span style={{ x, rotateX }} className="inline-block">
      {char}
    </motion.span>
  );
};

const TextAnimation = ({ text, targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 63%", "start 30%"], // 👈 key for trigger timing
  });
  console.log(scrollYProgress);

  const chars = text.split("");
  const centerIndex = Math.floor(chars.length / 2);

  return (
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-center">
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          centerIndex={centerIndex}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </h2>
  );
};

export default TextAnimation;
/**
 * Skiper 31 ScrollAnimation_002 — React + framer motion + lenis
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
