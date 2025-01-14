import { animate, animationControls, motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  heading: string;
};

const sectionHeadingAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    duration: 1
  }),
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <motion.h2
      variants={sectionHeadingAnimation}
      initial="initial"
      whileInView="animate"
      className="text-2xl font-medium text-center  dark:text-white/80">
      {heading}
    </motion.h2>
  );
};

export default SectionHeading;
